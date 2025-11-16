<template>
  <div v-if="subordinados.length > 0">
    <h2>Mis Subordinados</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Apellido</th>
          <th>Oficio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sub in subordinados" :key="sub.idEmpleado">
          <td>{{ sub.idEmpleado }}</td>
          <td>{{ sub.apellido }}</td>
          <td>{{ sub.oficio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>No hay subordinados que mostrar.</p>
</template>

<script>
import EmpleadosService from "../services/ServiceEmpleados";

export default {
  name: "SubordinadosComponent",
  data() {
    return {
      subordinados: []
    };
  },
  methods: {
    async cargarSubordinados() {
      this.subordinados = await EmpleadosService.mostrarSubordinados();
    }
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    } else {
      this.cargarSubordinados();
    }
  }
};
</script>

<!--
<template>
  <div v-if="subordinados.length > 0">
    <h2>Mis Subordinados</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Apellido</th>
          <th>Oficio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sub in subordinados" :key="sub.idEmpleado">
          <td>{{ sub.idEmpleado }}</td>
          <td>{{ sub.apellido }}</td>
          <td>{{ sub.oficio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>No hay subordinados que mostrar.</p>
</template>

<script>
import ServiceEmpleados from "../services/ServiceEmpleados";
const services = new ServiceEmpleados();
export default {
  name: "SubordinadosComponent",
  data() {
    return {
      subordinados: []
    };
  },
  methods: {
    cargarSubordinados() {
      // Usamos then() en lugar de async/await
      services.mostrarSubordinados().then(response => {
        this.subordinados = response;
      });
    }
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    } else {
      this.cargarSubordinados();
    }
  }
};
</script>
-->