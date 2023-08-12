import {
    ActivityIndicator,
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import ImageBlurLoading from 'react-native-image-blur-loading';
  import {BlurView} from '@react-native-community/blur';
  import { useNavigation } from '@react-navigation/native';
  
  const ImageScreenCard = ({item, isLoading}) => {
    const navigation = useNavigation(); 
  
    // console.log(clickedImg);
  
    const handleClickedImage = () => {
      navigation.navigate('FullScreenImg', {
        ImageData: item, 
      });
    };
  
    return (
      <TouchableOpacity onPress={handleClickedImage}>
        <Image
          style={{
            height: 225,
            width: 158,
            borderRadius: 10,
            backgroundColor: isLoading === true && item.avg_color, 
            margin:10
          }}
          source={{uri: item.src.original}}
        />
      </TouchableOpacity>
    );
  };
  
  export default ImageScreenCard;
  
  const styles = StyleSheet.create({});
  