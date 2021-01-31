import {combineReducers} from 'redux'

const initialState = {
    frutas:[
    { nome: "Banana"},
    { nome: "Maçã"},
    { nome: "Uva"}
    ]
}

function reducer(state = initialState, action) {
    if(action.type === "ADICIONAR"){
        return  { frutas: [...state.frutas, { ...action.value }]}
    }else{
        return state;
    }
}

const reducers = combineReducers({reducer})

export default reducers

