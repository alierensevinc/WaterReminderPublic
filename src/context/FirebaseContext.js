// noinspection JSCheckFunctionSignatures

import React, {createContext, useContext, useReducer} from "react";

export const firebaseActions = {
    fetchDailyWaterGoals: (payload) => ({
        type: 'fetch_daily_water_goals',
        payload: payload
    }),
    saveDailyWaterGoalReached: (payload) => ({
        type: 'save_daily_water_goals',
        payload: payload
    }),
    fetchWaterRecords: (payload) => ({
        type: 'fetch_water_records',
        payload: payload
    }),
    saveWaterRecords: (payload) => ({
        type: 'save_water_records',
        payload: payload
    }),
    fetchWaterRecord: (payload) => ({
        type: 'fetch_water_record',
        payload: payload
    }),
    fetchWaterGoal: (payload) => ({
        type: 'fetch_water_goal',
        payload: payload
    }),
    saveWaterGoal: (payload) => ({
        type: 'save_water_goal',
        payload: payload
    }),
};

const firebaseReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_daily_water_goals':
            return {...state};
        case 'save_daily_water_goals':
            return {...state, goalHistory: action.payload};
        case 'fetch_water_records':
            return {...state, dailyWaterRecord: action.payload};
        case 'save_water_record':
            return {...state};
        case 'fetch_water_record':
            return {...state, waterRecord: action.payload};
        case 'fetch_water_goal':
            return {...state, waterGoal: action.payload};
        case 'save_water_goal':
            return {...state, waterGoal: action.payload};
        default:
            return state;
    }
}

const initialState = {};

const FirebaseContext = createContext(undefined);
const FirebaseDispatchContext = createContext(undefined);

const FirebaseProvider = ({children}) => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    return (
        <FirebaseContext.Provider value={state}>
            <FirebaseDispatchContext.Provider value={dispatch}>
                {children}
            </FirebaseDispatchContext.Provider>
        </FirebaseContext.Provider>
    );
}

const useFirebaseContext = () => {
    const state = useContext(FirebaseContext);
    const dispatch = useContext(FirebaseDispatchContext);
    return [state, dispatch];
}

export {FirebaseProvider, useFirebaseContext};