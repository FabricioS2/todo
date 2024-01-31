import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function ListaDetarefasVermelha() {
  return (
    <View style={styles.container}>

      
<View style={styles.caixa_amarela}>
        
        <Text style={styles.check}></Text>
        <TouchableOpacity>
        <IconButton icon={"check-bold"} style={{marginLeft:-43,}}/>
        </TouchableOpacity>
  
        <Text style={styles.texto}>aksaKJSAKJSKJ000</Text>
        <Text style={styles.horario}>00:00</Text>
        <TouchableOpacity>
        <IconButton icon={"trash-can-outline"} style={{marginRight:-20,}} />
        </TouchableOpacity>
        <TouchableOpacity>
        <IconButton icon={"dots-vertical"} style={{marginRight:-50,}} />
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
    backgroundColor: 'rgba(156, 65, 48, 1)',
    paddingLeft:50,
    paddingRight:50,
    borderRadius:14,
    padding:5,
    flexDirection:"row"
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
    textDecorationLine:"line-through",
  },
  horario:{
    marginTop:12,
    marginEnd:8,
    fontSize:20,
    marginRight:-9,
    color:'rgba(45, 172, 231, 1)',
  },
});
