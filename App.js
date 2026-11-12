import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';


export default function App() {
  const [count, setCount] = useState(0);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);


  useEffect(() => {
    resgatarDadosLocal();
  }, []);


  const salvarDadosLocal = async (novaLista) => {
    try {
      const listaString = JSON.stringify(novaLista);
      await AsyncStorage.setItem('minhas_tarefas', listaString);
      console.log('Salvo com sucesso:', listaString);
    } catch (error) {
      console.log('Erro ao salvar dados localmente:', error);
    }
  };


  const resgatarDadosLocal = async () => {
    try {
      const textoLido = await AsyncStorage.getItem('minhas_tarefas');
      if (textoLido !== null) {
        const listaRecuperada = JSON.parse(textoLido);
        setListaTarefas(listaRecuperada);
        console.log('Carregado com sucesso:', listaRecuperada);
      }
    } catch (error) {
      console.log('Erro ao resgatar dados localmente:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bom dia!</Text>


      <View style={styles.BtContainer}>
        <TextInput
          placeholder="Digite uma tarefa"
          style={styles.textInput}
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
        />


        <TouchableOpacity
          style={styles.bt}
          onPress={() => {
            const novaLista = [...listaTarefas, tarefaAtual];
            setListaTarefas(novaLista);
            setTarefaAtual('');
            salvarDadosLocal(novaLista);
          }}
        >
          <Text style={styles.btText}>+</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.bt} onPress={() => setCount(count + 1)}>
          <Text style={styles.btText}>{count}</Text>
        </TouchableOpacity>


        <ScrollView style={styles.listaTarefas}>
          {listaTarefas.map((tarefa, index) => (
            <Text key={index} style={styles.itemTexto}>• {tarefa}</Text>
          ))}
        </ScrollView>


        <TouchableOpacity
          style={styles.bt1}
          onPress={() => {
            resgatarDadosLocal();
          }}
        >
          <Text style={styles.btText}>Carregar Banco</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.cor1}></View>
      <View style={styles.cor2}></View>
      <View style={styles.cor3}></View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 10,
  },
  BtContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  textInput: {
    flex: 1,
    minWidth: 150,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#0F172A',
  },
  bt: {
    width: 48,
    height: 48,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  bt1: {
    width: '100%',
    height: 48,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 8,
  },
  btText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  listaTarefas: {
    width: '100%',
    maxHeight: 150,
    marginTop: 15,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  itemTexto: {
    fontSize: 16,
    color: '#1E293B',
    paddingVertical: 4,
  },
  cor1: {
    backgroundColor: '#EF4444',
    width: 80,
    height: 80,
    borderRadius: 16,
    margin: 6,
  },
  cor2: {
    backgroundColor: '#10B981',
    width: 80,
    height: 80,
    borderRadius: 16,
    margin: 6,
  },
  cor3: {
    backgroundColor: '#3B82F6',
    width: 80,
    height: 80,
    borderRadius: 16,
    margin: 6,
  },
});