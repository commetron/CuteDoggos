import React from "react";
import { Button, Text } from "react-native-paper";

export const RefreshingButton = ({ refetch }: any) => {
    return (
        <Button onPress={refetch}>
            Bite
        </Button>
    );
};

