import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Profile } from '../../../components/Proflie';
import { ButtomAdd } from '../../../components/ButtonAdd';
import { ListHeader } from '../../../components/ListHeader';
import { Appointment } from '../../../components/Appointment';
import { CategorySelect } from '../../../components/CategorySelect';
import { ListDivider } from '../../../components/ListDivider';

import { styles } from './styles';

export function Home() {

    const [category, setCategory] = useState('');

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

    return (
        <View>
            <View style={styles.header}>
                <Profile />

                <ButtomAdd />
            </View>

            <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

            <View style={styles.content}>
                <ListHeader title="Partidas Agendadas" subtitle="Total 6" />
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<Appointment data={item} />)}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false} />
            </View>
        </View>
    );
}