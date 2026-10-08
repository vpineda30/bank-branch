import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react";

export function Transactions() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

            </ScrollView>
        </SafeAreaView>
    )
}