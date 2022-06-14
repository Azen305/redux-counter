export const incNumber=(input)=>{
    return {
        type:"Increment",
        payload: input
    }
}

export const decNumber = (input) => {
    return {
        type: "Decrement",
        payload: input
    }
}