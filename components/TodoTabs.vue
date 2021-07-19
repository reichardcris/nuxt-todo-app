<template>
  <v-card-actions>
    <v-tabs
      fixed-tabs
      v-model="tabName"
    >
      <v-tab key='pending'>
        <v-badge
          color="pink"
          dot
        >
          Pending
        </v-badge>
      </v-tab>

      <v-tab key='complete'>
        <v-badge
          color="green"
          dot
        >
          Completed
        </v-badge>
      </v-tab>

    </v-tabs>
    <v-spacer />
  </v-card-actions>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      tabName: 1,
    }
  },
  computed: {
    ...mapGetters('completed', ['complete']),
    countCompletedTask() {
      return (this.complete.list ?? []).length;
    }
  },
  watch: {
    tabName(val) {
      console.log(val)
      this.$emit('changeTab', val);
    }
  }
}
</script>