import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

import Home from './home';
import CriarTarefa from './criarTarefa';


export default function ListaDetarefasAmarela({navigation,dados}) {

  if (!dados || !dados.item) {
    return null; // ou renderize algo apropriado
  }

  const { item, index } = dados;
  const [hora, minutos] = item.hora.split(':');




  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <View style={styles.caixa_amarela}>
      <TouchableOpacity style={styles.check}>
      <Text ></Text>
      </TouchableOpacity>

      {/* <IconButton icon={"check-bold"}/> */}
      <Text style={styles.texto}>{item.texto}</Text>
      <Text style={styles.horario}>{`${hora}:${minutos}`}</Text>
      <TouchableOpacity >
      <IconButton icon={"trash-can-outline"} style={{marginRight:-20,}} />
      </TouchableOpacity>
      <TouchableOpacity >
      <IconButton icon={"dots-vertical"} style={{marginRight:-50,}} onPress={() => navigation.navigate('CriarTarefa')}/>
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
