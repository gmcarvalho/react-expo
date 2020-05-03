import React from 'react';
import { View, FlatList, Text, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem';


const PeopleList = (props) => {
    const {peoples, onPressItem} = props;
    return (
        //O FlatList trabalha de forma mais perfomática que o ScrollView, 
        //ele utilzia o componente em tela e vai renderizando outros itens da lista sobe demanda
        <FlatList style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem 
                    people={item}
                    navigateToPeopleDatil={onPressItem} />
            )}
            keyExtractor={item => item.name.first}
         />
            
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
    }
});

export default PeopleList;