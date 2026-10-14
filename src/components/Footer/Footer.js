import { View, Text, TouchableOpacity } from "react-native";
import { LayoutGrid, WalletCards, GitBranch, User, DollarSign } from "lucide-react-native";

import { styles } from "./Footer.styles";

const menuItems = [
  {
    label: "Início",
    icon: LayoutGrid,
    route: "Home",
  },
  {
    label: "Meus Gastos",
    icon: WalletCards,
    route: "Gastos",
  },
  {
    label: "Transações",
    icon: DollarSign,
    route: "Transactions",
  },
  {
    label: "Planejamentos",
    icon: GitBranch,
    route: "Planejamentos",
  },
  {
    label: "Perfil",
    icon: User,
    route: "Perfil",
  },
];

export function Footer({ navigation, currentRoute }) {
  return (
    <View style={styles.footer}>
      {menuItems.map((item) => {
        const Icon = item.icon;
        const active = currentRoute === item.route;

        return (
          <TouchableOpacity
            key={item.route}
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(item.route)}
          >
            <Icon
              size={20}
              color={active ? "#202020" : "#555"}
              strokeWidth={active ? 2.2 : 1.8}
            />

            <Text style={[styles.label, active && styles.activeLabel]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
