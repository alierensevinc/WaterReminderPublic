const {colorPalette} = require("./color");

export const actions = [
    {
        color: colorPalette.primary,
        name: "250 ml",
        icon: require("../../assets/images/250ml.png"),
        text: "250 ml",
        position: 1,
    },
    {
        color: colorPalette.primary,
        name: "330 ml",
        icon: require("../../assets/images/330ml.png"),
        text: "330 ml",
        position: 2
    },
    {
        color: colorPalette.primary,
        name: "500 ml",
        icon: require("../../assets/images/500ml.png"),
        text: "500 ml",
        position: 3
    },
];