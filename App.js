import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';

const DATA = [
  {
    
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'first Item',
    imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    sub_title:'sub item first',
  },
   
  {
    id: '1212acdcsc',
    title:'second item',
    imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    sub_title:'sub item second',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    sub_title:'sub item third',
  },
  {
    id:'asdfgh142434',
    title:'fourth item',
    imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    sub_title:'sub item fourth',
  }
];


const App = () =>{

  
  const renderItem = ({ item }) => ( 
    <View
     style={styles.item}>
       <Image style={
      styles.picture
    }  source={{uri:item.imageurl}}></Image>
    <View>
    <Text style={styles.title}>{item.title}</Text>
    <Text style ={styles.sub_title}>{item.sub_title}</Text>
    </View>
    
  </View>
  );


  return (
  
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    flexDirection:'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  picture:{
    height:50,
    width:50,
  }
});

export default App;