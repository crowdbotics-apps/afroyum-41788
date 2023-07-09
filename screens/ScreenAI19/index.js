import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OrderDetailsScreen = () => {
  const orderID = '123456';
  const orderTime = '12:30 PM';
  const menuItems = [{
    id: 1,
    picture: 'https://tinyurl.com/42evm3m3',
    name: 'Burger',
    amount: 2,
    totalPrice: 20
  }, {
    id: 2,
    picture: 'https://tinyurl.com/42evm3m3',
    name: 'Pizza',
    amount: 1,
    totalPrice: 15
  }, {
    id: 3,
    picture: 'https://tinyurl.com/42evm3m3',
    name: 'Salad',
    amount: 3,
    totalPrice: 30
  }];
  return <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <View style={styles.orderInfoContainer}>
        <Text style={styles.orderID}>Order ID: {orderID}</Text>
        <Text style={styles.orderTime}>Time: {orderTime}</Text>
      </View>
      <View style={styles.menuItemsContainer}>
        {menuItems.map(item => <View key={item.id} style={styles.menuItemContainer}>
            <Image source={{
          uri: item.picture
        }} style={styles.menuItemImage} />
            <View style={styles.menuItemDetails}>
              <Text style={styles.menuItemName}>{item.name}</Text>
              <Text style={styles.menuItemAmount}>Amount: {item.amount}</Text>
              <Text style={styles.menuItemTotalPrice}>Total Price: ${item.totalPrice}</Text>
            </View>
          </View>)}
      </View>
      <Text style={styles.totalCost}>Total Cost: $65</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  orderInfoContainer: {
    marginBottom: 20
  },
  orderID: {
    fontSize: 16,
    marginBottom: 5
  },
  orderTime: {
    fontSize: 16
  },
  menuItemsContainer: {
    marginBottom: 20
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  menuItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5
  },
  menuItemDetails: {
    flex: 1
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  menuItemAmount: {
    fontSize: 14,
    marginBottom: 5
  },
  menuItemTotalPrice: {
    fontSize: 14
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default OrderDetailsScreen;