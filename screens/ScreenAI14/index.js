import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Screen = () => {
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(10);

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setTotalPrice(totalPrice - 10);
    }
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
    setTotalPrice(totalPrice + 10);
  };

  const handleFinish = () => {// Handle finish logic here
  };

  const handleCancel = () => {// Handle cancel logic here
  };

  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.name}>Menu Item Name</Text>
      <Text style={styles.description}>Menu Item Description</Text>
      <Text style={styles.price}>$10</Text>
      <View style={styles.amountContainer}>
        <TouchableOpacity onPress={handleDecrease} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity onPress={handleIncrease} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
      <TouchableOpacity onPress={handleFinish} style={styles.finishButton}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  finishButton: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  cancelButton: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Screen;