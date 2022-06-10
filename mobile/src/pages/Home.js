import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import api from '../services/api';
import Firebase from '../services/firebaseConnection';

import logo from '../assets/logoNova.png';

export default function Home({ navigation }) {

    function toCadCliente() {
        navigation.navigate('CadCliente');
    }

    function toCadProduto() {
        navigation.navigate('CadProduto');
    }

    function toOrçamento() {
        navigation.navigate('Orçamento');
    }

    function toPesquisar() {
        navigation.navigate('Pesquisar');
    }

    return (

    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
        <Image style={{height: 100, width: 350}} source={logo} />

        <TouchableOpacity onPress={toCadCliente} style={styles.button1}>
            <Text style={styles.buttonText}>Cadastrar Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toCadProduto} style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar Produto</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={toOrçamento} style={styles.button}>
            <Text style={styles.buttonText}>Criar Orçamento</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toPesquisar} style={styles.button}>
            <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal:30,
        marginTop:30,
    },

    input: {
        borderWidth:1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },

    button: {
        height: 42,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        borderBottomColor:"#888",
        borderWidth: 1,
        marginTop: 30,
        width: 250
        
    },

    button1: {
        height: 42,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        borderBottomColor:"#888",
        borderWidth: 1,
        marginTop: 50,
        width: 250
        
    },

    buttonText: {
        color: '#777',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 5
    }
});