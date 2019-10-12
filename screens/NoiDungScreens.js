import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import Noidungtin from '../components/noidungtin';
import axios from 'axios';

export default class NoiDungScreens extends Component{
    static navigationOptions = ({navigation}) =>{
        return {
           title:navigation.getParam('categoryName'),
        };
    };
  constructor(props){
    super(props);
    this.state = {
        noidungtin : []
    };
}
componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('categoryId');
  axios.get(`/noidungtin?category=${id}`)
  .then(res=>{
    this.setState({
        noidungtin:res.data
    })
  })
  .catch(error =>{
    console.error(error)
  })
}
  render(){
    const {navigation} = this.props;
    const {noidungtin} = this.state;
    return(
     
          <FlatList data={noidungtin}
          renderItem={({item}) =>(<Noidungtin category={item}
          />)}
          keyExtractor={item => `${item.id}` }
          contentContainerStyle={{  paddingTop:16,paddingLeft:16,paddingRight:16}}
          />
       
      
    )
  }
}
const styles=StyleSheet.create({
  container : {
    flex :1,
    alignItems:'center',
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#fff',
    paddingLeft:16,
    paddingRight:16,
   

  }
})