import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';

export default function ContactList() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Ana Torres', phone: '0987654321' },
    { id: '2', name: 'Carlos Mena', phone: '0991234567' },
    { id: '3', name: 'Jenifer Caicedo', phone: '0965432187' },
  ]);

  const addContact = () => {
    const newContact = {
      id: Date.now().toString(),
      name: 'Nuevo Contacto',
      phone: '0912345678',
    };

    setContacts([...contacts, newContact]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contactos</Text>
      <Text style={styles.subtitle}>Contactos registrados en la aplicación</Text>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem name={item.name} phone={item.phone} />
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Agregar contacto"
          color="#2E7D32"
          onPress={addContact}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#EAF7EA',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1B5E20',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 14,
    borderRadius: 14,
    overflow: 'hidden',
  },
});
