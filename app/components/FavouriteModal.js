import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppModal from './AppModal';
import AppButton from './Button';
import Card from './Card';

function FavouriteModal({modalVisible, onClose, personDetails, onPressFavourite}) {
return <AppModal title='Tutor' visible={modalVisible} onClose={onClose} >
 

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
                    
                    icon='heart-plus-outline'
                    style={{width: '92%', marginLeft: 'auto' ,marginRight: 'auto', borderRadius: 10}}
                    onPress={onPressFavourite
                    }
                  />: 
                  <AppButton
                    title='Remove'
                    color='danger'
                    icon='heart-remove-outline'
                    style={{width: '92%', marginLeft: 'auto' ,marginRight: 'auto', borderRadius: 10}}
                    onPress={onPressFavourite
                    }
                  />
                  }
                  
                </>
              )}
         

          
        
        </AppModal>;
}

const styles = StyleSheet.create({
container: {},
});

export default FavouriteModal;
