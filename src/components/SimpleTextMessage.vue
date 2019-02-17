<template>
  <div class="message">
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
  }
}
</script>

<style>
.message {
  margin: 2em;
}
</style>
