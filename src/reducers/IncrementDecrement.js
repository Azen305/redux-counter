const initialState=0;
const incrementDecrement = ( state=initialState, action)=>{
    const {type, payload}=action
    switch (type){
        case "Increment": return state + parseInt(payload);
        case "Decrement": return state - parseInt(payload);
        default: return state;
    }
}

export default incrementDecrement;