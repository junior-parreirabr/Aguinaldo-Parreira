import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
const wallpaper = require('../imagens/fundo_piscina.png');


export default function Cadastro_Nadador(){

    const navigation = useNavigation();

    return(

        <View style={styles.container_total}>
            <ImageBackground source={wallpaper} resizeMode="cover" style={styles.image}>

                <View style={styles.form_box}>
                    <Text style={styles.form_title}>CADASTRO NADADOR</Text>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Nome: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Data de nascimento: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Email: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Peso: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Altura: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.form_label}>Instituiçao: </Text>
                        <TextInput style={styles.form_input}></TextInput>
                    </View>

                    


                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Menu')}>
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