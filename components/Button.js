import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { black, white } from '../utils/colors';

export default function Button({
  text,
  onPress,
  backgroundColor = white,
  textColor = black
}) {
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.iosBtn, { backgroundColor }]}
      >
        <Text style={{ color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.androidBtn, { backgroundColor }]}
      >
        <Text style={{ color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iosBtn: {
    padding: 10,
    margin: 10,
    width: 150,
    borderRadius: 3,
    borderColor: black,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidBtn: {
    margin: 10,
    padding: 10,
    width: 150,
    borderRadius: 3,
    borderColor: black,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
