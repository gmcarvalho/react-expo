import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    };
  }

  componentDidMount(){ //Esse método executa apenas quando o componente for montado
    this.setState({
      loading: true
    });
    //Esse setTimeout é só para demonstrar o loading 
    setTimeout(()=>{
      /**
       * 
       * Promises
       */
      axios
      .get('https://randomuser.me/api/?nat=br&results=10')
      .then(response => {
        
        const { results } = response.data;
        this.setState({
          peoples:results,
          loading: false
        });
      }).catch(error => {
          this.setState({
            loading: false,
            error: true
          })
      });
    }, 1500)
    
  }

  render(){
    return (
      <View style={styles.container}>
        {/* {this.rendereLoading()} */}
        {this.renderPage()}
      </View>
    );
  }

  renderPage(){
    if(this.state.loading){
      return <ActivityIndicator size="large" color="#555"/>;
    }

    if(this.state.error){
      return <Text style={styles.error}>Ops.. Algo deu errado</Text>
    }

    return (
      <PeopleList 
        peoples={this.state.peoples}
        onPressItem={pageParams => {
        this.props.navigation.navigate('DetailPage', pageParams);
      }}/>
    )
  }

  //Essa é uma forma de renderizar o loading
  // rendereLoading(){
  //   if(this.state.loading)
  //     return <ActivityIndicator size="large" color="#555"/>;

  //   return null;
  // }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error:{
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
})
