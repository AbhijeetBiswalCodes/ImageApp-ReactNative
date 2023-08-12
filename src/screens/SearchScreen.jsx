import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text, 
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useFetch from '../Hooks/useFetch';
import ImageScreenCard from '../Components/ImageScreenCard';
// import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'; 

const SearchScreen = () => {
  const textInputRef = useRef();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState(null); 
  const { data, isLoading, error, refetch } = useFetch(
    `search?query=${searchQuery}`,
  );

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  const onSearch = () => {
    refetch();
  };

  console.log(searchQuery); 

  return (
    <View style={{ backgroundColor: '#000', height: '100%' }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search for images"
          placeholderTextColor="#686869"
        />

        <TouchableOpacity
          onPress={onSearch}
          style={styles.searchIconContainer}
        >
          <Icon name="search-outline" size={22} color="#000" />
        </TouchableOpacity> 
      </View>

      <View style={{ marginTop: 4, marginBottom: 55 }}>
        {searchQuery && ( 
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <ImageScreenCard item={item} isLoading={isLoading} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        )}

        {!searchQuery && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '50%',
            }}
          >
            <Image
              style={{ height: 190, width: 250 }}
              source={require('../../assets/illustration.png')}
            />
          </View>
        )}
      </View>
    </View>
  );
}; 

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2b2b',
    paddingHorizontal: 16,
    height: 58,
  },
  textInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
  },
  searchIconContainer: {
    marginLeft: 8,
    backgroundColor: '#ffff',
    height: 35,
    width: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  clearIconContainer: {
    marginLeft: 8,
  },
});
