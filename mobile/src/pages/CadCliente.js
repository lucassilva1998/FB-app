import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';
import { StyleSheet, Button, Image, SafeAreaView, Platform, Alert, TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';

import logo from '../assets/logo.png';
import Firebase from '../services/firebaseConnection';
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";

export default function CadCliente({ navigation }) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    //const clientes = collection(db, 'clientes');
    const db = getFirestore(Firebase);

    const criaCliente = async () => {
        await setDoc(doc(db, "clientes", nome), {
            nome_cliente: nome,
            cpf_cnpj: cpf,
            email: email,
            telefone: telefone
        });
        setNome('');
        setCpf('');
        setEmail('');
        setTelefone('');
    }
  


    function toHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={{flex: 1,marginTop: 70}}>

        <KeyboardAvoidingView enabled behavior={Platform.OS == "ios" ? "padding" : "height"} style={{alignItems: 'center'}}>

            <Text style={styles.titulo}>Cadastrar Cliente</Text>
            
            <View style={styles.container}>

            <Text style={styles.texto}>Nome</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite o nome"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={nome}
            onChangeText={setNome}
            />

            <Text style={styles.texto}>CNPJ/CPF</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite o CNPJ/CPF"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={cpf}
            onChangeText={setCpf}
            />

            <Text style={styles.texto}>E-mail</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite o e-mail"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            />

            <Text style={styles.texto}>Telefone</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite o telefone"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={telefone}
            onChangeText={setTelefone}
            />

            </View>

        </KeyboardAvoidingView>

        <TouchableOpacity  style={styles.button} onPress={criaCliente}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={toHome}>
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <Image style={styles.logo} source={logo} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      width: '90%',
      alignContent: 'center',
      alignSelf:'center',
    },

    logo: {
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginTop: 50
    },

    titulo: {
        color: '#777',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        alignSelf: 'center'
    },

    texto: {
        color: '#777',
        fontSize: 16,
        marginTop: 20,
        alignSelf: 'flex-start',
        marginLeft: 15
    },

    input: {
        borderWidth:1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#777',
        height: 44,
        marginBottom: 10,
        borderRadius: 7
    },


    button: {
        height: 42,
        backgroundColor: '#EA5C1F',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 7,
        marginBottom: 10,
        marginTop: 40,
        width: 300
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
    },
});