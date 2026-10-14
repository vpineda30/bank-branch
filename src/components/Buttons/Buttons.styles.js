import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
    ButtonPrimary: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        backgroundColor: rootStyles.black,
        borderWidth: 1,
        borderColor: rootStyles.black,
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 25,
        gap: 5,
    },

    ButtonPrimaryText: {
        color: rootStyles.bg,
        fontFamily: rootStyles.poppinsRegular,
        textAlign: "center",
        fontSize: 10,
    },

    ButtonSecondary: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: rootStyles.black,
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 25,
        gap: 5,
    },

    ButtonSecondaryText: {
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsRegular,
        textAlign: "center",
        fontSize: 10,
    },
})