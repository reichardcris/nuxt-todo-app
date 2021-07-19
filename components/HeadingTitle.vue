<template>
  <v-card-title class="headline">
    {{ title }}
  </v-card-title>
</template>

<script>
export default {
  props: {
    title: {
      default: () => "Checklist",
      type: String
    }
  }
}
</script>