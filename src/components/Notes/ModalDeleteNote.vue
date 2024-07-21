<template>
    
    <div class="modal is-active">
        <div class="modal-background">
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Delete Note?</p>
                    <button class="delete" aria-label="close" @click.prevent="deleteModal=false"></button>
                </header>
                <section class="modal-card-body">
                    Are you sure?
                </section>
                <footer class="modal-card-foot">
                    <button class="button" @click.prevent="deleteModal=false">Cancel</button>
                    <button class="button is-danger" @click.prevent="deleteNote">
                        Delete
                    </button>
                </footer>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useNotesStore } from '@/stores/storeNote';


const deleteModal = defineModel();

const notesStore = useNotesStore()

const props = defineProps({
    noteID :{
        type: String,
        required: true
    }
})

const deleteNote = () =>{
    
    notesStore.deleteNote(props.noteID)
    
}
</script>