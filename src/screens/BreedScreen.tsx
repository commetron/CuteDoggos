import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { ComponentNavigationProps } from "../navigations/Routes";
import { useQuery } from "react-query";


export default function BreedScreen(props: ComponentNavigationProps) {

  const content = props?.route?.params?.content;
  const [URI, setUri] = useState();
  const { status, data } = useQuery(['breed'], () => fetch(`https://dog.ceo/api/breed/${content}/images/random`)
    .then(response => response.json())
    .then(data => {
      setUri(data.message)
    }))


  if (status === 'loading') { return <Text>Loading</Text>; }
  if (status === 'error') { return <Text>Error</Text>; }



  return (
    <View style={style.container}>
      <Image source={{ uri: URI }} style={style.image} />
    </View>
  );
}

const largeurMaximale = Dimensions.get('screen').width;
const hauteurMaximale = Dimensions.get('screen').height;
const style = StyleSheet.create({
  image: { width: largeurMaximale, height: hauteurMaximale, resizeMode: 'contain' },
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
})