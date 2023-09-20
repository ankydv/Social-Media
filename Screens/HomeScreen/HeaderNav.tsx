import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import {globalVars, globalStyles} from '../../styles';
import Feather from 'react-native-vector-icons/Feather'
import ProfilePic from './ProfilePic';

const HeaderNav = () => {
    return(
      <View style={styles.headerNav}>
        <Text style={[{fontSize: 25, color: 'black'}]}>GenZocial</Text>
          <View style={styles.topRight}>
          {/* <Feather name='search' size={35} color={globalVars.colors.danger}></Feather> */}
          {/* <TextInput placeholderTextColor={'black'} placeholder='Search For Posts, Creators...' style={styles.search} /> */}
          <TouchableOpacity style={globalStyles.btn}>
            <Text style={{color: 'white', fontSize: 18}}>Create</Text>
          </TouchableOpacity>
          <ProfilePic/>
          </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    headerNav: {
      justifyContent: 'space-between',
      alignItems: 'center', 
      flexDirection: 'row',
      padding: 5,
      height: 60,
      elevation: 5,
      backgroundColor: globalVars.colors.white,
      
    },
    search: {
      borderColor: 'black',
      borderWidth: 0.5,
      borderRadius:30,
      width: 30,
    },
    topRight: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 10,
    }
  });

export default HeaderNav;