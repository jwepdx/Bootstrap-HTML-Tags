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

class Card extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({
      mode: 'open'
    })
    // Style
    const style = document.createElement('link')
    style.setAttribute('rel', 'stylesheet')
    style.setAttribute('href', '../dist/css/card.min.css')
    shadow.appendChild(style)
    // Container
    const container = document.createElement('div')
    container.classList.add('card')
    // Get Different Attributes
    if (typeof this.getElementsByTagName('img')[0] !== "undefined" || this.getElementsByTagName('img')[0] !== null); {
      const img = this.getElementsByTagName('img')[0]
    }
    if (typeof this.getElementsByTagName('header')[0].innerHTML !== "undefined" || this.getElementsByTagName('header')[0].innerHTML !== null); {
      const header = this.getElementsByTagName('header')[0].innerHTML
    }
    if (typeof this.getElementsByTagName('h5')[0].innerHTML !== "undefined" || this.getElementsByTagName('h5')[0].innerHTML !== null); {
      const title = this.getElementsByTagName('h5')[0].innerHTML
    }
    if (typeof this.getElementsByTagName('h6')[0].innerHTML !== "undefined" || this.getElementsByTagName('h6')[0].innerHTML !== null); {
      const subTitle = this.getElementsByTagName('h6')[0].innerHTML
    }
    if (this.getElementsByTagName('p')[0].innerHTML != null || undefined); {
      const text = this.getElementsByTagName('p')[0].innerHTML
    }
    if (this.getElementsByTagName('footer')[0].innerHTML != null || undefined); {
      const footer = this.getElementsByTagName('footer')[0].innerHTML
    }
    if (this.getElementsByTagName('ul') != null || undefined); {
      const listGroup = this.getElementsByTagName('ul')
    }
    if (this.getElementsByTagName('a') != null || undefined); {
      const links = this.getElementsByTagName('a')
    }
    if (this.getElementsByTagName('button') != null || undefined); {
      const buttons = this.getElementsByTagName('button')
    }
    // Images
    if (img !== null) {
      const imgSource = img.getAttribute('src')
      const imgAlt = img.getAttribute('alt')
      const imageContainer = document.createElement('img')
      imageContainer.setAttribute('alt', imgAlt)
      imageContainer.classList.add('card-img-top')
      imageContainer.setAttribute('src', imgSource)
      container.appendChild(imageContainer)
    }
    // Header
    if (header !== null) {
      const headerArea = document.createElement('div')
      headerArea.classList.add('card-header')
      headerArea.textContent = header
      container.appendChild(headerArea)
    }
    // Body
    const body = document.createElement('div')
    body.classList.add('card-body')
    container.appendChild(body)
    // Title
    if (title !== null) {
      const titleContainer = document.createElement('h5')
      titleContainer.classList.add('card-title')
      titleContainer.textContent = title
      body.appendChild(titleContainer)
    }
    // Sub-Title
    if (subTitle !== null) {
      const subTitleContainer = document.createElement('h6')
      subTitleContainer.classList.add('card-subtitle', 'mb-2', 'text-muted')
      subTitleContainer.textContent = subTitle
      body.appendChild(subTitleContainer)
    }
    // Text
    if (text !== null) {
      const textContainer = document.createElement('p')
      textContainer.textContent = text
      body.appendChild(textContainer)
    }
    // List Group
    if (listGroup !== null) {
      $('bs-card ul li').addClass('list-group-item')
      const listGroupItems = this.getElementsByTagName('ul')[0].innerHTML
      const listContainer = document.createElement('ul')
      listContainer.classList.add('list-group', 'list-group-flush')
      listContainer.innerHTML = listGroupItems
      container.appendChild(listContainer)
    }
    // Links
    if (links !== null) {
      const linkContainer = document.createElement('div')
      linkContainer.classList.add('card-body')
      var i
      for (i = 0; i < links.length; i++) {
        const linkHref = links[i].getAttribute('href')
        const linkText = links[i].innerHTML
        const link = document.createElement('a')
        link.setAttribute('href', linkHref)
        link.classList.add('card-link')
        link.textContent = linkText
        linkContainer.appendChild(link)
      }
      container.appendChild(linkContainer)
    }
    // Buttons
    if (buttons !== null) {
      const buttonContainer = document.createElement('div')
      buttonContainer.classList.add('card-body')
      for (i = 0; i < buttons.length; i++) {
        const buttonHref = buttons[i].getAttribute('href')
        const buttonColor = buttons[i].getAttribute('color')
        const buttonText = buttons[i].innerHTML
        const button = document.createElement('a')
        button.setAttribute('href', buttonHref)
        button.classList.add('btn', 'btn-' + buttonColor)
        button.textContent = buttonText
        buttonContainer.appendChild(button)
      }
      container.appendChild(buttonContainer)
    }
    // Footer
    if (footer !== null) {
      const footerContainer = document.createElement('div')
      footerContainer.classList.add('card-footer')
      footerContainer.textContent = footer
      container.appendChild(footerContainer)
    }
    shadow.appendChild(container)
  }
}
customElements.define('bs-card', Card)

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQvZ3JpZC0xLWNvbnRhaW5lci5qcyIsImdyaWQvZ3JpZC0yLXJvdy5qcyIsImdyaWQvZ3JpZC0zLWNvbHVtbi5qcyIsImJzLWp1bWJvdHJvbi5qcyIsImNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICBtb2RlOiBcIm9wZW5cIlxuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImZsdWlkXCIpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWZsdWlkXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpXG4gICAgfVxuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2xvdFwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbG90KVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJzLWNvbnRhaW5lclwiLCBDb250YWluZXIpXG4iLCJjbGFzcyBSb3cgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICBtb2RlOiBcIm9wZW5cIlxuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKVxuICAgIC8vIENvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiKVxuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2xvdFwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbG90KVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJzLXJvd1wiLCBSb3cpXG4iLCJjbGFzcyBDb2x1bW4gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICBtb2RlOiBcIm9wZW5cIlxuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKVxuICAgIC8vIENvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBjb2xFeHRyYVNtYWxsID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ4c1wiKVxuICAgIGNvbnN0IGNvbFNtYWxsID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzbVwiKVxuICAgIGNvbnN0IGNvbE1lZGl1bSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibWRcIilcbiAgICBjb25zdCBjb2xMYXJnZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibGdcIilcbiAgICBjb25zdCBjb2xFeHRyYUxhcmdlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ4bFwiKVxuXG4gICAgLy8gQ29sdW1ucyBGb3IgRXh0cmEgU21hbGxcbiAgICBpZiAoY29sRXh0cmFTbWFsbCB8fCBjb2xTbWFsbCB8fCBjb2xNZWRpdW0gfHwgY29sTGFyZ2UgfHwgY29sRXh0cmFMYXJnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbEV4dHJhU21hbGwgIT09IG51bGwpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2wtXCIgKyBjb2xFeHRyYVNtYWxsKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgU21hbGxcbiAgICAgIGlmIChjb2xTbWFsbCAhPT0gbnVsbCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbC1zbS1cIiArIGNvbFNtYWxsKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgTWVkaXVtXG4gICAgICBpZiAoY29sTWVkaXVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sLW1kLVwiICsgY29sTWVkaXVtKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgTGFyZ2VcbiAgICAgIGlmIChjb2xMYXJnZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbC1sZy1cIiArIGNvbExhcmdlKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgRXh0cmEgTGFyZ2VcbiAgICAgIGlmIChjb2xFeHRyYUxhcmdlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sLXhsLVwiICsgY29sRXh0cmFMYXJnZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcbiAgICB9XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbG90XCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsb3QpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnMtY29sXCIsIENvbHVtbilcbiIsImNsYXNzIEp1bWJvdHJvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgIG1vZGU6ICdvcGVuJ1xuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJylcbiAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYnMtanVtYm90cm9uJywgSnVtYm90cm9uKVxuIiwiY2xhc3MgQ2FyZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgIG1vZGU6ICdvcGVuJ1xuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuLi9kaXN0L2Nzcy9jYXJkLm1pbi5jc3MnKVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChzdHlsZSlcbiAgICAvLyBDb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICAvLyBHZXQgRGlmZmVyZW50IEF0dHJpYnV0ZXNcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdICE9PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdICE9PSBudWxsKTsge1xuICAgICAgY29uc3QgaW1nID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXS5pbm5lckhUTUwgIT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uaW5uZXJIVE1MICE9PSBudWxsKTsge1xuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uaW5uZXJIVE1MXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDUnKVswXS5pbm5lckhUTUwgIT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDUnKVswXS5pbm5lckhUTUwgIT09IG51bGwpOyB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2g1JylbMF0uaW5uZXJIVE1MXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDYnKVswXS5pbm5lckhUTUwgIT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDYnKVswXS5pbm5lckhUTUwgIT09IG51bGwpOyB7XG4gICAgICBjb25zdCBzdWJUaXRsZSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2g2JylbMF0uaW5uZXJIVE1MXG4gICAgfVxuICAgIGlmICh0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylbMF0uaW5uZXJIVE1MICE9IG51bGwgfHwgdW5kZWZpbmVkKTsge1xuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5pbm5lckhUTUxcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLmlubmVySFRNTCAhPSBudWxsIHx8IHVuZGVmaW5lZCk7IHtcbiAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLmlubmVySFRNTFxuICAgIH1cbiAgICBpZiAodGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKSAhPSBudWxsIHx8IHVuZGVmaW5lZCk7IHtcbiAgICAgIGNvbnN0IGxpc3RHcm91cCA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKSAhPSBudWxsIHx8IHVuZGVmaW5lZCk7IHtcbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpXG4gICAgfVxuICAgIGlmICh0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKSAhPSBudWxsIHx8IHVuZGVmaW5lZCk7IHtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKVxuICAgIH1cbiAgICAvLyBJbWFnZXNcbiAgICBpZiAoaW1nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWdTb3VyY2UgPSBpbWcuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgY29uc3QgaW1nQWx0ID0gaW1nLmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgIGltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYWx0JywgaW1nQWx0KVxuICAgICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWctdG9wJylcbiAgICAgIGltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nU291cmNlKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKVxuICAgIH1cbiAgICAvLyBIZWFkZXJcbiAgICBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBoZWFkZXJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGhlYWRlckFyZWEuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgICAgaGVhZGVyQXJlYS50ZXh0Q29udGVudCA9IGhlYWRlclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckFyZWEpXG4gICAgfVxuICAgIC8vIEJvZHlcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgLy8gVGl0bGVcbiAgICBpZiAodGl0bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKVxuICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpXG4gICAgICB0aXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRpdGxlXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKVxuICAgIH1cbiAgICAvLyBTdWItVGl0bGVcbiAgICBpZiAoc3ViVGl0bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YlRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgICAgc3ViVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1zdWJ0aXRsZScsICdtYi0yJywgJ3RleHQtbXV0ZWQnKVxuICAgICAgc3ViVGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSBzdWJUaXRsZVxuICAgICAgYm9keS5hcHBlbmRDaGlsZChzdWJUaXRsZUNvbnRhaW5lcilcbiAgICB9XG4gICAgLy8gVGV4dFxuICAgIGlmICh0ZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dFxuICAgICAgYm9keS5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKVxuICAgIH1cbiAgICAvLyBMaXN0IEdyb3VwXG4gICAgaWYgKGxpc3RHcm91cCAhPT0gbnVsbCkge1xuICAgICAgJCgnYnMtY2FyZCB1bCBsaScpLmFkZENsYXNzKCdsaXN0LWdyb3VwLWl0ZW0nKVxuICAgICAgY29uc3QgbGlzdEdyb3VwSXRlbXMgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1ncm91cCcsICdsaXN0LWdyb3VwLWZsdXNoJylcbiAgICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gbGlzdEdyb3VwSXRlbXNcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKVxuICAgIH1cbiAgICAvLyBMaW5rc1xuICAgIGlmIChsaW5rcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBsaW5rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgICB2YXIgaVxuICAgICAgZm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmtIcmVmID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgY29uc3QgbGlua1RleHQgPSBsaW5rc1tpXS5pbm5lckhUTUxcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtIcmVmKVxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2NhcmQtbGluaycpXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBsaW5rVGV4dFxuICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmspXG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcilcbiAgICB9XG4gICAgLy8gQnV0dG9uc1xuICAgIGlmIChidXR0b25zICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidXR0b25IcmVmID0gYnV0dG9uc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICBjb25zdCBidXR0b25Db2xvciA9IGJ1dHRvbnNbaV0uZ2V0QXR0cmlidXRlKCdjb2xvcicpXG4gICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBidXR0b25zW2ldLmlubmVySFRNTFxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsIGJ1dHRvbkhyZWYpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLScgKyBidXR0b25Db2xvcilcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dFxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcbiAgICB9XG4gICAgLy8gRm9vdGVyXG4gICAgaWYgKGZvb3RlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgICBmb290ZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBmb290ZXJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpXG4gICAgfVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYnMtY2FyZCcsIENhcmQpXG4iXX0=
