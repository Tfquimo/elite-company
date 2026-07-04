const headerHTML = `<!-- ── NAVEGAÇÃO ── -->
<nav>
  <a href="index.html">
    <img src="images/logo-light.png" alt="Elite Company" class="logo-img">
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Início</a></li>
    <li><a href="servicos.html">Serviços</a></li>
    <li><a href="sobre.html">Sobre</a></li>
    <li><a href="projetos.html">Projetos</a></li>
    <li><a href="contacto.html">Contacto</a></li>
  </ul>
  <a href="contacto.html" class="nav-cta nav-cta-desktop">Pedir Orçamento</a>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- ── MOBILE MENU ── -->
<div class="mobile-menu">
  <a href="index.html">Início</a>
  <a href="servicos.html">Serviços</a>
  <a href="sobre.html">Sobre</a>
  <a href="projetos.html">Projetos</a>
  <a href="contacto.html">Contacto</a>
  <a href="contacto.html" class="nav-cta">Pedir Orçamento</a>
</div>`;

const footerHTML = `<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="images/logo-light.png" alt="Elite Company" class="footer-logo">
      <p>Soluções tecnológicas completas para empresas e particulares em Moçambique.</p>
      <div class="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="social-icon social-facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.5 3h-2.4v7C18.3 21.1 22 17 22 12z"/></svg></a>`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = headerHTML;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerHTML;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);