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
// import Global from "@/Global";
// import axios from "axios";
// import Swal from 'sweetalert2';

// export default class ServiceEmpleados {

//   // Login
//   login(usuario) {
//     return new Promise(resolve => {
//       const url = Global.urlApiEmpleados + "/Auth/Login";
//       axios.post(url, usuario, { headers: { "Content-Type": "application/json" } })
//         .then(response => resolve(response.data));
//     });
//   }

//   // Listar empleados
//   listEmpleados() {
//     return new Promise(resolve => {
//       const url = Global.urlApiEmpleados + "/api/Empleados";
//       axios.get(url)
//         .then(response => resolve(response.data));
//     });
//   }

//   // Perfil del empleado (usa token)
//   perfilEmpleado() {
//     return new Promise(resolve => {
//       const token = localStorage.getItem("token");
//       const url = Global.urlApiEmpleados + "/api/Empleados/PerfilEmpleado";
//       axios.get(url, { headers: { Authorization: "Bearer " + token } })
//         .then(response => resolve(response.data));
//     });
//   }

//   // Mostrar subordinados (usa token)
//   mostrarSubordinados() {
//     return new Promise(resolve => {
//       const token = localStorage.getItem("token");
//       const url = Global.urlApiEmpleados + "/api/Empleados/Subordinados";
//       axios.get(url, { headers: { Authorization: "Bearer " + token } })
//         .then(response => resolve(response.data));
//     });
//   }

//   // Asignar subordinado con SweetAlert
//   asignarSubordinado(idEmpleado, idJefe) {
//     return new Promise(resolve => {
//       Swal.fire({
//         title: '¿Confirmar asignación?',
//         text: 'Vas a asignar este empleado al jefe seleccionado.',
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonText: 'Sí, asignar',
//         cancelButtonText: 'Cancelar'
//       }).then(result => {
//         if (result.isConfirmed) {
//           const url = `${Global.urlApiEmpleados}/api/Empleados/${idEmpleado}/${idJefe}`;
//           axios.put(url)
//             .then(response => {
//               Swal.fire({
//                 title: 'Asignado',
//                 text: 'El empleado se ha asignado correctamente.',
//                 icon: 'success',
//                 timer: 1400,
//                 showConfirmButton: false
//               });
//               resolve(response.data);
//             });
//         } else {
//           resolve(null); // usuario canceló
//         }
//       });
//     });
//   }

// }
