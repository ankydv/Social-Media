import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import {globalVars, globalStyles} from '../../styles';
import Feather from 'react-native-vector-icons/Feather'

const HeaderNav = () => {
    return(
      <View style={styles.headerNav}>
        <Text style={[{fontSize: 25}, globalStyles.txt]}>GenZocial</Text>
          <View style={styles.topRight}>
          {/* <Feather name='search' size={35} color={globalVars.colors.danger}></Feather> */}
          {/* <TextInput placeholderTextColor={'black'} placeholder='Search For Posts, Creators...' style={styles.search} /> */}
          <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', fontSize: 18}}>Create</Text>
          </TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1582164838301-3454c11a7523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0NTM3Mzg3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            }}
          />
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
    image: {
      width: 40,
      height: 40,
      borderRadius: 30,
    },
    search: {
      borderColor: 'black',
      borderWidth: 0.5,
      borderRadius:30,
      width: 30,
    },
    btn: {
      backgroundColor: globalVars.colors.danger,
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      borderBottomRightRadius: 4,

    },
    topRight: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 10,
    }
  });

export default HeaderNav;