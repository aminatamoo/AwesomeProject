import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function ColourBox({ hexCode, colourName }) {
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={styles.boxText}>{colourName} {hexCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxText: {
    color: "white",
    fontWeight: 'bold'
  },
  box: {
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 5
  }
});
