import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  async function verifyLogin() {
    const response = await axios.get("http://localhost:8080/morador");
    
    var data = response.data;
    var morador;

    for (let i = 0; i < data.length; i++) {
      if (data[i].email == email)
        if (data[i].cpf == cpf)
          morador = data[i];
    }

    if (morador.adm == true)
      goToSindico();

    else
      goToMorador();

    sessionStorage.setItem("morador", JSON.stringify(morador));
  }

  if (sessionStorage.length > 0) {
    try {
      var morador = JSON.parse(sessionStorage.getItem("morador"));
      if (morador.adm == true)
        goToSindico();

      else
        goToMorador();
    }
    catch (e) {
      alert("Login Inválido.");
    }
  }

  function goToSindico() {
    props.navigation.navigate("Sindico");
  }
  function goToMorador() {
    props.navigation.navigate("Morador");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGIN</Text>
      <View style={styles.form}>
        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            color: 'white',
            marginTop: '50px',
            fontFamily: 'Comic Sans MS'
          }}>
          Email:</Text>
        <TextInput
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
          onChangeText={text => setEmail(text)} />
        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            color: 'white',
            marginTop: '16px',
            fontFamily: 'Comic Sans MS'
          }}>
          CPF:</Text>
        <TextInput
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
          onChangeText={text => setCpf(text)} />
        <View style={styles.botao}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => verifyLogin()}
          >
            <Text style={{fontFamily: 'Comic Sans MS'}}>Login</Text>
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
    marginTop: '80px',
    fontFamily: 'Comic Sans MS'
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
