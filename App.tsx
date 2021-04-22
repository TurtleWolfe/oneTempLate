import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    CharterBold: require('./app/assets/fonts/CharterBold.otf'),
    CharterBoldItalic: require('./app/assets/fonts/CharterBoldItalic.otf'),
    CharterItalic: require('./app/assets/fonts/CharterItalic.otf'),
    CharterRegular: require('./app/assets/fonts/CharterRegular.otf'),
    SpaceMono: require('./app/assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
