import React from 'react';
import { Text } from 'react-native';

import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import { styles } from './styles';

// Receber as propiedades do Props + RectButtonProperties p/ minha função
type Props = RectButtonProperties & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        // {...rest} pega todas as propriedades passada no button

        <RectButton style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </RectButton>
    );
}