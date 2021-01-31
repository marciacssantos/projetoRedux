import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App(){
  const [inputFrutas, setInputFrutas] = React.useState("")
 
  const frutas = useSelector((state) => state.reducer.frutas)
  const dispatch = useDispatch();

  function adicionarFruta(event){
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }
    dispatch({type: "ADICIONAR", value: objFruta})
  }


  return(
    <div>
      <form onSubmit = {adicionarFruta}>
        <input 
          placeholder="Digite uma fruta..." 
          value={inputFrutas} 
          onChange={(event) => setInputFrutas(event.target.value)}
        />
        <button>
          Enviar
        </button>
      </form>
      {frutas.map((fruta, index) => {
        return (
          <li key = {index}>{fruta.nome}</li>
        )
      })}
    </div>
  )
}

export default App