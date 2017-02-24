/* global customElements */
import 'skatejs-web-components'
import {h, Component} from 'skatejs'

customElements.define('x-hello', class extends Component {
  static get props () {
    return { name: { attribute: true } }
  }
  renderCallback () {
    return h('div', `Hello, ${this.name}`)
  }
})
