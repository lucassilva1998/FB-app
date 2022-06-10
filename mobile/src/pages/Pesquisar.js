import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import logo from '../assets/logo.png';
import icon from '../assets/logoNova.png';
import icone from '../assets/iconeFB.jpeg';
import Firebase from '../services/firebaseConnection';

export default function Pesquisar({ navigation }) {
    //const id = navigation.getParam('id');
    const [cliente, setCliente] = useState('');

    function toHome() {
        navigation.navigate('Home');
    }

    function toClientes() {
        navigation.navigate('PesquisarCliente');
    }

    function toProdutos() {
        navigation.navigate('PesquisarProduto');
    }

    function toOrçamentos() {
        navigation.navigate('PesquisarOrçamento');
    }

    return (
        <View style={styles.container}>
        <Image style={styles.logo} source={icon} />
          <Text style={styles.titulo}>Pesquisar</Text>

          <TouchableOpacity onPress={toHome} style={styles.button}>
              <Text style={styles.buttonText}>Clientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={toClientes}>
            <Text style={styles.buttonText}>Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={toProdutos}>
            <Text style={styles.buttonText}>Orçamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={toOrçamentos}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <Image style={styles.logo} source={logo} />

        </View>
      );
  }
  
  const styles = StyleSheet.create({ 
      container:{
          flex:1,
          width:'90%',
          alignSelf:'center'
      },
  
      titulo: {
          color: '#777',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 10,
          alignSelf: 'center',
          marginTop: 50
      },
  
      texto: {
          color: '#777',
          fontSize: 16,
          marginTop: 20,
          alignSelf: 'flex-start',
          marginLeft: 15,
          marginBottom: 5
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
        marginTop: 40,
        width: 300
        
    },
      buttonText: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
          alignSelf: 'center',
      },

      logo: {
        height: 50,
        resizeMode: 'contain',
    },
    icone: {
        height: 150,
        resizeMode: 'contain',
    },
  })