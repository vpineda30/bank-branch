import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Buttons.styles";
import { rootStyles } from "../../styles/styles";
import { ArrowRight } from "lucide-react-native";
 
export function ButtonSecondary({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.ButtonSecondary} onPress={onPress}>
            <Text style={styles.ButtonSecondaryText}>{text}</Text>
            <ArrowRight size={16} color={rootStyles.black} />
        </TouchableOpacity>
    )
}

export function ButtonPrimary({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.ButtonPrimary} onPress={onPress}>
            <Text style={styles.ButtonPrimaryText}>{text}</Text>
            <ArrowRight size={16} color={rootStyles.bg} />
        </TouchableOpacity>
    )
}