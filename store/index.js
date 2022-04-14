export const state = () => ({
  user: 'hello',
  band: null,
})

export const mutations = {
  setUser(state, userData) {
    state.user = userData
  },
  setBand(state, bandData) {
    state.band = bandData
  },
}
