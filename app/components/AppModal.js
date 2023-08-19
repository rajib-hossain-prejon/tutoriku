import React from 'react';
import { Button, Modal, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function AppModal({title, children, visible=false, onClose}) {
 

 

  return (
    <>
    <Modal visible={visible} animationType='slide' transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <AppText style={{ textAlign: 'center', margin: 6, padding: 2 }}>
            {title}
          </AppText>
          
         {
          children
         }
         <Button
            title='Close'
            color={colors.danger}
            onPress={ onClose}
          />
        </View>
      </View>
    </Modal>
    </>
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
});

export default AppModal;
