import {addDoc, collection, doc, onSnapshot, orderBy, query, setDoc} from "firebase/firestore";
import {firestore} from "../../firebaseConfig";
import {firebaseActions} from "../context/FirebaseContext";
import moment from "moment";

export const fetchWaterRecords = (dispatch, userId) => {
    const today = moment().format("YYYY-MM-DD");
    const waterRecordQuery = query(collection(firestore, `${userId}/History/${today}`), orderBy('timeStamp', 'desc'));
    return onSnapshot(waterRecordQuery, (docRef) => {
        const docRefTemp = [];
        docRef.forEach((doc) => {
            docRefTemp.push({id: doc.id, data: doc.data()})
        });
        dispatch(firebaseActions.fetchWaterRecords(docRefTemp));
    });
}

export const saveWaterRecord = (dispatch, userId, size) => {
    const today = moment().format("YYYY-MM-DD");
    const now = moment().format("HH:mm")
    addDoc(collection(firestore, `${userId}/History/${today}`), {
        time: now,
        timeStamp: moment().format(),
        size: size
    }).then(() => {
        dispatch(firebaseActions.saveWaterRecords());
    });
}

export const fetchWaterRecord = (dispatch, userId, date) => {
    const waterRecordQuery = query(collection(firestore, `${userId}/History/${date}`), orderBy('timeStamp', 'desc'));
    return onSnapshot(waterRecordQuery, (docRef) => {
        const docRefTemp = [];
        docRef.forEach((doc) => {
            docRefTemp.push({id: doc.id, data: doc.data()})
        });
        dispatch(firebaseActions.fetchWaterRecord(docRefTemp));
    });
}


export const fetchWaterGoal = (dispatch, userId) => {
    const waterRecordQuery = query(doc(firestore, `${userId}/History/`));
    return onSnapshot(waterRecordQuery, (docRef) => {
        if (docRef.data() === undefined) {
            setDoc(doc(firestore, `${userId}/History`), {
                waterGoal: 2500
            }).then(() => {
                dispatch(firebaseActions.saveWaterGoal());
            });
        } else {
            dispatch(firebaseActions.fetchWaterGoal(docRef.data()));
        }
    });
}

export const saveWaterGoal = (dispatch, userId, waterGoal) => {
    setDoc(doc(firestore, `${userId}/History`), {
        waterGoal: waterGoal
    }).then(() => {
        dispatch(firebaseActions.saveWaterGoal());
    });
}