<template>
    <div>
        <h1>Agregar nueva tarea</h1>
        <form @submit.prevent="agregarTarea(nombre)">
            <input class="form-control" type="text" v-model="nombre">
            <button class="btn btn-success mt-2" type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    data(){
        return {
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>