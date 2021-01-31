import { createStore } from 'redux'

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
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;