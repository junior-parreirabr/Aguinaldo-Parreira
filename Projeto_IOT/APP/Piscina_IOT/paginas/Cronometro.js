import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
const wallpaper = require('../imagens/fundo_piscina.png');

const Influxdb = require('influxdb-v2');

const influxdb = new Influxdb({
    host: "20.210.132.42",
    port: 8086,
    protocol: "http",
    token:
      "ynCP2gPa4OT16BfIRrE7Jq4uGMu1LrFmgaPJgCKZIF_nO7n3Jewa-zlerPm69f-ZKWrZYIr63XoXbDhfPasWpw==",
});



export default function Cronometro(){

    const navigation = useNavigation();
    const [mili,Set_mili] = useState('0');
    const [seg,Set_seg] = useState('00');
    const [min,Set_min] = useState('00');
    const [mili_t,Set_mili_t] = useState(0);
    const [ligado,Set_ligado] = useState(false);


    

        setTimeout(function() {
           
            if(ligado==true)
            {

                Set_mili_t(Number(mili_t)+1);
                if(Number(mili)>=9){
                    
                    Set_mili(0);
                    if((Number(seg)+1)<10){
                        Set_seg('0'+String(Number(seg)+1));
                    }
                    else{
                        Set_seg(Number(seg)+1);
                    }
                  
                }
                else{
                    Set_mili(Number(mili)+1);
                }
                if(Number(seg)>59){
                    Set_seg(0);
                    if((Number(min)+1)<10){
                        Set_min('0'+String(Number(min)+1));
                    }
                    else{
                        Set_min(Number(min)+1);
                    }
                }
                
               
            }
        },0.0000001);

    

    return(

        <View style={styles.container_total}>
            <ImageBackground source={wallpaper} resizeMode="cover" style={styles.image}>

                <View style={styles.form_box}>
                    <Text style={styles.form_title}>CRONOMETRO</Text>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Nadador: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>data do treino: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Estilo do nado: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>


                    <View style={styles.cronometro_box}>
                        <Text style={styles.txt_cronometro}>{min}:{seg}:{mili}0</Text>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.botao_cronometro,{backgroundColor:'#DAAA02'}]} onPress={() => {Set_ligado(false)}}>
                            <Text style={{fontSize:20, color: 'white'}}>PAUSAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.botao_cronometro,{backgroundColor:'#36BA07'}]} onPress={() => {Set_ligado(true)}}>
                            <Text style={{fontSize:20, color: 'white'}}>INICIAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.botao_cronometro,{backgroundColor:'#FF1616'}]} onPress={() => {
                            Set_mili_t(0);
                            Set_ligado(false);
                            Set_mili('0');
                            Set_seg('00');
                            Set_min('00');
                            Set_mili_t(0);
                        }}>
                            <Text style={{fontSize:20, color: 'white'}}>PARAR</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll_align}>
                        <Text style={styles.txt_scroll}>Volta 1 - 00:05:43</Text>
                        <Text style={styles.txt_scroll}>Volta 2 - 00:07:13</Text>
                        <Text style={styles.txt_scroll}>Volta 3 - 00:04:53</Text>
                        <Text style={styles.txt_scroll}>Volta 4 - 00:05:33</Text>
                        <Text style={styles.txt_scroll}>Volta 5 - 00:06:12</Text>
                        <Text style={styles.txt_scroll}>Volta 6 - 00:06:24</Text>
                        <Text style={styles.txt_scroll}>Volta 7 - 00:05:43</Text>
                    </ScrollView>


                    <TouchableOpacity style={styles.botao} onPress={() => {


                            Set_ligado(false);
                            Set_mili('0');
                            Set_seg('00');
                            Set_min('00');
                            

                            influxdb.write(
                                {
                                org: '7e377cc6cc59a03f', // [Required] your organization. You can set `orgID` if you prefer to use the ID
                                bucket: 'Aguinaldo_IOT', // [Required] your bucket
                                },
                                [{
                                measurement: 'time_ms', // [Required] your measurement
                                fields: {
                                    value: (Number(mili_t)*10) // a field named "load" as an example, with a value of 12.34
                                }
                                }]
                            );

                            Set_mili_t(0);

                    }}>
                         <Text style={{fontSize:20, color: 'white'}}>ENVIAR</Text>
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
    cronometro_box:{
        width:'75%',
        height:140,
        backgroundColor:'#51ABFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        borderWidth:3,
        borderColor:'#4C498E',
        elevation:5,
    },
    txt_cronometro:{
        fontSize:36,
        color:'white',
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
        width:'30%'

    },
    form_input:{
        backgroundColor:'white',
        width:'60%',
        padding:5,
        elevation:5,
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
        marginBottom:10,
        marginTop:20,
        borderRadius:12,
       
    },
    botao_cronometro:{
        alignItems: 'center',
        justifyContent: 'center',
        width:95,
        height:60,
        padding:10,
        marginBottom:20,
        marginTop:20,
        margin:4,
        borderRadius:30,
    },
    scroll:{
        width:'75%',
        height:100,
        backgroundColor:'#AAC',
        borderRadius:15,
        padding:10,
        
    },
    scroll_align:{
        alignItems:'center',
        justifyContent:'center',
    },
    txt_scroll:{
        fontSize:25,
        color:'white',
    }



  });