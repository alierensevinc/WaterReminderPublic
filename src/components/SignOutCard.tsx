import {Text, TouchableOpacity, View} from "react-native";
import {signOffCardStyle} from "../styles/styles";
import {Entypo} from "@expo/vector-icons";
import {colorPalette} from "../constants/color";
import * as React from "react";

const SignOutCard = ({action}) => {
    return (
        <TouchableOpacity style={signOffCardStyle.card} onPress={action}>
            <View style={signOffCardStyle.cardInfo}>
                <Text style={signOffCardStyle.title}>Sign Out</Text>
            </View>
            <Entypo name="chevron-thin-right" size={30} color={colorPalette.background}/>
        </TouchableOpacity>
    )
}
export default SignOutCard;