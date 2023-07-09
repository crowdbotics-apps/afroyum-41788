import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.section1}>
        <TouchableOpacity style={styles.heartButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.heartIcon} />
        </TouchableOpacity>
        <Text style={styles.deliveryTime}>Delivery time: 30 mins</Text>
        <Text style={styles.restaurantInfo}>Restaurant - Food type</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}>Restaurant Name</Text>
        <Text style={styles.ownerName}>Owner Name</Text>
        <Text style={styles.phoneNumber}>Phone Number</Text>
        <Text style={styles.address}>Address</Text>
        <Text style={styles.workingHours}>Working Hours</Text>
        <Text style={styles.description}>Restaurant Description</Text>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity style={styles.cartButton} onPress={() => {
        navigation.navigate("ScreenAI15");
      }}>
          <Text style={styles.cartButtonText}>Cart</Text>
        </TouchableOpacity>
        <ScrollView style={styles.menuItemsContainer}>
          <View style={styles.menuItem} onPress={() => {
          navigation.navigate("ScreenAI14");
        }}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.menuItemImage} />
            <Text style={styles.menuItemName}>Menu Item 1</Text>
            <Text style={styles.menuItemDescription}>Short Description</Text>
            <Text style={styles.menuItemPrice}>$10</Text>
          </View>
          {
          /* Repeat menu item components for other items */
        }
        </ScrollView>
      </View>
    </View>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section1: {
    padding: 20
  },
  heartButton: {
    alignSelf: 'flex-end',
    padding: 10
  },
  heartIcon: {
    width: 20,
    height: 20
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  restaurantInfo: {
    fontSize: 16,
    marginTop: 5
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    resizeMode: 'cover'
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  ownerName: {
    fontSize: 16,
    marginTop: 5
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: 5
  },
  address: {
    fontSize: 16,
    marginTop: 5
  },
  workingHours: {
    fontSize: 16,
    marginTop: 5
  },
  description: {
    fontSize: 16,
    marginTop: 10
  },
  section2: {
    flex: 1,
    padding: 20
  },
  cartButton: {
    alignSelf: 'flex-end',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  menuItemsContainer: {
    marginTop: 20
  },
  menuItem: {
    marginBottom: 20
  },
  menuItemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover'
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  menuItemDescription: {
    fontSize: 16,
    marginTop: 5
  },
  menuItemPrice: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold'
  }
};
export default Screen;