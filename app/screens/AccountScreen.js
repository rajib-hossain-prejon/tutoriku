import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import React, { useState } from 'react';
import { Alert, FlatList, Share, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import TouchableListItem from '../components/lists/TouchableListItem';
import colors from '../config/colors';

import AppAlertToast from '../components/AppAlertToast';
import AppButton from '../components/Button';

function AccountScreen() {
  const [showLogOut, setShowLogOut] = useState(false);
  const [message, setMessage] = useState({
    title: 'Download 1JobHunt App',
    message:
      'Hi friend, have you tried this wonderful 1JobHunt App? Download now and add or look for jobs now :)',
  });

  const shareMessage = () => {
    Share.share({
      title: message.title,
      message: message.message,
    });
  };

  const ListItem = [
    {
      id: 10,
      title: 'Sessions',
      icon: 'clipboard-text-clock-outline',
      onPress: () => {
        console.log('Add');
      },
    },
    {
      id: 11,
      title: 'My Wallet',
      icon: 'wallet-outline',
      onPress: () => {
        console.log('Add');
      },
    },
    {
      id: 12,
      title: 'Favorite Tutor',
      icon: 'heart-outline',
      onPress: () => {
        console.log('Add');
      },
    },
    {
      id: 1,
      title: 'Share App With Friends',
      icon: 'share-variant-outline',
      onPress: () => {
        Share.share({
          title: 'Download Tutoriku',
          message:
            "Experience the power of learning with Tutoriku! Connect with tutors, study online effortlessly, and elevate your educational journey. Download Tutoriku now and embark on a path to academic success! \n\n Download Now: https://play.google.com/store/apps/details?id=com.tutorikuapp ",
        });
      },
    },
    {
      id: 2,
      title: 'Privacy Policy',
      icon: 'shield-alert-outline',
      onPress: () => {
        Linking.openURL('https://tutoriku.com/privacy-policy/');
      },
    },
    {
      id: 3,
      title: 'Help & Support',
      icon: 'chat-question-outline',
      onPress: () => {
        Linking.openURL('mailto:support@tutoriku.com');
      },

    },
     {
      id: 4,
      title: 'Terms And Conditions',
      icon: 'file-document-outline',
      onPress: () => {
        Linking.openURL('https://tutoriku.com/terms-and-conditions/');
      },
      
    },
    {
      id: 5,
      title: 'About Us',
      icon: 'information-outline',
      onPress: () => {
        Linking.openURL('https://tutoriku.com/about-us/');
      },
      
    },




    
  ];

  const handleLogOut = async () => {
    try {
    } catch (error) {
      Alert.alert(error.message);
    }
    // .then(()=>console.log('Logged Out!')).catch( error => console.log(error));
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.container2}>
        <AppAlertToast
          visible={showLogOut}
          custom={true}
          message='Log Out Successful'
          iconSize={46}
        />

        {/* Upper Section */}
        <View style={styles.upperSection}>
          <>
            {/* ---- User Icon ------ */}
            <MaterialCommunityIcons
              name='account-circle'
              size={90}
              color={colors.white}
            />

            {/* ---- User Name ------ */}
            <AppText style={styles.username}>Rajib Hossain</AppText>
            <AppButton title='Account Settings' color='teal' textColor='white' style={{marginHorizontal: 'auto', width: 240, marginBottom: 10, height: 40  }} textStyle={{fontSize: 12}}  onPress={()=> console.log('Pre')  } />
            
          </>
        </View>

        {/* Lower Section */}
        <View style={styles.lowerSection}>
          {/* ---- Bottom Texts Container------ */}
          

          <FlatList
            data={ListItem}
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={(menuItem) => menuItem.title}
            
            renderItem={({ item }) => (
              <TouchableListItem
                IconComponent={
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={20}
                    color={item.color ? item.color : colors.dark}
                  />
                }
                title={item.title}
                color={item.color ? item.color : colors.medium}
                onPress={item.onPress}
                SecondaryIconComponent={
                  <MaterialCommunityIcons
                    name='chevron-right'
                    size={20}
                    color={item.color ? item.color : colors.dark}
                  />
                }
              />
            )}
          />


          <ListItemSeparator />

          {/* <TouchableListItem
            IconComponent={
              <MaterialCommunityIcons
                name='logout'
                size={20}
                color={colors.danger}
              />
            }
            title='Logout'
            color={colors.danger}
            onPress={() => console.log('Log Out Pressed')}
          /> */}
          <AppButton title='Log out' color='danger' icon='logout-variant' style={{width: 340, marginLeft: 'auto', marginRight: 'auto', marginTop: 15, marginBottom: 5}} onPress={()=>console.log('Log Out!')} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  container2: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  joinText: {
    fontSize: 26,
    fontWeight: '400',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  login: {
    color: colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  line: {
    height: 2,
    width: '96%',
    backgroundColor: '#E9ECF6',
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  lowerSection: {
    flex: 4,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.white,
    paddingVertical: 30,
    overflow: 'hidden',
  },
  upperSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AccountScreen;
