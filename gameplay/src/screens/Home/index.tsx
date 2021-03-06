import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtomAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Proflie';

import { styles } from './styles';

export function Home() {

    const [category, setCategory] = useState('');
    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ];

    /** Função para marcar ou desmarcar item da lista */
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    /** Função para ir para uma rota quando selecionar o btn */
    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    /** Função para ir para uma rota quando selecionar o btn */
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />

                <ButtomAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

            <ListHeader title="Partidas Agendadas" subtitle="Total 6" />


            <FlatList data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<Appointment data={item} onPress={handleAppointmentDetails} />)}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 69 }} />
        </Background>
    );
}