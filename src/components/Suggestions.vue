<template>
  <div id="suggestions" v-if="show && suggestions">
    <md-card>
      <md-card-content>
        <div class="item" v-for="s in suggestions" :key="s.id" @click="selectSuggestion(s)">
          {{ s.description }}
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    onSelect: Function
  },
  computed: {
    suggestions () {
      return this.$store.getters['conversation/suggestions']
    }
  },
  methods: {
    selectSuggestion (suggestion) {
      this.$store.dispatch('sendSuggestion', {
        data: suggestion
      })
      this.onSelect()
    }
  }
}
</script>

<style>
#suggestions {
  margin: 1em 2em 0;
}

#suggestions .md-card-content {
  padding: 0;
}

#suggestions .item {
  padding: 1em;
}
</style>
