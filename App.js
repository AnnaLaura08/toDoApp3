import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, seja bem-vindo!</Text>
      <TextInput 
        placeholder="Digite algo..." 
        style={styles.TextInput} 
        value={tarefaAtual}
        onChangeText={setTarefaAtual}
      />

      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        setListaTarefas([...listaTarefas, tarefaAtual]);
        setTarefaAtual('');
      }}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <ScrollView style={styles.listaTarefas}>
        {listaTarefas.map((tarefa, index) => (
          <Text key={index}>{tarefa}</Text>
        ))}
      </ScrollView>

    <Text style={styles.text}>{count}</Text>
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
    backgroundColor: '#F8F9FA',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginVertical: 12,
    textAlign: 'center',
  },
  TextInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  listaTarefas: {
    width: '100%',
    maxHeight: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cor1: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#EF4444',
    marginVertical: 4,
  },
  cor2: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#10B981',
    marginVertical: 4,
  },
  cor3: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    marginVertical: 4,
  },
});