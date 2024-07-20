<template>
    <div class="notes">
        <AddEditNote
            v-model="newNote"
            ref="addEditNoteRef"
        >
            <template v-slot:button>

                <button 
                        :disabled="!newNote"
                        @click="postNewNoteHandler" class="button is-link has-backgroud-success">
                        Add New Notes
                </button>
            </template>
        </AddEditNote>
        <!-- <div class="card has-backgroud-success-dark p-4 mb-5">

            <div class="field">
                <div class="control">
                    <textarea ref="newNoteRef" v-model="newNote" class="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button 
                        :disabled="!newNote"
                        @click="postNewNoteHandler" class="button is-link has-backgroud-success">
                        Add New Notes</button>
                </div>
            </div>

        </div> -->
        
        <Note v-for="note in notesStore.notes" :key="note.id"
            :note="note"></Note>

            <!-- @delete="deleteNote" -->
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import { useNotesStore } from '@/stores/storeNote';
import AddEditNote from '@/components/Notes/AddEditNote.vue'


const newNote = ref('');
const addEditNoteRef = ref(null);
const postNewNoteHandler = () => {
    notesStore.addNewNote(newNote.value);
    
    newNote.value = ''

    addEditNoteRef.value.focusTextarea()

}
const notesStore = useNotesStore();
// const deleteNote = (id)=>{

//     let index = notes.value.findIndex((note)=> note.id==id);
//     if(index !== -1) notes.value.splice(index,1)

// }
</script>