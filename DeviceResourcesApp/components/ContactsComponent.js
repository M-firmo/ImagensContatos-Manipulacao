// src/components/ContactsComponent.js

// Importa as bibliotecas necessárias
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';
import { FontAwesome } from '@expo/vector-icons';

// Componente funcional principal
const ContactsComponent = () => {
  // Estados para armazenar contatos e permissão
  const [contacts, setContacts] = useState([]);
  const [hasPermission, setHasPermission] = useState(false);

  // Função para solicitar permissão e carregar contatos
  const loadContacts = async () => {
    try {
      // Solicita permissão para acessar os contatos
      const { status } = await Contacts.requestPermissionsAsync();

      // Verifica se a permissão foi concedida
      if (status !== 'granted') {
        Alert.alert(
          'Permissão negada',
          'Precisamos da permissão para acessar seus contatos.'
        );
        return;
      }

      setHasPermission(true);

      // Busca os contatos do dispositivo
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
      });

      // Verifica se existem contatos
      if (data.length > 0) {
        setContacts(data); // Armazena os contatos no estado
      } else {
        Alert.alert('Sem contatos', 'Nenhum contato encontrado no dispositivo.');
      }
    } catch (error) {
      // Trata erros ao carregar os contatos
      Alert.alert('Erro', 'Ocorreu um erro ao carregar os contatos.');
      console.error(error);
    }
  };

  // Executa a função de carregar contatos quando o componente é montado
  useEffect(() => {
    loadContacts();
  }, []);

  // Função para renderizar cada item da lista de contatos
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      {/* Nome do contato */}
      <Text style={styles.contactName}>
        {item.firstName} {item.lastName}
      </Text>

      {/* Lista de números de telefone do contato */}
      {item.phoneNumbers && item.phoneNumbers.map((phone, index) => (
        <View key={`phone-${index}`} style={styles.contactDetailRow}>
          <FontAwesome name="phone" size={14} style={styles.icon} />
          <Text style={styles.contactDetail}>{phone.number}</Text>
        </View>
      ))}

      {/* Lista de emails do contato */}
      {item.emails && item.emails.map((email, index) => (
        <View key={`email-${index}`} style={styles.contactDetailRow}>
          <FontAwesome name="envelope" size={14} style={styles.icon} />
          <Text style={styles.contactDetail}>{email.email}</Text>
        </View>
      ))}
    </View>
  );

  return (
    // Container principal do componente
    <View style={styles.container}>
      {/* Botão para recarregar os contatos */}
      <Button title="Recarregar Contatos" onPress={loadContacts} />

      {/* Lista de contatos usando FlatList */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        scrollEnabled={false}
      />
    </View>
  );
};

// Define os estilos utilizados no componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Espaçamento interno
    backgroundColor: '#fff', // Cor de fundo branca
  },
  list: {
    marginTop: 20, // Espaçamento acima da lista
  },
  contactItem: {
    padding: 15, // Espaçamento interno
    borderBottomWidth: 1, // Linha de separação inferior
    borderColor: '#ccc', // Cor da linha de separação
  },
  contactName: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
  },
  contactDetailRow: {
    flexDirection: 'row', // Alinha ícone e texto na horizontal
    alignItems: 'center', // Alinha verticalmente ao centro
    gap: 8, // Espaçamento ícone
  },
  icon: {
    marginRight: 10, // Espaçamento entre o ícone e o texto
  },
  contactDetail: {
    fontSize: 14, // Tamanho da fonte
    color: '#555', // Cor do texto
    marginTop: 5, // Espaçamento acima do texto
  },
});

// Exporta o componente para uso externo
export default ContactsComponent;
