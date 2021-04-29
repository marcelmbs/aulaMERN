import userEvent from '@testing-library/user-event'
import React, {useState, useEffect} from 'react'
import Maiusculo from './components/Maiusculo'
import Maiusculo2 from './components/Maiusculo2'
import MaiusculoChildren from './components/MaiusculoChildren'
import Soma from './components/Soma'



function App(){
  const [contador, setContador] = useState(1)
  const [num1,setNum1] = useState('')
  const [num2,setNum2] = useState('')
  const [resultado, setResultado] = useState ('')
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true)
 
  useEffect(() => {
    document.title="Calculadora React"
  },[]) //Quando o array está vazio é executado uma única vez no carregamento.

  useEffect(() => {
    if(parseFloat(num1.trim()) && parseFloat(num2.trim())){
      setResultado(Soma(num1, num2))
    } else{
        setResultado('')
      }
  },[num1, num2])
  
  function adicionarContador(){
    setContador(contador +1)
    console.log (`O valor ${contador} foi adicionado!`)
   
  }

  function removerContador(){
    setContador(contador -1)
    console.log (`O valor ${contador} foi removido!`)
  }
  return(
    <>{/**
   <Maiusculo texto="boa tarde, oi 2"/>
   <Maiusculo2 texto="boa tarde, oi 2" cor="#FF0000"/>
   <MaiusculoChildren>Conteúdo do children</MaiusculoChildren>
    */}
    <br></br>
    {/*   <div>
     Contador: {contador} <br></br><br></br>
     <button onClick={adicionarContador}>Adicionar</button>
     <button onClick={removerContador}>Remover</button>
    </div>*/}
   <br></br>
   <div>
     <label> Número 1 </label>
     <input type="number" required value ={num1} onChange={ e=> {setNum1(e.target.value)}}/><br></br>
     <label> Número 2 </label>
     <input type="number" required value={num2} onChange={ e=> {setNum2(e.target.value)}}/><br></br>
     <label>Resultado</label>
     <input type="text" readlOnly value={resultado}/>
     <br></br>
     <button disabled={botaoDesabilitado}>Somar</button>
   </div>
    </>
  )
}

export default App