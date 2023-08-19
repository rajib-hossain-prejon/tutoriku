import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


function AppScrollView({children}) {
return <ScrollView style={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
container: {
 flexGrow: 1
},
});

export default AppScrollView;
