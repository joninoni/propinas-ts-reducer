import { MenuItem, OrderItem } from "../types";

export type ActionActivities = 
    {type:"add-item",payload:{item : MenuItem}} |
    {type:"remove-item",payload:{id : MenuItem["id"]}} |
    {type:"place-order"}

export type OrderState = {
    order : OrderItem[]
    tip : number
}

export const initialState : OrderState = {
    order : [],
    tip : 0,
}

export const orderReducer =
(
    state : OrderState = initialState,
    action : ActionActivities
) => {

    if(action.type === "add-item"){
        let order : OrderItem[] =[]
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        if(itemExist) {
            order = state.order.map( orderItem => orderItem.id === action.payload.item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1 } : 
                orderItem
            )
         
        } else {
            const newItem  = {...action.payload.item, quantity: 1}
            order = [...state.order,newItem]
        }
        return{
            ...state,
            order
        }
    }

    if(action.type === "remove-item"){
        const order = state.order.filter( item => item.id !== action.payload.id)
        return{
            ...state,
            order
        }
    }

    if(action.type === "place-order"){
        return{
            ...state
        }
    }

    return state
}