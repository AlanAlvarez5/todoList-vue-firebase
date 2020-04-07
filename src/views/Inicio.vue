<template>
    <div>
        <!-- <h1>Ruta Protegida</h1>
        {{usuario}} -->
        
        <h1>Bienvenido {{usuario.email}}</h1>
        <router-link  :to="{ name: 'Agregar' }">
            <button class="my-5 btn btn-success ">Agregar Nueva Tarea</button>
        </router-link>
        <h3>Tareas Pendientes</h3>
        <ul class="list-group ">
            <li class="list-group-item"
            v-for="item of tareas" :key="item.id">
                <!-- {{item.id}} -  -->

                {{item.nombre}}
                <div class="float-right">
                <router-link :to="{name: 'Editar', params: {id: item.id} }">
                    <button class="btn btn-warning mx-1"><font-awesome-icon icon="edit" /></button>
                </router-link>
                <button @click="eliminarTarea(item.id)" class="btn btn-danger mx-1"><font-awesome-icon icon="trash" /></button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Inicio',
    computed: {
        ...mapState(['usuario', 'tareas'])
    },
    methods:{
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    created(){
        this.getTareas()
    }
}
</script>