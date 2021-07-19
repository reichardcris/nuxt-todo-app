<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" style="max-width: 426px;">
      <v-card>
        <HeadingTitle />
        <TodoTabs @changeTab="_ => tabName = _" />
        <TodoList :tab="tabName" ref="spawnList" />
        <TodoAddList v-if="!tabName" @addList="addTodoList"/>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>


export default {
  data() {
    return {
      todoListItem: [],
      tabName: 1,
    }
  },
  methods: {
    addTodoList (payload) {
      this.$refs.spawnList.list.push(payload);
    },
  },
  watch: {
    
  }
}
</script>