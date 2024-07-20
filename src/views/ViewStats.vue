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
    </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNote';

const noteStore = useNotesStore();

const notesCount = noteStore.notesCount

const notesCharacters = noteStore.notesCharacters

</script>