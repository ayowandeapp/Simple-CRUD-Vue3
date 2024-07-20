<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ notesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Characters</td>
                    <td>{{notesCharacters}}</td>
                </tr>
            </tbody>
        </table>

        <input
            class="input"
            placeholder="Do you like this?"
            v-autofocus
            v-model="statsNote"
            >
    </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNote';
import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchCharacters } from '@/use/useWatchCharacters';
import { ref } from 'vue';

const noteStore = useNotesStore();

const notesCount = noteStore.notesCount

const notesCharacters = noteStore.notesCharacters

const statsNote = ref('')
//using watcher in composable
useWatchCharacters(statsNote, 20)

</script>