let pageUrls = {
  about: '/index.html?about',
  contact: '/index.html?contact'
};

function OnStartUp() {
  popStateHandler();
}
OnStartUp();

document.querySelector('#about-link').addEventListener('click', () => {
  history.pushState({ page: 'about' }, 'About', '?about');
  RenderAboutPage();
});
document.querySelector('#contact-link').addEventListener('click', () => {
  history.pushState({ page: 'contact' }, 'Contact', '?contact');
  RenderContactPage();
});

function RenderAboutPage() {
  document.querySelector('main').innerHTML = `
    <h1 class="title">About Me</h1>
    <p>Here you can learn more about me...</p>
  `;
}

function RenderContactPage() {
  document.querySelector('main').innerHTML = `
    <h1 class="title">Contact</h1>
    <p>Feel free to reach out via email or phone...</p>
  `;
}

function popStateHandler() {
  let loc = window.location.href.split(window.location.host)[1];
  if (loc === pageUrls.about) RenderAboutPage();
  else if (loc === pageUrls.contact) RenderContactPage();
}

window.onpopstate = popStateHandler;
