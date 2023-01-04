import {StyleSheet} from "react-native";
import {colorPalette} from "../constants/color";

export const commonStyle = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 36,
        marginTop: 12,
        padding: 24,
        marginLeft: -80,
        color: colorPalette.primary,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
});

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: colorPalette.background
    },
    progress: {
        margin: 16
    },
    list: {
        alignSelf: 'stretch',
        flexGrow: 1
    },
});

export const settingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: colorPalette.background
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "stretch",
        marginTop: 12,
        padding: 24,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colorPalette.primary,
    },
});

export const waterRecordItemStyle = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 32
    },
    detailText: {
        fontWeight: 'bold',
        color: colorPalette.secondary,
    }
});

export const signInStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: colorPalette.primary
    },
    header: {
        fontWeight: 'bold',
        fontSize: 36,
        marginTop: 12,
        padding: 24,
        marginLeft: -80,
        color: colorPalette.background
    },
    inputContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    input: {
        marginLeft: 36,
        marginTop: 9,
        marginRight: 36,
        padding: 16,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        marginBottom: 10,
        alignSelf: 'stretch',
        backgroundColor: colorPalette.background
    },
    signInButton: {
        marginLeft: 36,
        marginTop: 48,
        marginRight: 36,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        alignSelf: 'stretch',
        backgroundColor: colorPalette.tertiary,
    },
    signInText: {
        color: colorPalette.background
    },
    errorText: {
        color: colorPalette.tertiary
    },
    loadingContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: colorPalette.secondary
    },
});

export const setWaterGoalCardStyle = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: colorPalette.secondary,
        color: colorPalette.background,
        padding: 36,
        margin: 18,
        borderRadius: 30,
    },
    cardInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        alignSelf: 'stretch',
        backgroundColor: colorPalette.secondary,
        color: colorPalette.background,
    },
    title: {
        color: colorPalette.background,
        fontSize: 24
    },
    text: {
        color: colorPalette.background
    }
});

export const setWaterGoalModalStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        alignSelf: "stretch",
    },
    modalView: {
        margin: 20,
        backgroundColor: colorPalette.background,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: "stretch",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 40,
        alignSelf: "stretch",
        backgroundColor: colorPalette.tertiary
    },
    disabledButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 40,
        alignSelf: "stretch",
        backgroundColor: colorPalette.disabled
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        marginLeft: 36,
        marginTop: 9,
        marginRight: 36,
        padding: 16,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        marginBottom: 10,
        alignSelf: 'stretch',
        backgroundColor: colorPalette.background,
        fontSize: 36
    },
    inputBlank: {
        marginLeft: 36,
        marginTop: 9,
        marginRight: 36,
        padding: 16,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        marginBottom: 10,
        alignSelf: 'stretch',
        backgroundColor: colorPalette.background,
        fontSize: 18
    },
});

export const signOffCardStyle = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: colorPalette.tertiary,
        color: colorPalette.background,
        padding: 36,
        margin: 18,
        borderRadius: 30,
    },
    cardInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        alignSelf: 'stretch',
        color: colorPalette.background,
    },
    title: {
        color: colorPalette.background,
        fontSize: 24
    },
    text: {
        color: colorPalette.background
    }
});
