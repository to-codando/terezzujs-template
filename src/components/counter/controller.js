const methods = {}

methods.getData = (model) => {
  const { counter } = model.getData()
  return counter
}

methods.increment = (model) => {
  model.increment(1)
}

methods.decrement = (model) => {
  model.decrement(1)
}

export const controller = () => ({
  methods
})
