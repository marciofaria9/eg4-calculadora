import React from 'react';
import { useState } from 'react';

import  './styles.css';

export const Calc = () => {
    const [valorTela, setValorTela] = useState('0')
    const [result, setResult] = useState(0)
    const [acumul, setAcumul] = useState(0)
    const [operacao, setOperacao] = useState(false)
    const [valor1, setValor1] = useState(0)
    const [f, setF] = useState(false)
    const [PV, setPV] = useState(0)
    const [n, setN] = useState(0)
    const [i, setI] = useState(0)
    const [CHS, setCHS] = useState(false)

    const [lastButtonPressed, setLastButtonPressed] = useState('');
    
    const addDigitTela = (d: string) => {

    if (valorTela == '0'){
          
          const valorDigitadoTela = `${d}`;
          setValorTela(valorDigitadoTela);
          setOperacao(false);
      }else{
        const valorDigitadoTela = `${valorTela}${d}`;
        setValorTela(valorDigitadoTela);
        setOperacao(false);
      }      
      console.log(valorTela);
    };

    const handleF = ()=>{
      if(f){
        setF(false)
      }else{
         setF(true);
      }
     
    }

    const logicaClx = ()=>{
      if (f){
        limparMemor()
      }else{
        setValorTela('0')
      }
    }

    const limparMemor = () => {
      setOperacao(false)
      setValorTela('0')
      setResult(0)
      setAcumul(0)
      setValor1(0)
      setPV(0)
      setN(0)
      setI(0)
      setF(false)
      setCHS(false)
      return
    } 

    const populaPV = () =>{
      let valorPV      
      if(CHS){        
         valorPV = parseFloat(valorTela.substring(1))      
      }else{
        valorPV = parseFloat(valorTela)
      }      
      setPV(valorPV)
      console.log(valorPV)
      setValorTela('0') 
    }
    
    const populaI = () =>{
      const valorI = parseFloat(valorTela)/100
      setI(valorI)
      console.log(valorI)
      setValorTela('0') 
    }

    const populaN = () =>{
      const valorN = parseFloat(valorTela)
      setN(valorN)
      console.log(valorN)
      setValorTela('0') 
    }

    const handleCHS = () => {
      if(CHS){
        setCHS(false)
        setValorTela(valorTela.substring(1))
      }else{
         setCHS(true);
         setValorTela('-' + valorTela)
      }
    }

    const operation = (op: any) => {
        //backspace
      if (op == 'bs') {
        let vTela = valorTela
        vTela = vTela.substring(0, (vTela.length - 1))
        setValorTela(vTela)
        setOperacao(false)
        result
      }
      try {
        const r = eval(valorTela)
        setAcumul(r)
        setResult(r)
        setOperacao(true)

      } catch {
       setResult(parseInt('ERRO'));
      }
    }
    
    const calculaFV = () => {
      const valorFV = PV * (1+i)**n
      const valorFV2casas = valorFV.toFixed(2)
      let valorFVString
      if(!CHS){
        valorFVString = '-' + valorFV2casas.toString()
      }else{
        valorFVString =  valorFV2casas.toString()
      }
      console.log(valorFV2casas)
      
      setValorTela(valorFVString)
    }

    const populaValor1 = () => {
      const valor1Int = parseFloat(valorTela)
      setValor1(valor1Int)
      setValorTela('0')      
      console.log(valor1Int)
    }

    const populaValor2 = (operator: string) =>{
      const valor2Int = parseFloat(valorTela)
      setValorTela('0')      
      console.log(valor2Int)
      calculaResultado(operator, valor2Int)
    }


    const calculaResultado = (operator: string, valor2: number) => {
      let resultado;
      
      if (operator == '+'){
        resultado = valor1+valor2 
      }else if (operator == '-'){
        resultado = valor1-valor2
      }else if (operator == '*'){
        resultado = valor1 * valor2
      }else{
        resultado = valor1 / valor2
      }

      const resultadoTela = resultado.toString()

      setValorTela(resultadoTela)
    }

  return (
    <div 
      className="calculator-grid" 
      style={{ 
        backgroundColor: 'black', 
        padding: "20px", 
        border: "2px solid #9C9C9C",
        borderRadius: "10px"
      }}
      >
      <div className="output">
        <div 
          style={{ fontSize: '35px', color: 'white' }}>
          {valorTela} 
        </div>
       
      </div>
        <button
          style={{ backgroundColor: '#606060' }}
          onClick={populaN}
          > n </button>
        <button
          style={{ backgroundColor: '#606060' }}
          onClick={populaI}
        > i </button>
        <button
          style={{ backgroundColor: '#606060' }}
          onClick={populaPV}
        > PV </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > PMT </button>
        <button
          style={{ backgroundColor: '#606060' }}
          onClick={calculaFV}
        > FV </button>
        <button
          style={{ backgroundColor: '#606060' }}
          onClick={handleCHS}
        > CHS </button>
        <button
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('7')}
        > 7 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('8')}  
        > 8 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('9')}  
        > 9 </button>
          <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => populaValor2('/')}  
        > ÷ </button>
      

        <button
          style={{ backgroundColor: '#606060' , opacity:0.35, cursor: 'no-drop'}}
        > Y^x </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > 1/x </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > %T </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > Δ% </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > % </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > EEX </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('4')}  
        > 4 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('5')}
        > 5 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('6')}  
        > 6 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => populaValor2('*')}  
        > X </button>   


        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > R/S </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop'}}
        > SST </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > R∇ </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > x y </button>
       <button
        style={{ backgroundColor: '#BD5757' }}
        onClick={logicaClx}
      >
        CLX
      </button>
        <button 
                className="span-two" 
                style={{ backgroundColor:'#437B3E' }}
                onClick={() => populaValor1()}
              > E
                N
                T
                E
                R </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('1')}
          > 1 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('2')}
        > 2 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('3')}
        > 3 </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => populaValor2('-')}
        > - </button>


        
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > ON </button>
         <button
        style={{ backgroundColor: '#F77F43' }}
        onClick={handleF}
      >
        f
      </button>
        <button
          style={{ backgroundColor: '#5B51E6', opacity:0.35, cursor: 'no-drop' }}
        > g </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > STO </button>
        <button
          style={{ backgroundColor: '#606060', opacity:0.35, cursor: 'no-drop' }}
        > RCL </button>
        <button 
          style={{ backgroundColor: '#606060' }}
          onClick={() => addDigitTela('0')}
        > 0 </button>
        <button 
          style={{ backgroundColor: '#606060' }} 
          onClick={() => addDigitTela('.')}
        > . </button>
        <button style={{ 
              fontSize: '50px', 
              padding: '0px 0px 15px 5px', 
              backgroundColor: '#BD5757' }}
              onClick={() => operation('bs')}  > 
                &larr; 
            </button>
        <button
          style={{ backgroundColor: '#606060' }}
          onClick={() => populaValor2('+')}
        > + </button>    
     

      </div>
  )
}
