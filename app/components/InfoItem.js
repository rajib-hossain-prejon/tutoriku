import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function InfoItem({title, subtitle, number}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', padding: 5}} >
       <AppText style={styles.number}>{number}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 5,
  },
  number: { fontSize: 24, fontWeight: 'bold', marginTop: 'auto' },
  title: { color: colors.medium, fontSize: 12,  },
  subtitle: { color: colors.medium, fontWeight: '600', fontSize: 22, marginTop: 'auto' , marginHorizontal: 4 }
});

export default InfoItem;
