class Container extends HTMLElement {
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
    const container = document.createElement("div")
    if (this.getAttribute("type") === "fluid") {
      container.classList.add("container-fluid")
    } else {
      container.classList.add("container")
    }
    const slot = document.createElement("slot")
    container.appendChild(slot)
    shadow.appendChild(container)
  }
}
customElements.define("bs-container", Container)
