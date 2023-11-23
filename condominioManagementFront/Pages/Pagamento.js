import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg'

var session = JSON.parse(sessionStorage.getItem("morador"));

export default function Pagamento(props) {

    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Bem vindo, { session.name }!</Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.infoText}>Escaneie o QRCode para gerar o boleto</Text>
                <View style={styles.qrcode}>
                    <QRCode
                        value={(Math.random() * 9999999999999999).toString()}
                        size={250}
                    />
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
    infoBox: {
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '15px',
        marginHorizontal: '15px',
        marginVertical: '15px',
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        color: 'black',
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Comic Sans MS',
        marginLeft: '5px',
    },
    qrcode: {
        marginTop: '10px'
    }

});
