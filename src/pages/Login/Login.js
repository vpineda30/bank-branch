import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Login.styles";
import { Menu, Scroll } from "lucide-react-native";
import { rootStyles } from "../../styles/styles";
import { ButtonSecondary } from "../../components/Buttons/Buttons";

export function Login() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.login}>
                        <View style={styles.header}>
                            <View style={styles.headerSlogan}>
                                <Text style={styles.headerSloganText}>Felucy</Text>
                                <Image source={require("../../../assets/images/logo.png")} style={{ width: 18, height: 18 }} />
                            </View>
                            <Menu size={24} color={rootStyles.black} />
                        </View>

                        <View style={styles.loginFormContainer}>
                            <Text style={styles.loginTitle}>Olá, bem vindo de volta!</Text>
                            <Text style={styles.loginSubtitle}>Entre para continuar gerenciando suas finanças de forma simples, segura e inteligente.</Text>

                            <View style={styles.loginDataContainer}>
                                <Text style={styles.loginDataTitle}>Dados de login</Text>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="E-mail ou CPF"
                                />
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Senha"
                                />
                                <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>

                                <View style={styles.loginButtonContainer}>
                                    <ButtonSecondary text="Acessar minha conta" />
                                </View>

                                <Text style={styles.registerText}>Não possui uma conta?
                                    <Text style={styles.registerLink}> Cadastre-se</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}