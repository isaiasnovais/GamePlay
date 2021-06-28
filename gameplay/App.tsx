import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

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
      <StatusBar
        // barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </Background>
  );

}