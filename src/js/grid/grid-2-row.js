class Row extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({
      mode: "open"
    })
    // Style
    const style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", "../node_modules/bootstrap/dist/css/bootstrap.min.css")
    shadow.appendChild(style)
    // Container
    const container = document.createElement("div")
    container.classList.add("row")
    const slot = document.createElement("slot")
    container.appendChild(slot)
    shadow.appendChild(container)
  }
}
customElements.define("bs-row", Row)
