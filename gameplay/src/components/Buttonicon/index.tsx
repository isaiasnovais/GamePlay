import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Image, Text } from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './style';

// Receber as propiedades do Props + TouchableOpacityProps p/ minha função
type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest} // pega todas as propriedades passada no button
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}></Image>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}