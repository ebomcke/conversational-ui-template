<template>
  <div id="main-interface">
    <message-list />
    <div id="user-input-container">
      <div id="suggestions"></div>
      <div id="user-input">
        <md-field>
          <md-textarea v-model="text" md-autogrow/>
        </md-field>
        <md-button class="md-icon-button md-raised md-primary" @click="send">
          <md-icon>send</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
import MessageList from '../components/MessageList'

export default {
  components: {
    MessageList
  },
  data: function () {
    return {
      text: ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.message.messages
    }
  },
  methods: {
    send () {
      this.$store.dispatch('send', {
        data: {
          text: this.text
        }
      })
      this.text = ''
    }
  }
}
</script>

<style>
#main-interface {
  display: flex;
  flex-direction: column;
  height: 100%;
}

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
