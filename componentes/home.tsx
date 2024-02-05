import { StyleSheet, Text, View,ScrollView,Animated,FlatList } from 'react-native';
import Score from "./teste"
import ListaDetarefasAmarela from "./listaDetarefasAmarela"
import ListaDetarefasVerde from "./listaDetarefasVerde"
import ListaDetarefasVermelha from "./listaDetarefasVermelha"
import AbrirCriarTarefa from "./abrirCriarTarefa"
import React, { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Home({ navigation,route }) {
  const { id, texto, data, tempo } = route.params || {};
  const [todoList, setTodoList] = useState([]);

  console.log(todoList)

  
  // useEffect(() => {
  //   if (route.params) {
  //     // Adiciona a tarefa com base nos parâmetros da rota

  //     const { id, texto, data, tempo } = route.params;
    
  //     // Filtrar a lista para manter apenas o último item com o mesmo ID
  //     const filteredList = todoList.filter(item => item.id !== id);
      
  //     setTodoList([
  //       ...filteredList,
  //       {
  //         id: route.params.id,
  //         texto: route.params.texto,
  //         data: route.params.data,
  //         hora: route.params.tempo,
  //         done: 1,
  //       },
  //     ]);
  //   }
  // }, [route.params]);



  useEffect(() => {
    if (route.params) {
      // Adiciona a tarefa com base nos parâmetros da rota
      const { id, texto, data, tempo } = route.params;
  
      // Filtrar a lista para manter apenas o último item com o mesmo ID
      const filteredList = todoList.filter(item => item.id !== id);
  
      const newTask = {
        id: route.params.id,
        texto: route.params.texto,
        data: route.params.data,
        hora: route.params.tempo,
        done: 1,
      };
  
      setTodoList([...filteredList, newTask]);
  
      // Salva a lista atualizada no AsyncStorage
      AsyncStorage.setItem('todoList', JSON.stringify([...filteredList, newTask]))
        .then(() => console.log('Lista salva com sucesso no AsyncStorage'))
        .catch(error => console.error('Erro ao salvar a lista no AsyncStorage:', error));
    }
  }, [route.params]);
  

const currentTime: Date = new Date();

const toggleDone = (itemId,valor) => {
  setTodoList((prevList) => {
    return prevList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          done: valor, // Inverte o valor de done
        };
      }
      return item;
    });
  });
};



const countDoneValues = (value) => {
  const count = todoList.filter((item) => item.done === value).length;
  return count;
};

const countDone1 = countDoneValues(1);
const countDone2 = countDoneValues(2);
const countDone3 = countDoneValues(3);


  const renderTodos = ({item,index})=>{
    
    return(
      <View>
        
      <ListaDetarefasAmarela navigation={navigation} dados={{ item, index }} handleDeleteTodo={handleDeleteTodo} toggleDone={toggleDone}/>
      </View>
    );
  
  };


    // Init local states
    // const [todo, setTodo] = useState("");
    const [editedTodo, setEditedTodo] = useState(null);
  
    // Handle Add Todo
    const handleAddTodo = async () => {
      // sturtcure of a single todo item
      // {
      //  id:
      //  title:
      // }
    
      if (todo === "") {
        return; // early return
      }
  
      const newTodo = { id, title: texto, data, hora: tempo, done: 1 };
      const updatedList = [...todoList, newTodo];

      // Salvando a lista atualizada no AsyncStorage
      await AsyncStorage.setItem('todoList', JSON.stringify(updatedList));

        setTodoList([...todoList, { id: id, title: texto,data:data, hora:tempo   }]);
        // setTodo("");
      };

    // Handle Delete
    const handleDeleteTodo = async (id) => {
      const updatedTodoList = todoList.filter((todo) => todo.id !== id);

      // Salvando a lista atualizada no AsyncStorage
      await AsyncStorage.setItem('todoList', JSON.stringify(updatedTodoList));

      setTodoList(updatedTodoList);
    };
  
    // Handle Edit todo
  
    // const handleEditTodo = (todo) => {
    //   setEditedTodo(todo);
    //   setTodoList(todo.title);
    // };
    const editarItem = (id, texto, data, tempo) => {
      navigate("CriarTarefa", {
        id,
        texto,
        data,
        tempo,
      });
    };
    // Handle Update
  
    const handleUpdateTodo = () => {
      const updatedTodos = todoList.map((item) => {
        if (item.id === editedTodo.id) {
          return { ...item, title: todo };
        }
  
        return item;
      });
      setTodoList(updatedTodos);
      setEditedTodo(null);
      setTodo("");
    };

    return(
      <View style={styles.container}>
        <Score countDone1={countDone1} countDone2={countDone2} countDone3={countDone3}/>

        <FlatList  data={todoList} renderItem={renderTodos}   showsVerticalScrollIndicator={false}/>
        {/* <ListaDetarefasAmarela navigation={navigation}  /> */}
        {/* <ListaDetarefasVerde/>
        <ListaDetarefasVermelha/> */}

        <AbrirCriarTarefa navigation={navigation} />
        

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent:"flex-start",
  },
  scrollView: {
    height: 300, // Altura suficiente para acionar a rolagem vertical
    flex: 1, 
  },
  texto:{
    color:"#ppp"
  },
});
