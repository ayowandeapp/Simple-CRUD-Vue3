<template>

    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light">
                    <small>
                        {{ characterLength }} 
                    </small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/edit-note/${note.id}`"
                class="card-footer-item">Edit
            </RouterLink>
            <a href="#" class="card-footer-item" @click.prevent="deleteNote">Delete</a>
        </footer>

        <ModalDeleteNote 
            v-model="modals.deleteNote" 
            v-if="modals.deleteNote"
            :noteID = note.id />

        
    </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNote';
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'

const notesStore = useNotesStore();

const props = defineProps({
    note:{
        type: Object,
        required: true
    }
})

// const emit = defineEmits(['delete']);

const characterLength = computed(()=>{
    let noteContentCount = props.note.content.length
    let description = noteContentCount > 1 ? 
    "characters" : "character";
    return `${noteContentCount} ${description}`;
})


const deleteNote = ()=>{
    modals.deleteNote = true

    // emit('delete', props.note.id);
}


const modals = reactive({
    deleteNote:false
})
</script>