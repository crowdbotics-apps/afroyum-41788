import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {// Handle sign up logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
      navigation.navigate("ScreenAI7");
    }}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>I agree to the </Text>
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI5");
      }}>
          <Text style={styles.link}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}> and </Text>
        <TouchableOpacity onPress={() => {
        navigation.navigate("privacyPolicy");
      }}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  forgotPassword: {
    fontSize: 14,
    color: "#007AFF",
    textDecorationLine: "underline",
    marginTop: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  checkmark: {
    color: "#007AFF",
    fontSize: 14
  },
  checkboxLabel: {
    fontSize: 14
  },
  link: {
    fontSize: 14,
    color: "#007AFF",
    textDecorationLine: "underline"
  }
});
export default SignUpScreen;