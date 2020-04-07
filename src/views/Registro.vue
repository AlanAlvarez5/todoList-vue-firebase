<template>
  <div>
    <h1>Registro de usuarios</h1>
    <form @submit.prevent="crearUsuario({email: email, pass: pass1})">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
        </div>
        <input
          type="email"
          placeholder="ejemplo@ejemplo.com"
          v-model="email"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Contraseña</span>
        </div>
        <input
          type="password"  v-model="pass1"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Repetir Contraseña</span>
        </div>
        <input
          type="password"  v-model="pass2"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <button class="btn btn-primary" type="submit" :disabled="!desactivar">Crear usuario</button>
    </form>
    <p class=my-3>{{error}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: ""
    };
  },
  methods: {
    ...mapActions(["crearUsuario"])
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return this.pass1 === this.pass2 && this.pass1 != "";
    }
  }
};
</script>