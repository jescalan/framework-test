import {h, render} from 'preact'
/** @jsx h */

render((
  <div id='foo'>
    <span>Hello, world!</span>
    <button onClick={e => window.alert('hi!')}>Click Me</button>
  </div>
), document.body)
