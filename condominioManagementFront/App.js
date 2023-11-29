import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Sindico from './Pages/Sindico'
import Morador from './Pages/Morador'
import Denuncias from './Pages/Denuncias'
import Reservas from './Pages/Reservas'
import Pagamento from './Pages/Pagamento'
import Info from './Pages/Info'
import Agendamento from './Pages/Agendamento'
import InfoAdm from './Pages/InfoAdm'

export default function App() {
  const Stack = createStackNavigator()

  function logOut() {
    sessionStorage.clear();
    window.location.reload(false);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Primeira Página */}
        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Gerenciamento de Condomínio', headerTitleStyle: { fontFamily: 'Comic Sans MS'} }}></Stack.Screen>

        {/* Página de Informações do Condomínio - Síndico e Morador */}
        <Stack.Screen name="Info" component={Info}
          options={{ title: 'Informações do Condomínio', headerTitleStyle: { fontFamily: 'Comic Sans MS'} }}></Stack.Screen>

        <Stack.Screen name="InfoAdm" component={InfoAdm}
          options={{ title: 'Informações do Condomínio', headerTitleStyle: { fontFamily: 'Comic Sans MS'} }}></Stack.Screen>
        
        <Stack.Screen name="Reservas" component={Reservas}
          options={{ title: 'Reservas', headerTitleStyle: { fontFamily: 'Comic Sans MS'} }}></Stack.Screen>


        {/* Segunda Página Caso Síndico */}
        <Stack.Screen name="Sindico" component={Sindico}
          options={{
            title: 'Síndico', headerTitleStyle: { fontFamily: 'Comic Sans MS'}, headerLeft: () => null, headerRight: () => (
              <TouchableOpacity
                style={styles.touch1}
                onPress={() => logOut()}
              >
                <Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Sair</Text>
              </TouchableOpacity>
            )
          }}></Stack.Screen>

        {/* Segunda Página Caso Morador */}
        <Stack.Screen name="Morador" component={Morador}
          options={{ title: 'Morador', headerTitleStyle: { fontFamily: 'Comic Sans MS'}, headerLeft: () => null, headerRight: () => (
            <TouchableOpacity
              style={styles.touch1}
              onPress={() => logOut()}
            >
              <Text style={{color: "white", fontFamily: "Comic Sans MS"}}>Sair</Text>
            </TouchableOpacity>
          ) }}></Stack.Screen>

        {/* Página Pagamento - Síndico e Morador */}
        <Stack.Screen name="Pagamento" component={Pagamento}
          options={{ title: 'Pagamento', headerTitleStyle: { fontFamily: 'Comic Sans MS'}}}></Stack.Screen>

        {/* Página Denúncias - Síndico e Morador */}
        <Stack.Screen name="Denuncias" component={Denuncias}
          options={{ title: 'Denúncias', headerTitleStyle: { fontFamily: 'Comic Sans MS'} }}></Stack.Screen>

        {/* Página Cadastro de Morador - Síndico */}
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{ title: 'Novo Morador', headerTitleStyle: { fontFamily: 'Comic Sans MS'} }}></Stack.Screen>
        
        {/* Página Agendamento - Síndico */}
        <Stack.Screen name="Agendamento" component={Agendamento}
          options={{ title: 'Agendamento', headerTitleStyle: { fontFamily: 'Comic Sans MS'} }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  touch1: {
    width: "75px",
    height: "35px",
    backgroundColor: "black",
    padding: "5px",
    borderRadius: "10px",
    marginRight: "15px",
    justifyContent: "center",
    alignItems: "center"
  },
});