import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.boxLogin}>
        <View style={styles.titleLogin}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.loginInputs}>
          <Text style={styles.loginText}>cpf</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#babab8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: "28px",
    fontWeight: "500",
  },
  boxLogin: {
    backgroundColor: 'white',
    width: '25%',
    marginTop: '50px',
    alignItems: 'center',
    borderRadius: '15px',
    padding: '10px',
  },
  // titleLogin: {
  //   backgroundColor: 'white',
  //   width: '25%',
  //   marginTop: '50px',
  //   // alignItems: 'center',
  //   borderRadius: '15px',
  //   padding: '10px',
  // },
  loginInputs: {
    marginTop: '10px',
    display: 'flex',
    alignContent: 'flex-start'
  }
});
