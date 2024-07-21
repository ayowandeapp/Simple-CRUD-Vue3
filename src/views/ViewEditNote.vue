<template>

    <div class="edit-note">
        <h1>Edit Note with ID {{ $route.params.id }}</h1>

        
        <AddEditNote
            v-model="editNote"
            ref="addEditNoteRef"
            bgColor="link"
        >
            <template v-slot:button>
                
                <button 
                        @click="$router.back()" class="button has-background-danger">
                        Cancel
                </button>

                <button 
                        :disabled="!editNote"
                        @click="editNoteHandler" class="button is-link has-backgroud-success">
                        Edit Notes
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useNotesStore } from '@/stores/storeNote';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const editNote = ref('');
const addEditNoteRef = ref(null);

const noteStore = useNotesStore();

onMounted(()=>{
    getNoteDetail()
})

const getNoteDetail = () =>{
    noteStore.noteID = route.params.id;
    const note = noteStore.getNote;
    editNote.value = note.content

}

const editNoteHandler = ()=>{
    noteStore.saveEditNote(route.params.id, editNote.value)

    router.push('/')
}
</script>