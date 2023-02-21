import { StyleSheet, View, Text, SafeAreaView, FlatList, Dimensions } from "react-native";
import React from "react";
import { useDoggosBreeds } from "../hooks/useDoggosBreed";
import { Card } from "react-native-paper";



const Item = ({content}: any) => (
  <Card style={styles.card}>
    <Card.Title title="Race" />
    <Card.Content>
      <Text>{content}</Text>
    </Card.Content>
  </Card>
);
const ListeDoggoScreen = () =>{
  const { data, status } = useDoggosBreeds();
 
  if (status === 'loading') { return <Text>Loading</Text>; }
  if (status === 'error') { return <Text>Error</Text>; }
  const breeds = Object.keys(data.message);

    return( 
      <SafeAreaView style={styles.container}>
        <FlatList
        data={breeds}
        renderItem={({item}) => <Item content={item}/> }
        keyExtractor={item => item.toString()}
      />
      </SafeAreaView>
    );
    
  }
  

  const largeurMaximale = Dimensions.get('screen').width;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
      flex:1,
      width: largeurMaximale,
      marginTop: 5
      
    }
  });

export default ListeDoggoScreen