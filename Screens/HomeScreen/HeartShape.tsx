import React, {useState, ReactElement} from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';

interface HeartProps {
  style?: object;
}

interface AnimatedHeartProps {
  onComplete: () => void;
  style?: object;
}

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const ANIMATION_END_Y = Math.ceil(deviceHeight * 0.5);
const NEGATIVE_END_Y = ANIMATION_END_Y * -1;
let startCount = 1;

const getRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const Heart = ({style}: HeartProps): ReactElement => {
  return (
    <View {...{style}}>
      {/* <View style={styles.heartShape} />
      <View style={styles.heartShapeFilled} /> */}
      <Foundation
        name="heart"
        style={{color: 'red', position: 'relative', top: 24, right: 5}}
        size={20}
      />
      <Foundation
        name="heart"
        style={{color: 'red', position: 'relative', top: 18, left: 2}}
        size={20}
      />
      <Foundation
        name="heart"
        style={{color: 'red', position: 'relative', top: 12, left: 20}}
        size={20}
      />
      <Foundation
        name="heart"
        style={{color: 'red', position: 'relative', top: 10, right: 10}}
        size={20}
      />
      <Foundation
        name="heart"
        style={{color: 'red', position: 'relative', top: 6, right: 25}}
        size={20}
      />
      <Foundation
        name="heart"
        style={{color: 'red', position: 'relative', top: 2, left: 15}}
        size={20}
      />
    </View>
  );
};

const AnimatedHeart = ({
  onComplete,
  style,
}: AnimatedHeartProps): ReactElement => {
  const [position] = useState(new Animated.Value(0));

  const _yAnimation = position.interpolate({
    inputRange: [NEGATIVE_END_Y, 0],
    outputRange: [ANIMATION_END_Y, 0],
  });

  const _opacityAnimation = _yAnimation.interpolate({
    inputRange: [0, ANIMATION_END_Y],
    outputRange: [1, 0],
  });

  const _scaleAnimation = _yAnimation.interpolate({
    inputRange: [0, 15, 30],
    outputRange: [0, 1.2, 1],
    extrapolate: 'clamp',
  });

  const _xAnimation = _yAnimation.interpolate({
    inputRange: [0, ANIMATION_END_Y / 2, ANIMATION_END_Y],
    outputRange: [0, 15, 0],
  });

  const _rotateAnimation = _yAnimation.interpolate({
    inputRange: [
      0,
      ANIMATION_END_Y / 4,
      ANIMATION_END_Y / 3,
      ANIMATION_END_Y / 2,
      ANIMATION_END_Y,
    ],
    outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg'],
  });

  Animated.timing(position, {
    duration: 2000,
    toValue: NEGATIVE_END_Y,
    useNativeDriver: false,
  }).start(onComplete);

  const getHeartAnimationStyle = () => {
    return {
      transform: [
        {translateY: position},
        {translateX: _xAnimation},
        {scale: _scaleAnimation},
        {rotate: _rotateAnimation},
      ],
      opacity: _opacityAnimation,
    };
  };

  return (
    <Animated.View style={[styles.heartWrap, getHeartAnimationStyle(), style]}>
      <Heart />
    </Animated.View>
  );
};

const HeartFloater = React.forwardRef((props, ref:any) => {
  const [hearts, setHearts] = useState<{id: number; right: number}[]>([]);

  const addHeart = () => {
    startCount += 1;
    setHearts(prevHearts => [
      ...prevHearts,
      {
        id: startCount,
        right: getRandomNumber(50, 150),
      },
    ]);
  };

  const removeHeart = (id: number) => {
    setHearts(prevHearts => prevHearts.filter(heart => heart.id !== id));
  };
  React.useImperativeHandle(ref, () => ({
    addHeart
  }));

  return (
    <View style={styles.container}>
        <View style={styles.container}>
          {hearts.map((heart, index) => (
            <AnimatedHeart
              key={heart.id}
              onComplete={() => removeHeart(heart.id)}
              style={{right: hearts[index].right}}
            />
          ))}
        </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heartWrap: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent',
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1',
  },
  heartShapeFilled: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1',
    transform: [{rotate: '45deg'}],
  },
});

export default HeartFloater;
