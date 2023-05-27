import React from 'react';
import { useState } from 'react';

import  './styles.css';

export const Calc = () => {
    const [valorTela, setValorTela] = useState('')
    const [result, setResult] = useState(0)
    const [acumul, setAcumul] = useState(0)
    const [operacao, setOperacao] = useState(false)
    const [valor1, setValor1] = useState(0)
    

    const addDigitTela = (d: string) => {

      if (['+', '-', '*', '/'].includes(d)) {
        if (operacao) {
          setValorTela(`${result}${d}`);
        } else if (valorTela !== '') {
          const valorDigitadoTela = `${valorTela}${d}`;
          setValorTela(valorDigitadoTela);
        }
        setOperacao(true);
      } else {
        const valorDigitadoTela = `${valorTela}${d}`;
        setValorTela(valorDigitadoTela);
        setOperacao(false);
      }      
      console.log(valorTela);
    };

    const limparMemor = () => {
      setOperacao(false)
      setValorTela('')
      setResult(0)
      setAcumul(0)
      return
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
  

    const populaValor1 = () => {
      const valor1Int = parseInt(valorTela)
      setValor1(valor1Int)
      setValorTela('')      
      console.log(valor1Int)
    }

    const populaValor2 = (operator: string) =>{
      const valor2Int = parseInt(valorTela)
      setValorTela('')      
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
        <div 
          style={{ fontSize: '45px', color: 'white' }}>
          {result}
        </div>
      </div>

      <button
         style={{ backgroundColor: '#606060' }}
         onClick={() => populaValor2('+')}
      > + </button>
      <button 
        style={{ backgroundColor: '#606060' }}
        onClick={() => populaValor2('-')}
      > - </button>
      <button 
        style={{ backgroundColor: '#606060' }}
        onClick={() => populaValor2('*')}  
      > X </button>
      <button 
        style={{ backgroundColor: '#606060' }}
        onClick={() => populaValor2('/')}  
      > / </button>

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
      <button style={{ 
        fontSize: '50px', 
        padding: '0px 0px 15px 5px', 
        backgroundColor: '#BD5757' }}
        onClick={() => operation('bs')}  > 
          &larr; 
      </button>

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
        onClick={() => addDigitTela('0')}
      > 0 </button>
      <button 
        style={{ backgroundColor: '#606060' }} 
        onClick={() => addDigitTela('.')}
      > . </button>
      <button 
        style={{ backgroundColor: '#BD5757' }}
        onClick={limparMemor}
      > CE </button>
      <button 
        style={{ backgroundColor: '#BD5757' }}
        onClick={limparMemor}
      > F </button>


    </div>
  )
}
