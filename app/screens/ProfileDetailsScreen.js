import React from 'react';
import { StyleSheet, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';

import AppHeader from '../components/AppHeader';
import AppScrollView from '../components/AppScrollView';
import { default as AppText, default as Text } from '../components/AppText';
import Badge from '../components/Badge';
import InfoItem from '../components/InfoItem';
import colors from '../config/colors';

const listing = {
  image: require('../assets/Images/person2.jpg'),
  name: 'Chipu Lamani',
  aboutme:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit quod, expedita nobis tenetur quam, minus nesciunt voluptas, ullam dolor porro? Dolore eius magni facere eveniet, doloribus consectetur repellat ipsa?',
  profession: 'Master in Business Administration',
  phone: '+9909737',
  subjects: [
    'Public Speaking',
    'Python',
    'Programming',
    'Java',
    'Lead Generation',
  ],
  studentTaught: 3,
  experience: 7,
  fee: 120,
};

function ProfileDetailsScreen() {
  
   const { id } = useLocalSearchParams();
   console.log(id)

  return (
    <View>
      <AppScrollView>
        {/* <Image style={styles.image} source={{ uri: listing.images[0] }} /> */}
        <Image style={styles.image} source={listing.image} />
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.title}>{listing.name}</Text>
              <Text style={styles.profession}>{listing.profession}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 6,
                marginBottom: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                
                
              }}
            >
              <MaterialCommunityIcons name='star' size={30} color='#FFD700' />
              <AppText
                style={{ fontSize: 15, color: colors.medium, margin: 2 }}
              >
                4.50
              </AppText>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 5}} >
          <InfoItem number={listing.studentTaught} title={listing.studentTaught > 1 ? 'Students Taught': 'Student Taught'} />
          <InfoItem number={listing.experience} title='Experience' subtitle={listing.experience> 1 ? 'years': 'year'} />
          <InfoItem number={listing.fee} title='Fee/Hour' subtitle='RM' />
          
        
         </View>

          {/* --------------- Subjects ---------------------- */}

          <AppHeader title='Subjects' />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 3,
              alignItems: 'center', 
              
            }}
          >
           
            {listing.subjects.map((item, index) => (
              <React.Fragment key={index} >
                <Badge  text={item} />
              </React.Fragment>
            ))}
          </View>

          {/* --------------- About Me ---------------------- */}

          <AppHeader title='About Me' />
          {listing.aboutme ? (
            <Text style={styles.infoDescription}>{listing.aboutme}</Text>
          ) : (
            <Text style={styles.infoDescription}>Noting to Show</Text>
          )}

          {/* --------------- Reviews ---------------------- */}
          <AppHeader title='Reviews' />
          {listing.reviews ? (
            <Text style={styles.infoDescription}>{listing.reviews}</Text>
          ) : (
            <Text style={styles.infoDescription}>Noting to Show</Text>
          )}
        </View>
      </AppScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {},
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
    color: colors.secondary,
  },
  infoDescription: {
    fontSize: 14,
    padding: 10,
    textAlign: 'justify',
    marginBottom: 1,
    color: colors.dark,
  },
  profession: {
    fontSize: 15,
    paddingLeft: 5,
    textAlign: 'justify',
    marginHorizontal: 15,
    marginBottom: 10,
    color: colors.medium,
  },
});

export default ProfileDetailsScreen;
