import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
const river = require('../imagens/river.png');

export default function Notificaçoes(){

    const navigation = useNavigation();

    return(

        <ScrollView style = {styles.fundo}>


            <View>
                <Text style = {styles.txt_title}>Notificaçoes</Text>
            </View>
            
            

            <View>
                <View style = {styles.center}>


                    <View style={styles.btn_like}>
                        <Text style={styles.label_interna}>Bateria Fraca</Text>
                    </View>

                    <View style={styles.btn_like}>
                        <Text style={styles.label_interna}>Abertura de comportas</Text>
                    </View>


                </View>
            </View>
            
            
            

        </ScrollView>

    );
}


const styles = StyleSheet.create({

    fundo : {
        backgroundColor: '#FFFAE4',
        width:'100%',
        height:'100%',
        
        
    },
    txt_title:{
        fontSize:32,
        fontWeight:'bold',
        marginTop:100,
        marginLeft:30,
        marginBottom:140,
        borderBottomWidth:2,
        width:'60%',
    },

    center:{
        alignItems:'center',
        justifyContent:'center',
        padding:12,
        width:'85%',
        height:300,
        marginLeft:30,
        backgroundColor: '#63A46C',
        borderRadius:10,
    },

    btn_like:{
        width:'90%',
        padding:15,
        borderRadius:10,
        backgroundColor: '#56865D',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    },
    label_interna:{
        fontSize:20,
        fontWeight:'bold',

    },
 



  });