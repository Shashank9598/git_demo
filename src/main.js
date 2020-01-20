import Vue from 'vue'
import App from './App.vue'

/* const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/to-dolist", { useNewUrlParser: true }, (error)=>{
  if(!error){
    console.log("success");
  }
  else{
    console.log("error connecting to database.");
  }
}); */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
