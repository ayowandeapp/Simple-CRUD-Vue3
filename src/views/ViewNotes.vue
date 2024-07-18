<template>
    <div class="notes">
        <div class="card has-backgroud-success-dark p-4 mb-5">

            <div class="field">
            <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-backgroud-success">
                        Add New Notes</button>
                </div>
            </div>

        </div>
        <div 
            v-for="i in 3"
            class="card mb-4" >
            <div class="card-content">
                <div class="content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus ipsum, tempora natus eaque debitis voluptatibus maxime magnam iusto repellendus minus, maiores ratione rerum sapiente ut possimus aliquid alias dolorum!
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>