import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactItem({ name, phone }) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
  },
  phone: {
    fontSize: 15,
    color: '#607D8B',
    marginTop: 4,
  },
});
