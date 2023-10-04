import React, {useRef, useState} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewBase,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    height: windowWidth,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {width: windowWidth, height: windowWidth},
  slideTitle: {fontSize: 24},
  slideSubtitle: {fontSize: 18},

  pagination: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: 'lightblue'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {flex: 1},
});

const slideList = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1694445083738-1e1f6104e9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    image:
      'https://plus.unsplash.com/premium_photo-1674326713056-e458f42535fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

function Pagination({index}) {
  // console.warn(index)
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [tapCount, setTapCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  function Slide({data}) {
    // console.warn(data)
    const handleDoubleTap = () => {
      setTapCount(tapCount + 1);

      if (tapCount === 1) {
        setTapCount(0);
        setIsLiked((prev) => !prev);
        return;
      } else {
        setTimeout(() => {
          setTapCount(0);
        }, 300);
      }
    };
    return (
      <TouchableOpacity activeOpacity={1} onPress={handleDoubleTap}>
        <View style={styles.slide}>
          <Image source={{uri: data.image}} style={styles.slideImage} />
        </View>
      </TouchableOpacity>
    );
  }

  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);

  indexRef.current = index;

  const onScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  };

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: item => String(item.id),
    getItemLayout: (_, index) => ({
      index,
      length: windowWidth,
      offset: index * windowWidth,
    }),
  };

  return (
    <>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={({item}) => {
          return <Slide data={item} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      {!isLiked ? (
        <Fontisto
          name="heart-alt"
          style={{color: 'white', position: 'absolute', top: 10, right: 15}}
          size={15}
        />
      ) : (
        <Foundation
          name="heart"
          style={{color: 'red', position: 'absolute', top: 7, right: 15}}
          size={20}
        />
      )}
      <Pagination index={index} />
    </>
  );
}
