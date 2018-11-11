class Jumbotron extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({
      mode: 'open'
    })
    // Style
    const style = document.createElement('link')
    style.setAttribute('rel', 'stylesheet')
    style.setAttribute('href', '../../node_modules/bootstrap/dist/css/bootstrap.min.css')
    shadow.appendChild(style)
  }
}
customElements.define('bs-jumbotron', Jumbotron)
