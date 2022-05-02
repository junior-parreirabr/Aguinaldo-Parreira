import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    return(

        <View style = {styles.fundo}>
            
            <View>
                <Image source = {require('../imagens/santoscontrol.png')}/>
            </View>

            <View >
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontSize:30, color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={{fontSize:30, color: 'white'}}>CADASTRO</Text>
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
        justifyContent: 'center',
    },

    botao : {
        
        backgroundColor: '#51ABFF',
        alignItems: 'center',
        justifyContent: 'center',
        width:240,
        height:65,
        padding:10,
        marginBottom:40,
        marginTop:20,
        borderRadius:20,
       

    }

  });