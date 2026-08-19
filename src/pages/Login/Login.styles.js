import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: rootStyles.bg,
        width: "100%",
        height: "100%",
    },

    image: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    login: {
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

    loginFormContainer: {
        marginTop: "30%",
    },

    loginTitle: {
        fontSize: 30,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    loginSubtitle: {
        fontSize: 12,
        color: rootStyles.grey,
        fontFamily: rootStyles.poppinsRegular,
        marginTop: 5,
    },

    loginDataContainer: {
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },

    loginDataTitle: {
        fontSize: 12,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    inputField: {
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderColor: rootStyles.grey,
        borderRadius: 5,
        fontSize: 12,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsRegular,
    },

    forgotPassword: {
        fontSize: 12,
        color: rootStyles.grey,
        textDecorationLine: "underline",
        fontFamily: rootStyles.poppinsMedium,
        marginTop: 10,
    },

    loginButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: "100%",
    },

    registerText: {
        fontSize: 12,
        justifyContent: "center",
        alignSelf: "center",
        color: rootStyles.grey,
        textAlign: "center",
        fontFamily: rootStyles.poppinsRegular,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: rootStyles.grey,
        paddingBottom: 2,
        marginTop: "50%",
    },
})