import React, { Children, createContext, useContext, useEffect, useReducer, useState } from 'react';
import { initialState, ProductReducer } from '../state/productState/productReducer';
import { actionTypes } from './../state/productState/actionTypes';




const CONTEXT_PRODUCT=createContext()

const ProductProvider = ({children}) => {
    /* const [product, setProduct] = useState([]) */
    const [state,dispatch]=useReducer(ProductReducer,initialState)
   
    useEffect(() => {
        dispatch({type:actionTypes.FETCHING_START})
        fetch("product.json")
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })).catch(() => {
            dispatch({type:actionTypes.FETCHING_ERROR})
        })
        
    }, [])
    const value = { state,dispatch };
    //console.log(product)
    return (
        <div>
            <CONTEXT_PRODUCT.Provider value={value}>
                {children}
           </CONTEXT_PRODUCT.Provider>
            
        </div>
    );
};

export const useProduct = () => {
    const context = useContext(CONTEXT_PRODUCT);
    return context
}
export default ProductProvider;