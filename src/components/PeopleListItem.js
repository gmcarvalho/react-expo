import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


const PeopleListItem = props => {
    const {people, navigateToPeopleDatil} = props;
    const {title, first, last} = people.name;
    return (
        
            <TouchableOpacity onPress={() => {
                navigateToPeopleDatil({people});
                }}>
                <View style={styles.line}>
                    <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
                    <Text style={styles.lineText}>
                        { `${title} ${first} ${last}` }
                    </Text>
                </View>
            </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        marginLeft: 5,
        aspectRatio: 1,
        flex: 1,
        borderRadius: 50
    }
});

export default PeopleListItem;