import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
  footer: {
    height: 90,
    backgroundColor: rootStyles.bg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#C8C8C8",
  },

  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  label: {
    fontSize: 11,
    fontWeight: "500",
    color: "#202020",
  },
});