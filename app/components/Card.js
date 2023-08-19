import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from "react";
import { Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import { default as AppText, default as Text } from "./AppText";

function Card({ title, subTitle, favourite, price, experience ,imageUrl, onFavoriteSelect ,onPress, style, children }) {

  const favouritePressed = () => {
    onFavoriteSelect(title, subTitle, favourite, price, experience, imageUrl)
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, style]}>
        {imageUrl && (
          <Image style={styles.image} source={imageUrl} />
        )}
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <View style={styles.subTitleContainer}  >
              <AppText numberOfLines={1} style={{width: '100%'}} ellipsizeMode="tail" >
             {subTitle.map((item, index) => (
  <React.Fragment key={index}>
    <Text style={styles.infoDescription}>{item}</Text>
    {index !== subTitle.length - 1 && <Text >, </Text>}
  </React.Fragment>
))}

              </AppText>
            </View>
          )}
           { experience && <AppText style={styles.experience}>{experience} years experience</AppText> }
          
          <View style={styles.rowContainer}>
           {price && <AppText style={styles.price}>RM {price} per hour</AppText> }
            {
              favourite != null && 
              <>{
              !favourite ? <TouchableOpacity onPress={favouritePressed} style={{ marginLeft: 'auto' }} >
                
                <MaterialCommunityIcons name='heart-outline' color={colors.medium} size={30} style={{ marginLeft: 'auto' }} />
              </TouchableOpacity> : <TouchableOpacity onPress={favouritePressed} style={{ marginLeft: 'auto' }} >
                
                <MaterialCommunityIcons name='heart' color={colors.danger} size={30} style={{ marginLeft: 'auto' }} />
              </TouchableOpacity> 
              }
            </>
            }
          </View>
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.light,
    marginVertical: 5,
    marginHorizontal: 12,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: '45%',
  },
  subTitleContainer: {
    flexDirection: 'row',
  },
  infoDescription: {
    fontSize: 16,
    paddingLeft: 5,
    marginBottom: 10,
    color: colors.medium,
    
  },
  price: {
    fontSize: 12,
    
    textAlign: 'justify',
    marginBottom: 10,
    color: colors.bootstrap_primary,
  },
  experience: {
    fontSize: 14,
    
    textAlign: 'justify',
    marginVertical: 5,
    color: colors.dark
  },
  rowContainer: {
    flexDirection: 'row',
  },
  title: {
    marginBottom: 7,
    color: colors.primary,
    fontWeight: 'bold'
  },
});

export default Card;
