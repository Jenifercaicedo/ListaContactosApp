import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContactList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF7EA',
  },
});