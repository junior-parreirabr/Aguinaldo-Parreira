import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function Menu(){

    const navigation = useNavigation();

    return(

        <View style = {styles.fundo}>
            
            <View style>
                <Image source = {require('../imagens/santoscontrol.png')}/>
            </View>

            <View >
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro_nadador')}>
                    <Text style={styles.txt_btn}>CADASTRO NADADOR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cronometro')}>
                    <Text style={styles.txt_btn}>CRONOMETRO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Estatistica_piscina')}>
                    <Text style={styles.txt_btn}>ESTATISTICA PISCINA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Estatistica_nadador')}>
                    <Text style={styles.txt_btn}>ESTATISTICA NADADOR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.txt_btn}>NOTIFICAÇOES</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}


const styles = StyleSheet.create({

    fundo : {
        backgroundColor: '#4C498E',
        width:'100%',
        height:'100%',
        alignItems: 'center',
        
    },
    txt_btn:{
        fontSize:20, 
        color: 'white',
    },

    botao : {
        
        backgroundColor: '#51ABFF',
        alignItems: 'center',
        justifyContent: 'center',
        width:240,
        height:65,
        padding:10,
        marginBottom:20,
        marginTop:0,
        borderRadius:15,
       

    }

  });