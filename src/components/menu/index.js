import React from 'react'
import { useSelector } from 'react-redux'

function Menu(){
    const titulo = useSelector((state) => 
        state.tituloReducer.titulo
        )
    return(
        <div><center>{titulo}</center></div>
    )
}

export default Menu