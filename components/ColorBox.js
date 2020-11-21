import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ hexCode, colorName }) {
  const textColor = parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black':'white'
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={[styles.boxText, { color: textColor }]}>{colorName} {hexCode}</Text>
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
