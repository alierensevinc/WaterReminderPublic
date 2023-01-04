import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig";
import {storeData} from "./StorageHelper";
import {authActions} from "../constants/authActions";

export const onAuthStateChanged = (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            storeData('uid', uid).then(() => {
                dispatch(authActions.onAuthStateChange(uid));
            });
        } else {
            dispatch(authActions.signOut());
        }
    });
}

export const signIn = (dispatch, email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        storeData('uid', userCredential.user.uid).then(() => {
            dispatch(authActions.signIn(userCredential.user.uid));
        });
    }).catch((err) => {
        dispatch(authActions.throwError(err.message));
    });
}

export const signUp = (dispatch, email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        storeData('uid', userCredential.user.uid).then(() => {
            dispatch(authActions.signUp(userCredential.user.uid));
        });
    }).catch((err) => {
        dispatch(authActions.throwError(err.message));
    });
}

