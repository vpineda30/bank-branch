import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Welcome.styles";
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Buttons";
import { Menu } from "lucide-react-native";
import { rootStyles } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../../../assets/images/welcome-bg.jpg")}
                >
                </Image>

                <View style={styles.welcome}>
                    <View style={styles.header}>
                        <View style={styles.headerSlogan}>
                            <Text style={styles.headerSloganText}>Felucy</Text>
                            <Image source={require("../../../assets/images/logo.png")} style={{ width: 18, height: 18 }} />
                        </View>
                        <Menu size={24} color={rootStyles.black} />
                    </View>

                    <Text style={styles.welcomeTitle}>
                        O futuro de seu banco começa aqui.
                    </Text>

                    <Text style={styles.welcomeSubtitle}>
                        Tecnologia e praticidade para você ter mais controle sobre sua vida financeira.
                    </Text>

                    <View style={styles.navButtons}>
                        <ButtonPrimary text="Experimente agora" onPress={() => navigation.navigate("Register")} />
                        <ButtonSecondary text="Entrar" onPress={() => navigation.navigate("Login")} />
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}