import { StyleSheet } from "react-native";
import { rootStyles } from "../../styles/styles";

export const styles = StyleSheet.create({
  footer: {
    height: 90,
    backgroundColor: rootStyles.bg,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#C8C8C8",
  },

  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },

  label: {
    fontSize: 10,
    fontWeight: "500",
    color: "#202020",
  },
});