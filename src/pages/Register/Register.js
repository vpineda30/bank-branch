import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu } from "lucide-react-native";
import { styles } from "./Register.styles";
import { rootStyles } from "../../styles/styles";
import { ButtonSecondary } from "../../components/Buttons/Buttons";

export function Register() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.register}>
                        <View style={styles.header}>
                            <View style={styles.headerSlogan}>
                                <Text style={styles.headerSloganText}>Felucy</Text>
                                <Image source={require("../../../assets/images/logo.png")} style={{ width: 18, height: 18 }} />
                            </View>
                            <Menu size={24} color={rootStyles.black} />
                        </View>

                        <View style={styles.registerFormContainer}>
                            <Text style={styles.registerTitle}>Seu futuro começa aqui!</Text>
                            <Text style={styles.registerSubtitle}>Abra sua conta em poucos passos e tenha uma experiência bancária moderna, segura e feita para você.</Text>

                            <View style={styles.formContainer}>
                                <Text style={styles.sectionTitle}>Dados Pessoais</Text>
                                <TextInput style={styles.inputField} placeholder="Nome" />
                                <TextInput style={styles.inputField} placeholder="Sobrenome" />

                                <View style={styles.inputRow}>
                                    <TextInput style={styles.inputField} placeholder="CPF" keyboardType="numeric" />
                                    <TextInput style={styles.inputField} placeholder="Data de nascimento" />
                                </View>

                                <Text style={styles.sectionTitle}>Contatos</Text>
                                <TextInput style={styles.inputField} placeholder="E-mail" keyboardType="email-address" />
                                <TextInput style={styles.inputField} placeholder="Telefone" keyboardType="phone-pad" />

                                <Text style={styles.sectionTitle}>Perfil financeiro</Text>
                                <TextInput style={styles.inputField} placeholder="Ocupação" />

                                <View style={styles.inputRow}>
                                    <TextInput style={styles.inputField} placeholder="Renda" keyboardType="numeric" />
                                    <TextInput style={styles.inputField} placeholder="Finalidade da conta" />
                                </View>

                                <Text style={styles.sectionTitle}>Endereço</Text>
                                <TextInput style={styles.inputField} placeholder="CEP" keyboardType="numeric" />

                                <View style={styles.inputRow}>
                                    <TextInput style={styles.inputField} placeholder="Endereço" />
                                    <TextInput style={styles.numberField} placeholder="Nº" keyboardType="numeric" />
                                </View>

                                <Text style={styles.sectionTitle}>Segurança</Text>
                                <TextInput style={styles.inputField} placeholder="Senha" secureTextEntry />
                                <TextInput style={styles.inputField} placeholder="Confirmar senha" secureTextEntry />

                                <View style={styles.registerButtonContainer}>
                                    <ButtonSecondary text="Cadastrar minha conta" />
                                </View>

                                <Text style={styles.loginText}>Já possui uma conta?
                                    <Text style={styles.loginLink}> Entrar</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
