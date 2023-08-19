import { useAssets } from 'expo-asset';
import { Image } from 'expo-image';
import React from "react";
import { View } from "react-native";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

function RoundBackgroundImage({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  image
}) {
  

  const [assets, error] = useAssets([require('../assets/Images/tutu.jpg')]);
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} /> */}
      {
        image &&  <Image
        style={{width: 100, height: 100}}
        source={image}
        placeholder='jin'
        contentFit="cover"
        transition={100}
      />
      }
    </View>
  );
}

export default RoundBackgroundImage;
