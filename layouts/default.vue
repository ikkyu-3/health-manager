<template>
  <v-app>
    <div>
      <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>
      </v-toolbar>
    </div>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-card flat>
      <v-bottom-navigation
        v-model="bottomNav"
        fixed
        grow
        background-color="teal"
      >
        <v-btn value="recent">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>First</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Second</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'recent',
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
