import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

var session = JSON.parse(sessionStorage.getItem("morador"));

export async function ShowCards(props) {
    const response = await axios.get("http://localhost:8080/morador");
    var data = response.data;

    console.log(data);

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (data[j].numBloco == i) {
                <View style={styles.cards}>
                    <View style={styles.infoBoxNum}>
                        <Text style={styles.blocoNum}>Bloco {i}</Text>
                    </View>

                    <View style={styles.cardMoradores}>
                        <View style={styles.infoBoxMorador}>
                            <View style={styles.infoBoxMoradorTitle}>
                                <Text style={styles.moradorName}>{data[j].name}</Text>
                            </View>
                            <View style={styles.moradorInfoAdm}>
                                <Text style={styles.moradorInfoText}>{data[j].numApto}</Text>
                                <Text style={styles.moradorInfoText}>{data[j].numBloco}</Text>
                                <Text style={styles.moradorInfoText}>{data[j].email}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }
        }
    }
}

export default function Info(props) {

    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Blocos</Text>
            </View>

            <ShowCards></ShowCards>

            {/* <View style={styles.cards}>
                <View style={styles.infoBoxNum}>
                    <Text style={styles.blocoNum}>Bloco 1</Text>
                </View>

                <View style={styles.cardMoradores}>
                    <View style={styles.infoBoxMorador}>
                        <View style={styles.infoBoxMoradorTitle}>
                            <Text style={styles.moradorName}>Nome Morador 1</Text>
                        </View>
                        <View style={styles.moradorInfoAdm}>
                            <Text style={styles.moradorInfoText}>Apartamento 1</Text>
                            <Text style={styles.moradorInfoText}>Bloco 1</Text>
                            <Text style={styles.moradorInfoText}>morador1@hotmail.com</Text>
                            <Text style={styles.moradorInfoText}>0987603640 (caso adm)</Text>
                        </View>
                    </View>
                </View>
            </View> */}
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
        justifyContent: 'flex-start',
        alignItems: 'center'
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
        justifyContent: 'center',
    },
    infoBoxMorador: {
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '15px',
        marginHorizontal: '15px',
        marginVertical: '15px',
        width: '15em',
        display: 'flex',
        justifyContent: 'flex-start',
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
    moradorInfoAdm: {
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
