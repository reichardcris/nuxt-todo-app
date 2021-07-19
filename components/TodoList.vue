<template>
  <v-card-text>
    <v-tabs-items v-model="tab">
      <v-tab-item :value="0">
        <v-card flat>
          <div v-if="pendingList.length < 1">
            <p class="text-center">No Pending Task Yet...</p>
          </div>
          <div v-else>
            <v-checkbox
              v-for=" (item,key) in list"
              :key="key"
              class="ma-0 pa-0"
              :class="{ 'done': item.done }"
              @change="val => __change(item, val)"
            >
              <template v-slot:label >
                 <p class="mb-0" :class="{ 'text-decoration-line-through': item.done }">{{ item.label }}</p>
              </template>
            </v-checkbox>
          </div>
        </v-card>
      </v-tab-item>

      <v-tab-item :value="1">
        <v-card flat>
          <div v-if="completedList.length < 1">
            <p class="text-center">No Completed Task Yet...</p>
          </div>
          <div v-else>
            <v-list dense>
              <v-subheader>Completed Task</v-subheader>
              <v-list-item-group
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in completedList"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="'mdi-check'"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.label"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <!--  -->
    
  </v-card-text>
</template>

<style lang="scss" scoped>
  .done {
    transition: margin-left 2s;
    margin-left: 900px !important;
    p {
      font-size: 25px !important;
    }
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import { cloneDeep, set, isEmpty, findIndex } from 'lodash';

export default {
  data() {
    return {
      tabName: 1,
      list: [],
    }
  },
  props: {
    tab: {
        type: Number,
        default: () => 2,
    },
  },
  computed: {
    ...mapGetters('completed', ['complete']),
    ...mapGetters('pending', ['pending']),
    pendingList() {
      return this.list.filter(item => (!item.done));
    },
    completedList() {
      return this.list.filter(item => (item.done));
    }
  },
  created() {
    const pendingModel = cloneDeep((this.pending.list ?? []).map((item) => ({ done: false, label: item })));
    const completeModel = cloneDeep((this.complete.list ?? []).map((item) => ({ done: true, label: item })));
    this.list = [...pendingModel, ...completeModel];
  },
  methods: {
    __change(item, value) {
      const payload = cloneDeep(item);
      if (value) {
        set(payload, 'done', value);
        const index = findIndex(this.list, { label: payload.label });
        set(this.list[index], 'done', payload.done);
      };
    },
    ...mapActions('pending', {
      updatePendingList: 'update'
    }),
    ...mapActions('completed', {
      updateCompletedList: 'update'
    }),
  },
  watch: {
    pendingList: {
      deep: true,
      handler(val) {
        this.updatePendingList(val.map(item => (item.label)));
      }
    },
    completedList: {
      deep: true,
      handler(val) {
        this.updateCompletedList(val.map(item => (item.label)));
      }
    },
  }
}
</script>