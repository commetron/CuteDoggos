import { Card } from 'react-native-paper';
import { Text, Image } from "react-native";
import * as React from "react";

interface ItemProps {
    item: {
        id: string
        url: string
    }
};

export const Cards = ({ item }: ItemProps) => (
    <Card>
        <Card.Title title={item.id} />
        <Card.Content>
            <Image source={{
                uri: item.url
            }}
                style={{ width: 200, height: 200 }}
            />
        </Card.Content>
    </Card>
);
