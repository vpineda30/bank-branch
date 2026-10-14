import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
    listRow: {
        minHeight: 43,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    rowDivider: {
        borderBottomWidth: 1,
        borderBottomColor: rootStyles.greyLight,
    },

    rowDetails: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        minWidth: 0,
    },

    iconBox: {
        width: 25,
        height: 25,
        marginRight: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: rootStyles.surfaceMuted,
    },

    rowLabel: {
        fontSize: 10,
        color: rootStyles.greyDark,
        fontFamily: rootStyles.poppinsRegular,
    },

    rowAmount: {
        marginLeft: 6,
        fontSize: 10,
        textAlign: "right",
        fontFamily: rootStyles.poppinsMedium,
    },

    positive: {
        color: rootStyles.positive,
    },

    negative: {
        color: rootStyles.negative,
    },
});
