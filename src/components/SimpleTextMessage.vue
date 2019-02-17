<template>
  <div :class="messageClasses">
    <div class="avatar">
      <md-icon v-if="message.user.avatar">{{ message.user.avatar }}</md-icon>
      <img v-if="message.user.picture" :src="image" />
    </div>
    <md-card>
      <md-card-content>
        {{ message.data.text }}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    message: Object
  },
  data: function () {
    return {
      messageClasses: {
        message: true,
        'message-user': this.message?.user?.type === 'app-user',
        'message-other': this.message?.user?.type === 'other-user'
      }
    }
  },
  computed: {
    image () {
      return require(`../assets/${this.message?.user?.picture || 'user.png'}`)
    }
  }
}
</script>

<style>
.message {
  margin: 1em;
  display: flex;
}

.message .md-card {
  flex: 1 1;
}

.message .avatar {
  width: 4em;
  height: 4em;
}

.message-user {
  flex-direction: row-reverse;
}

.message-user .avatar {
  margin-left: 1em;
}

.message-other .avatar {
  margin-right: 1em;
}
</style>
