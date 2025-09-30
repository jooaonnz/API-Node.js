import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import PagePedido from "./screens/Pedido";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='PagePedido'>
          <Stack.Screen
            name='PagePedido'
            component={PagePedido}
            option={{headerShown:false}}
          />
        </Stack.Navigator>    
      </NavigationContainer>
    </PaperProvider>
  );
}
