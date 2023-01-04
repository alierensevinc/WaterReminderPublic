import * as React from 'react';
import {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {settingsStyle} from "../../styles/styles";
import WaterHistoryList from "../../components/WaterHistoryList";
import {fetchWaterRecord} from "../../util/FirebaseHelper";
import {useFirebaseContext} from "../../context/FirebaseContext";
import {useAuthContext} from "../../context/AuthContext";
import {Entypo} from "@expo/vector-icons";
import {colorPalette} from "../../constants/color";
import moment from "moment";

const CalendarDetailScreen = ({navigation, route}) => {
    const [authState] = useAuthContext();
    const [state, dispatch] = useFirebaseContext();
    const {date} = route.params;

    useEffect(() => {
        fetchWaterRecord(dispatch, authState.user, date);
    }, []);

    return (
        <View style={settingsStyle.container}>
            <View style={settingsStyle.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={30} color={colorPalette.primary}/>
                </TouchableOpacity>
                <Text style={settingsStyle.text}>
                    {moment(date).format("DD/MMM/YYYY")}
                </Text>
            </View>
            <View style={{
                alignSelf: 'stretch'
            }}>
                <WaterHistoryList dailyWaterRecord={state.waterRecord}/>
            </View>
        </View>
    );
}

export default CalendarDetailScreen;