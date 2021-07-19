<template>
  <v-card-actions>
    <v-text-field
      clearable
      flat
      placeholder="Add an item here"
      type="text"
      click:append="add"
      v-model="listItem"
    >
      <template v-slot:append-outer>
      <v-btn
        color="primary"
        nuxt
        rounded
        @click="add"
      >
        Add Item
      </v-btn>
    </template>
  </v-text-field>
</v-card-actions>
</template>

<style lang="scss" scoped>
  .v-text-field__details {
    display: none !important;
  }
</style>

<script>
export default {
  data() {
    return {
      listItem: null,
    }
  },
  methods: {
    add() {
      if (this.listItem) {
        this.$emit('addList', { label: this.listItem, done: false });
        this.listItem = null;
      }
    }
  }
}
</script>