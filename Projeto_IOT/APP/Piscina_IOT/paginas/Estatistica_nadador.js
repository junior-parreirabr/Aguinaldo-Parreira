import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {LineChart} from "react-native-chart-kit";
const wallpaper = require('../imagens/fundo_piscina.png');
const Influxdb = require("influxdb-v2");


const influxdb = new Influxdb({
    // host: "8a7708eb18e6.sn.mynetname.net",
    // port: 5000,
     host: "20.210.132.42",
     port: 8086,
     protocol: "http",
     token:
       "ynCP2gPa4OT16BfIRrE7Jq4uGMu1LrFmgaPJgCKZIF_nO7n3Jewa-zlerPm69f-ZKWrZYIr63XoXbDhfPasWpw==",
   });



async function getData() {

  
    const teste = await influxdb.query(
      { org: '7e377cc6cc59a03f' },

      {
        query: 'from(bucket: "Aguinaldo_IOT")|> range(start: -30m)|> filter(fn: (r) => r["_measurement"] == "time_ms")'
      }

    );

    let data = {
        time_ms: [],
        instantes:[],
        instantes_formatado:[],
    }
    console.log(teste);
    for(let i = 0; i < teste[0].length; i++){
        data.time_ms.push(Number(teste[0][i]._value))
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


export default function Estatistica_nadador(){

    const navigation = useNavigation();

    const [influx_valores,Set_influx_valores] = useState([0]);
    const [influx_times,Set_influx_times] = useState([]);

    const data = {
        labels: influx_times,
        datasets: [
         

          {
            data: influx_valores,
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },

          
        ],
        legend: ["Tempo"] // optional
      };

      const chartConfig = {
        backgroundColor: 'blue',
        backgroundGradientFrom: "#4961be",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#4C498E",
        backgroundGradientToOpacity: 1,
        color: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        
        
      };


      useEffect(()=>{

        //setTimeout(function() {
            getData().then((r) => {
                
              var time_ms_5 = r['time_ms'].slice(-5);
              var instantes_5 = r['instantes_formatado'].slice(-5);          
              Set_influx_valores(time_ms_5);
              Set_influx_times(instantes_5);
    
              })
        //}, 10000);

    },[]);

    return(

        <View style={styles.container_total}>
            <ImageBackground source={wallpaper} resizeMode="cover" style={styles.image}>

                <View style={styles.form_box}>
                    <Text style={styles.form_title}>ESTATISTICA NADADOR</Text>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Nadador: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Inicio: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Final: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Nado: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

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


                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Menu')}>
                         <Text style={{fontSize:20, color: 'white'}}>VOLTAR</Text>
                    </TouchableOpacity>

                </View>



            </ImageBackground>
        </View>

    );
}


const styles = StyleSheet.create({

    container_total:{
        width:'100%',
        height:'100%',
       
        
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    form_box: {
        paddingTop:40,
        paddingBottom:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fffa',
        
    },
    form_title:{
        fontSize:32,
        fontWeight:'bold',
        color:'#4C498E',
        marginBottom:40,
    },
    form_label:{
        fontSize:16,
        color:'#4C498E',
        width:'20%'

    },
    form_input:{
        backgroundColor:'white',
        width:'50%',
        padding:5,
    },
    row:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
    },
    botao : {
        
        backgroundColor: '#51ABFF',
        alignItems: 'center',
        justifyContent: 'center',
        width:140,
        height:65,
        padding:10,
        marginBottom:20,
        marginTop:40,
        borderRadius:12,
       

    }



  });