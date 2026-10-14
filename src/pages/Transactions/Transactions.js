import { useMemo, useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu, Search, SlidersHorizontal } from "lucide-react-native";
import { Footer } from "../../components/Footer/Footer";
import { TransactionRow } from "../../components/TransactionCard/TransactionCard";
import { transacoes } from "../../data/data";
import { rootStyles } from "../../styles/styles";
import { styles } from "./Transactions.styles";

function parseTransactionDate(date) {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day);
}

function formatTransactionDate(date, options) {
    return parseTransactionDate(date).toLocaleDateString("pt-BR", options);
}

export function Transactions({ navigation }) {
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    const groupedTransactions = useMemo(() => {
        const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");
        const filteredTransactions = transacoes
            .filter((transaction) => {
                const searchableDate = formatTransactionDate(transaction.data, {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                });

                return `${transaction.nome} ${transaction.data} ${searchableDate}`
                    .toLocaleLowerCase("pt-BR")
                    .includes(normalizedSearch);
            })
            .sort((first, second) => {
                const difference = parseTransactionDate(first.data) - parseTransactionDate(second.data);
                return sortOrder === "desc" ? -difference : difference;
            });

        return filteredTransactions.reduce((groups, transaction) => {
            const date = transaction.data;
            const lastGroup = groups[groups.length - 1];

            if (lastGroup?.date === date) {
                lastGroup.items.push(transaction);
            } else {
                groups.push({ date, items: [transaction] });
            }

            return groups;
        }, []);
    }, [search, sortOrder]);

    function showSortOptions() {
        Alert.alert("Filtrar transações", "Escolha a ordem de exibição.", [
            { text: "Mais recentes", onPress: () => setSortOrder("desc") },
            { text: "Mais antigas", onPress: () => setSortOrder("asc") },
            { text: "Cancelar", style: "cancel" },
        ]);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.brand}>
                            <Text style={styles.brandName}>Felucy</Text>
                            <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
                        </View>

                        <TouchableOpacity accessibilityLabel="Abrir menu">
                            <Menu size={20} color={rootStyles.black} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.heading}>
                        <Text style={styles.title}>Transações</Text>
                        <Text style={styles.subtitle}>
                            Acompanhe todos seus movimentos em um só lugar.
                        </Text>
                    </View>

                    <View style={styles.searchRow}>
                        <View style={styles.searchField}>
                            <Search size={15} color={rootStyles.grey} />
                            <TextInput
                                accessibilityLabel="Buscar transações"
                                style={styles.searchInput}
                                value={search}
                                onChangeText={setSearch}
                                placeholder="Buscar transações"
                                placeholderTextColor={rootStyles.grey}
                                returnKeyType="search"
                            />
                        </View>
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityLabel="Filtrar transações por data"
                            style={styles.filterButton}
                            onPress={showSortOptions}
                        >
                            <SlidersHorizontal size={12} color={rootStyles.bg} />
                            <Text style={styles.filterLabel}>Filtrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sectionHeading}>
                        {groupedTransactions.length > 0 ? (
                            groupedTransactions.map((group) => (
                                <View key={group.date} style={styles.dateGroup}>
                                    <Text style={styles.dateHeading}>
                                        {formatTransactionDate(group.date, { day: "numeric", month: "long" })}
                                    </Text>
                                    <View>
                                        {group.items.map((transaction, index) => (
                                            <TransactionRow
                                                key={transaction.id}
                                                label={transaction.nome}
                                                date={formatTransactionDate(transaction.data, {
                                                    day: "numeric",
                                                    month: "short",
                                                }).replace(".", "")}
                                                amount={`- ${transaction.valor.toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                })}`}
                                                type="negative"
                                                last={index === group.items.length - 1}
                                            />
                                        ))}
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.emptyMessage}>Nenhuma transação encontrada.</Text>
                        )}
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation} currentRoute="Transactions" />
        </SafeAreaView>
    );
}
