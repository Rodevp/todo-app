import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.taskContainer}>
        
        <Text style={styles.title}> Lista de tareas </Text>
        
        <View style={styles.items}>
          <Task text="Task 1" />
          <Task text="Task 2" />
          <Task text="Task 3" />
          <Task text="Task 4" />
        </View>

      </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.taskAddContainer}
      >
        <TextInput  style={styles.input} placeholder="Escribe una tarea"  />

        <View
          style={styles.btnContainer}
        >
          <TouchableOpacity>
            <View style={styles.btnWrapper}>
              <Text style={styles.btn} >+</Text>
            </View>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskContainer: {
    paddingTop: 75,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  taskAddContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 60 : 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 240
  },
  btnContainer: {

  },
  btnWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  btn: {
    fontSize: 30
  }
});
