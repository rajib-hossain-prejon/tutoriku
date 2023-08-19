import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import Lottie from 'lottie-react-native';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import colors from "../config/colors";
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {

  const router = useRouter();

  return (
    
    
    <View style={styles.background}>
      
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Images/Logo.png")} />
        <Text style={styles.tagline}>Empowering Education, Anytime, Anywhere!</Text>
      </View>
      <View style={styles.animationContainer}>
        <Lottie
          source={require('../assets/animations/education.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={()=>   router.push(routes.LOGIN.link) }  />
        <Button title="Register" onPress={()=>   router.push(routes.REGISTER.link) }   />
        <Button title="Visitor" icon="account-multiple-check-outline" onPress={()=>   router.push('/tabs') } />
        <Button
          title="Visit Website"
          icon="web"
          color="danger"
          onPress={() => Linking.openURL('https://tutoriku.com/')}
        />
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  background: {
    // Add paddingBottom to create space for buttons
    flex: 1,
    justifyContent: 'space-evenly'
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 20, // Adjust horizontal padding
    
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: 'center'
  },
  logoContainer: {
    
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: 50 

    
  },
  tagline: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: "800",
    paddingVertical: 3,
    
  },
  animationContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    // Add marginTop to create space between logo and animation
  },
  animation: {
    width: "100%",
  },
});

export default WelcomeScreen;
