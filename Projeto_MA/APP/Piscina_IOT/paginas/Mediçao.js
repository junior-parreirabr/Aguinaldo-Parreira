import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
const river = require('../imagens/river.png');

export default function Mediçao(){

    const navigation = useNavigation();

    return(

        <ScrollView style = {styles.fundo}>


            <View>
                <Text style = {styles.txt_title}>Mediçao</Text>
            </View>
            
            <View>
                <Text style = {styles.txt_title2}>Selecione o local</Text>
                <Text style = {styles.label_green}>Canal 3 - Comporta Intermediária</Text>
            </View>

            <View>
                <Text style = {styles.txt_title2}>Nivel de agua</Text>
                <View style = {styles.center}><Text style = {styles.label_green_lg}>70 cm</Text></View>
            </View>



            <View>
                <Text style = {styles.txt_title2}>Selecione o local</Text>
                <Text style = {styles.label_green}>Canal 3 - Comporta Orla</Text>
            </View>

            <View>
                <Text style = {styles.txt_title2}>Nivel de agua</Text>
                <View style = {styles.center}><Text style = {styles.label_green_lg}>70 cm</Text></View>
            </View>
            
            <View>
                <View style={styles.center_label}><Text style={styles.label_20}>dd/mm/aaaa   hh:mm</Text></View>
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
        borderBottomWidth:2,
        width:'60%',
    },
    txt_title2:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:50,
        marginLeft:30,
    },
    label_green:{
        fontSize:15,
        padding:12,
        width:'85%',
        marginLeft:30,
        backgroundColor: '#63A46C',
        borderRadius:7,
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        padding:12,
        width:'85%',
        height:150,
        marginLeft:30,
        backgroundColor: '#63A46C',
        borderRadius:10,
    },
    label_green_lg:{
        display:'flex',
        fontSize:64,
        fontWeight:'bold',
    },
    center_label:{
        marginTop:20,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
    },
    label_20:{
        fontSize:20,
        padding:20,
    }



  });