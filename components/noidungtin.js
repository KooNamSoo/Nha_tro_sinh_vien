import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,TouchableOpacity,} from 'react-native';

export default function noidungtin(props) {
    const {category} =props;
  
    return(
       
             <View style={styles.container}>
             <View style={styles.info}>
                <Text style={styles.title}>{category.noidung}</Text>
            </View>
      </View>
       
    
    );
  }

const styles=StyleSheet.create({
    categoryImage : {
        width:64,
        height:64,
        
    },
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginBottom:16,
        flexDirection:'row'
    },
    title:{
        textTransform:'uppercase',
        marginBottom: 8,
        fontWeight:'700'
    },
    info:{
        marginLeft:8,
        flex:1
    }

  });