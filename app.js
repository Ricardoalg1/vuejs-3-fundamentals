const app = Vue.createApp({

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
    
.mount('#app')