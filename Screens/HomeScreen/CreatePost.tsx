import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import ProfilePic from './ProfilePic'
import { globalStyles, globalVars } from '../../styles'

const CreatePost = ():JSX.Element => {
  return (
    <View style={styles.createPost}>
        <ProfilePic/>
        <TextInput style={styles.txtInput}></TextInput>
        <TouchableOpacity style={globalStyles.btn}>
            <Text style={{color: 'white', fontSize: 18}}>Post</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    createPost: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: 40,
        // margin: 7,
        // paddingVertical: 4,
        // paddingHorizontal: 50,
    },
    txtInput: {
      // borderWidth: 2, 
      backgroundColor: globalVars.colors.white,
      height: 50, 
      width: '50%',
      paddingHorizontal: 50,
      left: -50,
      zIndex: -5,
      
      
    }
})

export default CreatePost