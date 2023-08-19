import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Image } from 'expo-image';
import * as Yup from 'yup';

import AppActivityIndicator from '../components/AppActivityIndicator';
import AppAlertToast from '../components/AppAlertToast';
import AppScrollView from '../components/AppScrollView';
import AppText from '../components/AppText';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from '../components/forms';
import AppFormPicker from '../components/forms/FormPicker';
import colors from '../config/colors';
import Roles from '../data/roles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  role: Yup.object().required().label("Role"),
});

function RegisterScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [showLogInDone, setShowLogInDone] = useState(false);
  const [error, setError] = useState();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibilityChange = (isVisible) => {
    setIsPasswordVisible(isVisible);
    
  };

  const handleSubmit = async (userInfo, { resetForm }) => {
    setLoading(true);
    console.log('Tapped', userInfo);

    setLoading(false);
  };

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <AppAlertToast
        visible={showLogInDone}
        success={true}
        message='Registration Successful'
      />

      <AppScrollView>
        <Screen style={styles.container}>
          <Image
            source={require('../assets/Images/Logo-Shadow.png')}
            style={{
              width: 300,
              height: 270,

              alignSelf: 'center',
              contentFit: 'contain',
            }}
          />

          <Form
            initialValues={{ name: '', email: '', password: '', role: null }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage error={error} visible={error} />
            <FormField
              autoCorrect={false}
              icon='account'
              name='name'
              placeholder='Name'
            />
            <FormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              name='email'
              placeholder='Email'
              textContentType='emailAddress'
            />
            <FormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              iconSecondary={isPasswordVisible? 'eye-off': 'eye'}
              passwordVisible={isPasswordVisible}
              onPasswordVisibilityChange={handlePasswordVisibilityChange}
              name='password'
              placeholder='Password'
              secureTextEntry={!isPasswordVisible}
              textContentType='password'
            />
             <AppFormPicker
                items={Roles}
                name='role'
                numberOfColumns={2}
                PickerItemComponent={CategoryPickerItem}
                placeholder='Role'
                width='50%'
              />
              
            <SubmitButton title='Register' />
          </Form>

          <View style={styles.textContainer}>
            <AppText style={styles.registerText}>
              Already have an account?{' '}
            </AppText>
            <AppText style={styles.registerLink}>Login</AppText>
          </View>
        </Screen>
      </AppScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  registerText: {
    color: colors.medium,
    textAlign: 'center',
  },
   registerLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
 
});

export default RegisterScreen;
