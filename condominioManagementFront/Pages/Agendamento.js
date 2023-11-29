import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

import Modal from "react-native-modal";
import { DatePickerModal } from 'react-native-paper-dates';
import { enGB, registerTranslation } from 'react-native-paper-dates';
import React, { useState } from 'react';
registerTranslation('en-GB', enGB)

export default function Agendamento(props) {
    var session = JSON.parse(sessionStorage.getItem("morador"));

    const [date, setDate] = React.useState(dateMinus(new Date()));
    const [open, setOpen] = React.useState(false);

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    function dateMinus(funcDate) {
        var newDate = new Date(funcDate.setDate(funcDate.getDate() - 1));
        return newDate;
    }

    function dateToString(funcDate) {
        var stringDate = funcDate.toISOString().substring(0, 10);
        return stringDate;
    }

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDate(dateMinus(params.date));
        },
        [setOpen, setDate]
    );

    async function makeReserva(funcDate) {
        const searchDate = await axios.get("http://localhost:8080/reserva/tipo/Reserva/date/" + dateToString(funcDate));

        if (searchDate.data.length == 0) {
            await axios.post("http://localhost:8080/reserva", {
                'cpf': session.cpf,
                'date': dateToString(funcDate),
                'tipo': 'Agendamento'
            });
            window.location.reload(false);
        }
        else
            handleModal()
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Agendar Atividade</Text>
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
                    Reservar: </Text>
                <select style={styles.textAreaEmail} id="optionSelect">
                    <option value="Churrasqueira" style={{ fontFamily: "Comic Sans MS" }}>Coleta de Lixo</option>
                    <option value="SalaoDeFestas" style={{ fontFamily: "Comic Sans MS" }}>Assembléia</option>
                    <option value="SalaoDeFestas" style={{ fontFamily: "Comic Sans MS" }}>Eleição</option>
                </select>

                <Text
                    style={{
                        paddingHorizontal: '5px',
                        paddingVertical: '2px',
                        marginTop: '12px',
                        color: 'white',
                        fontFamily: 'Comic Sans MS'
                    }}>
                    Data:</Text>

                <View style={styles.dateContainer}>
                    <TouchableOpacity style={styles.dateButton}
                        onPress={() => setOpen(true)}>
                        <Text>{date.toISOString().substring(0, 10)}</Text>
                    </TouchableOpacity>
                </View>

                <DatePickerModal
                    validRange={{ startDate: new Date() }}
                    locale="en-GB"
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                />

                <Modal isVisible={isModalVisible}>
                    <View style={styles.modal}>
                        <View style={styles.modalBox}>
                            <Text style={{ marginBottom: "10px", fontSize: "18px" }}>Já existe uma reserva para esse dia.</Text>
                            <Button color="#242526" title="Ok" onPress={handleModal} />
                        </View>
                    </View>
                </Modal>


                <TouchableOpacity
                    style={styles.touch1}
                    onPress={() => makeReserva(date)}
                >
                    <Text style={{ fontFamily: 'Comic Sans MS' }}>Confirmar Reserva</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.touch2}
                    onPress={() => window.location.reload(false)}
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
    textAreaEmail: {
        backgroundColor: 'white',
        color: 'black',
        padding: '5px',
        width: '300px',
        borderRadius: '5px',
        fontFamily: 'Comic Sans MS'
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
    dateContainer: {
        width: '300px',
    },
    dateButton: {
        innerHeight: '40px',
        backgroundColor: 'white',
        padding: "10px",
        borderRadius: "5px",
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
