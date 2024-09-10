<template>
  <input type="number" name="phone" id="phone" placeholder="Teléfono" v-model="phone">
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    numberPhone: String
  },
  setup() {
    return {
      phone: ref('')
    }
  },
  mounted() {
    this.phone = this.numberPhone
  },
  watch: {
    phone(newNumberPhone) {
      this.$emit('update:numberPhone', newNumberPhone)
    }
  }
})
</script>
