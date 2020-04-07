<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="ingresoUsuario({email: email, pass: pass})">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
        </div>
        <input
          type="email" placeholder="ejemplo@ejemplo.com" v-model="email"
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
          type="password"  v-model="pass"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <button class="btn btn-primary" type="submit">Acceder</button>
    </form>
    <p class=my-3>{{error}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Ingreso",
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"])
  },
  computed: {
    ...mapState(["error"])
  }
};
</script>