let app = new Vue ({
    el: '#app',
    data:{
        input: "",
        currentSection: 0,
        todo:[
            {
                section: 'Stase',
                items: [
                    {
                        text: 'Discutere con Bernardini',
                        done: false
                    }
                ]
            }
        ],
    },
    methods:{
        addSection: function(){
            this.todo.push({section:this.input, items:[]});
        },
        addTask: function(){
            this.todo.items[this.currentSection].push({text:this.input, done:false});
            console.log()
        }
    }
    
})

console.log("mhanzzzz");
