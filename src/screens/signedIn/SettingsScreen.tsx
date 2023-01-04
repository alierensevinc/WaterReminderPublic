import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {commonStyle, settingsStyle} from "../../styles/styles";
import SetWaterGoalCard from "../../components/SetWaterGoalCard";
import SetWaterGoalModal from "../../components/SetWaterGoalModal";
import {fetchWaterGoal} from "../../util/FirebaseHelper";
import {useAuthContext} from "../../context/AuthContext";
import {useFirebaseContext} from "../../context/FirebaseContext";
import {auth} from "../../../firebaseConfig";
import SignOutCard from "../../components/SignOutCard";

const SettingsScreen = () => {
    const [authState] = useAuthContext();
    const [state, dispatch] = useFirebaseContext();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchWaterGoal(dispatch, authState.user);
    }, []);

    const submitWaterGoal = () => {
        setModalVisible(false);
    }

    return (
        <View style={settingsStyle.container}>
            <Text style={commonStyle.header}>
                Water Reminder
            </Text>
            {
                state.waterGoal &&
                <>
                    <SetWaterGoalCard waterGoal={state.waterGoal.waterGoal}
                                      action={() => {
                                          setModalVisible(true)
                                      }}/>
                    <SetWaterGoalModal oldWaterGoal={state.waterGoal.waterGoal}
                                       modalVisible={modalVisible}
                                       action={submitWaterGoal}
                    />
                </>
            }
            <SignOutCard action={() => {
                auth.signOut()
            }}/>
        </View>
    );
}

export default SettingsScreen;