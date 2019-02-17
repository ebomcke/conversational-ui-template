<template>
  <div id="user-input-container">
    <Suggestions :show="suggestionsShown" :onSelect="onSelect" />
    <div id="user-input">
      <md-field>
        <md-textarea v-model="text" md-autogrow @focus="showSuggestions()"/>
      </md-field>
      <md-button class="md-icon-button md-raised md-primary" @click="send">
        <md-icon>send</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import Suggestions from './Suggestions'

export default {
  components: {
    Suggestions
  },
  data: function () {
    return {
      text: '',
      suggestionsShown: false
    }
  },
  methods: {
    send () {
      this.suggestionsShown = false
      this.$store.dispatch('send', {
        data: {
          text: this.text
        }
      })
      this.text = ''
    },
    showSuggestions () {
      this.suggestionsShown = true
    },
    onSelect () {
      this.suggestionsShown = false
      this.text = ''
    }
  }
}
</script>

<style>
#user-input-container {
  flex: 0 0;
  background-color: #efefef;
}

#user-input {
  display: flex;
  align-items: flex-end;
  padding: 1.5em;
}

#user-input .md-field {
  margin-bottom: 0;
}
</style>
