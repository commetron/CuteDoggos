import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useDoggosBreeds } from "../hooks/useDoggosBreed";

import { BreedCards } from "../components/BreedCards"

function ListeDoggoScreen (){
  const { data, status } = useDoggosBreeds();
 
  if (status === 'loading') { return <Text>Loading</Text>; }
  if (status === 'error') { return <Text>Error</Text>; }
  const breeds = Object.keys(data.message);

    return( 
      
      <SafeAreaView style={styles.container}>
      
        <FlatList
        data={breeds}
        renderItem={({item}) => <BreedCards content={item}/> }
        keyExtractor={item => item.toString()}
      />
     
    
      </SafeAreaView>
    );
    
  }
  



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });

  export default ListeDoggoScreen;
