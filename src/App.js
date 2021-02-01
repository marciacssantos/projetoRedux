import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, FormGroup, Jumbotron, Input, Button, ListGroup, ListGroupItem } from 'reactstrap'
import Menu from './components/menu'
import fundo from './img/maquete-de-conceito-de-fruta-deliciosa.jpg'
import "./index.css"
function App(){
  const [inputFrutas, setInputFrutas] = React.useState("")
  const [inputTitulo, setInputTitulo] = React.useState("")

  const frutas = useSelector((state) => state.reducer.frutas)
  const titulo = useSelector((state) => state.tituloReducer.titulo)  //Como não é uma array não precisa passar o .frutas
  
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

  function alterarTitulo(event){
    setInputTitulo(event.target.value)
    dispatch({type: "ALTERAR", value: event.target.value})
  }

  return(
    <>
    <img src={fundo}/>
    <Jumbotron className="formulario">
        <FormGroup>
          
          <Input 
          placeholder="Informe o titulo" 
          value={inputTitulo}
          onChange = {alterarTitulo}
          />
        </FormGroup>
        
        <h1>{titulo}</h1>
        <Form onSubmit = {adicionarFruta}>
          <Input 
            placeholder="Digite uma fruta..." 
            value={inputFrutas} 
            onChange={(event) => setInputFrutas(event.target.value)}
          />
          <Button className="botao" color="primary">
            Enviar
          </Button>
        </Form>
    </Jumbotron>
      
    <div className="lista">
        <ListGroup>
        {frutas.map((fruta, index) => {
          return (
            <ListGroupItem key = {index}>{fruta.nome}</ListGroupItem>
          )
        })}
        </ListGroup>
      </div>
      
      
    
    </>
  )
}

export default App