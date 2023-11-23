import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Sindico from './Pages/Sindico'
import Morador from './Pages/Morador'
import Denuncias from './Pages/Denuncias'
import Pagamento from './Pages/Pagamento'
import Info from './Pages/Info'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Página de Informações do Condomínio - Síndico e Morador */}
        <Stack.Screen name="Info" component={Info}
          options={{ title: 'Informações do Condomínio' }}></Stack.Screen>

        {/* Primeira Página */}
        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Gerenciamento de Condomínio' }}></Stack.Screen>

        {/* Segunda Página Caso Síndico */}
        <Stack.Screen name="Sindico" component={Sindico}
          options={{ title: 'Síndico' }}></Stack.Screen>

        {/* Segunda Página Caso Morador */}
        <Stack.Screen name="Morador" component={Morador}
          options={{ title: 'Morador' }}></Stack.Screen>

        {/* Página Pagamento - Síndico e Morador */}
        <Stack.Screen name="Pagamento" component={Pagamento}
          options={{ title: 'Pagamento' }}></Stack.Screen>

        {/* Página Denúncias - Síndico e Morador */}
        <Stack.Screen name="Denuncias" component={Denuncias}
          options={{ title: 'Denúncias' }}></Stack.Screen>

        {/* Página Cadastro de Morador - Síndico */}
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{ title: 'Novo Morador' }}></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );

}
