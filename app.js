const app = Vue.createApp({

    data() {
        return {

            familyMembers: [
                {
                 
                    name: 'Ricardo',
                    age: 32,
                    gender: 'Male'
                   
                },
                {
                    
                    name: 'Alison',
                    age: 30,
                     gender: 'Female'
                }, 
                {
                    
                    name: 'Luz',
                    age: 63,
                    gender: 'Female'
                },
                {
                  
                    name: 'Jerry',
                    age: 2,
                   gender: 'Male'
                }
             
            ]
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

        props: {
       
            name: { type: String, default: 'Sprites' },
            age: { type: Number, default: 30 },
            gender: { type: String, default: 'Male' }
        }
    })
    
.mount('#app')