import React from "react";
import { Button } from "react-native";

const RefreshingButton = ({ refetch }: any) => {
    return (
        <Button
  onPress={refetch}
  title="New doggo !"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
             
    );
};

export default RefreshingButton;

