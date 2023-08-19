
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';

export default function Page() {
  return <>
  {
    Platform.OS === "android" 
    ?
<StatusBar style="light" backgroundColor='#48039C' />:
<StatusBar style="auto" />
  }
  
  {/* <Link href='/account' > Account </Link> */}
  
  
  {/* <InstitutionDetails/>
   */}
  <WelcomeScreen/>
  
  </> ;
}
