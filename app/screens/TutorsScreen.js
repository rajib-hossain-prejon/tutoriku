import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import colors from '../config/colors';

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

function TutorsScreen(props) {

 const handleSearch = (searchText) => {
    // Perform search logic with the searchText
    console.log('Search:', searchText);

    // const results = data.filter((person) =>
    //   person.name.toLowerCase().includes(searchText.toLowerCase())
    // );
    // setData(results);
  };

  return (
    <View style={styles.container}>
     <>
        <View style={{marginTop: 10}} >
          <SearchBar onSearch={handleSearch} />
        </View>
        <View style={{ flex: 1}} >
       <FlashList
      data={tutors}
      renderItem={({ item }) => (
              <Card
                title={item.name}
                imageUrl={item.image}
                subTitle={item.subjects}
                price={item.fee}
                experience={item.experience}
                
                style={{ height: 280, width: '86%', backgroundColor: colors.gray, marginLeft: 'auto', marginRight: 'auto'  }}
                
                onPress={() =>
                  // router.push(routes.LISTING_DETAILS.link + '/' + item.name)
                  console.log('c')
                }
              />
            )}
            
      
      estimatedItemSize={200}
    />
      </View>
     
     </>
     
     
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1
   
   
   
  },
});

export default TutorsScreen;
