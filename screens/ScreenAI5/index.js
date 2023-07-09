import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsAndConditionsScreen = () => {
  return <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.subtitle}>Last Updated: September 1, 2022</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec nunc tincidunt, id aliquam nisl tincidunt. Sed auctor
          tincidunt nisl, id lacinia nunc. Nulla facilisi. Sed auctor, nunc
          vitae aliquet tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc
          nunc nec nunc. Sed auctor, nunc vitae aliquet tincidunt, nunc nunc
          tincidunt nunc, nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  contentContainer: {
    paddingBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10
  }
});
export default TermsAndConditionsScreen;