import React from 'react';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar, LogBox } from 'react-native';

import { Routes } from './src/routes';

import { AuthProvider } from './src/hooks/auth';

import { Background } from './src/components/Background';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine']);

/** Aqui é a inicialização do app , Splash */
/** Então na tela de carregamento, tudo que não foi carregado ou baixado vai ser feito aqui */
export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // Somente inicializar o app, quando carregar as fontes.
  if (!fontsLoaded) {
    return <AppLoading /> /** Segura a tela de Splash */
  }


  return (
    <Background>

      <StatusBar backgroundColor="transparent" translucent />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );

}