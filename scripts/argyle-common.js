const site = {
  name: "Seoyoung Ju",
  email: "jstandzero@korea.ac.kr",
  role: "M.S.-Ph.D. Student",
  affiliation: ["Department of Artificial Intelligence", "Korea University"],
  portrait: "./images/SeoyoungJu.jpg",
  cv: "./data/Seoyoung_s_CV.pdf",
  socials: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=qkLxMbQAAAAJ&hl=en",
    },
    { label: "ORCID", href: "https://orcid.org/0009-0008-8324-4137" },
    { label: "LinkedIn", href: "https://linkedin.com/in/standzero" },
    { label: "GitHub", href: "https://github.com/standyoung" },
  ],
  nav: [
    { id: "home", label: "Home", href: "./index.html" },
    { id: "publications", label: "Publications", href: "./publications.html" },
    { id: "projects", label: "Projects", href: "./projects.html" },
    { id: "cv", label: "CV", href: "./cv.html" },
  ],
};

const socialIcons = {
  "Google Scholar": `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.75em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 384 512"><path fill="currentColor" d="M343.759 106.662V79.43L363.524 64h-213.89L20.476 176.274h85.656a82.339 82.339 0 0 0-.219 6.225c0 20.845 7.22 38.087 21.672 51.861c14.453 13.797 32.252 20.648 53.327 20.648c4.923 0 9.75-.368 14.438-1.024c-2.907 6.5-4.374 12.523-4.374 18.142c0 9.875 4.499 20.43 13.467 31.642c-39.234 2.67-68.061 9.732-86.437 21.163c-10.531 6.5-19 14.704-25.39 24.531c-6.391 9.9-9.578 20.515-9.578 31.962c0 9.648 2.062 18.336 6.219 26.062c4.156 7.726 9.578 14.07 16.312 18.984c6.718 4.968 14.469 9.101 23.219 12.469c8.734 3.344 17.406 5.718 26.061 7.062A167.052 167.052 0 0 0 180.555 448c13.469 0 26.953-1.734 40.547-5.187c13.562-3.485 26.28-8.642 38.171-15.493c11.86-6.805 21.515-16.086 28.922-27.718c7.39-11.68 11.094-24.805 11.094-39.336c0-11.016-2.25-21.039-6.75-30.14c-4.468-9.073-9.938-16.542-16.452-22.345c-6.501-5.813-13-11.155-19.516-15.968c-6.5-4.845-12-9.75-16.468-14.813c-4.485-5.046-6.735-10.054-6.735-14.984c0-4.921 1.734-9.672 5.216-14.265c3.455-4.61 7.674-9.048 12.61-13.306c4.937-4.25 9.875-8.968 14.796-14.133c4.922-5.147 9.141-11.827 12.61-20.008c3.485-8.18 5.203-17.445 5.203-27.757c0-13.453-2.547-24.46-7.547-33.314c-.594-1.022-1.218-1.803-1.875-3.022l56.907-46.672v17.119c-7.393.93-6.624 5.345-6.624 10.635V245.96c0 5.958 4.875 10.834 10.834 10.834h3.989c5.958 0 10.833-4.875 10.833-10.834V117.293c0-5.277.778-9.688-6.561-10.63zm-107.36 222.48c1.14.75 3.704 2.78 7.718 6.038c4.05 3.243 6.797 5.695 8.266 7.414a443.553 443.553 0 0 1 6.376 7.547c2.813 3.375 4.718 6.304 5.718 8.734c1 2.477 2.016 5.461 3.047 8.946a38.27 38.27 0 0 1 1.485 10.562c0 17.048-6.564 29.68-19.656 37.859c-13.125 8.18-28.767 12.274-46.938 12.274c-9.187 0-18.203-1.093-27.063-3.196c-8.843-2.116-17.311-5.336-25.39-9.601c-8.078-4.258-14.577-10.204-19.5-17.797c-4.938-7.64-7.407-16.415-7.407-26.25c0-10.32 2.797-19.29 8.422-26.906c5.594-7.625 12.938-13.391 22.032-17.315c9.063-3.946 18.25-6.742 27.562-8.398a157.865 157.865 0 0 1 28.438-2.555c4.47 0 7.936.25 10.405.696c.455.219 3.032 2.07 7.735 5.563c4.704 3.462 7.625 5.595 8.75 6.384zm-3.359-100.579c-7.406 8.86-17.734 13.288-30.953 13.288c-11.86 0-22.298-4.764-31.266-14.312c-9-9.523-15.422-20.328-19.344-32.43c-3.937-12.109-5.906-23.984-5.906-35.648c0-13.694 3.596-25.352 10.781-34.976c7.187-9.65 17.5-14.485 30.938-14.485c11.875 0 22.374 5.038 31.437 15.157c9.094 10.085 15.61 21.413 19.517 33.968c3.922 12.54 5.873 24.53 5.873 35.984c0 13.446-3.702 24.61-11.076 33.454z"></path></svg>`,
  ORCID: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M336.62 194.538c-7.13-3.328-13.866-5.56-20.253-6.614c-6.365-1.095-16.574-1.612-30.71-1.612h-36.704v152.747h37.634c14.673 0 26.081-1.013 34.224-3.017c8.142-2.004 14.921-4.526 20.356-7.626a69.448 69.448 0 0 0 14.942-11.388c14.488-14.714 21.742-33.273 21.742-55.717c0-22.052-7.44-40.052-22.341-53.982c-5.498-5.166-11.822-9.444-18.89-12.793zM256 8C119.022 8 8 119.042 8 256s111.022 248 248 248s248-111.042 248-248S392.978 8 256 8Zm-82.336 357.513h-29.389V160.148h29.389zM158.95 138.696c-11.14 0-20.213-9.01-20.213-20.212c0-11.118 9.052-20.191 20.213-20.191c11.18 0 20.232 9.052 20.232 20.191a20.194 20.194 0 0 1-20.232 20.212zm241.386 163.597c-5.29 12.545-12.834 23.581-22.65 33.088c-9.982 9.837-21.597 17.194-34.844 22.196c-7.75 3.017-14.839 5.063-21.307 6.117c-6.49 1.013-18.828 1.509-37.076 1.509h-64.956V160.148h69.233c27.962 0 50.034 4.154 66.32 12.545c16.265 8.37 29.181 20.728 38.792 36.972c9.61 16.265 14.425 34.018 14.425 53.196c.023 13.765-2.666 26.908-7.936 39.432z"></path></svg>`,
  LinkedIn: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>`,
  GitHub: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8z"></path></svg>`,
};

