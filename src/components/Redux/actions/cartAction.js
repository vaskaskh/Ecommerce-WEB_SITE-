export const toggleCartHidden = ()=>{
    return{     
        type :"TOGGLE_CART_HIDDEN"
    }
}


export const addItem = item =>{
    return{
        type: 'ADD_ITEM',
        payload: item
    }
}


export const clearItem =item=>{
    return{
        type: 'CLEAR_ITEM',
        payload: item
    }
}


export const removeItem = item=>{
    return{
        type: 'REMOVE_ITEM',
        payload: item
    }
}

