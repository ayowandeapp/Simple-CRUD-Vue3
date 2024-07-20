import { watch } from "vue";

export const useWatchCharacters = (valueToWatch, maxChars=100)=>{
    
    watch(valueToWatch, (newValue, oldValue)=>{
        if(newValue.length >= maxChars){
            alert(`only ${maxChars} charcter allowed`);
        }

    })
}