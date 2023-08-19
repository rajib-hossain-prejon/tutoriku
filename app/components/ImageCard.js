import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ImageCard({image, title, onPress,style}) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor='#fff'
      style={{ borderRadius: 8 }}
      onPress={onPress}
    >
     <>
       <View style={[styles.imageContainer, style]}>
        <Image
          blurRadius={8}
          source={image}
          style={styles.image}
        />
        <View style={styles.overlayContainer}>
          <AppText
            numberOfLines={1}
            ellipsizeMode='tail'
            style={styles.overlayText}
          >
            {title}
          </AppText>
        </View>
        
      </View>
     
     </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    position: 'relative',
   marginHorizontal: 10,
   marginVertical: 5,
   height: 180,
   width: 150
    
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlayText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 900,
    padding: 5,
    paddingBottom: 14,
  },
});

export default ImageCard;
