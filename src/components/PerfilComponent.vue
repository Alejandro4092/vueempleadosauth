<template>
  <div v-if="empleado">
    <h2>Perfil del Empleado</h2>
    <p><strong>ID:</strong> {{ empleado.idEmpleado }}</p>
    <p><strong>Apellido:</strong> {{ empleado.apellido }}</p>
    <p><strong>Oficio:</strong> {{ empleado.oficio }}</p>
    <p><strong>Salario:</strong> {{ empleado.salario }}</p>
    <p><strong>Director:</strong> {{ empleado.director }}</p>
    <button class="btn btn-primary" @click="verSubordinados">Ver Subordinados</button>
  </div>
  <p v-else>Cargando datos del empleado...</p>
</template>

<script>
import EmpleadosService from "../services/ServiceEmpleados";

export default {
  name: "PerfilComponent",
  data() {
    return {
      empleado: null
    };
  },
  methods: {
    async cargarPerfil() {
      this.empleado = await EmpleadosService.perfilEmpleado();
    },
    verSubordinados() {
      this.$router.push("/subordinados");
    }
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    } else {
      this.cargarPerfil();
    }
  }
};
</script>
