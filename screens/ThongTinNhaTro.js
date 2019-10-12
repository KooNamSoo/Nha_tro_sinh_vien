import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import Thongtinnhatro from '../components/thongtinnhatro';
import axios from 'axios';

export default class ManHinhPhu extends Component{
    static navigationOptions = ({navigation}) =>{
        return {
           title:navigation.getParam('categoryName'),
        };
    };
  constructor(props){
    super(props);
    this.state = {
        thongtinnhatro : []
    };
}
componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('categoryId');
  axios.get(`/thongtinnhatro?category=${id}`)
  .then(res=>{
    this.setState({
        thongtinnhatro:res.data
    })
  })
  .catch(error =>{
    console.error(error)
  })
}
  render(){
    const {navigation} = this.props;
    const {thongtinnhatro} = this.state;
    return(
     
          <FlatList data={thongtinnhatro}
          renderItem={({item}) =>(<Thongtinnhatro category={item}
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