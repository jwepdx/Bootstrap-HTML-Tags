class Column extends HTMLElement {
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
    const colExtraSmall = this.getAttribute("xs")
    const colSmall = this.getAttribute("sm")
    const colMedium = this.getAttribute("md")
    const colLarge = this.getAttribute("lg")
    const colExtraLarge = this.getAttribute("xl")

    // Columns For Extra Small
    if (colExtraSmall || colSmall || colMedium || colLarge || colExtraLarge !== null) {
      if (colExtraSmall !== null) {
        container.classList.add("col-" + colExtraSmall)
      }
      // Columns For Small
      if (colSmall !== null) {
        container.classList.add("col-sm-" + colSmall)
      }
      // Columns For Medium
      if (colMedium !== null) {
        container.classList.add("col-md-" + colMedium)
      }
      // Columns For Large
      if (colLarge !== null) {
        container.classList.add("col-lg-" + colLarge)
      }
      // Columns For Extra Large
      if (colExtraLarge !== null) {
        container.classList.add("col-xl-" + colExtraLarge)
      }
    } else {
      container.classList.add("col")
    }
    const slot = document.createElement("slot")
    container.appendChild(slot)
    shadow.appendChild(container)
  }
}
customElements.define("bs-col", Column)
