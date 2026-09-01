import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu } from "lucide-react-native";
import { styles } from "./Register.styles";
import { rootStyles } from "../../styles/styles";
import { ButtonSecondary } from "../../components/Buttons/Buttons";
import { useState } from "react";

export function Register() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [renda, setRenda] = useState("");
    const [finalidade, setFinalidade] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleRegister() {
        if (!nome.trim() || !sobrenome.trim()) {
            Alert.alert("Por favor, preencha nome e sobrenome.");
            return;
        }

        if (!cpf.trim()) {
            Alert.alert("Por favor, informe seu CPF.");
            return;
        }

        if (cpf.replace(/\D/g, "").length !== 11) {
            Alert.alert("CPF inválido. Digite 11 números.");
            return;
        }

        if (!nascimento.trim()) {
            Alert.alert("Por favor, informe a data de nascimento.");
            return;
        }

        if (!email.trim() || !email.includes("@") || !email.includes(".")) {
            Alert.alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (!telefone.trim()) {
            Alert.alert("Por favor, informe seu telefone.");
            return;
        }

        if (telefone.replace(/\D/g, "").length < 10) {
            Alert.alert("Telefone inválido. Digite um número com DDD.");
            return;
        }

        if (!ocupacao.trim()) {
            Alert.alert("Por favor, informe sua ocupação.");
            return;
        }

        if (!renda.trim()) {
            Alert.alert("Por favor, informe sua renda.");
            return;
        }

        if (Number(renda) <= 0) {
            Alert.alert("A renda deve ser maior que zero.");
            return;
        }

        if (!finalidade.trim()) {
            Alert.alert("Por favor, informe a finalidade da conta.");
            return;
        }

        if (!cep.trim()) {
            Alert.alert("Por favor, informe seu CEP.");
            return;
        }

        if (cep.replace(/\D/g, "").length !== 8) {
            Alert.alert("CEP inválido. Digite 8 números.");
            return;
        }

        if (!endereco.trim()) {
            Alert.alert("Por favor, informe o endereço.");
            return;
        }

        if (!numero.trim()) {
            Alert.alert("Por favor, informe o número do endereço.");
            return;
        }

        if (!senha.trim() || !confirmarSenha.trim()) {
            Alert.alert("Por favor, preencha a senha e a confirmação.");
            return;
        }

        if (senha.length < 6) {
            Alert.alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert("As senhas não coincidem.");
            return;
        }

        Alert.alert("Cadastro realizado com sucesso!");
    }

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
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Nome"
                                    value={nome}
                                    onChangeText={setNome}
                                />
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Sobrenome"
                                    value={sobrenome}
                                    onChangeText={setSobrenome}
                                />

                                <View style={styles.inputRow}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="CPF"
                                        keyboardType="numeric"
                                        value={cpf}
                                        onChangeText={setCpf}
                                    />
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Data de nascimento"
                                        value={nascimento}
                                        onChangeText={setNascimento}
                                    />
                                </View>

                                <Text style={styles.sectionTitle}>Contatos</Text>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="E-mail"
                                    keyboardType="email-address"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Telefone"
                                    keyboardType="phone-pad"
                                    value={telefone}
                                    onChangeText={setTelefone}
                                />

                                <Text style={styles.sectionTitle}>Perfil financeiro</Text>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Ocupação"
                                    value={ocupacao}
                                    onChangeText={setOcupacao}
                                />

                                <View style={styles.inputRow}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Renda"
                                        keyboardType="numeric"
                                        value={renda}
                                        onChangeText={setRenda}
                                    />
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Finalidade da conta"
                                        value={finalidade}
                                        onChangeText={setFinalidade}
                                    />
                                </View>

                                <Text style={styles.sectionTitle}>Endereço</Text>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="CEP"
                                    keyboardType="numeric"
                                    value={cep}
                                    onChangeText={setCep}
                                />

                                <View style={styles.inputRow}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="Endereço"
                                        value={endereco}
                                        onChangeText={setEndereco}
                                    />
                                    <TextInput
                                        style={styles.numberField}
                                        placeholder="Nº"
                                        keyboardType="numeric"
                                        value={numero}
                                        onChangeText={setNumero}
                                    />
                                </View>

                                <Text style={styles.sectionTitle}>Segurança</Text>
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Senha"
                                    secureTextEntry
                                    value={senha}
                                    onChangeText={setSenha}
                                />
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Confirmar senha"
                                    secureTextEntry
                                    value={confirmarSenha}
                                    onChangeText={setConfirmarSenha}
                                />

                                <View style={styles.registerButtonContainer}>
                                    <ButtonSecondary text="Cadastrar minha conta" onPress={handleRegister} />
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
