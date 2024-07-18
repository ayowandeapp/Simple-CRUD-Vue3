<template>
    <div class="notes">
        <div class="card has-backgroud-success-dark p-4 mb-5">

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

        </div>
        
        <Note v-for="note in notes" :key="note.id" @delete="deleteNote"
            :note="note"></Note>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';


const newNote = ref('');
const newNoteRef = ref(null);
const postNewNoteHandler = () => {
    let currentDate = new Date().getTime(),
        id = currentDate.toString();

    notes.value.unshift({ id, content: newNote.value });
    
    newNote.value = ''

    newNoteRef.value.focus()

}
const notes = ref([
    {
        id: "1",
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus ipsum, tempora natus eaque debitis voluptatibus maxime magnam iusto repellendus minus, maiores ratione rerum sapiente ut possimus aliquid alias dolorum',
    },
    {
        id: "2",
        content: 'na second note be this',
    },
]);
const deleteNote = (id)=>{

    let index = notes.value.findIndex((note)=> note.id==id);
    if(index !== -1) notes.value.splice(index,1)

}
</script>