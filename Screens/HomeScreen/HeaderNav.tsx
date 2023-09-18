import { View, Text, Button, Image, StyleSheet, TextInput } from 'react-native';

const HeaderNav = () => {
    return(
      <View style={styles.headerNav}>
        <Text>nokoSocial</Text>
        <TextInput placeholder='Search For Posts, Creators...' style={styles.search} />
        <Button
          title="Create"
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
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
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    search: {
      borderColor: 'black',
      borderWidth: 0.5,
    }
  });

export default HeaderNav;