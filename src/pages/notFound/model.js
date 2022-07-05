const data = {
  title: 'um titulo qualquer'
}

const methods = {}
methods.logger = (data) => console.log(data)

export const model = () => ({ data, methods })
