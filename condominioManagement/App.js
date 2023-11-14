import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import Cadastro from './Cadastro'
import Sindico from './Sindico'
import Morador from './Morador'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Morador" component={Morador}
          options={{ title: 'Morador' }}></Stack.Screen>

        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Gerenciamento de Condomínio' }}></Stack.Screen>

        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{ title: 'Novo Morador' }}></Stack.Screen>

        <Stack.Screen name="Sindico" component={Sindico}
          options={{ title: 'Síndico' }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );

}
