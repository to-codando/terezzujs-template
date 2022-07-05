const selector = '[mvc=page]'

const template = ({ state, html, methods }) => {
  return html`
    <h1>Página não encontrada</h1>
    <a href="#/">Voltar ao início</a>
  `
}

const events = {}

const view = () => ({
  selector,
  template,
  events
})

export { view }
