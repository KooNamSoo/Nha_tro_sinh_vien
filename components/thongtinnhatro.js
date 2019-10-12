import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,TouchableOpacity,} from 'react-native';

export default function news(props) {
    const {category} =props;
  
    return(
        
             <View style={styles.container}>
             <View style={styles.info}>
                   <Text style={styles.title}>Gía thuê : {category.giathue}</Text>
                   <Text style={styles.title}>Điện : {category.dien}</Text>
                   <Text style={styles.title}>Nước : {category.nuoc}</Text>
                   <Text style={styles.title}>Internet : {category.internet}</Text>
                   <Text style={styles.title}>Vệ sinh : {category.vesinh}</Text>
                   <Text style={styles.title}>Diện tích : {category.dientich}</Text>
                   <Text style={styles.lienhe}>Liên hệ : {category.lienhe}</Text>
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
    },
    lienhe:{
        textTransform:'uppercase',
        marginBottom: 8,
        fontWeight:'700',
        color:'green',
        fontSize:16
    }

  });