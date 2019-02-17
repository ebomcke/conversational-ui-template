<template>
  <div :class="messageClasses">
    <div class="avatar">
      <div class="icon-avatar" v-if="message.user.avatar">
        <md-icon class="md-size-2x">{{ message.user.avatar }}</md-icon>
      </div>
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
  margin: 2em 1em;
  display: flex;
}

.message .md-card {
  flex: 1 1;
}

.message .avatar {
  width: 4em;
  height: 4em;
}

.icon-avatar {
  height: 100%;
  width: 100%;
  border-radius: 2em;
  background-color: #efefef;
  text-align: center;
}

.icon-avatar i {
  position: relative;
  top: 2px;
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
