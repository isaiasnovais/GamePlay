import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { RectButton } from 'react-native-gesture-handler';

import { Text, View, ScrollView, KeyboardAvoidingView, Platform, Modal } from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { Background } from '../../components/Background';
import { GuildIcon } from '../../components/GuildIcon';
import { SmalInput } from '../../components/SmalInput';
import { ModalView } from '../../components/ModalView';
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Guilds } from '../Guilds';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function AppointmentCreate() {

    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    /**Função para abrir o modal */
    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    /**Função para selecionar a guild */
    function handleGuildSelected(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    return (
        // Verificando se é ios ou andrid, com isso muda o layout quando for digitar
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}


        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <Header title="Agendar Partida" />

                <Text style={[styles.label, { marginLeft: 24, marginTop: 38, marginBottom: 18 }]} >Categoria</Text>

                <CategorySelect hasCheckBox setCategory={setCategory} categorySelected={category} />

                <View style={styles.form} >
                    <RectButton onPress={handleOpenGuilds} >
                        <View style={styles.select}>
                            {
                                guild.icon ? <GuildIcon /> : <View style={styles.image} />

                            }

                            <View style={styles.selectBody} >
                                <Text style={styles.label}> {guild.name ? guild.name : 'Selecione um servidor'} </Text>
                            </View>

                            <Feather name="chevron-right" color={theme.colors.heading} size={18} />

                        </View>
                    </RectButton>

                    <View style={styles.field} >
                        <View>
                            <Text style={styles.label} > Dia e Mês </Text>

                            <View style={styles.column} >
                                <SmalInput maxLength={2} />
                                <Text style={styles.divider} > / </Text>
                                <SmalInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label} > Hora </Text>

                            <View style={styles.column} >
                                <SmalInput maxLength={2} />
                                <Text style={styles.divider} > : </Text>
                                <SmalInput maxLength={2} />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.field, { marginBottom: 12 }]}>
                        <Text style={styles.label} > Descrição </Text>
                        <Text style={styles.caracteresLimit} > Max 100 caracteres  </Text>
                    </View>

                    <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />

                    <View style={styles.footer} >
                        <Button title="Agendar" />
                    </View>
                </View>
            </ScrollView>

            <ModalView visible={openGuildsModal}>

                <Guilds handleGuildSelected={handleGuildSelected} />

            </ModalView>
        </KeyboardAvoidingView>
    );
}