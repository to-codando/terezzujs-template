const data = {
  counter: { value: 1 }
}

const methods = {}

methods.getData = (state) => {
  return state.get()
}

methods.increment = (state, value) => {
  const { counter } = state.get()
  counter.value = counter.value + value
  state.set({
    counter
  })
}

methods.decrement = (state, value) => {
  state.set({
    ...state.get(),
    counter: +state.get().counter >= 1 ? +state.get().counter - value : +state.get().counter
  })
}

export const model = () => ({
  data,
  methods
})
