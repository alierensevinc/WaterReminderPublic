import {Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {colorPalette} from "../constants/color";
import {waterRecordItemStyle} from "../styles/styles";

const WaterRecordItem = ({waterRecord}) => {
    return (
        <View style={waterRecordItemStyle.item}>
            <MaterialCommunityIcons name="cup-water" size={36} color={colorPalette.secondary}/>
            <View>
                <Text
                    style={waterRecordItemStyle.detailText}>{waterRecord.data.time} - {waterRecord.data.size}</Text>
            </View>
        </View>
    )
}

export default WaterRecordItem;