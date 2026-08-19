import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: rootStyles.bg,
        width: "100%",
    },

    register: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 40,
        paddingBottom: 30,
        width: "100%",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    headerSlogan: {
        flexDirection: "row",
        alignItems: "center",
    },

    headerSloganText: {
        fontSize: 12,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    registerFormContainer: {
        marginTop: "20%",
    },

    registerTitle: {
        fontSize: 30,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    registerSubtitle: {
        fontSize: 12,
        lineHeight: 16,
        color: rootStyles.grey,
        fontFamily: rootStyles.poppinsRegular,
        marginTop: 5,
    },

    formContainer: {
        marginTop: 20,
        gap: 8,
    },

    sectionTitle: {
        fontSize: 12,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
        marginTop: 30,
    },

    inputRow: {
        flexDirection: "row",
        gap: 10,
    },

    inputField: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: rootStyles.grey,
        paddingVertical: 0,
        width: "100%",
        height: 50,
        borderRadius: 5,
        fontSize: 12,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsRegular,
    },

    numberField: {
        width: 50,
        borderBottomWidth: 1,
        borderColor: rootStyles.grey,
        fontSize: 11,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsRegular,
        paddingVertical: 0,
    },

    registerButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: "100%",
    },

    loginText: {
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
        marginTop: "30%",
    },
});
