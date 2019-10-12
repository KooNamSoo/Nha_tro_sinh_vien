import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import Tintuc from '../components/news';
import axios from 'axios';

export default class TinTucBds extends Component{
    static navigationOptions = () =>{
        return {
           title:'Tin tức bất động sản',
        };
    };
  constructor(props){
    super(props);
    this.state = {
        tintuc : []
    };
}
componentDidMount(){
  axios.get(`/tintuc`)
  .then(res=>{
    this.setState({
        tintuc:res.data
    })
  })
  .catch(error =>{
    console.error(error)
  })
}
  render(){
    const {navigation} = this.props;
    const {tintuc} = this.state;
    return(
     
      <FlatList data={tintuc}
      renderItem={({item}) =><Tintuc news={item}
        onPress={()=>navigation.navigate('NoiDungScreens',{
          categoryName: item.tieude,
          categoryId:item.id,
        })}
      />}
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