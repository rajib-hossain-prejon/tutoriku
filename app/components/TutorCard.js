import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TutorCard = ({ image, name, subjects, experience, fee, favourite }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subjects}>{subjects.join(', ')}</Text>
      <Text style={styles.experience}>Experience: {experience} years</Text>
      <Text style={styles.fee}>Fee: ${fee}</Text>
      <Text style={styles.favourite}>{favourite ? 'Favourite' : 'Not Favourite'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subjects: {
    fontSize: 16,
    marginBottom: 5,
  },
  experience: {
    fontSize: 14,
    marginBottom: 5,
  },
  fee: {
    fontSize: 14,
    marginBottom: 5,
  },
  favourite: {
    fontSize: 14,
    color: '#888888',
  },
});

export default TutorCard;
