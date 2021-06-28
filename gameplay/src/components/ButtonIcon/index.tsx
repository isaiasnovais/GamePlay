import React from 'react';

import {  View, Image, Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';

import { styles } from './styles';

// Receber as propiedades do Props + RectButtonProperties p/ minha função
type Props = RectButtonProperties & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest} // pega todas as propriedades passada no button
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}></Image>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}