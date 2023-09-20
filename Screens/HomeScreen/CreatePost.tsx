import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import ProfilePic from './ProfilePic'
import { globalStyles, globalVars } from '../../styles'

const CreatePost = ():JSX.Element => {
  return (
    <View style={styles.createPost}>
        <ProfilePic/>
        <TextInput placeholder={`What's on your mind Lana?`} style={styles.txtInput}></TextInput>
        <TouchableOpacity style={[globalStyles.btn,{width: 80}]}>
            <Text style={{color: 'white', fontSize: 18}}>Post</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    createPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: globalVars.colors.white,
        alignItems: 'center',
        margin: 7,
        paddingHorizontal: '2%',
        paddingVertical: 4,
        borderRadius: 20,
    },
    txtInput: {
      flex: 1,
      paddingLeft: 5,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: 'transparent',
      color: globalVars.colors.dark,
      height: 50, 
      
      
    }
})

export default CreatePost