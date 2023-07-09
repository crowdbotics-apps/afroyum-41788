import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CompletedOrderScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.message}>The order is completed</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default CompletedOrderScreen;