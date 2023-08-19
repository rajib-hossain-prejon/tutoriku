import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, iconSecondary, width = "100%", ...otherProps }) {

  
   const togglePasswordVisibility = () => {
     otherProps.onPasswordVisibilityChange(!otherProps.passwordVisible);
  };

  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={28}
          color={defaultStyles.colors.secondary}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, { flex: 1 }]} 
        {...otherProps}
      />
       {iconSecondary && (
        <TouchableOpacity onPress={togglePasswordVisibility} >
          <MaterialCommunityIcons
          name={iconSecondary}
          size={28}
          color={defaultStyles.colors.secondary}
          style={styles.icon}
          
        />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 20,
    flexDirection: "row",
    borderColor: defaultStyles.colors.secondary,
    borderWidth: 0.8,
    padding: 12,
    marginVertical: 10,
    
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
