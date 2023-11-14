import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function infoBox(props) {
    return (
        <View style={styles.infoBox}>
            <Text style={{ color: 'white' }}> Oi </Text>
        </View>
    );
}

export default function Morador(props) {

    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Bem vindo, nome morador!</Text>
            </View>
            <View style={styles}>
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
    },
    title: {
        color: 'white',
        fontSize: '40px',
        fontWeight: '400',
        fontFamily: 'Comic Sans MS'
    },
    infoBox: {
        backgroundColor: 'white',

    }
});
