import { set_data, set_file, set_text } from "../Action/actionType"

let initial = { data: {text:'',password:'',file:''}, arr: [] }

function reducer(state = initial, action) {
    switch (action.type) {
        case set_text:
            let name = action.payload.name;
            let value = action.payload.value;
            return { ...state, data: { ...state.data, [name]: value } }
        case set_file:
            let name1 = action.payload.name;
            const file = action.payload.url;
            return {...state,data:{...state.data,[name1]:file}}
        case set_data:
            return { ...state, arr: [...state.arr, state.data],data:{...state.data,text:action.payload,password:action.payload,file:action.payload} }
        default:
            return state
    }
}

export default reducer