import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Morador(props) {
    function goToDenuncias() {
        props.navigation.navigate("Denuncias")
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Bem vindo, nome morador!</Text>
            </View>

            <View style={styles.cards}>
                <View style={styles.infoBox}>
                    <TouchableOpacity
                        style={styles.touch1}
                    >
                        <Text style={styles.infoText}>Informações do Condomínio</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoBox}>
                    <TouchableOpacity
                        style={styles.touch1}
                    >
                        <Text style={styles.infoText}>Informações das Garagens</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoBox}>
                    <TouchableOpacity
                        style={styles.touch1}
                    >
                        <Text style={styles.infoText}>Reserva de Churrasqueira</Text>
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
                    >
                        <Text style={styles.infoText3}>Gerar e Pagar Boletos</Text>
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
    viewTitle: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '15px'
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
        marginTop: '140px',
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
        marginLeft: '5px',
    },
    infoText2: {
        color: 'black',
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Comic Sans MS',
        marginLeft: '24px'
    },
    infoText3: {
        color: 'black',
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Comic Sans MS',
        display: 'flex',
        justifyContent: 'center',
    },
});
