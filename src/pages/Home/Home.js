import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight, CreditCard, Menu, PiggyBank, Wallet } from "lucide-react-native";
import { rootStyles } from "../../styles/styles";
import { styles } from "./Home.styles";
import { Footer } from "../../components/Footer/Footer";
import { TransactionRow } from "../../components/TransactionCard/TransactionCard";
import { SummaryRow } from "../../components/SummaryRow/SummaryRow";
import { transacoes } from "../../data/data";

export function Home({ navigation }) {
    const recentTransactions = transacoes.slice(0, 3);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
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

                    <View style={styles.greeting}>
                        <Text style={styles.greetingTitle}>Bem vindo de volta, Vinícius</Text>
                        <Text style={styles.greetingSubtitle}>Inicie sua organização financeira aqui.</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Visão geral</Text>
                    <View style={styles.balanceCard}>
                        <View style={styles.balanceHeader}>
                            <View>
                                <Text style={styles.balanceLabel}>Saldo total</Text>
                                <Text style={styles.balanceValue}>R$ 2.067,00</Text>
                                <Text style={styles.balanceChange}>↑ 10% que o último mês</Text>
                            </View>
                            <TouchableOpacity style={styles.balanceAction} accessibilityLabel="Ver saldo">
                                <ArrowUpRight size={15} color={rootStyles.greyLight} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.balanceDivider} />
                        
                        <View style={styles.balanceShortcuts}>
                            <TouchableOpacity style={styles.shortcutButton}>
                                <Text style={styles.shortcutText}>Meus gastos fixos →</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.shortcutButton}>
                                <Text style={styles.shortcutText}>Meus gastos variáveis →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.sectionHeading}>
                        <Text style={styles.sectionTitle}>Resumo do mês</Text>
                        <Text style={styles.seeAll}>Ver tudo</Text>
                    </View>

                    <View style={styles.listCard}>
                        <SummaryRow icon={Wallet} label="Receitas" amount="+ R$ 3.540,00" type="positive" />
                        <SummaryRow icon={CreditCard} label="Despesas" amount="- R$ 1.430,00" type="negative" />
                        <SummaryRow icon={PiggyBank} label="Economizado" amount="+ R$ 1.128,00" type="positive" last />
                    </View>
                    <View style={styles.sectionHeading}>
                        <Text style={styles.sectionTitle}>Transações Recentes</Text>
                        <TouchableOpacity
                            accessibilityRole="button"
                            onPress={() => navigation.navigate("Transactions")}
                        >
                            <Text style={styles.seeAll}>Ver tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listCard}>
                        {recentTransactions.map((transaction, index) => (
                            <TransactionRow
                                key={transaction.id}
                                label={transaction.nome}
                                date={transaction.data}
                                amount={`- ${transaction.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}
                                type="negative"
                                last={index === recentTransactions.length - 1}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation} currentRoute="Home" />
        </SafeAreaView>
    )
}