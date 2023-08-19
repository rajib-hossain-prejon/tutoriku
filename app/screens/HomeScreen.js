import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';



import AppText from '../components/AppText';
import AppButton from '../components/Button';
import Card from '../components/Card';
import ImageCard from '../components/ImageCard';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';

const categories = [
 { 
  id: 1,
  image: require('../assets/Images/school.jpg'),
  title: 'Primary School'
 },
 { 
  id: 2,
  image: require('../assets/Images/school2.jpg'),
  title: 'Secondary School'
 },
 { 
  id: 3,
  image:require('../assets/Images/school.jpg'),
  title: 'Adult'
 },
 { 
  id: 4,
  image: require('../assets/Images/school2.jpg'),
  title: 'Tertiary School'
 },
 { 
  id: 5,
  image: require('../assets/Images/school.jpg'),
  title: 'Special For Youth'
 }
]

const tutors = [
 { 
  id: 1,
  image: require('../assets/Images/person1.jpg'),
  name: 'Chipu Lamani',
  subjects: [
   'Master of Arts',
   'Art', 
   'Adult'
  ],
  experience: 4,
  fee: 20, 
  favourite: true
 
 },
 { 
  id: 2,
  image: require('../assets/Images/person2.jpg'),
  name: 'Rajib Hossain',
  subjects: [
   'Programming',
   'Python', 
  
  ],
  experience: 6,
  fee: 120,
 favourite: false
 },
 { 
  id: 3,
  image: require('../assets/Images/person3.jpg'),
  name: 'Naher Badrun',
  subjects: [
   'Master of Arts',
   
   
  ],
  experience: 4,
  fee: 40,
  favourite: true
 
 },
 { 
  id: 4,
  image: require('../assets/Images/person1.jpg'),
  name: 'Zidane Chamani',
  subjects: [
   
   'Art', 
   'Adult'
  ],
  experience: 1,
  fee: 10,
  favourite: false
 
 }
]


function HomeScreen() {
 
const router = useRouter();

 const [modalVisible, setModalVisible] = useState(false);
 const [personDetails, setPersonDetails] = useState({});

 const onFavoriteSelect = (title, subTitle, favourite, price, experience, imageUrl) =>{
  
  setPersonDetails({title, subTitle, favourite, price, experience, imageUrl})
  setModalVisible(true)
  console.log('Detail: ',personDetails)
 }






  return (
    <Screen style={styles.container}>
     <View style={{margin: 10}} >
       <MaterialCommunityIcons
              name='account-circle'
              size={60}
              color={colors.medium}
              
            />

            {/* ---- User Name ------ */}
            <AppText style={styles.username}>Rajib Hossain</AppText>
            <AppText style={{fontSize: 20, fontWeight: 'bold', marginLeft: 5, color: colors.bootstrap_primary}}>Find The Perfect {"\n"}Tutor </AppText>
     </View>
            

{/* ------------------------- Institution --------------------------------- */}

      <View style={{height: 200}} >
       <FlatList
            data={categories}
            
            keyExtractor={(menuItem) => menuItem.id}
   
            
            
            renderItem={({ item }) => (
             <ImageCard image={item.image} title={item.title} onPress={()=>router.push(routes.INSTITUTION_DETAILS.link)} />
            )}

            horizontal={true}
          />
      </View>


 {/* ------------------------- Featured Tutors --------------------------------- */}  

 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , marginHorizontal: 15, marginVertical: 8}} >
<AppText style={{fontWeight: 'bold'}} >Featured Tutors</AppText>
<TouchableOpacity onPress={()=>router.push(routes.TUTORS_LIST.link)} >
<AppText style={{fontSize: 14, color: 'blue'}}  >See More</AppText>
</TouchableOpacity>
 </View>
 <View style={{height: 320}} >
  <FlatList
 data={tutors}
 keyExtractor={(menuItem) => menuItem.id }
 renderItem={({item}) => (
  <Card title={item.name} imageUrl={item.image} subTitle={item.subjects} price={item.fee} experience={item.experience} favourite={item.favourite} style={{height: 300, width: 220}}
  onFavoriteSelect={onFavoriteSelect}
  onPress={()=>router.push(routes.LISTING_DETAILS.link + '/' + item.name )} />
 ) }
 horizontal={true}
 />

 </View>

  {/* ---------------- Modal --------------------------- */}

        <Modal visible={modalVisible} animationType='slide' transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <AppText style={{ textAlign: 'center', margin: 6, padding: 2 }}>
                {' '}
                Tutor{' '}
              </AppText>

              {Object.keys(personDetails).length > 0 && (
                <>
                  <Card
                    title={personDetails.title}
                    imageUrl={personDetails.imageUrl}
                    subTitle={personDetails.subTitle} price={personDetails.price} experience={personDetails.experience}
                    style={{
                      flex: 1,
                      backgroundColor: colors.gray,
                      marginBottom: 5,
                    }}
                    
                    onPress={() =>
                      console.log('Baby')
                    }
                  />
                  {
                   !personDetails.favourite ? <AppButton
                    title='Add to Favourite'
                    color='teal'
                    icon='heart-plus-outline'
                    style={{width: '92%', marginLeft: 'auto' ,marginRight: 'auto', borderRadius: 10}}
                    onPress={() =>
                      console.log('Baby',personDetails.favourite)
                    }
                  />: 
                  <AppButton
                    title='Remove'
                    color='danger'
                    icon='heart-remove-outline'
                    style={{width: '92%', marginLeft: 'auto' ,marginRight: 'auto', borderRadius: 10}}
                    onPress={() =>
                      console.log('Baby')
                    }
                  />
                  }
                </>
              )}
            </View>
          </View>

          <Button
            title='Close'
            color={colors.danger}
            onPress={() => setModalVisible(false)}
          />
        </Modal>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    flex: 0.59, // Adjust the maxHeight as needed
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  username: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
