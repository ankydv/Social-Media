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
import AddComment from '../HomeScreen/AddComment';

const screenHeight = Dimensions.get('window').height;

const CommentModal = ({onClose}: {onClose: any}) => {
  const [dragged, setDragged] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        // console.warn(gestureState.y0);
        if (evt.nativeEvent.pageY < 315) return true;
        return false;
      },
      onMoveShouldSetPanResponder: () => {
        // console.warn('test');
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          setDragged(true);
          translateY.setValue(gestureState.dy);
          translateX.setValue(5 * gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // console.warn(gestureState.vy)
        if ((!dragged && gestureState.dy > 200) || gestureState.vy > 3.5) {
          Animated.timing(translateY, {
            toValue: screenHeight * 0.7,
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
    <Animated.View
      style={[{transform: [{translateY}]}, styles.container]}
      {...panResponder.panHandlers}>
      <View style={styles.scrollBox}>
      <Text style={{fontSize:20, fontFamily: 'sans-serif',fontWeight: 'bold'}}>Comments</Text>
        <View style={{height: 5, width: '30%',borderTopLeftRadius: 20,borderTopRightRadius:20,backgroundColor: globalVars.colors.danger}}></View>
        
      </View>
      <View style={styles.commentBox}>
        <View style={styles.postBox}></View>
     
        <AddComment />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    overflow: 'hidden',
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
  scrollBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    backgroundColor: '#D5D4EF',
    height: '5%',
    minHeight: screenHeight * 0.7 * 0.08,
    width: '100%',
    elevation: 15,
  },
  commentBox: {
    width: '100%',
    height: '75%',
  },
  postBox: {},
});

export default CommentModal;
