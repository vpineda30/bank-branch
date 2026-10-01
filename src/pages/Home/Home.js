import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight, CreditCard, Menu, PiggyBank, Wallet } from "lucide-react-native";
import { rootStyles } from "../../styles/styles";
import { styles } from "./Home.styles";

export function Home() {
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
                        <Text style={styles.seeAll}>Ver tudo</Text>
                    </View>
                    <View style={styles.listCard}>
                        <TransactionRow label="Salário" date="5 mai." amount="+ R$ 3.540,00" type="positive" />
                        <TransactionRow label="Mercado" date="30 Abr." amount="- R$ 630,00" type="negative" />
                        <TransactionRow label="Transporte" date="30 Abr." amount="- R$ 72,00" type="negative" last />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

function SummaryRow({ icon: Icon, label, amount, type, last }) {
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

function TransactionRow({ label, date, amount, type, last }) {
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