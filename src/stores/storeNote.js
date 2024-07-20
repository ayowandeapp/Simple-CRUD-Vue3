import { defineStore } from "pinia"
import { computed, ref } from "vue"


export const useNotesStore = defineStore('useNotesStore', () => {
    const notes = ref([
        {
            id: "1",
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus ipsum, tempora natus eaque debitis voluptatibus maxime magnam iusto repellendus minus, maiores ratione rerum sapiente ut possimus aliquid alias dolorum',
        },
        {
            id: "2",
            content: 'na second note be this',
        },
    ])

    const noteID = ref('')

    const getNote = computed(() => {
        return notes.value.find((n)=> n.id==noteID.value)
        
    })

    const notesCount = computed(() =>{
        return notes.value.length;
    })

    const notesCharacters = computed(()=>{
        let count = 0
        notes.value.forEach(note=> count+= note.content.length);
        return count;
    })


    function addNewNote(newNote) {
        const currentDate = new Date().getTime(),
            id = currentDate.toString();

        notes.value.unshift({id, content:newNote});
    }

    function deleteNote(id){
        
        let index = notes.value.findIndex((note)=> note.id==id);
        if(index !== -1) notes.value.splice(index,1)

    }

    function saveEditNote(id, noteData){

        let index = notes.value.findIndex((note)=> note.id==id);
        if(index != -1){
            notes.value[index].content = noteData;
        }


    }
  
    return {notesCharacters, notesCount, noteID, notes, addNewNote, deleteNote, getNote, saveEditNote}
  })