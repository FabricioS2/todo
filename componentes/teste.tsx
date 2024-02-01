import { StyleSheet, Text, View } from 'react-native';

export default function Score({countDone1,countDone2,countDone3}) {
  return (
    <View style={styles.container}>
      <View style={styles.caixa_azul}>

      <View style={styles.texto_alinhado}>
      <Text style={styles.texto}>Finalizada</Text>
      <Text style={styles.texto}>Progresso</Text>
      <Text style={styles.texto}>Atrasada</Text>
      </View>

      <View style={styles.caixa_alinhada}>
      <View style={styles.caixa_verde}>
      <Text style={styles.texto_escore}>{countDone2}</Text>
      </View>
      <View style={styles.caixa_amarela}>
      <Text style={styles.texto_escore}>{countDone1}</Text>
      </View>
      <View style={styles.caixa_vermelha}>
      <Text style={styles.texto_escore}>{countDone3}</Text>
      </View>

      </View>

      </View>
      
      <Text style={styles.texto_lista}>Lista de tarrefas:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',    
   
  },
  caixa_azul:{
    backgroundColor: 'rgba(13, 110, 155, 1)',
    paddingLeft:15,
    paddingRight:15,
    borderRadius:14,
    position:"relative",
  },
  caixa_verde:{
    backgroundColor: 'rgba(56, 120, 66, 1)',
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:20,
    paddingTop:10,
    marginLeft:20,
    marginRight:20,
    borderWidth:3,
    borderRadius:14,
  },
  caixa_vermelha:{
    backgroundColor: 'rgba(156, 65, 48, 1)',
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:20,
    paddingTop:10,
    marginLeft:20,
    marginRight:20,
    borderWidth:3,
    borderRadius:14,
  },
  caixa_amarela:{
    backgroundColor: 'rgba(170, 134, 50, 1)',
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:20,
    paddingTop:10,
    marginLeft:20,
    marginRight:20,
    borderWidth:3,
    borderRadius:14,
  },
  texto:{
    fontSize:20,
    paddingTop:8,
    marginLeft:0,
    marginRight:12,
  },
  texto_alinhado:{
    flexDirection:"row",
    marginLeft:23
    
  },
  texto_lista:{
    marginTop:12,
    marginEnd:8,
    fontSize:30,
  },
  texto_pontuacao:{
    fontSize:25,
  },
  caixa_alinhada:{
    flexDirection:"row",
    paddingBottom:8,
  },
  texto_escore:{
    fontSize:45,
  },
});
