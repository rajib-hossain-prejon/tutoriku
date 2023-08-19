import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useRouter } from 'expo-router';

import { Image } from 'expo-image';
import AppText from '../components/AppText';
import Card from '../components/Card';
import FavouriteModal from '../components/FavouriteModal';
import ImageCard from '../components/ImageCard';
import colors from '../config/colors';
import routes from '../navigation/routes';

const categories = [
  {
    id: 1,
    image: require('../assets/Images/school.jpg'),
    title: 'Primary School',
  },
  {
    id: 2,
    image: require('../assets/Images/school2.jpg'),
    title: 'Secondary School',
  },
  {
    id: 3,
    image: require('../assets/Images/school.jpg'),
    title: 'Adult',
  },
  {
    id: 4,
    image: require('../assets/Images/school2.jpg'),
    title: 'Tertiary School',
  },
  {
    id: 5,
    image: require('../assets/Images/school.jpg'),
    title: 'Special For Youth',
  },
];

const tutors = [
  {
    id: 1,
    image: require('../assets/Images/person1.jpg'),
    name: 'Chipu Lamani',
    subjects: ['Master of Arts', 'Art', 'Adult'],
    experience: 4,
    fee: 20,
    favourite: true,
  },
  {
    id: 2,
    image: require('../assets/Images/person2.jpg'),
    name: 'Rajib Hossain',
    subjects: ['Programming', 'Python'],
    experience: 6,
    fee: 120,
    favourite: false,
  },
  {
    id: 3,
    image: require('../assets/Images/person3.jpg'),
    name: 'Naher Badrun',
    subjects: ['Master of Arts'],
    experience: 4,
    fee: 40,
    favourite: true,
  },
  {
    id: 4,
    image: require('../assets/Images/person1.jpg'),
    name: 'Zidane Chamani',
    subjects: ['Art', 'Adult'],
    experience: 1,
    fee: 10,
    favourite: false,
  },
];

function InstitutionDetailsScreen() {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [personDetails, setPersonDetails] = useState({});

  const onFavoriteSelect = (
    title,
    subTitle,
    favourite,
    price,
    experience,
    imageUrl
  ) => {
    setPersonDetails({
      title,
      subTitle,
      favourite,
      price,
      experience,
      imageUrl,
    });
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/school.jpg')}
        width='100%'
        height={220}
      />

      <View style={{ margin: 10 }}>
        <AppText
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 5,
            color: colors.bootstrap_primary,
          }}
        >
          Subcategories
        </AppText>
      </View>
      {/* ------------------------- Institution --------------------------------- */}
      <ScrollView>
        <View style={{ height: 160 }}>
          <FlatList
            data={categories}
            keyExtractor={(menuItem) => menuItem.id}
            renderItem={({ item }) => (
              <ImageCard
                image={item.image}
                title={item.title}
                style={{ height: 130, width: 170 }}
              />
            )}
            horizontal={true}
          />
        </View>

        {/* ------------------------- Featured Tutors --------------------------------- */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 15,
            marginVertical: 8,
          }}
        >
          <AppText style={{ fontWeight: 'bold' }}>Top Experts</AppText>
          <TouchableOpacity onPress={() => console.log('Pressend')}>
            <AppText style={{ fontSize: 14, color: 'blue' }}>See More</AppText>
          </TouchableOpacity>
        </View>
        <View style={{ height: 300 }}>
          <FlatList
            data={tutors}
            keyExtractor={(menuItem) => menuItem.id}
            renderItem={({ item }) => (
              <Card
                title={item.name}
                imageUrl={item.image}
                subTitle={item.subjects}
                price={item.fee}
                experience={item.experience}
                favourite={item.favourite}
                style={{ height: 260, width: 220 }}
                onFavoriteSelect={onFavoriteSelect}
                onPress={() =>
                  router.push(routes.LISTING_DETAILS.link + '/' + item.name)
                }
              />
            )}
            horizontal={true}
          />
        </View>

        {/* ---------------- Modal --------------------------- */}

        <FavouriteModal
          modalVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          personDetails={personDetails}
          onPressFavourite={() => console.log('Taaped')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  username: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default InstitutionDetailsScreen;
