import { StyleSheet, Text, View, Button, Platform, TextInput, TouchableOpacity ,Pressable} from 'react-native';
import { IconButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import Home from './home';

interface listaprops {
  id: string,
  title: string,
  data: Date,
  time: Date,
}


export default function Mudardados({ navigation: { navigate } }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [textoTarefa, setTextoTarefa] = useState();
  const [id, setId] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);



  const gerarIdBaseadoNosMinutos = () => {
    const minutos = Math.floor(new Date().getTime() / 1000 );
    return minutos;
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentTime);
  };

  const saveDateTime = () => {
    // Aqui você pode realizar a lógica de salvamento, por exemplo, enviar para um servidor, salvar localmente, etc.
    const novoId = gerarIdBaseadoNosMinutos();
    setId(novoId.toString());
    console.log('Data Selecionada:', selectedDate.toDateString());
    console.log('Hora Selecionada:', selectedTime.toLocaleTimeString());
    console.log('Texto da tarefa:', textoTarefa);
    console.log('ID:', id);

    // console.log('id:', id.Math.floor(new Date().getTime() / 1000));

  };



  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const passarDados = () => {navigate("Home", {
    id: gerarIdBaseadoNosMinutos().toString(),
    texto: textoTarefa,
    data: selectedDate.toDateString(),
    tempo: selectedTime.toLocaleTimeString(),
  })
  };
  
  const irParaHome = () => {
    passarDados();
    // setTodoList([...todoList, { id: id, title: texto,data:data, tempo:tempo   }]);
    // navigate("Home");

  };



  return (

    <View style={styles.container} >
     
      <IconButton icon={"arrow-left"} size={30}  style={styles.voltar} onPress={() => navigate('Home')}/>

      <Text style={styles.tarefa}>
        {"Tarefa:"}

      </Text>
      <TextInput style={styles.input} placeholder='lavar a louça....' onChangeText={(text) => setTextoTarefa(text)}
        value={textoTarefa}/>

      <View>
        <View style={styles.data_hora}>
          <IconButton icon={"calendar-month-outline"} />
          <Button onPress={showDatepicker} title="Selecionar Data" />
          {showDatePicker && (
            <DateTimePicker
              testID="datePicker"
              value={selectedDate}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>
        <View style={styles.data_hora}>

          <IconButton icon={"alarm"} />
          <Button onPress={showTimepicker} title="Selecionar Hora" />
          {showTimePicker && (
            <DateTimePicker
              testID="timePicker"
              value={selectedTime}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}
        </View >


        <View style={styles.salvar}>
          <Button 
          // onPress={saveDateTime} 
          onPress={
            // () => navigate("Home", {
            // id: gerarIdBaseadoNosMinutos().toString(),
            // texto: textoTarefa,
            // data: selectedDate.toDateString(),
            // tempo: selectedTime.toLocaleTimeString(),
          
          // })
          irParaHome
        }
          
          color={'rgba(13, 110, 155, 1)'} title="Salvar" />
        </View >

        {/* <Text>Data Selecionada: {selectedDate.toDateString()}</Text>
      <Text>Hora Selecionada: {selectedTime.toLocaleTimeString()}</Text> */}
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: "center",
    marginTop: 40,
  },
  voltar: {
    fontSize: 20,
    color: "#007AFF",
    marginLeft: -310
  },
  tarefa: {
    fontSize: 20,
    marginLeft: -270,
    marginTop: 30,
  },
  data_hora: {
    marginLeft: -105,
    flexDirection: "row",
    marginTop: 30,

  },
  salvar: {
    fontSize: 30,
    backgroundColor: 'rgba(13, 110, 155, 1)',
    paddingLeft: 42,
    paddingRight: 42,
    borderRadius: 14,
    position: "relative",
    marginTop: 30,
    color: '#fff',

  },
  input: {
    borderColor: "#007AFF",
    marginTop: 30,
    borderWidth: 4,
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 9,
    marginRight:0,
    width:330


  },
});

