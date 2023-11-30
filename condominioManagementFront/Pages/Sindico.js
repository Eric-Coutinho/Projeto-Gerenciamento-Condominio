import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Modal from "react-native-modal";
import React from 'react';

export default function Síndico(props) {
  var session = JSON.parse(sessionStorage.getItem("morador"));
  function goToDenuncias() {
    props.navigation.navigate("Denuncias")
  }
  function goToCadastro() {
    props.navigation.navigate("Cadastro")
  }
  function goToPagamento() {
    props.navigation.navigate("Pagamento")
  }
  function goToInfoAdm() {
    props.navigation.navigate("InfoAdm")
  }
  function goToReservas() {
    props.navigation.navigate("Reservas")
  }
  function goToAgendamento() {
    props.navigation.navigate("Agendamento")
  }

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Bem vindo, {session.name}!</Text>
      </View>

      <View style={styles.cards}>
        <View style={styles.infoBox}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToInfoAdm()}
          >
            <Text style={styles.infoText}>Informações do Condomínio</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => handleModal()}
          >
            <Text style={styles.infoText}>Informações das Garagens</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToCadastro()}
          >
            <Text style={styles.infoTextReserva}>Cadastrar Morador</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToDenuncias()}
          >
            <Text style={styles.infoText2}>Registrar Denúncias</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox2}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToPagamento()}
          >
            <Text style={styles.infoText3}>Gerar e Pagar Boletos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox2}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => handleModal()}
          >
            <Text style={styles.infoText3}>Registros de Segurança</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox2}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToAgendamento()}
          >
            <Text style={styles.infoText4}>Agendamentos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox2}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToReservas()}
          >
            <Text style={styles.infoText3}>Reservas</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modal}>
            <View style={styles.modalBox}>
              <Text style={{ marginBottom: "10px", fontSize: "18px" }}>Página em Desenvolvimento.</Text>
              <Button color="#242526" title="Ok" onPress={handleModal} />
            </View>
          </View>
        </Modal>
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
  viewTitle: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '15px',
  },
  title: {
    color: 'white',
    fontSize: '75px',
    fontWeight: '400',
    fontFamily: 'Comic Sans MS'
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px',
    flexDirection: "row",
    flexWrap: 'wrap',
    maxWidth: '40%',
  },
  infoBox: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '15px',
    marginHorizontal: '15px',
    marginVertical: '15px',
    width: '170px',
    display: 'flex',
    justifyContent: 'center',
  },
  infoBox2: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '15px',
    marginHorizontal: '15px',
    marginVertical: '15px',
    width: '170px',
    display: 'flex',
    justifyContent: 'center',
  },
  touch1: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoText: {
    color: 'black',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  infoTextReserva: {
    color: 'black',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  infoText2: {
    color: 'black',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Comic Sans MS',
    textAlign: 'center'
  },
  infoText3: {
    color: 'black',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Comic Sans MS',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  infoText4: {
    color: 'black',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'Comic Sans MS',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  modal: {
    flex: 1,
    alignItems: "center"
  },
  modalBox: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px"
  }
});
