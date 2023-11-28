import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function SelectComponent(){
    const options = [
        { value: 'Churrasqueira', label: 'Churrasqueira' },
        { value: 'SalaoDeFestas', label: 'Salão de Festas' }
      ]
    
    const SelectComponent = () => {
        <Select closeMenuOnSelect={false}
        components={animatedComponents}
        options={options} />
    }
}

export default function Reservas(props) {
    //   const dbConnect = async () => {
    //     try {
    //       const response = await axios.post("http://localhost:8080/user", {
    //         "name": ":3",
    //         "age": 69,
    //         "password": "uwu"
    //       });

    //       console.log("Resposta da API", response);
    //     } catch (error) {
    //       console.error("Erro ao conectar", error);
    //     }
    //   }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Nova Reserva</Text>
            </View>
            <View style={styles.form}>
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
                />

                <Text
                    style={{
                        paddingHorizontal: '5px',
                        paddingVertical: '2px',
                        marginTop: '12px',
                        color: 'white',
                        fontFamily: 'Comic Sans MS'
                    }}>
                    Motivo Da Denúncia: (max. 240)</Text>
                <SelectComponent
                    style={styles.textAreaEmail}
                />

                <TouchableOpacity
                    style={styles.touch1}
                // onPress={() => dbConnect()}
                >
                    <Text style={{fontFamily: 'Comic Sans MS'}}>Enviar Denúncia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.touch2}
                    onPress={() => props.navigation.navigate("Login")}
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
        // backgroundColor: '#19181A',
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
    form: {
        alignItems: 'flex-start',
        marginTop: '80px'
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
