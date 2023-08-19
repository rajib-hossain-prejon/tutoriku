import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function AppHeader({title, textAlign='left', fontSize=18, height= 36, style, fontColor='white' }) {
return <View style={[styles.container, {height}, style ]}>
 <AppText style={[styles.title,{fontSize}, {textAlign}, {color:colors[fontColor]}]} >{title}</AppText>
</View>;
}

const styles = StyleSheet.create({
container: {
 width: '100%',
 paddingHorizontal: 14,
 paddingVertical: 3,
 backgroundColor: colors.primary
},
title:
{color: colors.white,
  fontWeight: 'bold'}
});

export default AppHeader;
