import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {

    const uri = 'https://thebusinessofesports.com/wp-content/uploads/2021/04/unnamed.jpg';

    return (
        <Image source={{ uri }} style={styles.image} resizeMode='cover' />
    );
}