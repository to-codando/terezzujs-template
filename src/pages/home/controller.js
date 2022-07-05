import { counter } from '../../components/counter'

const children = {
  counter
}

const methods = {}

methods.logger = (data) =>
  console.log(data)

const controller = () => ({
  methods,
  children
})

export { controller }
