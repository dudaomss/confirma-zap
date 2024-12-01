import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './src/pages/Login';
import Homepage from './src/pages/Homepage';
import Config from './src/pages/Config';
import DetailsAgenda from './src/pages/DetailsAgenda';
import NewAgenda from './src/pages/NewAgenda';
import Cadastro from './src/pages/Cadastro';
import { EventProvider } from './src/context/EventContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();

  return (
    <EventProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 }, // Ajusta a altura para acomodar o botão
        }}
      >
        <Tab.Screen
          name="Agenda"
          component={Homepage}
          options={{
            headerStyle: { backgroundColor: '#f48634' },
            headerTintColor: '#fff',
            tabBarActiveTintColor: '#f48634',
          }}
        />
        <Tab.Screen
          name="Novo agendamento"
          component={NewAgenda}
          options={{
            headerStyle: { backgroundColor: '#f48634' },
            headerTintColor: '#fff',
            tabBarLabel: '',
            tabBarIcon: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Novo agendamento')}
                style={{
                  backgroundColor: '#f48634',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>+</Text>
              </TouchableOpacity>
            ),
            tabBarStyle: { position: 'absolute', height: 70 }, // Ajusta o estilo da barra para acomodar o botão
          }}
        />
        <Tab.Screen 
        name="Configurações"
        component={Config}
        options={{
          headerStyle: { backgroundColor: '#f48634' },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#f48634',
        }}
        />
      </Tab.Navigator>
    </EventProvider>
  );
}

export default function App() {
  return (
    <EventProvider>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('Login')} 
                title="Voltar" 
                color="#000" 
              />
            ),
            headerStyle: { backgroundColor: '#f48634' },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen 
          name="Home" 
          component={MyTabs}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: '#f48634' }, // Define a cor da header
            headerTintColor: '#fff', // Define a cor do texto (opcional)
          }} 
        />
        <Stack.Screen 
          name="Detalhe do agendamento" 
          component={DetailsAgenda}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('Home')} 
                title="Voltar" 
                color="#000" 
              />
            ),
            headerStyle: { backgroundColor: '#f48634' }, // Define a cor da header
            headerTintColor: '#fff', // Define a cor do texto (opcional)
          })}
        />
        <Stack.Screen 
          name="Novo agendamento" 
          component={NewAgenda}
          options={{
            headerStyle: { backgroundColor: '#f48634' }, // Define a cor da header
            headerTintColor: '#fff', // Define a cor do texto (opcional)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </EventProvider>
  );
}