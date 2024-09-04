<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      name: ref(''),
      errorName: ref(false),
      lastName: ref(''),
      errorLastName: ref(false),
      year: ref(''),
      errorYear: ref(false),
      phone: ref(''),
      errorPhone: ref(false),
      address: ref(''),
      errorAddress: ref(false),
      email: ref(''),
      errorEmail: ref(false),
      users: ref([])
    }
  },
  methods: {
    validateData() {
      let isValid = true

      if (this.name === '') {
        isValid = false
        this.errorName = true
      }

      if (this.lastName === '') {
        isValid = false
        this.errorLastName = true
      }

      if (this.year === '') {
        isValid = false
        this.errorYear = true
      }

      if (this.phone === '') {
        isValid = false
        this.errorPhone = true
      }

      if (this.address === '') {
        isValid = false
        this.errorAddress = true
      }

      if (this.email === '') {
        isValid = false
        this.errorEmail = true
      }

      return isValid
    },
    register() {
      const isValid = this.validateData()

      if (isValid) {
        console.log(this.name, this.lastName, this.year, this.phone, this.address, this.email)
        console.log('Registrado')
        this.users.push({
          name: this.name,
          lastName: this.lastName,
          year: this.year,
          phone: this.phone,
          address: this.address,
          email: this.email
        })
        this.clear()
        console.log(this.users)
      }
    },
    clear() {
      this.name = ''
      this.errorName = false
      this.lastName = ''
      this.errorLastName = false
      this.year = ''
      this.errorYear = false
      this.phone = ''
      this.errorPhone = false
      this.address = ''
      this.errorAddress = false
      this.email = ''
      this.errorEmail = false
    }
  }
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Registrate</h5>
            <hr class="hr">
            <label for="name">Nombre</label>
            <input type="text" class="form-control" v-model="name">
            <span v-if="errorName" class="text-danger">El nombre es obligatorio</span>
            <label for="lastName">Apellido</label>
            <input type="text" class="form-control" v-model="lastName">
            <span v-if="errorLastName" class="text-danger">El apellido es obligatorio</span>
            <label for="year">Fecha de nacimiento</label>
            <input type="text" class="form-control" v-model="year">
            <span v-if="errorYear" class="text-danger">La fecha de nacimiento es obligatoria</span>
            <label for="phone">Teléfono</label>
            <input type="text" class="form-control" v-model="phone">
            <span v-if="errorPhone" class="text-danger">El teléfono es obligatorio</span>
            <label for="address">Dirección</label>
            <input type="text" class="form-control" v-model="address">
            <span v-if="errorAddress" class="text-danger">La dirección es obligatoria</span>
            <label for="email">Correo electrónico</label>
            <input type="text" class="form-control" v-model="email">
            <span v-if="errorEmail" class="text-danger">El correo electrónico es obligatorio</span>
            <hr class="hr">
            <button type="button" class="btn btn-primary" @click="register">Registrar</button>
          </div>
        </div>
      </div>
      <div v-if="users.length !== 0" class="col">
        <h3>Lista de usuarios</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de nacimiento</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Correo electrónico</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
              <td>{{ user.name }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.year }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.address }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hr {
  width: 100%;
}

.text-danger {
  color: red;
}

.card {
  border: 1px solid white;
}

.card-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-control {
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: cornflowerblue;
  border-color: cornflowerblue;
  border-radius: 15px;
}
</style>
