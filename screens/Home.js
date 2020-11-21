import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import ColorPreview from "../components/ColorPreview"

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

export default function Home( { navigation } ) {
  const previewNum = 5
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.navigate('ColorPalette', { paletteName: 'Solarized', colors: COLORS }) }>
        <ColorPreview previewColors={COLORS.slice(0,previewNum)} paletteName='Solarized' />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('ColorPalette', { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS }) }>
        <ColorPreview previewColors={FRONTEND_MASTERS.slice(0,previewNum)} paletteName='Frontend Masters' />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('ColorPalette', { paletteName: 'Rainbow', colors: RAINBOW }) }>
        <ColorPreview previewColors={RAINBOW.slice(0,previewNum)} paletteName='Rainbow' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:10
  }
});
