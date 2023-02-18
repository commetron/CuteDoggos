import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DoggosScreen } from './src/screens/DoggosScreen';


const App = () => {
  return (
    <QueryClientProvider client={new QueryClient}>
      <DoggosScreen />
    </QueryClientProvider>
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

export default App;
