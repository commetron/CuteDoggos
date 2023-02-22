import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import StackScreenNavigator from "../navigations/StackScreenNavigator";


export default function ListeDoggo(){
    return (
      <QueryClientProvider client={new QueryClient}>
        <StackScreenNavigator />
      </QueryClientProvider>
    );
  }