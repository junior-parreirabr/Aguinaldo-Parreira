import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
const river = require('../imagens/river.png');

export default function Home_MA(){

    const navigation = useNavigation();

    return(

        <View style = {styles.fundo}>


            <View>
                <Text style = {styles.txt_title}>Bem Vindo ao ChanneLev</Text>
                
            </View>
            
            <View style={styles.img_river}>
                <Image style={styles.img} source = {river}/>
            </View>

            <View>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HomeTabs')}>
                    <Text style={{fontSize:30}}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            

        </View>

    );
}


const styles = StyleSheet.create({

    fundo : {
        backgroundColor: '#FFFAE4',
        width:'100%',
        height:'100%',
        alignItems:'center',
        
    },
    txt_title:{
        fontSize:40,
        fontWeight:'bold',
        marginTop:50,
    },
    img_river:{
        width:'100%',
        marginTop:75,
        marginBottom:15,
    },
    img:{
        width:'100%',
        height:400,
    },

    botao : {
        
        backgroundColor: '#63A46C',
        alignItems: 'center',
        justifyContent: 'center',
        width:320,
        height:65,
        padding:10,
        borderRadius:20,
       

    }

  });