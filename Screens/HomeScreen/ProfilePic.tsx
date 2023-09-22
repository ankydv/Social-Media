import React from 'react';
import {Image} from 'react-native';

interface EmployeeProps {
  width?: number; // 👈️ marked optional
  height?: number;
  img?: string; // 👈️ marked optional
}

const ProfilePic = ({
  width = 40,
  height = 40,
  img = 'https://images.unsplash.com/photo-1582164838301-3454c11a7523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0NTM3Mzg3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
}: EmployeeProps) => {
  const styles = {
    image: {
      width: width,
      height: height,
      borderRadius: 30,
    },
  };

  return (
    <Image
      style={styles.image}
      source={{
        uri: img,
      }}
    />
  );
};

export default ProfilePic;
