import { Text, View } from "react-native";
import { styles } from "./TransactionCard.styles";

export function TransactionRow({ label, date, amount, type, last }) {
    return (
        <View style={[styles.listRow, styles.transactionRow, !last && styles.rowDivider]}>
            <View style={styles.rowDetails}>
                <View style={styles.iconBox}>
                    <Text style={styles.transactionSymbol}>$</Text>
                </View>
                <View>
                    <Text style={styles.rowLabel}>{label}</Text>
                    <Text style={styles.transactionDate}>{date}</Text>
                </View>
            </View>
            <Text style={[styles.rowAmount, type === "positive" ? styles.positive : styles.negative]}>{amount}</Text>
        </View>
    )
}