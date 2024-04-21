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
        return{
            ...state,
        }
    }

    if(action.type === "remove-item"){
        return{
            ...state
        }
    }

    if(action.type === "place-order"){
        return{
            ...state
        }
    }

    return state
}