import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import Cadastro from './Cadastro'
import Sindico from './Sindico'
import Morador from './Morador'
import Denuncias from './Denuncias'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Página Denúncias - Síndico e Morador */}
        <Stack.Screen name="Denuncias" component={Denuncias}
          options={{ title: 'Denúncias' }}></Stack.Screen>

        {/* Segunda Página Caso Síndico */}
        <Stack.Screen name="Sindico" component={Sindico}
          options={{ title: 'Síndico' }}></Stack.Screen>

        {/* Segunda Página Caso Morador */}
        <Stack.Screen name="Morador" component={Morador}
          options={{ title: 'Morador' }}></Stack.Screen>

        {/* Primeira Página */}
        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Gerenciamento de Condomínio' }}></Stack.Screen>

        {/* Página Cadastro de Morador - Síndico */}
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{ title: 'Novo Morador' }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );

}
