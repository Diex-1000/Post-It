import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import AddNoteModal from '@/components/AddNoteModal'
import NoteList from '../../components/NoteList'

const NoteScreen = () => {

  const [notes, setNotes] = useState<{id: string; text: string}[]>([])

  const [modalVisible, setModalVisible] = useState(false)
  const [newNote, setNewNote] = useState('')

  //Creamos la funcion addNewNote
  const addNewNote = () => {
    if(newNote.trim() === '') return

    setNotes((prevNotes) => [
      ...prevNotes,
      {id: Date.now().toString(), text: newNote}
    ])

    setNewNote('')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {/* FLATLIST */ }
      <NoteList notes={notes} />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={()=> setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>

      {/* Creamos la ventana Modal */} 
      <AddNoteModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNewNote={addNewNote}
      />

    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#93aab7ff'
    },
    noteItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#62b5bbff',
      padding:15,
      borderRadius:5,
      marginVertical:5
    },
    noteText: {
      fontSize:18
    },
    addButton: {
      position: 'absolute',
      bottom: 50,
      left: 20,
      right:20,
      backgroundColor: '#2a959cff',
      padding:15,
      borderRadius:5,
      alignItems:'center'
    },
    addButtonText: {
      color: '#fff',
      fontSize:18,
      fontWeight: 'bold'
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cancelButton: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius:5,
      flex:1,
      marginRight:10,
      alignItems: 'center'
    },
    cancelButtonText: {
      fontSize:16,
      color:'#333'
    },
     saveButton: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius:5,
      flex:1,
      marginRight:10,
      alignItems: 'center'
    },
    saveButtonText: {
      fontSize:16,
      color:'#fff'
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems:'center'
    },
    modalContent: {
      backgroundColor: '#fff',
      padding:20,
      borderRadius: 10,
      width: '80%'
    },
    modalTitle:{
      fontWeight:'bold',
      marginBottom:10,
      textAlign:'center',
      fontSize:20
    },
    input: {
      borderWidth:1,
      borderRadius:8,
      padding:10,
      fontSize:16,
      marginBottom:15
    }

})
