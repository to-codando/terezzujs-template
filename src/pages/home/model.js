const data = {
  label: 'TerezzuJS template',
  description: 'Minha sanidade aumentando:'
}

const methods = {}
methods.logger = (data) => console.log(data)

export const model = () => ({
  data, methods
})
