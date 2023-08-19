import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "./AppText";
import RoundBackgroundImage from "./RoundBackgroundImage";



function CategoryPickerItem({ item, onPress }) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <RoundBackgroundImage
          backgroundColor={item.backgroundColor}
          name={item.icon}
          image={item.image}
          size={120}
        />
        
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "49%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
