import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const RestaurantScreen = () => {
  const restaurants = [{
    id: 1,
    name: 'Restaurant A',
    foodType: 'Italian',
    phoneNumber: '123-456-7890',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    name: 'Restaurant B',
    foodType: 'Mexican',
    phoneNumber: '987-654-3210',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://tinyurl.com/42evm3m3'
  } // Add more restaurants here
  ];
  return <ScrollView>
      {restaurants.map(restaurant => <View key={restaurant.id} style={styles.restaurantContainer}>
          <Image source={{
        uri: restaurant.image
      }} style={styles.restaurantImage} />
          <View style={styles.restaurantInfoContainer}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantFoodType}>{restaurant.foodType}</Text>
            <Text style={styles.restaurantPhoneNumber}>{restaurant.phoneNumber}</Text>
            <Text style={styles.restaurantDescription}>{restaurant.description}</Text>
            <TouchableOpacity style={styles.showMoreButton}>
              <Text style={styles.showMoreButtonText}>Show more</Text>
            </TouchableOpacity>
          </View>
        </View>)}
    </ScrollView>;
};

const styles = {
  restaurantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA'
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16
  },
  restaurantInfoContainer: {
    flex: 1
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  restaurantFoodType: {
    fontSize: 16,
    marginBottom: 4
  },
  restaurantPhoneNumber: {
    fontSize: 14,
    marginBottom: 4
  },
  restaurantDescription: {
    fontSize: 14,
    marginBottom: 8
  },
  showMoreButton: {
    backgroundColor: '#EAEAEA',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  showMoreButtonText: {
    fontSize: 14,
    color: '#333'
  }
};
export default RestaurantScreen;