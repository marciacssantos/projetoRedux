import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button } from 'reactstrap'
import Menu from './components/menu'
function App(){
  const [inputFrutas, setInputFrutas] = React.useState("")
  const [inputTitulo, setInputTitulo] = React.useState("")

  const frutas = useSelector((state) => state.reducer.frutas)
  const titulo = useSelector((state) => state.tituloReducer.titulo)  //Como não é uma array não precisa passar o .frutas
  const quantidade = useSelector((state) => state.reducer2.quantidade)
  
  const dispatch = useDispatch();
// Inicio da funcao que adiciona a fruta na pagina
  function adicionarFruta(event){
    event.preventDefault(); //pra página não recarregar

    const objFruta = {
      nome: inputFrutas
    }

    dispatch({type: "ADICIONAR", value: objFruta})

  }
  // Fim

  function adicionarQuantidade(event){
    event.preventDefault();

    const objQtd = {
      nome: inputQtd
    }
    dispatch({type: "ACRESCENTAR", value: objQtd})
  }

  function alterarTitulo(event){
    setInputTitulo(event.target.value)
    dispatch({type: "ALTERAR", value: event.target.value})
  }

  return(
    <div>
      <Menu />
      <Form>
        <label>Título</label>
        <Input 
        placeholder="Informe o titulo" 
        value={inputTitulo}
        onChange = {alterarTitulo}
        />
      </Form>
      
      <h1>{titulo}</h1>
      <Form onSubmit = {adicionarFruta}>
        <Input 
          placeholder="Digite uma fruta..." 
          value={inputFrutas} 
          onChange={(event) => setInputFrutas(event.target.value)}
        />
        <Button color="primary">
          Enviar
        </Button>
      </Form>
      {frutas.map((fruta, index) => {
        return (
          <li key = {index}>{fruta.nome}</li>
        )
      })}
    </div>
  )
}

export default App