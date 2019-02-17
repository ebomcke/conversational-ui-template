export default {
  namespaced: true,
  state: {
    users: [
      {
        id: 'app-user',
        picture: 'user.png',
        type: 'app-user'
      },
      {
        id: 'system-user',
        avatar: 'person',
        type: 'other-user'
      }
    ]
  },
  getters: {
    getById: state => id => {
      return state.users.find(u => u.id === id)
    }
  }
}
