import {Modal, Pressable, Text, TextInput, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {setWaterGoalModalStyle} from "../styles/styles";
import {useAuthContext} from "../context/AuthContext";
import {useFirebaseContext} from "../context/FirebaseContext";
import {saveWaterGoal} from "../util/FirebaseHelper";

const SetWaterGoalModal = ({oldWaterGoal, modalVisible, action}) => {
    const [authState,] = useAuthContext();
    const [dispatch] = useFirebaseContext();
    const [waterGoal, setWaterGoal] = useState<any>('');

    useEffect(() => {
        setWaterGoal(oldWaterGoal);
    }, []);

    const submitWaterGoal = () => {
        if (isNaN(waterGoal)) {
            alert("Must input numbers");
            return false;
        } else {
            saveWaterGoal(dispatch, authState.user, waterGoal);
            action();
        }
    }

    const isPressable = () => {
        return isNaN(waterGoal);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={action}
        >
            <View style={setWaterGoalModalStyle.centeredView}>
                <View style={setWaterGoalModalStyle.modalView}>
                    <TextInput
                        style={waterGoal ? setWaterGoalModalStyle.input : setWaterGoalModalStyle.inputBlank}
                        placeholder="New Water Goal"
                        placeholderTextColor="#003f5c"
                        onChangeText={value => setWaterGoal(value)}
                        keyboardType="number-pad"
                        autoFocus={true}
                        defaultValue={waterGoal}
                    />
                    <Pressable
                        style={!isPressable() ? setWaterGoalModalStyle.button : setWaterGoalModalStyle.disabledButton}
                        onPress={submitWaterGoal}
                        disabled={isPressable()}
                    >
                        <Text style={setWaterGoalModalStyle.textStyle}>Save</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default SetWaterGoalModal;