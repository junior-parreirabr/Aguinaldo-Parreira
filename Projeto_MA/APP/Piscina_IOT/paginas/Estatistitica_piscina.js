import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {LineChart} from "react-native-chart-kit";
const wallpaper = require('../imagens/fundo_piscina.png');


export default function Estatistica_piscina(){

    const navigation = useNavigation();

    const data = {
        labels: ["12:45", "12:46", "12:47", "12:48", "12:49", "12:50"],
        datasets: [
          {
            data: [20, 21, 22, 24, 23, 22],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },

          {
            data: [7, 7.2, 8, 7.6, 7.7, 7.1],
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },

          {
            data:[0],
            withDots:false,
          },
  
          {
            data:[40],
            withDots:false,
          }
        ],
        legend: ["Temperatura","Ph"] // optional
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

    return(

        <View style={styles.container_total}>
            <ImageBackground source={wallpaper} resizeMode="cover" style={styles.image}>

                <View style={styles.form_box}>
                    <Text style={styles.form_title}>ESTATISTICA</Text>

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


                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Estatistica_piscina_2')}>
                         <Text style={{fontSize:20, color: 'white'}}>HISTORICO</Text>
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