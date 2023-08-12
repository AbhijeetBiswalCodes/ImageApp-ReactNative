import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import categories from '../utils/Constants';
import useFetch from '../Hooks/useFetch';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(); 
  const [categoryData, setCategoryData] = useState([]);
  const {data, isLoading, error, refetch} = useFetch(
    `search?query=${selectedCategory}`,
  );
  const navigation = useNavigation();  

  console.log(selectedCategory);

  const handleCategorySelection = categoryId => {
    setSelectedCategory(categoryId);
  }; 

  useEffect(() => {
    if (selectedCategory) {
      navigation.navigate('ImageScreen', {categoryData: data , isLoading:isLoading , categoryTitle:selectedCategory});
    } 
  }, [data]);

  useEffect(() => {
    refetch(); // Trigger the API call when selectedCategory changes
  }, [selectedCategory]);

  return (
    <View style={{margin: 18}}>
      <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 18}}>
        Categories
      </Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {categories.map((items, i) => (
            <TouchableOpacity
              key={i}
              style={{marginRight: 22}}
              onPress={() => handleCategorySelection(items?.title)}>
              <ImageBackground
                style={{height: 170, width: 149}}
                imageStyle={{borderRadius: 10}}
                source={{uri: items.img_url}}>
                <Text
                  style={{
                    color: '#ffff',
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginTop: 'auto',
                    marginLeft: 10,
                    marginBottom: 10,
                  }}>
                  {items.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
