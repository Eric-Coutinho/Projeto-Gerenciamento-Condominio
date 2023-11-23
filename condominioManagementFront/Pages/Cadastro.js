import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

export default function Cadastro(props) {
  const [nome, setNome] = useState("");
  const [numApto, setnumApto] = useState("");
  const [numBloco, setnumBloco] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const dbConnect = async () => {
    try {
      const response = await axios.post("http://localhost:8080/morador", {
        "name": nome,
        "numApto": numApto,
        "numBloco": numBloco,
        "email": email,
        "cpf" : cpf,
        "adm": false
      });

      console.log("Resposta da API", response);
    } catch (error) {
      console.error("Erro ao conectar", error);
    }
  }

return (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.form}>
      <Text
        style={{
          paddingHorizontal: '5px',
          paddingVertical: '2px',
          color: 'white',
          fontFamily: 'Comic Sans MS'
        }}>
        Nome:</Text>
      <TextInput
        singleline
        maxLength={45}
        style={styles.textArea}
        onChangeText={text => setNome(text)}
      />
      <View style={styles.Segunda}>
        <View style={styles.formata}>
          <Text
            style={{
              paddingHorizontal: '5px',
              paddingVertical: '2px',
              color: 'white',
              fontFamily: 'Comic Sans MS'
            }}>
            Número Ap:</Text>
          <TextInput
            singleline
            maxLength={45}
            style={styles.textAreaIdade}
            onChangeText={text => setnumApto(text)}
          />
        </View>

        <View style={styles.formata}>
          <Text
            style={{
              paddingHorizontal: '5px',
              paddingVertical: '2px',
              marginLeft: '30px',
              color: 'white',
              fontFamily: 'Comic Sans MS'
            }}>
            Bloco:</Text>
          <TextInput
            singleline
            maxLength={45}
            style={styles.textAreaSexo}
            onChangeText={text => setnumBloco(text)}
          />
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: '5px',
          paddingVertical: '2px',
          marginTop: '12px',
          color: 'white',
          fontFamily: 'Comic Sans MS'
        }}>
        Email:</Text>
      <TextInput
        singleline
        maxLength={45}
        style={styles.textAreaEmail}
        onChangeText={text => setEmail(text)}
      />

      <Text
        style={{
          paddingHorizontal: '5px',
          paddingVertical: '2px',
          marginTop: '12px',
          color: 'white',
          fontFamily: 'Comic Sans MS'
        }}>
        CPF:</Text>
      <TextInput
        singleline
        maxLength={45}
        style={styles.textAreaEmail}
        onChangeText={text => setCpf(text)}
      />

      <TouchableOpacity
        style={styles.touch1}
        onPress={() => dbConnect()}
      >
        <Text style={{fontFamily: 'Comic Sans MS'}}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch2}
        onPress={() => props.navigation.navigate("Sindico")}
      >
        <Text style={{
          color: 'white',
          fontFamily: 'Comic Sans MS'
        }}>Cancelar</Text>
      </TouchableOpacity>

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
  form: {
    alignItems: 'flex-start',
    marginTop: '140px'
  },
  textArea: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '300px',
    borderRadius: '5px',
  },
  Segunda: {
    display: 'flex',
    flexDirection: 'row'
  },
  formata: {
    marginVertical: '5px',
    alignItems: 'flex-start'
  },
  textAreaIdade: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '120px',
    borderRadius: '5px',
  },
  textAreaSexo: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '150px',
    borderRadius: '5px',
    marginLeft: '30px'
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
    marginTop: "48px"
  },
  touch2: {
    width: "300px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "10px"
  },
});
