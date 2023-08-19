import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const Badge = ({ text, bgColor='teal' , textColor='light' }) => {
  return (
    <View style={[styles.container, { backgroundColor: colors[bgColor] }]}>
      <Text style={[styles.text, { color: colors[textColor] }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    marginVertical: 7,
    marginHorizontal: 3
  },
  text: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default Badge;
