// Importa as bibliotecas necessárias
import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

// Importa os componentes criados no aplicativo
import ImagePickerComponent from './components/ImagePickerComponent';
import ContactsComponent from './components/ContactsComponent';

// Componente principal do aplicativo
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Informações sobre o aplicativo */}
        <Text style={styles.title}>Acesso aos Recursos do Dispositivo</Text>

        {/* Componente de seleção de imagem da galeria */}
        <ImagePickerComponent />

        {/* Componente de contatos do dispositivo */}
        <ContactsComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

// Define os estilos utilizados no aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#f5f5f5', // Cor de fundo cinza claro
    paddingTop: 50, // Espaçamento superior
  },
  title: {
    fontSize: 22, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
    textAlign: 'center', // Alinhamento centralizado
    marginBottom: 20, // Espaçamento inferior
  },
});
