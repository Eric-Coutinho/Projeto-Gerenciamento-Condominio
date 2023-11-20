import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login(props) {

    function goToCadastro(){
        props.navigation.navigate("Cadastro")
      }
    function goToSindico(){
        props.navigation.navigate("Sindico")
      }
    function goToMorador(){
        props.navigation.navigate("Morador")
      }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> LOGIN </Text>
      <View style={styles.form}>
        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            color: 'white',
            marginTop: '50px'
          }}>
          Email:</Text>
        <TextInput
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
          
        />
        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            color: 'white',
            marginTop: '16px'
          }}>
          CPF:</Text>
        <TextInput
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
        />
        <View style={styles.botao}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToCadastro()}
          >
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToSindico()}
          >
            <Text>Síndico</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToMorador()}
          >
            <Text>Morador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262728',
    alignItems: 'center',
  },
  titulo: {
    fontSize: '60px',
    fontWeight: '500',
    color: 'white',
    marginTop: '80px'
  },
  textAreaEmail: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '300px',
    borderRadius: '5px',
  },
  touch1: {
    width: "300px",
    backgroundColor: "white",
    padding: "13px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "20px"
  },
  touch2: {
    width: "300px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "10px"
  },
  botao: {
    marginTop: '80px'
  }
});
