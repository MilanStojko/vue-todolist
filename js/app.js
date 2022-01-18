let app = new Vue ({
    el: '#app',
    data:{
        input: "",
        currentSection: 0,
        todo:[
            {
                section: 'Stase',
                sdone: false,
                items: [
                    {
                        text: 'Discutere con Bernardini',
                        done: false
                    }
                ]
            }
        ]
    },
    methods:{
        addTask: function(){
            this.todo[this.currentSection].items.push({text:this.input, done:false});
            console.log()
        },
        addSection: function(){
            this.todo.push({section:this.input, sdone:false, items:[]});
        },
        deleteTask: function(i, y){
            this.todo[i].items.splice(y, 1);
        },
        deleteSection: function(i){
            this.todo.splice(i, 1);
        },
        fattaTask: function(i, y){
            if(this.todo[y].items[i].done == false){
                this.todo[y].items[i].done = true;
            }
        },
        fattaSection: function(y){
            if(this.todo[y].sdone == false){
                this.todo[y].sdone = true;
            }else{
                this.todo[y].sdone = false;
            }
        },
        fattaTask: function(y){
            if(this.todo[y].items.done == false){
                this.todo[y].items.done = true;
            }else{
                this.todo[y].items.done = false;
            }
        },
    } 
})

console.log("mhanzzzz");
