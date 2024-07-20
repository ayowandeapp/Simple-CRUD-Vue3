<template>

    <div class="card p-4 mb-5"
        :class="`has-background-${bgColor}-dark`"
    
    >

    <div class="field">
        <div class="control">
            <textarea 
                v-model="noteValue"
                ref="textreaRef" 
                class="textarea" 
                placeholder="Textarea"
                maxlength="100"
                v-autofocus
                ></textarea>
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
import { vAutofocus } from '@/directives/vAutofocus';
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

defineExpose({focusTextarea}) // allow parent to call this function

/* defining local directive

const vAutofocus = {
    mounted: (el) =>{
        el.focus()
        // console.log(el,'el');
    }
}
*/
</script>