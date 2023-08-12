import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import ImageCard from '../Components/ImageCard';
import ImageScreenCard from '../Components/ImageScreenCard';

const ImageScreen = () => {
  const route = useRoute();
  const {categoryData, isLoading, categoryTitle} = route.params;

  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View style={{ margin:13 }} >
        <Text style={{color: '#ffff', fontSize: 18, fontWeight: 'bold'}}>
          {categoryTitle}
        </Text>
      </View>

      <View style={{marginTop: 4 , marginBottom:55}}>
        <FlatList
          data={categoryData}
          renderItem={({item, index}) => (
            <ImageScreenCard item={item} isLoading={isLoading} />
          )}
          keyExtractor={item => item.id}
          // contentContainerStyle={{columnGap: 22}}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
