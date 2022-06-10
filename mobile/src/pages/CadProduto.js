import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import logo from '../assets/logo.png';
import Firebase from '../services/firebaseConnection';
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";

export default function CadProduto({ navigation }) {
    //const id = navigation.getParam('id');
    const [nome, setNome] = useState('');
    const [modelo, setModelo] = useState('');
    const [quantidadeMin, setQuantidadeMin] = useState('');
    const [unit, setUnit] = useState('');

    const db = getFirestore(Firebase);

    const criaProduto = async () => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "produtos", nome), {
        nome_produto: nome,
        modelo: modelo,
        quantidade_mínima: quantidadeMin,
        valor_unitário: unit
      });
      setNome('');
      setModelo('');
      setQuantidadeMin('');
      setUnit('');
    }

    function toHome() {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Cadastro de Produtos</Text>

            <Text style={styles.texto}>Nome</Text>
              <TextInput 
              style={styles.input}
              placeholder="Digite o nome do produto"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={nome}
              onChangeText={setNome}
              />

            <Text style={styles.texto}>Modelo</Text>
              <TextInput 
              style={styles.input}
              placeholder="Digite o modelo"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={modelo}
              onChangeText={setModelo}
              />

            <Text style={styles.texto}>Quantidade Mínima</Text>
              <TextInput 
              style={styles.input}
              placeholder="Digite a quantidade mínima"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={quantidadeMin}
              onChangeText={setQuantidadeMin}
              />

            <Text style={styles.texto}>Valor Unitário</Text>
              <TextInput 
              style={styles.input}
              placeholder="Digite o valor unitário"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={unit}
              onChangeText={setUnit}
              />

          <TouchableOpacity onPress={criaProduto} style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={toHome}>
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
          alignSelf:'center',
          
      },
  
      titulo: {
          color: '#777',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 10,
          alignSelf: 'center',
          marginTop: 70
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
          marginBottom: 20,
          borderRadius: 7
      },
  
      button: {
        height: 42,
        backgroundColor: '#EA5C1F',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 7,
        marginTop: 50,
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
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginTop:100
    },
  })