import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI11");
      }}><Text style={styles.gpygwQlj}>{"Notifications"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI12");
      }}><Text style={styles.suvBuZoO}>{"My favorite Restaurant"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI13");
      }}><Text style={styles.zjYNSfMz}>{"Specific Restaurant "}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI20");
      }}><Text style={styles.pJOZgkTR}>{"My orders"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI21");
      }}><Text style={styles.xofHwYSN}>{"Settings"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  gpygwQlj: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  suvBuZoO: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  zjYNSfMz: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  pJOZgkTR: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  xofHwYSN: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled10;