const app = Vue.createApp({

    data() {
        return {
            names: ['Ricardo', 'Alison', 'Luz', 'Jerry']
        }
    }

})
    .component('click-counter', {
        template: '#click-counter-template',
        data() {
            return {
                Count: 0
            }
        },
        methods: {
            increment() {
                this.Count++
            }
        }
        
    })
    .component('title-component', {
        template: '#title-template',

        props: ['name']
    })
    
.mount('#app')