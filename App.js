
import { StyleSheet, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
      
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
});
