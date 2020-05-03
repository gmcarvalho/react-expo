import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDatailPage';
import {NavigationContainer, useLinkProps} from '@react-navigation/native';  
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';


const Stack = createStackNavigator();

export default function App(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pessoas"
           component={PeoplePage}
           options={{
            headerTitle: "Pessoas",
            headerStyle:{
              backgroundColor: '#555'
            },
            headerTitleStyle:{
              color: '#fff'
            },
            headerTitleAlign:"center" 
          }}
          />
          <Stack.Screen name="DetailPage"
           component={PeopleDetailPage}
           options={({ navigation, route }) => {
            const name = route.params?.people.name.first;
            return({
              
              headerTitle: name, 
              headerStyle:{
                backgroundColor: '#555'
              },
              headerTitleStyle:{
                color: '#fff'
              },
              headerTitleAlign:"left",
              headerTintColor: '#fff'
            })
             
            
            }}
          
          />
        </Stack.Navigator>

      </NavigationContainer>
    )
}