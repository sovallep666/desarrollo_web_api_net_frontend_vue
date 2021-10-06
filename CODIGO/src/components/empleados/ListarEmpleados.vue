<template>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Empleado</h4>
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
        </div>
       <div class="modal-body">
          <div class="">
            <div class="card">
              <div class="card-body">
                <form v-on:submit.prevent="agregarEmpleado">
                  <div class="mb-3">
                    <label for="codigo" class="form-label">Código:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="codigo"
                      v-model="empleado.codigo"
                      id="codigo"
                      placeholder="E001"
                      readonly
                    />
                  </div>
                  <div class="mb-3">
                    <label for="nombres" class="form-label">Nombres:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="nombres"
                      v-model="empleado.nombres"
                      id="nombres"
                      placeholder="Nombres"
                      readonly
                    />
                  </div>
                  <div class="mb-3">
                    <label for="apellidos" class="form-label">Apellidos:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="apellidos"
                      v-model="empleado.apellidos"
                      id="apellidos"
                      placeholder="Apellidos"
                      readonly
                    />
                  </div>
                  <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="direccion"
                      v-model="empleado.direccion"
                      id="direccion"
                      placeholder="Calle #1"
                      readonly
                    />
                  </div>
                  <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="telefono"
                      v-model="empleado.telefono"
                      valueid="telefono"
                      placeholder="1290-6078"
                      readonly
                    />
                  </div>
                  <div class="mb-3">
                    <label for="fecha_nacimiento" class="form-label">Fecha de nacimiento:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="fecha_nacimiento"
                      v-model="empleado.fecha_nacimiento"
                      valueid="fecha_nacimiento"
                      placeholder="2000/03/11"
                      readonly
                    />
                  </div>
                  <div class="mb-3">
                    <label for="puesto" class="form-label">Puesto:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="puesto"
                      v-model="empleado.id_puesto"
                      valueid="puesto"
                      placeholder="1"
                      readonly
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Empleados
      </div>
      <div class="card-body">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Fecha de nacimiento</th>
              <th>Puesto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id_empleado">
              <td>{{ empleado.codigo }}</td>
              <td>{{ empleado.nombres }}</td>
              <td>{{ empleado.apellidos }}</td>
              <td>{{ empleado.direccion }}</td>
              <td>{{ empleado.telefono }}</td>
              <td>{{ empleado.fecha_nacimiento }}</td>
              <td>{{ empleado.id_puesto }}</td>
              <td>
                <router-link :to="{name:'EditarEmpleado', params:{id:empleado.id_empleado}} " class="btn btn-warning">Editar</router-link>
                <a
                  name=""
                  id=""
                  class="btn btn-danger"
                  href="#"
                  role="button"
                  v-on:click="eliminarEmpleado(empleado.id_empleado)"
                  >Eliminar</a
                >
                <a
                  name=""
                  id=""
                  class="btn btn-success"
                  href="#"
                  role="button"
                  data-toggle="modal"
                  data-target="#myModal"
                  v-on:click="buscarEmpleado(empleado.id_empleado)"
                  >Ver detalle</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      empleados: [],
      empleado: {},
    };
  },
  created: function() {
    this.consultarEmpleados();
  },
  methods: {
    consultarEmpleados() {
      fetch("https://localhost:5001/api/empleados")
        .then((response) => response.json())
        .then((dataResponsive) => {
          this.empleados = [];
          this.empleados = dataResponsive;
        })
        .catch(console.log);
    },
    eliminarEmpleado(id) {
      fetch("https://localhost:5001/api/empleados/" + id, {
        method: "DELETE",
      })
        .then((dataResponsive) => {
          console.log(dataResponsive);
          window.location.href = "ListarEmpleados";
        })
        .then((res) => console.log(res));
    },
    buscarEmpleado(id) {
      fetch("https://localhost:5001/api/empleados/" + id)
        .then((response) => response.json())
        .then((dataResponsive) => {
          console.log(dataResponsive);
          this.empleado = dataResponsive;
        })
        .catch(console.log);
    },
    editProduct(id) {
      fetch("https://localhost:5001/api/empleados/" + id)
        .then((response) => response.json())
        .then((dataResponsive) => {
          console.log(dataResponsive);
          this.product = dataResponsive;
          window.location.href = "EditarEmpleado";
        })
        .catch(console.log);
    },
  },
};
</script>
