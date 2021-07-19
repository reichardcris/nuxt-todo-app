<template>
  <v-app dark>
    <v-main>
      <div class="mt-16">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col align-self="center">
              <Nuxt />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  created() {
    this.pendingPersist();
    this.completePersist();
  },
  methods: {
    ...mapActions('pending', {
      pendingPersist: 'persist'
    }),
    ...mapActions('completed', {
      completePersist: 'persist'
    }),
  }
}
</script>
