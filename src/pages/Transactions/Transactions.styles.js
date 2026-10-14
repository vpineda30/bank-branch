import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: rootStyles.bg,
    },

    scrollContent: {
        flexGrow: 1,
    },

    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 36,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    brand: {
        flexDirection: "row",
        alignItems: "center",
    },

    brandName: {
        fontSize: 12,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    logo: {
        width: 14,
        height: 14,
        marginLeft: 2,
    },

    heading: {
        marginTop: 48,
    },

    title: {
        fontSize: 18,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    subtitle: {
        marginTop: 2,
        fontSize: 11,
        color: rootStyles.grey,
        fontFamily: rootStyles.poppinsRegular,
    },

    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 28,
        marginBottom: 15,
    },

    searchField: {
        flex: 1,
        minWidth: 0,
        height: 32,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: rootStyles.greyMuted,
    },

    searchInput: {
        flex: 1,
        minWidth: 0,
        marginLeft: 5,
        paddingVertical: 3,
        fontSize: 10,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsRegular,
    },

    filterButton: {
        width: 90,
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        borderRadius: 18,
        backgroundColor: rootStyles.black,
    },

    filterLabel: {
        fontSize: 10,
        color: rootStyles.bg,
        fontFamily: rootStyles.poppinsRegular,
    },

    sectionHeading: {
        marginTop: 16,
    },

    dateGroup: {
        marginBottom: 20,
    },

    dateHeading: {
        marginBottom: 4,
        fontSize: 11,
        color: rootStyles.black,
        fontFamily: rootStyles.poppinsMedium,
    },

    emptyMessage: {
        marginTop: 12,
        fontSize: 11,
        color: rootStyles.grey,
        fontFamily: rootStyles.poppinsRegular,
    },
});
