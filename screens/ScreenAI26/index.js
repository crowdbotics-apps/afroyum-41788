import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HistoryScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>History of all payments and invoices</Text>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Specific payment/invoice</Text>
        <Text style={styles.paymentInfo}>Payer name: John Doe</Text>
        <Text style={styles.paymentInfo}>Payment date/time: 01/01/2022 10:00 AM</Text>
        <Text style={styles.paymentInfo}>Amount paid: $100</Text>
        <Button title="Download receipt" onPress={() => {}} />
        <Button title="Download full report" onPress={() => {}} />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateTitle}>Choose date (from/to)</Text>
        <Button title="Download" onPress={() => {}} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  paymentContainer: {
    marginBottom: 16
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  paymentInfo: {
    fontSize: 16,
    marginBottom: 4
  },
  dateContainer: {
    marginBottom: 16
  },
  dateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  }
});
export default HistoryScreen;