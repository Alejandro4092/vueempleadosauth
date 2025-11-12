import Global from "@/Global";
import axios from "axios";

export default {
  // Login
  async login(usuario) {
    const request = "/Auth/Login";
    const url = Global.urlApiEmpleados + request;

    const response = await axios.post(url, usuario, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  },

  // Listar empleados
  async listEmpleados() {
    const request = "/api/Empleados";
    const url = Global.urlApiEmpleados + request;

    const response = await axios.get(url);
    return response.data;
  },

  // Perfil del empleado (usa token global)
  async perfilEmpleado() {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No hay token disponible");

    const request = "/api/Empleados/PerfilEmpleado";
    const url = Global.urlApiEmpleados + request;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    return response.data;
  },

  // Mostrar subordinados (usa token global)
  async mostrarSubordinados() {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No hay token disponible");

    const request = "/api/Empleados/Subordinados";
    const url = Global.urlApiEmpleados + request;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    return response.data;
  }
};
