// CommentModal.jstranslateY
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  PanResponder,
  Dimensions,
} from 'react-native';
import {globalVars} from '../../styles';
import Entypo from 'react-native-vector-icons/Entypo';

const CommentModal = ({onClose}: {onClose: any}) => {
  const [dragged, setDragged] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const screenHeight = Dimensions.get('window').height;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        // console.warn(gestureState.y0);
        if(evt.nativeEvent.pageY < 315)
          return true;
        return false;
      },
      onMoveShouldSetPanResponder: () => {console.warn('test'); return true},
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          setDragged(true);
          translateY.setValue(gestureState.dy);
          translateX.setValue(5*gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // console.warn(gestureState.vy)
        if (!dragged && gestureState.dy > 200 || gestureState.vy>3.5) {
          Animated.timing(translateY, {
                toValue: screenHeight*0.7,
                duration: 300,
                useNativeDriver: true,
              }).start(onClose);
              // onClose();
        } else {
          Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true, // Add this line for performance
          }).start();
      }
        // if (gestureState.dy < -50) {
        //   Animated.timing(translateY, {
        //     toValue: 0,
        //     duration: 300,
        //     useNativeDriver: false,
        //   }).start();
        // }
        // else {
        //   Animated.timing(translateY, {
        //     toValue: 0,
        //     duration: 300,
        //     useNativeDriver: false,
        //   }).start();
        // }
        setDragged(false);
      },
    }),
  ).current;

  const handleTap = () => {
    setDragged(true);
    Animated.timing(translateY, {
      toValue: -300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={[{transform: [{translateY}]},styles.container]} {...panResponder.panHandlers}>
      <View style={{position: 'absolute', top: 0,backgroundColor: 'red', height: '10%', width: '100%'}}></View>
      <TouchableOpacity>
        <Text> ujhkiregjhufdriuoj </Text>
      </TouchableOpacity>
      <Text>Comments</Text>
      <Text style={{color: 'black'}}>
        iuojhrfiojuegrioureiuoreiourejioutdgiurgjiuhrgiureiuojregiuoriureuhirgiu89yreiuyh
      </Text>
    </Animated.View>
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
