import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, Alert } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
const Influxdb = require("influxdb-v2");
const river = require('../imagens/river.png');




async function getData() {
    const influxdb = new Influxdb({
     // host: "8a7708eb18e6.sn.mynetname.net",
     // port: 5000,
      host: "20.210.132.42",
      port: 8086,
      protocol: "http",
      token:
        "ynCP2gPa4OT16BfIRrE7Jq4uGMu1LrFmgaPJgCKZIF_nO7n3Jewa-zlerPm69f-ZKWrZYIr63XoXbDhfPasWpw==",
    });
  
    const teste = await influxdb.query(
      { org: "7e377cc6cc59a03f" },
      {
        query:
         //'from(bucket: "press") |> range(start: -30d) |> filter(fn: (r) => r["_measurement"] == "mqtt_consumer"  and r["_field"] == "Pressao" and r["topic"] == "/teste/smartpress/'+mac+'/payload")'
            'from(bucket: "Aguinaldo_IOT")|> range(start: -10s)|> filter(fn: (r) => r["_measurement"] == "objects" or r["_measurement"] == "uptimesec" or r["_measurement"] == "distance")|> filter(fn: (r) => r["device"] == "tasmota_704AE0")|> filter(fn: (r) => r["sensor"] == "sr04")'
        //-10s
        }
    );

    let nivel = 0;

    
    console.log('hello');
    nivel = teste[0][0]._value;
    console.log(teste[0][0]._value);

      
      

    return nivel ;
  
  }




export default function Mediçao(){

    const navigation = useNavigation();

    const [influx_valor,Set_influx_valor] = useState();
    const [status,Set_status] = useState();


    useEffect(()=>{

        setTimeout(function() {
            getData().then((r) => {
                
              var nivel = r;
              nivel = 2,36 - nivel;
              console.log(r);
              Set_influx_valor(nivel.toFixed(0));
              if(nivel>0 && nivel<=120){
                  Set_status("NORMAL");
                  //alert("ABRIR COMPORTA");
              }
              else if (nivel>120 && nivel<=180){
                  Set_status("ALERTA");
              }
              else if (nivel>180){
                  Set_status("ALERTA MAXIMO");
                  alert("ABRIR COMPORTA");
              }
    
              })
        }, 10000);

    });

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
                <View style = {styles.center}><Text style = {styles.label_green_lg}>{influx_valor} cm</Text></View>
            </View>

            <View>
                <Text style = {styles.txt_title2}>Status</Text>
                <Text style = {styles.label_green}>{status}</Text>
            </View>



            <View>
                <Text style = {styles.txt_title2}>Selecione o local</Text>
                <Text style = {styles.label_green}>Canal 3 - Comporta Orla</Text>
            </View>

            <View>
                <Text style = {styles.txt_title2}>Nivel de agua</Text>
                <View style = {styles.center}><Text style = {styles.label_green_lg}>{influx_valor} cm</Text></View>
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