import { Text, View } from "react-native";
import { rootStyles } from "../../styles/styles";
import { styles } from "./SummaryRow.styles";

export function SummaryRow({ icon: Icon, label, amount, type, last }) {
    return (
        <View style={[styles.listRow, !last && styles.rowDivider]}>
            <View style={styles.rowDetails}>
                <View style={styles.iconBox}>
                    <Icon size={14} color={rootStyles.grey} />
                </View>
                <Text style={styles.rowLabel}>{label}</Text>
            </View>
            <Text style={[styles.rowAmount, type === "positive" ? styles.positive : styles.negative]}>{amount}</Text>
        </View>
    )
}
