import {combineReducers} from 'redux'

const initialState = {
    frutas:[]
}

function reducer(state = initialState, action) {
    if(action.type === "ADICIONAR"){
        return  { frutas: [...state.frutas, { ...action.value }]}
    }else{
        return state;
    }
}

function tituloReducer(state = 0, action){
    if(action.type === "ALTERAR"){
        return state + 1;
    }else{
        return state
    }
}

const reducers = combineReducers({reducer, tituloReducer})

export default reducers

