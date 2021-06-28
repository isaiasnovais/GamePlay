import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';

/** Controle de routes */
export function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}