import React, { useState } from 'react'
import styles from '../Calc.module.css'
export default function CalcImc() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
      const totalImc = () =>{
        const alturaTocm = altura / 100
        const alturatotal = alturaTocm * alturaTocm
        const calcImc = peso / alturatotal
        if (calcImc <= 18.5) {
            return <h2>{calcImc.toFixed(1)} abaixo do peso</h2>
          } else if (calcImc == 18.6 || calcImc <= 24.9) {
            return <h2> {calcImc.toFixed(1)} Peso ideal</h2>
          } else if (calcImc == 25 || calcImc <= 29.9) {
            return <h2> {calcImc.toFixed(1)} Levemente acima do peso</h2>
          } else if (calcImc == 30|| calcImc <= 34.9) {
            return <h2> {calcImc.toFixed(1)} Obesidade grau 1</h2>
          } else if(calcImc == 35|| calcImc <= 39.9) {
            return <h2> {calcImc.toFixed(1)} Obesidade grau 2</h2>
          } else if(calcImc>=40) {
            return <h2> {calcImc.toFixed(1)} Obesidade grau 3</h2>
          } else {
            return <p>Coloque sua altura e peso</p>
          }
    }
    
    
  return (
    <div>
        <h1>Calculadora IMC</h1>
        <div className={styles.inputs}>
            <input type="text" onChange={(e)=> setAltura(parseInt(e.target.value))} placeholder='Altura(cm)'/>
            <input type="text" onChange={(e)=> setPeso(parseInt(e.target.value))} placeholder='Peso(kg)'/>
        </div>

        <h3>Seu IMC é</h3>
        <div className={styles.result}>
        {totalImc()}
        </div>
    </div>
  )
}
