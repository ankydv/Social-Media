// CommentModal.js
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {globalVars} from '../../styles';
import Entypo from 'react-native-vector-icons/Entypo';

const CommentModal = ({onClose}: {onClose: any}) => {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
      <TouchableOpacity onPress={onClose} style={styles.cross}>
        <Entypo name="cross" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: globalVars.colors.white,
    bottom: 0,
    width: '100%',
    height: '70%',
  },
  cross: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default CommentModal;
