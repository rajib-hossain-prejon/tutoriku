import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';

import { Image } from 'expo-image';
import * as Yup from 'yup';


import AppActivityIndicator from '../components/AppActivityIndicator';
import AppAlertToast from '../components/AppAlertToast';
import AppScrollView from '../components/AppScrollView';
import AppText from '../components/AppText';
import CategoryPickerItem from '../components/CategoryPickerItem';
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
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  role: Yup.object().required().label("Role"),
});




function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLogInDone, setShowLogInDone] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibilityChange = (isVisible) => {
    setIsPasswordVisible(isVisible);
    
  };

  const handleSubmit = async ({ email, password, role }, { resetForm }) => {
    setLoading(true);
    setTimeout(() => {
      console.log('Submitted', email, password, role);
    }, 200);
    setLoading(false);
  };

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <AppAlertToast
        visible={showLogInDone}
        success={true}
        message='Login Successful'
      />
      <KeyboardAvoidingView>
        <AppScrollView>
          <View style={styles.container}>
            <Image
              source={require('../assets/Images/Logo-Shadow.png')}
              style={{
                width: 300,
                height: 300,
                alignSelf: 'center',
                contentFit: 'contain',
              }}
            />

            <Form
              initialValues={{ email: '', password: '', role: null }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <ErrorMessage
                error='Invalid email and/or password.'
                visible={loginFailed}
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

              <SubmitButton title='Login' />
            </Form>
            <View style={styles.textContainer}>
              <AppText style={styles.registerText}>
                Don't have any account?{' '}
              </AppText>
              <AppText style={styles.registerLink}>Register</AppText>
            </View>
          </View>
        </AppScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
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

export default LoginScreen;
