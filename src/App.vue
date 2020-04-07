<template>
  <div id="app" class="container mt-5">
    <div id="nav">
      <div class="navbar">

      <router-link class="nav-item" v-if="existeUsuario" :to="{name: 'Inicio'}">Inicio</router-link> 
      <router-link class="nav-item"  v-if="!existeUsuario" :to="{name: 'Registro'}">Registro</router-link> 
      <router-link class="nav-item"  v-if="!existeUsuario" :to="{name: 'Ingreso'}">Ingreso</router-link> 
      <a class="nav-item"  v-if="existeUsuario" @click="cerrarSesion">Cerrar sesión</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'App',
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
