import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import DoggosScreen from './DoggosScreen';
import ListeDoggoScreen from "./ListeDoggoScreen";

export default function ListeDoggo(){
    return (
      <QueryClientProvider client={new QueryClient}>
        <ListeDoggoScreen />
      </QueryClientProvider>
    );
  }