import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ColourBox from "./components/ColourBox"

const COLOURS = [
  { colourName: 'Base03', hexCode: '#002b36' },
  { colourName: 'Base02', hexCode: '#073642' },
  { colourName: 'Base01', hexCode: '#586e75' },
  { colourName: 'Base00', hexCode: '#657b83' },
  { colourName: 'Base0', hexCode: '#839496' },
  { colourName: 'Base1', hexCode: '#93a1a1' },
  { colourName: 'Base2', hexCode: '#eee8d5' },
  { colourName: 'Base3', hexCode: '#fdf6e3' },
  { colourName: 'Yellow', hexCode: '#b58900' },
  { colourName: 'Orange', hexCode: '#cb4b16' },
  { colourName: 'Red', hexCode: '#dc322f' },
  { colourName: 'Magenta', hexCode: '#d33682' },
  { colourName: 'Violet', hexCode: '#6c71c4' },
  { colourName: 'Blue', hexCode: '#268bd2' },
  { colourName: 'Cyan', hexCode: '#2aa198' },
  { colourName: 'Green', hexCode: '#859900' },
];

export default function App() {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Solarized</Text>
        <FlatList
          data={COLOURS}
          keyExtractor={item => item}
          renderItem={({ item }) => <ColourBox hexCode={item.hexCode} colourName={item.colourName} />}
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
