import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetch from '../Hooks/useFetch';
import ImageCard from '../Components/ImageCard';
import Category from '../Components/Category';
import {fetchDataFromApi} from '../utils/api';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const {data, isLoading} = useFetch('curated');

  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <ScrollView>
        <ImageBackground
          style={{
            height: 280,
            weight: 250,
            borderBottomRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={{
            uri: 'https://images.pexels.com/photos/32997/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          }}>
          
            <Text style={{color: '#ffff', fontSize: 25, fontWeight: 'bold'}}>
              Checkout High Quality
            </Text>
            <Text style={{color: '#ffff', fontSize: 25, fontWeight: 'bold'}}>
              Images
            </Text>
            <TextInput
              onPressIn={() => navigation.navigate('SearchScreen')}
              style={{
                backgroundColor: '#2a2b2b',
                width: '80%',
                height: 58,
                borderRadius: 14,
                marginTop: 35,
                paddingLeft: 22,
                paddingRight: 8,
                zIndex: 1,
              }}
              placeholder="Search for images"
              placeholderTextColor="#686869"
            /> 
            <LinearGradient
             colors={['rgba(4, 21, 45, 0)', '#000']} // Colors array with the gradient
             locations={[0, 0.8017]} // Locations array that corresponds to the colors array
            style={styles.blendOverlay}/>
          
        </ImageBackground>

        <View style={{margin: 10}}>
          <Text style={{color: '#ffff', fontSize: 18, fontWeight: 'bold'}}>
            Top picks for you
          </Text>

          <View style={{marginTop: 25}}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <ImageCard item={item} isLoading={isLoading} />
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={{columnGap: 22}}
              horizontal
            />
          </View>
        </View>
        <Category />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  blendOverlay: {
    position:'absolute' , 
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // Adjust the height as per your requirement for the blending effect
    
  },
});
