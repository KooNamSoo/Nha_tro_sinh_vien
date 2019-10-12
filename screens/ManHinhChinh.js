import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList,Linking} from 'react-native';
import ItemLoaiNhaTro from '../components/ItemLoaiNhaTro';
import axios from 'axios';

class LogoTitle extends React.Component {
    render() {
      return (
        <View style={{flex:1,flexDirection:'row',alignItems:'space-around',width:200}}>
          <Text style={{flex:2,color:'#fff', marginLeft:10 ,alignItems:'center',fontWeight:'bold',fontSize:20}}>Nhà Trọ Sinh Viên</Text>
          <Image 
          source={require('../images/mansion.png')}
          style={{ width: 30, height: 30, marginRight:10}}
        />
        </View>
        
      );
    }
  }
export default class ManHinhChinh extends Component{

    static navigationOptions = {
        // title: 'Cơm sinh viên',
        headerTitle: <LogoTitle />,
        headerStyle: {
          backgroundColor: '#81BEF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };


  constructor(props){
    super(props);
    this.state={
      loaihinhnhatro: []
    };
  }


  componentDidMount(){
    axios.get(`/loaihinhnhatro`)
    .then(res=>{
      this.setState({
        loaihinhnhatro:res.data
      })
    })
    .catch(error =>{
      console.error(error)
    })
  }

    
  
  render(){
    const {loaihinhnhatro}=this.state;
    const {navigation} = this.props;
    return(
     <FlatList
     style={styles.container}
     data={loaihinhnhatro}
     numColumns={2}
     renderItem={({item})=>
     <View style={styles.wrapper}>
       <ItemLoaiNhaTro product={item}
       onPress={()=>navigation.navigate('ManHinhPhu',{
        categoryName: item.ten,
        categoryId:item.id,
      })}
       
       />
     </View>
     }
     keyExtractor={(item)=>`${item.id}`}
    //  contentContainerStyle={styles.container}
     />
    )
}}
const styles=StyleSheet.create({
  container : {
   flex :1,
   paddingHorizontal:8,
   paddingTop:16,
   marginTop:20
   
  },
  wrapper:{
    flex:1,
    paddingHorizontal:8
  }
})