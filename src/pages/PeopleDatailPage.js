import React from 'react';
import {View, ScrollView, Text, Button, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';

export default class PeopleDatailPage extends React.Component{
    render(){
        const {people} = this.props.route.params;

        return(

            <ScrollView style={styles.container}>
                <Image  source={{uri: people.picture.large}}
                    style={ styles.avatar}/>
                <View style={styles.detailContainer}>
                    <Line label="Email:" content={people.email}/>
                    <Line label="Cidade:" content={people.location.city}/>
                    <Line label="Estado:" content={people.location.state}/>
                    <Line label="Tel:" content={people.phone}/>
                    <Line label="Cell:" content={people.cell}/>
                    <Line label="Nacionalidade:" content={people.nat}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    avatar:{
        aspectRatio: 1
    },
    container:{
        padding: 15
    },
    detailContainer:{
        backgroundColor: '#f5f5f5',
        marginTop: 20,
        elevation: 1
    }
});