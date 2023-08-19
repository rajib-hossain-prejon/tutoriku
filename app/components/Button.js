import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";



function AppButton({ title, onPress, icon, iconSize=23, iconColor='white', color = "primary", textColor= 'white' ,style, textStyle }) {

  

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style, textStyle]}
      onPress={onPress}
    >
      <View style={{   flexDirection: 'row', justifyContent: 'center', alignItems: 'center',  height: '100%'}} >
       
        
         {
        icon && <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor}  />
      }
       
       
      </View>
      <Text style={[styles.text, {color: textColor}, textStyle]}>{title}</Text>
     
      
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    height: 46,
    marginVertical: 7,

  },
  text: {
    color: colors.white,
    fontSize: 14,
    marginLeft: 12,
    
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
