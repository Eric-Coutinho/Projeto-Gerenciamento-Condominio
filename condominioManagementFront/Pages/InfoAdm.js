import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const response = await axios.get("http://localhost:8080/morador");

export function ShowCards(props) {
    var data = response.data;
    console.log(data);

    async function deleteUser(id){
        await axios.delete("http://localhost:8080/morador/delete/" + id);
        window.location.reload(false);
        
    }

    return data.map((morador, index) => (
        <View key={index} style={styles.cardMoradores}>
            <View style={styles.infoBoxMorador}>
                <View style={styles.infoBoxMoradorTitle}>
                    <Text style={styles.moradorName}>{morador.name}</Text>
                </View>
                <View style={styles.moradorInfoAdm}>
                    <Text style={styles.moradorInfoText}>Apartamento {morador.numApto}</Text>
                    <Text style={styles.moradorInfoText}>Bloco {morador.numBloco}</Text>
                    <Text style={styles.moradorInfoText}>Email: {morador.email}</Text>
                    <Text style={styles.moradorInfoText}>Cpf: {morador.cpf}</Text>
                </View>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteUser(morador.id)}
                >
                    <Text style={styles.textDelete}>Deletar</Text>
                </TouchableOpacity>
            </View>
        </View>
    ));
}

export default function InfoAdm(props) {
    var session = JSON.parse(sessionStorage.getItem("morador"));

    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Moradores</Text>
            </View>

            <View style={styles.cards}>
                <ShowCards />
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
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
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
    cardList: {
        display: 'flex',
    },
    textDelete: {
        color: 'white',
        fontFamily: 'Comic Sans MS',
        fontWeight: '500',
        fontSize: '15px',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: '10px',
        marginTop: '8px',
        borderRadius: '10px',
    }

});
