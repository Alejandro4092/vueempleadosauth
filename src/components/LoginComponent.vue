<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="hacerLogin">
      <label>Usuario</label>
      <input type="text" v-model="userName" class="form-control" />
      <label>Contraseña</label>
      <input type="text" v-model="password" class="form-control" />
      <button type="submit" class="btn btn-primary mt-3">Login</button>
    </form>
  </div>
</template>

<script>
import EmpleadosService from "../services/ServiceEmpleados";

export default {
  name: "LoginComponent",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    async hacerLogin() {
      const usuario = { userName: this.userName, password: this.password };
      const data = await EmpleadosService.login(usuario);
      localStorage.setItem("token", data.response);
      this.$router.push("/perfil");
    }
  }
};
</script>

  <!--
<template>
   <div>
     <h1>Login</h1>
    <form @submit.prevent="hacerLogin">
       <label>Usuario</label>       <input type="text" v-model="userName" class="form-control" />
      <label>Contraseña</label>
       <input type="password" v-model="password" class="form-control" />
      <button type="submit" class="btn btn-primary mt-3">Login</button>
    </form>
   </div>
</template>

// <script>
import ServiceEmpleados from "../services/ServiceEmpleados";
const services = new ServiceEmpleados();
export default {
  name: "LoginComponent",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    hacerLogin() {
      const usuario = { userName: this.userName, password: this.password };
      
      // Usamos la Promesa de EmpleadosService sin async/await
      services.login(usuario)
        .then(response => {
          // Guardamos el token en localStorage
          localStorage.setItem("token", response.response);

          // Redirigimos a perfil
          this.$router.push("/perfil");
        });
    }
  }
};
</script>
-->