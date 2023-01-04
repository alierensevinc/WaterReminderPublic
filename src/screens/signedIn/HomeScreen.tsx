import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import {useAuthContext} from "../../context/AuthContext";
import {useFirebaseContext} from "../../context/FirebaseContext";
import {fetchWaterGoal, fetchWaterRecords, saveWaterRecord} from "../../util/FirebaseHelper";
import AddWaterButton from "../../components/AddWaterButton";
import {colorPalette} from "../../constants/color";
import {commonStyle, homeStyle} from "../../styles/styles";
import {getData, storeData} from "../../util/StorageHelper";
import moment from "moment";
import WaterHistoryList from "../../components/WaterHistoryList";

const HomeScreen = () => {
    const [authState] = useAuthContext();
    const [state, dispatch] = useFirebaseContext();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetchWaterRecords(dispatch, authState.user);
        fetchWaterGoal(dispatch, authState.user);
    }, []);

    useEffect(() => {
        calculateCircle();
    }, [state])

    const calculateCircle = () => {
        if (state.dailyWaterRecord == undefined || state.waterGoal == undefined) {
            setProgress(0);
        } else {
            const dailyWaterSizeRecord = state.dailyWaterRecord.map(waterRecord => Number(waterRecord.data.size.substring(0, 3)));
            const waterRecord = dailyWaterSizeRecord.reduce((a, b) => a + b, 0);
            if (waterRecord >= state.waterGoal.waterGoal) {
                setProgress(1);
                updateGoalHistory();
            } else {
                setProgress(waterRecord / state.waterGoal.waterGoal);
            }
        }
    }

    const updateGoalHistory = () => {
        getData("goalHistory").then(res => {
            const today = moment().format("YYYY-MM-DD");
            if (!res) {
                const goalHistory = [
                    today
                ]
                storeData("goalHistory", JSON.stringify(goalHistory));
            } else if (!JSON.parse(res).includes(today)) {
                const goalHistory = [
                    ...JSON.parse(res),
                    today
                ]
                storeData("goalHistory", JSON.stringify(goalHistory));
            }
        });
    }

    return (
        <View style={homeStyle.container}>
            <Text style={commonStyle.header}>
                Water Reminder
            </Text>
            <View style={homeStyle.progress}>
                <ProgressCircle size={180} progress={progress} showsText color={colorPalette.primary}/>
            </View>
            <WaterHistoryList dailyWaterRecord={state.dailyWaterRecord}/>
            <AddWaterButton dispatch={dispatch} action={saveWaterRecord} userId={authState.user}/>
        </View>
    );
}

export default HomeScreen;