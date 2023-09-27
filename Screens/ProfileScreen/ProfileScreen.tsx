import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Canvas,
  Fill,
  BackdropBlur,
  Image,
  ColorMatrix,
  useImage,
} from '@shopify/react-native-skia';
import {globalVars} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList, Text, View, Image as RNImage, ScrollView,StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const ProfileScreen = () => {

  const image = useImage(
    'https://images.unsplash.com/photo-1694445083738-1e1f6104e9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  );

  const imgArr = Array(10).fill({
    image: `https://picsum.photos/1440/2842?random=1`,
  });

  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

  const slideList = imgArr.map((obj, i) => {
    return {
      id: i,
      image: obj.image,
      title: `This is the title! ${i + 1}`,
      subtitle: `This is the subtitle ${i + 1}!`,
      txt: 'ankitttt',
    };
  });


  const Slide = ({data}: {data: any})=> {
    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RNImage
          source={{uri: data.image}}
          style={{height: windowHeight, width: windowWidth}}
        />

        <Text style={{fontSize: 24}}>{data.title}</Text>
        <Text style={{fontSize: 18}}>{data.subtitle}</Text>
      </View>
    );
  }

  function Carousel() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback(
      (event: {
        nativeEvent: {
          layoutMeasurement: {width: any};
          contentOffset: {x: number};
        };
      }) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
          setIndex(roundIndex);
        }
      },
      [],
    );

    // Use the index
    // useEffect(() => {
    //   console.warn(index);
    // }, [index]);

    return (
      <FlatList
        data={slideList}
        style={{flex: 1}}
        renderItem={({item}) => {
          return <Slide data={item} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    );
  }

  return (
    <ScrollView>
      <Canvas style={{width: 256, height: 256}}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        <BackdropBlur blur={4} clip={{x: 0, y: 200, width: 110, height: 50}}>
          <Fill color="rgba(197, 154, 125, 0.2)" />
        </BackdropBlur>
      </Canvas>

      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',

          bottom: 50,
          padding: 5,
          zIndex: 999,
        }}>
        <MaterialCommunityIcons
          name="heart-multiple-outline"
          size={30}
          color={globalVars.colors.white}
        />
        <Ionicons
          name="chatbubbles-outline"
          size={30}
          color={globalVars.colors.white}
        />
        <FontAwesome name="send-o" size={30} color={globalVars.colors.white} />
      </View>

      <View style={{width: windowWidth, height:300}}>
        <Carousel />
      </View>
      <View style={{ flex: 1 }} nativeID="myViewTag">
    {/* Your content here */}
      </View>



    </ScrollView>
  );
};




const styles = StyleSheet.create({
 
});

export default ProfileScreen;
