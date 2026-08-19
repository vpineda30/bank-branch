import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
    image: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "60%",
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        backgroundColor: rootStyles.bg,
        width: "100%",
        height: "100%",
    },

    welcome: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 40,
        width: "100%",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    headerSlogan: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    headerSloganText: {
        fontSize: 12,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
        display: "flex",
    },
    
    welcomeTitle: {
        marginTop: 50,
        fontSize: 30,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    welcomeSubtitle: {
        fontSize: 12,
        color: rootStyles.grey,
        width: "80%",
        marginTop: 5,
        fontFamily: rootStyles.poppinsRegular,
    },

    navButtons: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10,
        marginTop: 25,
    },
})