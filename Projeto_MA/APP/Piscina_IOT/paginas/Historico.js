import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
const river = require('../imagens/river.png');

export default function Historico(){

    const navigation = useNavigation();

    return(

        <ScrollView style = {styles.fundo}>


            <View>
                <Text style = {styles.txt_title}>Historico</Text>
            </View>
            
            <View>
                <Text style = {styles.txt_title2}>Selecione o local</Text>
                <Text style = {styles.label_green}>dd/mm/aaaa</Text>
            </View>

            <View>
                <Text style = {styles.txt_title2}>Selecione a data</Text>
                <Text style = {styles.label_green}>Canal 3 - Comporta Intermediária</Text>
            </View>

            <View>
                <Text style = {styles.txt_title2}>  Data                          Hora         Nivel</Text>
                <View style = {styles.center}>
                    <Text style = {styles.label_green_lg}>26/05/2022                      12:45            80CM</Text>
                    <Text style = {styles.label_green_lg}>26/05/2022                      12:55            80CM</Text>
                    <Text style = {styles.label_green_lg}>26/05/2022                      13:05            80CM</Text>
                    <Text style = {styles.label_green_lg}>26/05/2022                      13:15            80CM</Text>
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
        marginBottom:40,
        borderBottomWidth:2,
        width:'60%',
    },
    txt_title2:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
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
        
        padding:12,
        width:'85%',
        height:300,
        marginLeft:30,
        backgroundColor: '#63A46C',
        borderRadius:10,
    },
    label_green_lg:{
        display:'flex',
        fontSize:16,
        borderBottomWidth:1,
        
    },
 



  });