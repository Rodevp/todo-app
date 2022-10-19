import { StyleSheet, Text, View } from 'react-native';
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
  }
});
