let titleComponentObj = {
     template: '#title-template',

            props: {
        
                id: {type:Number, required:true, default:00},
                name: { type: String, default: 'Sprites' },
                age: { type: Number, default: 30 },
                gender: { type: String, default: 'Male' },
                hash: { type: String, default: '1' },
                scr:''
            
            }
}


const app = Vue.createApp({


})
    .component('title-picker', {
        
        template: '#title-picker-template',
        components: { titleComponent : titleComponentObj},
            data() {
            return {

                familyMembers: [
                    {
                        id:1,
                        name: 'Ricardo',
                        age: 32,
                        gender: 'Male',
                        hash: '205e460b479e2e5b48aec07710c08d50'
                    
                    },
                    {
                        id:2,
                        name: 'Alison',
                        age: 30,
                        gender: 'Female',
                        hash: '0'
                    }, 
                    {
                        id:3,
                        name: 'Luz',
                        age: 63,
                        gender: 'Female',
                        hash: '205e460b479e2e5b48aec07710c08d50'
                    },
                    {
                    id:4,
                        name: 'Jerry',
                        age: 2,
                        gender: 'Male',
                        hash: '0'
                    } ,
                    {
                    id:5,
                        name: 'Toby',
                        age: 13,
                        gender: 'Male',
                        hash: '1234567890'
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
        
.mount('#app')