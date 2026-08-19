import { NavigationContainer } from "@react-navigation/native"; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoutes } from "./src/routes/AppRouter";
import { Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    poppinsSemiBold: Poppins_600SemiBold,
    poppinsMedium: Poppins_500Medium,
    poppinsRegular: Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}