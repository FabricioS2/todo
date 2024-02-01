import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import React, { useState } from 'react';

import Home from './home';
import CriarTarefa from './criarTarefa';


export default function ListaDetarefasAmarela({navigation,dados,handleDeleteTodo,toggleDone}) {

  if (!dados || !dados.item) {
    return null; // ou renderize algo apropriado
  }

  const { item, index } = dados;
  const [hora, minutos] = item.hora.split(':');


  const [iscor, setCor] = useState("rgba(170, 134, 50, 1)");
  const [isline, setline] = useState("");
  const [isicon, seticon] = useState(false);

  const styles = StyleSheet.create({
    container: {
      // marginTop:0,
      // flex: 1,
      // backgroundColor: '#fff',
      marginTop:10,
      backgroundColor: '#fff',
  
  
    },
    caixa_amarela:{
      backgroundColor: iscor ,
      paddingLeft:50,
      paddingRight:50,
      borderRadius:14,
      padding:5,
      flexDirection:"row",
      alignItems:"center"
    },
    check:{
      paddingLeft:20,
      paddingRight:20,
      borderWidth:3,
      borderRadius:14,
      marginLeft:-45,
      width:20,
      height:50
    },
    texto:{
      paddingLeft:8,
      marginTop:4,
      marginEnd:8,
      fontSize:20,
      fontWeight:'400',
      width:190,
      textDecorationLine: isline,

    },
    horario:{
      marginTop:2,
      marginEnd:8,
      fontSize:20,
      marginRight:-9,
      color:'rgba(45, 172, 231, 1)',
    },
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());


  const toggleCor = () => {
    const itemHora = new Date(); // Preservando a data selecionada
  const horaItem = item.hora.split(':');
  itemHora.setHours(horaItem[0], horaItem[1]);

    if ((itemHora >= selectedTime) || (itemHora >=  selectedDate)){
      setCor("#387842");
      setline("line-through");
      seticon(true);
      toggleDone(item.id,2)
    }else{
      setCor("#9C4130");
      setline("line-through");
      seticon(true);
      toggleDone(item.id,3)
    }

  };


  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <View style={styles.caixa_amarela}>
      <TouchableOpacity style={styles.check} onPress={toggleCor}>
      {isicon && <IconButton icon={"check-bold"} style={{marginRight:-22,marginLeft:-22,marginHorizontal:-20,marginVertical:2}} />}
      </TouchableOpacity>

      {/* <IconButton icon={"check-bold"}/> */}
      <Text style={styles.texto}>{item.texto}</Text>
      <Text style={styles.horario}>{`${hora}:${minutos}`}</Text>
      <TouchableOpacity >
      <IconButton icon={"trash-can-outline"} style={{marginRight:-20,}} onPress={()=>{ handleDeleteTodo(item.id)}}/>
      </TouchableOpacity>
      <TouchableOpacity >
      <IconButton icon={"dots-vertical"} style={{marginRight:-50,}} onPress={() => navigation.navigate('Mudardados', {
      id: item.id,
      texto: item.texto,
      data: item.data,
      tempo: item.tempo,
    })}/>
      </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop:0,
    // flex: 1,
    // backgroundColor: '#fff',
    marginTop:10,
    backgroundColor: '#fff',


  },
  caixa_amarela:{
    backgroundColor: 'rgba(170, 134, 50, 1)',
    paddingLeft:50,
    paddingRight:50,
    borderRadius:14,
    padding:5,
    flexDirection:"row",
  },
  check:{
    paddingLeft:20,
    paddingRight:20,
    borderWidth:3,
    borderRadius:14,
    marginLeft:-45,
  },
  texto:{
    paddingLeft:8,
    marginTop:12,
    marginEnd:8,
    fontSize:20,
    fontWeight:'400',
    width:190
  },
  horario:{
    marginTop:12,
    marginEnd:8,
    fontSize:20,
    marginRight:-9,
    color:'rgba(45, 172, 231, 1)',
  },
});
