<template>
    <div>
        <h1>Editar tarea</h1>
        <!-- {{id}} - {{tarea}} -->
        <form @submit.prevent="editarTarea(tarea)">
            <input class="form-control" type="text" v-model="tarea.nombre">
            <button class="btn btn-warning mt-2" type="submit">Editar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getTarea','editarTarea'])
    },
    created(){
        this.getTarea(this.id)
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>