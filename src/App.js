import React from 'react'
import { useSelector } from 'react-redux'

function App(){
  const frutas = useSelector((state) => state.frutas)
  console.log(frutas)
  return(
    <div>
      {frutas.map((fruta, index) => {
        return (
          <li key = {index}>{fruta.nome}</li>
        )
      })}
    </div>
  )
}

export default App