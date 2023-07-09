import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CreditCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handleCreate = () => {// Handle create button press
  };

  const handleEdit = () => {// Handle edit button press
  };

  return <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Card Number" value={cardNumber} onChangeText={setCardNumber} />
      <TextInput style={styles.input} placeholder="CVV Number" value={cvvNumber} onChangeText={setCvvNumber} />
      <TextInput style={styles.input} placeholder="Cardholder's Name" value={cardholderName} onChangeText={setCardholderName} />
      <Button title="Create" onPress={handleCreate} />
      <Button title="Edit" onPress={handleEdit} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8
  }
});
export default CreditCardScreen;