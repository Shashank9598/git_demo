<template>
    <div class="border">
            <input type="text" class="todo" placeholder="Write here" v-model="todo.name"/>
            <hr color="darkorange" width="200px"/>
            <div class="content">
                <p v-for='item in todos' :key="item" class="con">
                    <input type="checkbox"> 
                    {{item.name}}
                </p>  
            </div>
            <input type="button" class="add" value="add" v-on:click.prevent="post">
            <input type="button" class="clear" value="clear"/>
            <input type="button" class="select_all" value="select_all"/>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    name: 'Workinglist',
    data() {
        return {
            todo: {
                name : ''
            },
            submitted : false,
            todos:{
                name : []
            },
        }
    },
    methods: {
        post:function() {
            this.$http.post('https://to-dolist-app.firebaseio.com/posts.json',this.todo).then(function(){
                this.submitted = true;
            });
        },
    },
        created() {
        this.$http.get('https://to-dolist-app.firebaseio.com/posts.json').then(function(data){
            return data.json;
        }).then(function(data){
            this.todos = data;
            this.todos = [{name : 'shashank'},{name :'choudhury'}];
        });
    }  
}
</script>

<style scoped>
    .border {
        padding: 0px;
        width: 300px;
        height: 300px;
        position:relative;
        margin-left:-150px;/* half of width */
        margin-top:40px;
        left:50%;
        border: 2px solid darkorange;
        border-radius: 8px;
    }

    .todo {
        width: 296.5px;
        height: 30px;
        border-color: transparent;
        border-radius: 8px;
        font-size: 20px; 
        font-family: cursive;      
    }

    .content {
        overflow-y:auto;
        height:215px;
        width:300px;
        text-align: left;
    }

    .add {
        width: 99px;
        height: 30px;
        font-family: cursive;
        font-size: 18px;
        border-radius: 8px;
        color: brown;
    }

    .clear {
        width: 99px;
        height: 30px;
        font-family: cursive;
        font-size: 18px;
        border-radius: 8px;
        color: brown;
    }

    .select_all {
        width: 99px;
        height: 30px;
        font-family: cursive;
        font-size: 18px;
        border-radius: 8px;
        color: brown;
    }

    .con {
        font-family: cursive;
        font-size: 18px;
        border: 18px;
    }
</style>