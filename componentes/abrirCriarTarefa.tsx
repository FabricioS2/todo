import { StyleSheet, Text, View , TouchableOpacity,Pressable} from 'react-native';
import { IconButton } from 'react-native-paper';






export default function AbrirCriarTarefa({navigation}) {

  // const [taskName, setTaskName] = useState("");
  // const { tasks, createTask } = useContext(TaskContext);


  
  return (
    <Pressable  style={styles.container} onPress={() => navigation.navigate('CriarTarefa')}>
    <View>

      <IconButton icon={"plus-circle-outline"} size={60} style={{marginLeft:3}} />

    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop:0,
    // flex: 1,
    // backgroundColor: '#fff',
    marginVertical:760,
    backgroundColor: 'rgba(13, 110, 155, 1)',
    borderRadius:50,
    paddingHorizontal:1,
    paddingVertical:1,
    position:"absolute",
    
  },
});
