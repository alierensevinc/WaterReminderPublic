// noinspection JSCheckFunctionSignatures

import React, {createContext, useContext, useEffect, useReducer} from "react";
import {onAuthStateChanged} from "../util/AuthHelper";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'on_auth_state_change':
            return {...state, user: action.payload};
        case 'sign_in':
            return {...state, user: action.payload};
        case 'sign_up':
            return {...state, user: action.payload};
        case 'sign_out':
            return {...state, user: false, isLoading: false};
        case 'throw_error':
            return {...state, errorMsg: action.payload};
        default:
            return state;
    }
}

const initialState = {
    user: false,
    isLoading: true,
    errorMsg: ''
};

const AuthContext = createContext(undefined);
const AuthDispatchContext = createContext(undefined);

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        onAuthStateChanged(dispatch);
    }, []);

    return (
        <AuthContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    );
}

const useAuthContext = () => {
    const state = useContext(AuthContext);
    const dispatch = useContext(AuthDispatchContext);
    return [state, dispatch];
}

export {AuthProvider, useAuthContext};