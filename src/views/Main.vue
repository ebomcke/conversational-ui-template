<template>
  <div id="main-interface">
    <message-list />
    <user-input />
  </div>
</template>

<script>
import MessageList from '../components/MessageList'
import UserInput from '../components/UserInput'

export default {
  components: {
    MessageList,
    UserInput
  }
}
</script>

<style>
#main-interface {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
