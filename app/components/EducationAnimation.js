import Lottie from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';


function EducationAnimation({visible = false}) {

 if (!visible) return null;

return (
 
     <View style={styles.overlay} >
          <Lottie source={require('../assets/animations/education.json')}
      autoPlay loop 
     />
     </View>
)
}

const styles = StyleSheet.create({
     overlay:{
          
          height: '100%',
          opacity: 0.8,
          width: '100%',
          
     }
})

export default EducationAnimation;
