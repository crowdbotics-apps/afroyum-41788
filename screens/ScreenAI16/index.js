import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const PaymentScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.amountText}>Amount to be Paid:</Text>
      <Text style={styles.amount}>$100.00</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardOption}>
          <Image source={{
          uri: "https://example.com/card1.png"
        }} style={styles.cardImage} />
          <Text style={styles.cardText}>Credit Card Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardOption}>
          <Image source={{
          uri: "https://example.com/card2.png"
        }} style={styles.cardImage} />
          <Text style={styles.cardText}>Credit Card Option 2</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addCardButton} onPress={() => {
      navigation.navigate("ScreenAI25");
    }}>
        <Text style={styles.addCardButtonText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.payButton} onPress={() => {
      navigation.navigate("ScreenAI24");
    }}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  cardOption: {
    alignItems: "center"
  },
  cardImage: {
    width: 100,
    height: 60,
    marginBottom: 10
  },
  cardText: {
    fontSize: 16
  },
  addCardButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  addCardButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  payButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default PaymentScreen;