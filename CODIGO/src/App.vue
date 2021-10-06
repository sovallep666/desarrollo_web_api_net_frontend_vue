<template>

  <div id="nav" class="navbar navbar-dark bg-primary">
    <router-link style="color:white" class="text-center" to="/">Home</router-link> |
    <router-link style="color:white" class="text-center" to="/empleados/CrearEmpleado">Nuevo empleado</router-link> |
    <router-link style="color:white" class="text-center" to="/empleados/ListarEmpleados">Lista de Empleados</router-link>
  </div>
  <router-view/>
</template>

