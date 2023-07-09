import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Screen = () => {
  const [currentOrders, setCurrentOrders] = useState([{
    id: '1',
    time: '10:00 AM',
    status: 'In Progress'
  }, {
    id: '2',
    time: '11:30 AM',
    status: 'In Progress'
  }, {
    id: '3',
    time: '12:45 PM',
    status: 'In Progress'
  }]);
  const [pastOrders, setPastOrders] = useState([{
    id: '4',
    time: '9:00 AM',
    status: 'Delivered'
  }, {
    id: '5',
    time: '8:30 AM',
    status: 'Delivered'
  }, {
    id: '6',
    time: '7:15 AM',
    status: 'Delivered'
  }]);
  const [searchCurrent, setSearchCurrent] = useState('');
  const [searchPast, setSearchPast] = useState('');

  const renderCurrentOrder = ({
    item
  }) => <View style={styles.orderContainer}>
      <Pressable><Text style={styles.orderId}>{item.id}</Text></Pressable>
      <Text style={styles.orderTime}>{item.time}</Text>
      <Button title="See Details" onPress={() => handleOrderDetails(item)} />
      <Text style={styles.orderStatus}>{item.status}</Text>
    </View>;

  const renderPastOrder = ({
    item
  }) => <View style={styles.orderContainer}>
      <Text style={styles.orderId}>{item.id}</Text>
      <Text style={styles.orderTime}>{item.time}</Text>
      <Button title="See Details" onPress={() => handleOrderDetails(item)} />
      <Text style={styles.orderStatus}>{item.status}</Text>
    </View>;

  const handleOrderDetails = order => {// Handle navigation to order details screen
  };

  return <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Current Orders</Text>
        <TextInput style={styles.searchBar} placeholder="Search by Order ID" value={searchCurrent} onChangeText={setSearchCurrent} />
        <FlatList data={currentOrders} renderItem={renderCurrentOrder} keyExtractor={item => item.id} />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Past Orders</Text>
        <TextInput style={styles.searchBar} placeholder="Search by Order ID" value={searchPast} onChangeText={setSearchPast} />
        <FlatList data={pastOrders} renderItem={renderPastOrder} keyExtractor={item => item.id} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  sectionContainer: {
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 8
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  orderTime: {
    fontSize: 14,
    color: '#666'
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666'
  }
});
export default Screen;