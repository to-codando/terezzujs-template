import logo from '../../assets/images/logo.png'

const selector = '[mvc=page]'

const style = ({ css }) => css`
  .ctx-wrapper,
  .ctx-wrapper > p {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width:100%;
    margin:0;
  }
  .ctx-img {
    display:flex;
    width:180px;
    margin:75px auto;
  }
`

const template = ({ state, html, methods }) => {
  return html`
    <img src="${logo}" alt="${state.label}" class="ctx-img"/>

    <div class="ctx-wrapper">   
      <p>${state.description}</p>
      <div mvc="counter"></div>
    </div>
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
