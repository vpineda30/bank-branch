import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},

	scrollContent: {
		flexGrow: 1,
		backgroundColor: rootStyles.bg
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

	greeting: {
		marginTop: 48,
		marginBottom: 22,
	},

	greetingTitle: {
		fontSize: 18,
		color: rootStyles.black,
		fontFamily: rootStyles.poppinsMedium,
	},

	greetingSubtitle: {
		marginTop: 2,
		fontSize: 11,
		color: rootStyles.grey,
		fontFamily: rootStyles.poppinsRegular,
	},

	sectionTitle: {
		fontSize: 11,
		color: rootStyles.black,
		fontFamily: rootStyles.poppinsMedium,
	},

	balanceCard: {
		marginTop: 8,
		paddingHorizontal: 19,
		paddingVertical: 16,
		backgroundColor: rootStyles.black,
		borderRadius: 17,
		shadowColor: rootStyles.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.22,
		shadowRadius: 3,
		elevation: 4,
	},

	balanceHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},

	balanceLabel: {
		fontSize: 10,
		color: rootStyles.grey,
		fontFamily: rootStyles.poppinsRegular,
	},

	balanceValue: {
		marginTop: 2,
		fontSize: 26,
		lineHeight: 32,
		color: rootStyles.bg,
		fontFamily: rootStyles.poppinsMedium,
	},

	balanceChange: {
		fontSize: 10,
		color: rootStyles.positive,
		fontFamily: rootStyles.poppinsRegular,
	},

	balanceAction: {
		width: 23,
		height: 23,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		backgroundColor: rootStyles.darkSurface,
	},

	balanceDivider: {
		height: 1,
		marginTop: 13,
		marginBottom: 10,
		backgroundColor: rootStyles.darkDivider,
	},

	balanceShortcuts: {
		flexDirection: "row",
		gap: 6,
	},

	shortcutButton: {
		flex: 1,
		minHeight: 40,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: rootStyles.darkBorder,
		borderRadius: 18,
		paddingHorizontal: 4,
	},

	shortcutText: {
		fontSize: 10,
		color: rootStyles.greyLight,
		fontFamily: rootStyles.poppinsRegular,
	},

	sectionHeading: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 29,
		marginBottom: 8,
	},

	seeAll: {
		fontSize: 10,
		color: rootStyles.black,
		textDecorationLine: "underline",
		fontFamily: rootStyles.poppinsRegular,
	},

	listCard: {
		paddingHorizontal: 9,
		paddingVertical: 8,
		borderWidth: 1,
		borderColor: rootStyles.greyLight,
		borderRadius: 9,
		backgroundColor: rootStyles.bg,
		shadowColor: rootStyles.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.14,
		shadowRadius: 3,
		elevation: 3,
	},
});