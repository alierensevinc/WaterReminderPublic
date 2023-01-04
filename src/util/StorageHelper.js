import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    return AsyncStorage.setItem(key, value).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    })
}

export const getData = async (key) => {
    return AsyncStorage.getItem(key).then((result) => {
        return result;
    }).catch((err) => {
        console.log(err);
    });
}
