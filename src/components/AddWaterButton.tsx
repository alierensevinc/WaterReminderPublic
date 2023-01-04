import {FloatingAction} from "react-native-floating-action";
import {colorPalette} from "../constants/color";
import {actions} from "../constants/actions";


const AddWaterButton = ({dispatch, userId, action}) => {
    return (
        <FloatingAction
            color={colorPalette.tertiary}
            actions={actions}
            position="right"
            onPressItem={name => action(dispatch, userId, name)}
        />
    )
}

export default AddWaterButton;