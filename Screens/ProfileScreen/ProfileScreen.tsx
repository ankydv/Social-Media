import React from 'react';
import {
  Canvas,
  Fill,
  BackdropBlur,
  Image,
  ColorMatrix,
  useImage,
} from "@shopify/react-native-skia";
const ProfileScreen = () => {
  const image = useImage('https://images.unsplash.com/photo-1694445083738-1e1f6104e9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
 
  return (
    <Canvas style={{ width: 256, height: 256 }}>
      <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
      <BackdropBlur blur={4} clip={{ x: 0, y: 128, width: 256, height: 128 }}>
        <Fill color="rgba(0, 0, 0, 0.2)" />
      </BackdropBlur>
    </Canvas>
  );
};
export default ProfileScreen;
