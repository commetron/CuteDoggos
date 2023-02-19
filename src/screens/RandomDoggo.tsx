import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import DoggosScreen from './DoggosScreen';

export default function RandomDoggo(){
    return (
      <QueryClientProvider client={new QueryClient}>
        <DoggosScreen/>
      </QueryClientProvider>
    );
  }