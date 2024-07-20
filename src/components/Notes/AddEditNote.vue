<template>

    <div class="card p-4 mb-5"
        :class="`has-background-${bgColor}-dark`"
    
    >

    <div class="field">
        <div class="control">
            <textarea 
                v-model="noteValue"
                ref="textreaRef" 
                class="textarea" placeholder="Textarea"></textarea>
        </div>
    </div>

    <div class="field is-grouped is-grouped-right">
        <div class="control">
            <slot name="button"></slot>
        </div>
    </div>

    </div>

</template>

<script setup>
import { ref } from 'vue';


const noteValue = defineModel();

const props = defineProps({
    bgColor : {
        type: String,
        default: "primary"
    }
})

const textreaRef = ref(null)
const focusTextarea = () =>{
    textreaRef.value.focus()

}

defineExpose({focusTextarea})

// const props = defineProps({
//     noteValue : {
//         type: String,
//         required: true
//     }
// })
</script>