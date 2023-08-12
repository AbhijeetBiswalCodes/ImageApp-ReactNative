import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Alert, 
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';
// import PushNotification from 'react-native-push-notification';
import Toast from 'react-native-toast-message';

const FullScreenImg = () => {
  const route = useRoute();
  const {ImageData} = route.params;

  const handleImageDownload = async imageUri => {
    try { 

      Toast.show({
        type: 'info',
        position: 'top',
        text1: 'Downloading...',
        visibilityTime: 1000,
        autoHide: false, 
      }); 

      const dirs = RNFetchBlob.fs.dirs;
      const timestamp = new Date().getTime();
      const fileName = `downloaded_image_${timestamp}.jpg`;
      const filePath = `${dirs.DownloadDir}/${fileName}`;

      const response = await RNFetchBlob.config({
        path: filePath,
      }).fetch('GET', imageUri);

      if (response.respInfo.status === 200) {
        console.log('File downloaded successfully:', response.path());

        // Display a notification
        // PushNotification.localNotification({
        //   channelId: 'default',
        //   title: 'Download Complete',
        //   message: 'Image has been downloaded successfully.',
        // });

        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Download Complete',
          text2: 'Image has been downloaded successfully.',
          visibilityTime: 3000,
          autoHide: true,
        });
      } else {
        console.error('Download failed:', response.respInfo.status); 
      }
    } catch (error) {
      console.error('Download error:', error); 

      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Download failed', 
        text2:'check your internet connection' ,
        visibilityTime: 2000,
        autoHide: true, 
      });
    }
  };

  console.log(ImageData);

  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
          alignItems: 'center',
        }}
        source={{uri: ImageData?.src?.original}}>
        <TouchableOpacity
          onPress={() => handleImageDownload(ImageData.src.original)}
          activeOpacity={0.7}
          style={{
            backgroundColor: '#000',
            height: 55,
            width: '70%',
            marginTop: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginBottom: 18,
          }}>
          <Text style={{color: '#ffff'}}>Download</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default FullScreenImg;

const styles = StyleSheet.create({});
