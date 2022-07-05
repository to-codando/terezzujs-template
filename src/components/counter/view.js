const selector = '[mvc=counter]'
const events = {}

const style = ({ css }) => css`
  .ctx-wrapper,
  .ctx-value {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width:100%;
    font-size: 3rem;
    margin:0;
  }

  .ctx-value { padding: 1rem 0; }

  .ctx-button {
    color: #fff;
    background:#000;
    border:0;
    border-radius:5px;
    width:45px;
    height:45px;
    cursor: pointer
  }  
`

const template = ({ state, html, methods }) => html`
   <div class="ctx-wrapper">
      <p class="ctx-value">${state.counter.value}%</p>
      <button class="ctx-button">+</button>   
   </div>
`

events.onClickToIncrement = ({ on, queryOnce, methods }) => {
  const btnIncrement = queryOnce('button')
  on('click', btnIncrement, methods.increment)
}

export const view = () => ({
  selector,
  template,
  events,
  style
})
