import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {

    const uri = 'https://w7.pngwing.com/pngs/448/687/png-transparent-discord-computer-icons-teamspeak-logo-chat-room-logo-miscellaneous-blue-rectangle-thumbnail.png';

    return (
        <Image source={{ uri }} style={styles.image} resizeMode='cover' />
    );
}