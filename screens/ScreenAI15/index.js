import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.orderId}>Order ID: 123456</Text>
        <Text style={styles.time}>Time: 12:34 PM</Text>
        <View style={styles.menuItemsContainer}>
          <View style={styles.menuItem}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.menuItemImage} />
            <View style={styles.menuItemDetails}>
              <Text style={styles.menuItemName}>Menu Item 1</Text>
              <Text style={styles.menuItemAmount}>Amount: 2</Text>
              <Text style={styles.menuItemPrice}>Total Price: $10</Text>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.menuItemImage} />
            <View style={styles.menuItemDetails}>
              <Text style={styles.menuItemName}>Menu Item 2</Text>
              <Text style={styles.menuItemAmount}>Amount: 1</Text>
              <Text style={styles.menuItemPrice}>Total Price: $5</Text>
            </View>
          </View>
        </View>
        <Text style={styles.totalOrderPrice}>Total Order Price: $15</Text>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI16");
      }}>
          <Text style={styles.buttonText}>Pay now/Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay on the spot</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  section1: {
    marginBottom: 16
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  time: {
    fontSize: 16,
    marginBottom: 16
  },
  menuItemsContainer: {
    marginBottom: 16
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  menuItemImage: {
    width: 64,
    height: 64,
    marginRight: 8,
    borderRadius: 8
  },
  menuItemDetails: {
    flex: 1
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  menuItemAmount: {
    fontSize: 14,
    marginBottom: 4
  },
  menuItemPrice: {
    fontSize: 14
  },
  totalOrderPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Screen;