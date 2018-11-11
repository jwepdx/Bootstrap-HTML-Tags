class Container extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    //Style
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "../dist/css/container.min.css");
    shadow.appendChild(style);
    const container = document.createElement("div");
    if (this.getAttribute("type") == "fluid") {
      container.classList.add("container-fluid");
    } else {
      container.classList.add("container");
    }
    const slot = document.createElement("slot");
    container.appendChild(slot);
    shadow.appendChild(container);
  }
}
customElements.define("bs-container", Container);
class Row extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    //Style
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "../node_modules/bootstrap/dist/css/bootstrap.min.css");
    shadow.appendChild(style);
    //Container
    const container = document.createElement("div");
    container.classList.add("row");
    const slot = document.createElement("slot");
    container.appendChild(slot);
    shadow.appendChild(container);
  }
}
customElements.define("bs-row", Row);
class Column extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    //Style
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "../node_modules/bootstrap/dist/css/bootstrap.min.css");
    shadow.appendChild(style);
    //Container
    const container = document.createElement("div");
    const colExtraSmall = this.getAttribute("xs");
    const colSmall = this.getAttribute("sm");
    const colMedium = this.getAttribute("md");
    const colLarge = this.getAttribute("lg");
    const colExtraLarge = this.getAttribute("xl");
    container.classList.add("col");
    //Columns For Extra Small
    if (colExtraSmall !== null) {
      container.classList.add("col-" + colExtraSmall);
    }
    //Columns For Small
    if (colSmall !== null) {
      container.classList.add("col-sm-" + colSmall);
    }
    //Columns For Medium
    if (colMedium !== null) {
      container.classList.add("col-md-" + colMedium);
    }
    //Columns For Large
    if (colLarge !== null) {
      container.classList.add("col-lg-" + colLarge);
    }
    //Columns For Extra Large
    if (colExtraLarge !== null) {
      container.classList.add("col-xl-" + colExtraLarge);
    }
    const slot = document.createElement("slot");
    container.appendChild(slot);
    shadow.appendChild(container);
  }
}
customElements.define("bs-col", Column);
class Jumbotron extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    //Style
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "../node_modules/bootstrap/dist/css/bootstrap.min.css");
    shadow.appendChild(style);
  }
}
customElements.define("bs-jumbotron", Jumbotron);
class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    //Style
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "../dist/css/card.min.css");
    shadow.appendChild(style);
    //Container
    const container = document.createElement("div");
    container.classList.add("card");
    //Get Different Attributes
    const img = this.getElementsByTagName("img")[0];
    const header = this.getElementsByTagName("header")[0].innerHTML;
    const title = this.getElementsByTagName("h5")[0].innerHTML;
    const subTitle = this.getElementsByTagName("h6")[0].innerHTML;
    const text = this.getElementsByTagName("p")[0].innerHTML;
    const footer = this.getElementsByTagName("footer")[0].innerHTML;
    const listGroup = this.getElementsByTagName("ul");
    const links = this.getElementsByTagName("a");
    const buttons = this.getElementsByTagName("button");
    //Images
    if (img !== null) {
      const imgSource = img.getAttribute("src");
      const imgAlt = img.getAttribute("alt");
      const imageContainer = document.createElement("img");
      imageContainer.setAttribute("alt", imgAlt);
      imageContainer.classList.add("card-img-top");
      imageContainer.setAttribute("src", imgSource);
      container.appendChild(imageContainer);
    }
    //Header
    if (header !== null) {
      const headerArea = document.createElement("div");
      headerArea.classList.add("card-header");
      headerArea.textContent = header;
      container.appendChild(headerArea);
    }
    //Body
    const body = document.createElement("div");
    body.classList.add("card-body");
    container.appendChild(body);
    //Title
    if (title !== null) {
      const titleContainer = document.createElement("h5");
      titleContainer.classList.add("card-title");
      titleContainer.textContent = title;
      body.appendChild(titleContainer);
    }
    //Sub-Title
    if (subTitle !== null) {
      const subTitleContainer = document.createElement("h6");
      subTitleContainer.classList.add("card-subtitle", "mb-2", "text-muted");
      subTitleContainer.textContent = subTitle;
      body.appendChild(subTitleContainer);
    }
    //Text
    if (text !== null) {
      const textContainer = document.createElement("p");
      textContainer.textContent = text;
      body.appendChild(textContainer);
    }
    //List Group
    if (listGroup !== null) {
      $("bs-card ul li").addClass("list-group-item");
      const listGroupItems = this.getElementsByTagName("ul")[0].innerHTML;
      const listContainer = document.createElement("ul");
      listContainer.classList.add("list-group", "list-group-flush");
      listContainer.innerHTML = listGroupItems;
      container.appendChild(listContainer);
    }
    //Links
    if (links !== null) {
      const linkContainer = document.createElement("div");
      linkContainer.classList.add("card-body");
      var i;
      for (i = 0; i < links.length; i++) {
        const linkHref = links[i].getAttribute("href");
        const linkText = links[i].innerHTML;
        const link = document.createElement("a");
        link.setAttribute("href", linkHref);
        link.classList.add("card-link");
        link.textContent = linkText;
        linkContainer.appendChild(link);
      }
      container.appendChild(linkContainer)
    }
    //Buttons
    if (buttons !== null) {
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("card-body");
      var i;
      for (i = 0; i < buttons.length; i++) {
        const buttonHref = buttons[i].getAttribute("href");
        const buttonColor = buttons[i].getAttribute("color");
        const buttonText = buttons[i].innerHTML;
        const button = document.createElement("a");
        button.setAttribute("href", buttonHref);
        button.classList.add("btn", "btn-" + buttonColor);
        button.textContent = buttonText;
        buttonContainer.appendChild(button);
      }
      container.appendChild(buttonContainer);
    }
    //Footer
    if (footer !== null) {
      const footerContainer = document.createElement("div");
      footerContainer.classList.add("card-footer");
      footerContainer.textContent = footer;
      container.appendChild(footerContainer);
    }
    shadow.appendChild(container);
  }
}
customElements.define("bs-card", Card);
