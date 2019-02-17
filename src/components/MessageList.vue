<template>
  <div id="message-list">
    <div id="messages-container" v-chat-scroll="{ smooth: true }">
      <component
        v-for="message in messages"
        :key="message.id"
        :is="message.type"
        :message="message"
      />
    </div>
  </div>
</template>

<script>
import SimpleTextMessage from '../components/SimpleTextMessage'

export default {
  components: {
    SimpleTextMessage
  },
  computed: {
    messages () {
      return this.$store.state.message.messages
    }
  }
}
</script>

<style>
#message-list {
  flex: 1 1;
  position: relative;
}

#messages-container {
  max-height: 100%;
  width: 100%;
  position: absolute;
  overflow: auto;
  bottom: 0;
}
</style>
