import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages/Welcome/Welcome";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Home } from "../pages/Home/Home";
import { Transactions } from "../pages/Transactions/Transactions";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Register"
        component={Register}
      />

      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Expenses"
        component={Home}
      />

      <Stack.Screen
        name="Transactions"
        component={Transactions}
      />

      <Stack.Screen
        name="Planning"
        component={Home}
      />

      <Stack.Screen
        name="Profile"
        component={Home}
      />
    </Stack.Navigator>
  );
}