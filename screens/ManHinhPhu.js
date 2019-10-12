import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import Cacnhatro from '../components/cacnhatro';
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
        cacnhatro : []
    };
}
componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('categoryId');
  axios.get(`/cacnhatro?category=${id}`)
  .then(res=>{
    this.setState({
      cacnhatro:res.data
    })
  })
  .catch(error =>{
    console.error(error)
  })
}
  render(){
    const {navigation} = this.props;
    const {cacnhatro} = this.state;
    return(
     
          <FlatList data={cacnhatro}
          renderItem={({item}) =><Cacnhatro category={item}
            onPress={()=>navigation.navigate('ThongTinNhaTro',{
              categoryName: item.tenphongtro,
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