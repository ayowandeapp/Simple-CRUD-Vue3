<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    NoteApp
                </div>
            
                <a role="button" 
                    @click.prevent="showMobileNav=!showMobileNav"
                    class="navbar-burger"
                    :class="{'is-active': showMobileNav}" 
                    aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample"
                    ref="navbarRef">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" 
                class="navbar-menu"
                :class="{'is-active': showMobileNav}"
                ref="navBarMenuRef"
                >
                
                <div class="navbar-end">
                    
                    <RouterLink 
                        @click="showMobileNav=false"
                        to="/" 
                        class="navbar-item"
                        active-class="is-active"
                    >
                        Notes
                    </RouterLink>
                    <RouterLink 
                        @click="showMobileNav=false"
                        to="/stats" 
                        class="navbar-item"
                        active-class="is-active"
                    >
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
            
    </nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const navBarMenuRef = ref(null)
const navbarRef = ref(null)
onClickOutside(navBarMenuRef, (event) => {
    showMobileNav.value = false
},{
    ignore:[navbarRef]
}
)


const showMobileNav = ref(false);


</script>
<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>