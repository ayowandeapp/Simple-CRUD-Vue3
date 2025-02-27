import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewEditNote from "@/views/ViewEditNote.vue"

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'notes',
            component: ViewNotes
    
        },
        {
            path: '/stats',
            name: 'stats',
            component: ViewStats
    
        },
        {
            path: '/edit-note/:id',
            name: 'edit-note',
            component: ViewEditNote
    
        }
    ]
})
