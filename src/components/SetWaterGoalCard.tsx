import {Text, TouchableOpacity, View} from "react-native";
import {setWaterGoalCardStyle} from "../styles/styles";
import {Entypo} from "@expo/vector-icons";
import {colorPalette} from "../constants/color";
import * as React from "react";

const SetWaterGoalCard = ({action, waterGoal}) => {
    return (
        <TouchableOpacity style={setWaterGoalCardStyle.card} onPress={action}>
            <View style={setWaterGoalCardStyle.cardInfo}>
                <Text style={setWaterGoalCardStyle.title}>{waterGoal}ml</Text>
                <Text style={setWaterGoalCardStyle.text}>Your daily goal</Text>
            </View>
            <Entypo name="chevron-thin-right" size={30} color={colorPalette.background}/>
        </TouchableOpacity>
    )
}

export default SetWaterGoalCard;