function navMarkup(active, displayStyle = "block") {
  return `<div class="theme-navlinks2" data-site-editable-id="navpages">
    ${site.nav
      .map(
        (item) => `<div class="theme-navlinks2-item-wrap" style="display: ${displayStyle};">
          <div class="theme-navlinks2-item${item.id === active ? " is-active" : ""}" data-controller="toggle">
            <a class="theme-navlinks2-item-link" href="${item.href}">${item.label}</a>
          </div>
        </div>`
      )
      .join("")}
  </div>`;
}

function renderHeader() {
  const active = document.body.dataset.activePage || "";
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="theme-page theme-page--has-banner" data-controller="load-mathjax">
      <header class="argyle-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12">
              <div class="flex flex-row" data-controller="overflow-nav" data-overflow-nav-links-item-selector-value=".argyle-navlinks2-bar .theme-navlinks2-item-wrap" data-overflow-nav-menu-item-selector-value=".argyle-navlinks2-menu .theme-navlinks2-item-wrap">
                <div class="flex-0" data-site-editable-id="site_title">
                  <h1><a href="./index.html">${site.name}</a></h1>
                </div>
                <div class="flex-0" style="width: 16px"></div>
                <div class="flex-1 flex-row" data-site-editable-id="navpages" data-overflow-nav-target="linksContainer" style="min-width: 0;">
                  <div class="argyle-navlinks2-bar">${navMarkup(active)}</div>
                </div>
                <div class="flex-none hidden-sm-up">
                  <div data-controller="popover2" data-popover2-anchor-origin-horizontal-value="right" data-popover2-transform-origin-horizontal-value="right">
                    <div data-popover2-target="anchor" data-action="click->popover2#show" style="cursor: pointer; user-select: none;">
                      <div style="padding: 4px">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" style="fill: currentColor;"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
                      </div>
                    </div>
                    <div data-popover2-target="overlay" data-action="click->popover2#hide" style="display: none; position: fixed; z-index: 1; top: 0; right: 0; bottom: 0; left: 0; background-color: transparent;"></div>
                    <div data-popover2-target="body" data-action="click->popover2#hide" style="display: none; position: fixed; z-index: 1;">
                      <div class="argyle-navlinks2-menu">${navMarkup(active, "block")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="argyle-banner" style="position: relative;">
        <picture style="object-fit: cover; position: absolute; top: 0; right: 0; bottom: 0; left: 0; height: 100%; width: 100%; overflow: hidden;">
          <img src="./images/medical_1.png" style="object-fit: cover; position: absolute; top: 0; right: 0; bottom: 0; left: 0; height: 100%; width: 100%; overflow: hidden;" alt="Banner image">
        </picture>
      </div>`
  );
}

function sidebarMarkup() {
  return `<div class="argyle-sidebar hidden-sm-down">
    <div class="argyle-site-picture-frame" style="margin-bottom: 24px;" data-site-editable-id="site_picture">
      <div class="theme-site-avatar-picture" style="position: relative; display: block; margin: 0 auto; padding: 100% 0 0; background-color: #ccc;">
        <img src="${site.portrait}" style="object-fit: cover; position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%;" alt="Site avatar">
      </div>
    </div>
    <div data-site-editable-id="contact">
      <div class="blt-h3 blt-weight-bold theme-contact-name" dir="auto">${site.name}</div>
      <div class="blt-p" dir="auto">${site.role}</div>
      <hr class="space-sm">
    </div>
    <div data-site-editable-id="contact">
      <p class="blt-p" dir="auto"><a target="_blank" href="mailto:${site.email}">${site.email}</a></p>
      <hr class="space-sm">
      ${site.affiliation.map((line) => `<p class="blt-p" dir="auto">${line}</p>`).join("")}
      <hr class="space-md">
    </div>
    <div class="blt-p theme-contact-social-links" data-site-editable-id="social_links" dir="auto">
      ${site.socials
        .map(
          (link) => `<div class="theme-contact-social-link">
            ${socialIcons[link.label] ? `<div class="theme-contact-social-link-icon">${socialIcons[link.label]}</div>` : ""}
            <div class="theme-contact-social-link-text"><a target="_blank" rel="noopener noreferrer" href="${link.href}">${link.label}</a></div>
          </div>`
        )
        .join("")}
    </div>
  </div>`;
}

function renderShell() {
  const content = document.querySelector("[data-page-content]");
  const main = document.createElement("main");
  main.className = "argyle-main";
  main.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="hidden-sm-down col-md-4 col-lg-3">${sidebarMarkup()}</div>
        <div class="col-xs-12 col-md-8 col-lg-9">
          <div class="hidden-md-up">
            <div class="argyle-site-picture-frame" style="margin-bottom: 24px;" data-site-editable-id="site_picture">
              <div class="theme-site-avatar-picture" style="position: relative; display: block; margin: 0 auto; padding: 100% 0 0; background-color: #ccc;">
                <img src="${site.portrait}" style="object-fit: cover; position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%;" alt="Site avatar">
              </div>
            </div>
            <div class="theme-content-title">
              <h1 class="blt-h1 blt-weight-bold" dir="auto">${site.name}</h1>
              <p class="blt-h4" dir="auto">${site.role}</p>
            </div>
            <hr class="space-lg">
          </div>
          ${content.innerHTML}
        </div>
      </div>
    </div>`;
  content.remove();
  document.querySelector(".theme-page").appendChild(main);
}

function renderFooter() {
  document.querySelector(".theme-page").insertAdjacentHTML(
    "beforeend",
    `<hr class="space-xl">
    <footer class="argyle-footer">
      <div class="container">
        <hr class="space-lg">
        <div class="blt-align-center">
          <span style="display: inline-block">
            <div class="blt-p" dir="auto">© <span id="year"></span> ${site.name} · inspired by <a href="https://www.robertavaltorta.com/" target="_blank" rel="noopener noreferrer">Roberta Rosa Valtorta</a></div>
          </span>
          <hr class="space-md">
        </div>
        <hr class="space-lg">
      </div>
    </footer>`
  );
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderHeader();
renderShell();
renderFooter();
