import { CartPage } from "../pages/Cart";
import { CART, MENS_DATA, WOMENS_DATA, GET_ADDRESS, HANDLE_SINGLE_DATA, REMOVE_DATA_FROM_CART } from "./action";

const initialState = {
    storingData: [],
    singleData: [],
    menProducts: [],
    womenProducts: [],
    cart: [],
    address: []
};
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case MENS_DATA: {
            return {
                ...state,
                menProducts: payload,
                storingData: [ ...state.storingData, payload ] 
            };
        }
        case WOMENS_DATA: {
            return {
                ...state,
                womenProducts: payload,
                storingData: [ ...state.storingData, payload ] 
            };
        }
        case HANDLE_SINGLE_DATA: {
            return {
                ...state,
                singleData: [ ...state.storingData ].filter((item) => item.id === payload)
            };
        }
        case CART: {
            return {
                ...state,
                cart: [ ...state.cart, payload ]
            };
        }
      
        case GET_ADDRESS: {
            console.log("add", payload);
            return {
                ...state,
                address: payload
            };
        }
        case REMOVE_DATA_FROM_CART: {
            return {
                ...state,
                cart: [ ...state.cart ].filter((item) => item.id !== payload)
            };
        }
        default:
            return state;

    }
};