import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrash, faEdit)
Vue.component('font-awesome-icon', FontAwesomeIcon)

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAd4s1pfa1UWr5wc59NwNv-eNsXinzEK-c",
  authDomain: "crud-udemy-dc3d3.firebaseapp.com",
  databaseURL: "https://crud-udemy-dc3d3.firebaseio.com",
  projectId: "crud-udemy-dc3d3",
  storageBucket: "crud-udemy-dc3d3.appspot.com",
  messagingSenderId: "590160987239",
  appId: "1:590160987239:web:a45d2fbf1bb002b59900c2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) => {
  // console.log(user);
  if(user){
    store.dispatch('detectarUsuario', {email: user.email, uid: user.uid})
  }else {
    store.dispatch('detectarUsuario', null)

  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})

