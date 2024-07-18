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
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item" @click.prevent="deleteNote">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    note:{
        type: Object,
        required: true
    }
})

const characterLength = computed(()=>{
    let noteContentCount = props.note.content.length
    let description = noteContentCount > 1 ? 
    "characters" : "character";
    return `${noteContentCount} ${description}`;
})

const emit = defineEmits(['delete']);

const deleteNote = ()=>{
    emit('delete', props.note.id);
}
</script>