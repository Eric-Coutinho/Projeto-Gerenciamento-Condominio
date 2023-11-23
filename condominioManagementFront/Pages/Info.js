import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg'

var session = JSON.parse(sessionStorage.getItem("morador"));

export default function Info(props) {

    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Blocos</Text>
            </View>
            <View style={styles.cards}>
                <View style={styles.infoBoxNum}>
                    <Text style={styles.blocoNum}>Bloco 1</Text>
                </View>
                <View style={styles.cardMoradores}>
                    <View style={styles.infoBoxMorador}>
                        <View style={styles.infoBoxMoradorTitle}>
                            <Text style={styles.moradorName}>Nome Morador 1</Text>
                        </View>
                        <View style={styles.moradorInfo}>
                            <Text style={styles.moradorInfoText}>Apartamento 1</Text>
                            <Text style={styles.moradorInfoText}>Bloco 1</Text>
                            <Text style={styles.moradorInfoText}>morador1@hotmail.com</Text>
                            <Text style={styles.moradorInfoText}>0987603640 (caso adm)</Text>
                        </View>
                    </View>
                    <View style={styles.infoBoxMorador}>
                        <View style={styles.infoBoxMoradorTitle}>
                            <Text style={styles.moradorName}>Nome Morador 2</Text>
                        </View>
                        <View style={styles.moradorInfo}>
                            <Text style={styles.moradorInfoText}>Apartamento 2</Text>
                            <Text style={styles.moradorInfoText}>Bloco 1</Text>
                            <Text style={styles.moradorInfoText}>morador2@hotmail.com</Text>
                            <Text style={styles.moradorInfoText}>0987603640 (caso adm)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoBoxNum}>
                    <Text style={styles.blocoNum}>Bloco 2</Text>
                </View>
                <View style={styles.cardMoradores}>
                    <View style={styles.infoBoxMorador}>
                        <View style={styles.infoBoxMoradorTitle}>
                            <Text style={styles.moradorName}>Nome Morador 3</Text>
                        </View>
                        <View style={styles.moradorInfo}>
                            <Text style={styles.moradorInfoText}>Apartamento 1</Text>
                            <Text style={styles.moradorInfoText}>Bloco 2</Text>
                            <Text style={styles.moradorInfoText}>morador3@hotmail.com</Text>
                            <Text style={styles.moradorInfoText}>0987603640 (caso adm)</Text>
                        </View>
                    </View>
                    <View style={styles.infoBoxMorador}>
                        <View style={styles.infoBoxMoradorTitle}>
                            <Text style={styles.moradorName}>Nome Morador 4</Text>
                        </View>
                        <View style={styles.moradorInfo}>
                            <Text style={styles.moradorInfoText}>Apartamento 2</Text>
                            <Text style={styles.moradorInfoText}>Bloco 2</Text>
                            <Text style={styles.moradorInfoText}>morador4@hotmail.com</Text>
                            <Text style={styles.moradorInfoText}>0987603640 (caso adm)</Text>
                        </View>
                    </View>
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
        fontSize: '50px',
        fontWeight: '400',
        fontFamily: 'Comic Sans MS'
    },
    cards: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start'
    },
    infoBoxNum: {
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '15px',
        marginHorizontal: '15px',
        marginVertical: '15px',
        width: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardMoradores: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoBoxMorador: {
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '15px',
        marginHorizontal: '15px',
        marginVertical: '15px',
        width: '15em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBoxMoradorTitle: {
        backgroundColor: 'white',
        width: '100%',
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
    blocoNum: {
        color: 'black',
        fontFamily: 'Comic Sans MS',
        fontSize: '20px',
        fontWeight: '500'
    },
    moradorName: {
        color: 'black',
        fontFamily: 'Comic Sans MS',
        fontSize: '18px',
        fontWeight: '500'
    },
    moradorInfo: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    moradorInfoText: {
        color: 'black',
        fontFamily: 'Comic Sans MS',
        fontSize: '16px',
        fontWeight: '500',
        paddingHorizontal: '0.5em',
    },

});
