import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from "../components/ColorBox"

export default function ColorPalette({ route }) {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Text style={styles.headerText}>{route.params.paletteName}</Text>}
          data={route.params.colors}
          keyExtractor={item => item.colorName}
          renderItem={({ item }) => <ColorBox hexCode={item.hexCode} colorName={item.colorName} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30
  }
});

