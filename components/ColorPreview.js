import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ColorPreview({ paletteName, previewColors }) {
  return (
    <View>
      <Text style={styles.headerText}>{paletteName}</Text>
      <FlatList
        horizontal={true}
        data={ previewColors.map((color) => color.hexCode) }
        keyExtractor={item => item}
        renderItem={({ item }) => <View style={[styles.colorBox, { backgroundColor: item }]}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30
  },
  colorBox: {
    padding: 20,
    marginRight:10
  }
});
