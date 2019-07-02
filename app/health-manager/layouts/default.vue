<template>
  <v-app>
    <v-toolbar :clipped-left="clipped" fixed app>
      タイトル
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-card flat>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        absolute
        color="transparent"
      >
        <v-btn to="/" color="teal" flat value="recent">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn to="/first" color="teal" flat value="favorites">
          <span>First</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn to="/second" color="teal" flat value="nearby">
          <span>Second</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
