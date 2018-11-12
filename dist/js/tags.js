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
      mode: "open"
    })
    // Style
    const style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", "../dist/css/card.min.css")
    shadow.appendChild(style)
    // Container
    const container = document.createElement("div")
    container.classList.add("card")
    // Get Different Attributes
    const img = this.getElementsByTagName("img")[0];
    if(typeof img == "undefined" || img == null) {
      const img = null;
    }
    const header = this.getElementsByTagName("h4")[0].innerHTML;
    if(typeof header == "undefined" || header == null) {
      const header = null;
    }
    if(typeof this.getElementsByTagName("h5")[0].innerHTML !== "undefined" || this.getElementsByTagName("h5")[0].innerHTML !== null) {
      const title = this.getElementsByTagName("h5")[0].innerHTML
    }
    let subTitle = this.getElementsByTagName("h6")[0].innerHTML;
    if(subTitle == undefined || subTitle == null) {
      const subTitle = null;
    }
    if(this.getElementsByTagName("p")[0].innerHTML != null || undefined) {
      const text = this.getElementsByTagName("p")[0].innerHTML
    }
    if(this.getElementsByTagName("footer")[0].innerHTML != null || undefined) {
      const footer = this.getElementsByTagName("footer")[0].innerHTML
    }
    if(this.getElementsByTagName("ul") != null || undefined) {
      const listGroup = this.getElementsByTagName("ul")
    }
    if(this.getElementsByTagName("a") != null || undefined) {
      const links = this.getElementsByTagName("a")
    }
    if(this.getElementsByTagName("button") != null || undefined) {
      const buttons = this.getElementsByTagName("button")
    }
    // Images
    if(img !== null) {
      const imgSource = img.getAttribute("src")
      const imgAlt = img.getAttribute("alt")
      const imageContainer = document.createElement("img")
      imageContainer.setAttribute("alt", imgAlt)
      imageContainer.classList.add("card-img-top")
      imageContainer.setAttribute("src", imgSource)
      container.appendChild(imageContainer)
    }
    // Header
    if(header !== null) {
      const headerArea = document.createElement("div")
      headerArea.classList.add("card-header")
      headerArea.textContent = header
      container.appendChild(headerArea)
    }
    // Body
    const body = document.createElement("div")
    body.classList.add("card-body")
    container.appendChild(body)
    // Title
    if(title !== null) {
      const titleContainer = document.createElement("h5")
      titleContainer.classList.add("card-title")
      titleContainer.textContent = title
      body.appendChild(titleContainer)
    }
    // Sub-Title
    if(subTitle !== null) {
      const subTitleContainer = document.createElement("h6")
      subTitleContainer.classList.add("card-subtitle", "mb-2", "text-muted")
      subTitleContainer.textContent = subTitle
      body.appendChild(subTitleContainer)
    }
    // Text
    if(text !== null) {
      const textContainer = document.createElement("p")
      textContainer.textContent = text
      body.appendChild(textContainer)
    }
    // List Group
    if(listGroup !== null) {
      $("bs-card ul li").addClass("list-group-item")
      const listGroupItems = this.getElementsByTagName("ul")[0].innerHTML
      const listContainer = document.createElement("ul")
      listContainer.classList.add("list-group", "list-group-flush")
      listContainer.innerHTML = listGroupItems
      container.appendChild(listContainer)
    }
    // Links
    if(links !== null) {
      const linkContainer = document.createElement("div")
      linkContainer.classList.add("card-body")
      var i
      for(i = 0; i < links.length; i++) {
        const linkHref = links[i].getAttribute("href")
        const linkText = links[i].innerHTML
        const link = document.createElement("a")
        link.setAttribute("href", linkHref)
        link.classList.add("card-link")
        link.textContent = linkText
        linkContainer.appendChild(link)
      }
      container.appendChild(linkContainer)
    }
    // Buttons
    if(buttons !== null) {
      const buttonContainer = document.createElement("div")
      buttonContainer.classList.add("card-body")
      for(i = 0; i < buttons.length; i++) {
        const buttonHref = buttons[i].getAttribute("href")
        const buttonColor = buttons[i].getAttribute("color")
        const buttonText = buttons[i].innerHTML
        const button = document.createElement("a")
        button.setAttribute("href", buttonHref)
        button.classList.add("btn", "btn-" + buttonColor)
        button.textContent = buttonText
        buttonContainer.appendChild(button)
      }
      container.appendChild(buttonContainer)
    }
    // Footer
    if(footer !== null) {
      const footerContainer = document.createElement("div")
      footerContainer.classList.add("card-footer")
      footerContainer.textContent = footer
      container.appendChild(footerContainer)
    }
    shadow.appendChild(container)
  }
}
customElements.define("bs-card", Card)

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQvZ3JpZC0xLWNvbnRhaW5lci5qcyIsImdyaWQvZ3JpZC0yLXJvdy5qcyIsImdyaWQvZ3JpZC0zLWNvbHVtbi5qcyIsImJzLWp1bWJvdHJvbi5qcyIsImNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICBtb2RlOiBcIm9wZW5cIlxuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImZsdWlkXCIpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWZsdWlkXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpXG4gICAgfVxuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2xvdFwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbG90KVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJzLWNvbnRhaW5lclwiLCBDb250YWluZXIpXG4iLCJjbGFzcyBSb3cgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICBtb2RlOiBcIm9wZW5cIlxuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKVxuICAgIC8vIENvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiKVxuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2xvdFwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbG90KVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJzLXJvd1wiLCBSb3cpXG4iLCJjbGFzcyBDb2x1bW4gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICBtb2RlOiBcIm9wZW5cIlxuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKVxuICAgIC8vIENvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBjb2xFeHRyYVNtYWxsID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ4c1wiKVxuICAgIGNvbnN0IGNvbFNtYWxsID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzbVwiKVxuICAgIGNvbnN0IGNvbE1lZGl1bSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibWRcIilcbiAgICBjb25zdCBjb2xMYXJnZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibGdcIilcbiAgICBjb25zdCBjb2xFeHRyYUxhcmdlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ4bFwiKVxuXG4gICAgLy8gQ29sdW1ucyBGb3IgRXh0cmEgU21hbGxcbiAgICBpZiAoY29sRXh0cmFTbWFsbCB8fCBjb2xTbWFsbCB8fCBjb2xNZWRpdW0gfHwgY29sTGFyZ2UgfHwgY29sRXh0cmFMYXJnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbEV4dHJhU21hbGwgIT09IG51bGwpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2wtXCIgKyBjb2xFeHRyYVNtYWxsKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgU21hbGxcbiAgICAgIGlmIChjb2xTbWFsbCAhPT0gbnVsbCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbC1zbS1cIiArIGNvbFNtYWxsKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgTWVkaXVtXG4gICAgICBpZiAoY29sTWVkaXVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sLW1kLVwiICsgY29sTWVkaXVtKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgTGFyZ2VcbiAgICAgIGlmIChjb2xMYXJnZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbC1sZy1cIiArIGNvbExhcmdlKVxuICAgICAgfVxuICAgICAgLy8gQ29sdW1ucyBGb3IgRXh0cmEgTGFyZ2VcbiAgICAgIGlmIChjb2xFeHRyYUxhcmdlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sLXhsLVwiICsgY29sRXh0cmFMYXJnZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcbiAgICB9XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbG90XCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsb3QpXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnMtY29sXCIsIENvbHVtbilcbiIsImNsYXNzIEp1bWJvdHJvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgIG1vZGU6ICdvcGVuJ1xuICAgIH0pXG4gICAgLy8gU3R5bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKVxuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJylcbiAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYnMtanVtYm90cm9uJywgSnVtYm90cm9uKVxuIiwiY2xhc3MgQ2FyZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgIG1vZGU6IFwib3BlblwiXG4gICAgfSlcbiAgICAvLyBTdHlsZVxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIilcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4uL2Rpc3QvY3NzL2NhcmQubWluLmNzc1wiKVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChzdHlsZSlcbiAgICAvLyBDb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpXG4gICAgLy8gR2V0IERpZmZlcmVudCBBdHRyaWJ1dGVzXG4gICAgY29uc3QgaW1nID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXTtcbiAgICBpZih0eXBlb2YgaW1nID09IFwidW5kZWZpbmVkXCIgfHwgaW1nID09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltZyA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoNFwiKVswXS5pbm5lckhUTUw7XG4gICAgaWYodHlwZW9mIGhlYWRlciA9PSBcInVuZGVmaW5lZFwiIHx8IGhlYWRlciA9PSBudWxsKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZih0eXBlb2YgdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImg1XCIpWzBdLmlubmVySFRNTCAhPT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaDVcIilbMF0uaW5uZXJIVE1MICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoNVwiKVswXS5pbm5lckhUTUxcbiAgICB9XG4gICAgbGV0IHN1YlRpdGxlID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImg2XCIpWzBdLmlubmVySFRNTDtcbiAgICBpZihzdWJUaXRsZSA9PSB1bmRlZmluZWQgfHwgc3ViVGl0bGUgPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViVGl0bGUgPSBudWxsO1xuICAgIH1cbiAgICBpZih0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicFwiKVswXS5pbm5lckhUTUwgIT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicFwiKVswXS5pbm5lckhUTUxcbiAgICB9XG4gICAgaWYodGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvb3RlclwiKVswXS5pbm5lckhUTUwgIT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb290ZXJcIilbMF0uaW5uZXJIVE1MXG4gICAgfVxuICAgIGlmKHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKSAhPSBudWxsIHx8IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbGlzdEdyb3VwID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpXG4gICAgfVxuICAgIGlmKHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpICE9IG51bGwgfHwgdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBsaW5rcyA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpXG4gICAgfVxuICAgIGlmKHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIikgIT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpXG4gICAgfVxuICAgIC8vIEltYWdlc1xuICAgIGlmKGltZyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1nU291cmNlID0gaW1nLmdldEF0dHJpYnV0ZShcInNyY1wiKVxuICAgICAgY29uc3QgaW1nQWx0ID0gaW1nLmdldEF0dHJpYnV0ZShcImFsdFwiKVxuICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICBpbWFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgaW1nQWx0KVxuICAgICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1nLXRvcFwiKVxuICAgICAgaW1hZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1NvdXJjZSlcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcilcbiAgICB9XG4gICAgLy8gSGVhZGVyXG4gICAgaWYoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBoZWFkZXJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgaGVhZGVyQXJlYS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oZWFkZXJcIilcbiAgICAgIGhlYWRlckFyZWEudGV4dENvbnRlbnQgPSBoZWFkZXJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJBcmVhKVxuICAgIH1cbiAgICAvLyBCb2R5XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWJvZHlcIilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICAvLyBUaXRsZVxuICAgIGlmKHRpdGxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKVxuICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIilcbiAgICAgIHRpdGxlQ29udGFpbmVyLnRleHRDb250ZW50ID0gdGl0bGVcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpXG4gICAgfVxuICAgIC8vIFN1Yi1UaXRsZVxuICAgIGlmKHN1YlRpdGxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKVxuICAgICAgc3ViVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtc3VidGl0bGVcIiwgXCJtYi0yXCIsIFwidGV4dC1tdXRlZFwiKVxuICAgICAgc3ViVGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSBzdWJUaXRsZVxuICAgICAgYm9keS5hcHBlbmRDaGlsZChzdWJUaXRsZUNvbnRhaW5lcilcbiAgICB9XG4gICAgLy8gVGV4dFxuICAgIGlmKHRleHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgdGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcilcbiAgICB9XG4gICAgLy8gTGlzdCBHcm91cFxuICAgIGlmKGxpc3RHcm91cCAhPT0gbnVsbCkge1xuICAgICAgJChcImJzLWNhcmQgdWwgbGlcIikuYWRkQ2xhc3MoXCJsaXN0LWdyb3VwLWl0ZW1cIilcbiAgICAgIGNvbnN0IGxpc3RHcm91cEl0ZW1zID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1ncm91cFwiLCBcImxpc3QtZ3JvdXAtZmx1c2hcIilcbiAgICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gbGlzdEdyb3VwSXRlbXNcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKVxuICAgIH1cbiAgICAvLyBMaW5rc1xuICAgIGlmKGxpbmtzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgbGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1ib2R5XCIpXG4gICAgICB2YXIgaVxuICAgICAgZm9yKGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGlua0hyZWYgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG4gICAgICAgIGNvbnN0IGxpbmtUZXh0ID0gbGlua3NbaV0uaW5uZXJIVE1MXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbGlua0hyZWYpXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImNhcmQtbGlua1wiKVxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gbGlua1RleHRcbiAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKVxuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpXG4gICAgfVxuICAgIC8vIEJ1dHRvbnNcbiAgICBpZihidXR0b25zICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtYm9keVwiKVxuICAgICAgZm9yKGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidXR0b25IcmVmID0gYnV0dG9uc1tpXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbG9yID0gYnV0dG9uc1tpXS5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKVxuICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gYnV0dG9uc1tpXS5pbm5lckhUTUxcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYnV0dG9uSHJlZilcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tXCIgKyBidXR0b25Db2xvcilcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dFxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcbiAgICB9XG4gICAgLy8gRm9vdGVyXG4gICAgaWYoZm9vdGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtZm9vdGVyXCIpXG4gICAgICBmb290ZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBmb290ZXJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpXG4gICAgfVxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJzLWNhcmRcIiwgQ2FyZClcbiJdfQ==
