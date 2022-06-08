import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {LineChart} from "react-native-chart-kit";
const river = require('../imagens/river.png');
const Influxdb = require("influxdb-v2");





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
            'from(bucket: "Aguinaldo_IOT")|> range(start: -30m)|> filter(fn: (r) => r["_measurement"] == "objects" or r["_measurement"] == "uptimesec" or r["_measurement"] == "distance")|> filter(fn: (r) => r["device"] == "tasmota_704AE0")|> filter(fn: (r) => r["sensor"] == "sr04")'
        //-30m
        }
    );

    let data = {
        nivel: [],
        instantes:[],
        instantes_formatado:[],
    }

    for(let i = 0; i < teste[0].length; i++){
        data.nivel.push(2,36-Number(teste[0][i]._value))
        data.instantes.push(Date(teste[0][i]._time))
    }

      data.instantes.map(item => {
          var date = new Date(item);
          var str_dmy = date.toLocaleDateString('en-GB');
          var str_hms = date.toLocaleTimeString('pt-BR');
          var str_hms_dmy = str_hms + "\n\n" + str_dmy;
          data.instantes_formatado.push(str_hms);
          //data.instantes_formatado.push(str_hms_dmy);
      })
      

    return data ;
  
  }

  




export default function Historico(){

    const navigation = useNavigation();

    const [influx_valores,Set_influx_valores] = useState([0]);
    const [influx_times,Set_influx_times] = useState([]);




    const data = {
        labels: influx_times,
        datasets: [
          {
            data: influx_valores,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },

         

          
        ],
        legend: ["Nivel (cm)"] // optional
      };



      const chartConfig = {
        backgroundColor: 'green',
        backgroundGradientFrom: "#63A46C",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#56865D",
        backgroundGradientToOpacity: 1,
        color: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: true, // optional
        
        
      };

      useEffect(()=>{

            setTimeout(function() {
                getData().then((r) => {
                    
                  var nivel_5 = r['nivel'].slice(-5);
                  var instantes_5 = r['instantes_formatado'].slice(-5);          
                  Set_influx_valores(nivel_5);
                  Set_influx_times(instantes_5);
        
                  })
            }, 10000);

        });




    return(

        <ScrollView style = {styles.fundo}>


            <View>
                <Text style = {styles.txt_title}>Historico</Text>
            </View>
            
            <View>
                <Text style = {styles.txt_title2}>Selecione o local</Text>
                <Text style = {styles.label_green}>Canal 3 - Comporta Intermediária</Text>
            </View>

            <View>
                <Text style = {styles.txt_title2}>Selecione a data</Text>
                <Text style = {styles.label_green}>dd/mm/aaaa</Text>
            </View>

            <View style={styles.grafic}>
                
                    <LineChart
                        data={data}
                        width={350}
                        height={220}
                        chartConfig={chartConfig}
                        fromZero={true}
                        style = {{
                                borderRadius: 16,
                                
                            }
                        }

                        
                    />
                
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
    grafic:{

        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    }
 



  });