import logo from '../../assets/images/logo.png'

const selector = '[mvc=main]'

const style = ({ css }) => css`
  .ctx-title { color: red }
`

const template = ({ state, html, methods }) => {
  return html`
   <div mvc="page"></div>
  `
}

const events = {}

const view = () => ({
  selector,
  template,
  events,
  style
})

export { view }
