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
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="social-icon social-facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.5 3h-2.4v7C18.3 21.1 22 17 22 12z"/></svg></a>
        <a href="https://wa.me/258XXXXXXXXX" target="_blank" rel="noopener" aria-label="WhatsApp" class="social-icon social-whatsapp"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5C18.7 1.7 16 1 13.1 1 7.3 1 2.2 6.1 2.2 11.9c0 2.1.6 4.1 1.7 5.8L1 23l5.6-1.5c1.6.9 3.4 1.4 5.4 1.4 5.8 0 10.9-5.1 10.9-10.9 0-2.9-1.2-5.7-3.4-7.8zM14.8 16.8c-.2.6-.7 1.1-1.3 1.3-.4.2-.9.2-1.5.1-1.5-.2-3-1.4-4.4-3.4-1-1.4-1.6-2.9-1.8-4.3-.1-.5 0-1 .3-1.4.2-.4.6-.6 1-.6h1.4c.3 0 .6.1.8.4l.8 1.3c.2.3.2.6.1 1-.1.4-.3.7-.6.9l-.4.3c-.2.2-.3.3-.2.5.5 1.4 1.6 2.8 3.1 4.3 1.2 1.2 2.4 1.8 3.5 2 .2 0 .4 0 .6-.1.3-.1.5-.3.6-.6l.3-.8c.1-.4.3-.7.7-.8.4-.1.9 0 1.3.1.5.1.9.3 1.2.6.2.3.2.7.1 1l-.4 1.6z"/></svg></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-icon social-linkedin"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C3.34 3.5 2 4.82 2 6.42c0 1.6 1.32 2.92 2.98 2.92h.03C6.6 9.34 8 8 8 6.42 8 4.82 6.64 3.5 4.98 3.5zM2.5 20.5h5V9.5h-5v11zM9.5 20.5h5v-5.7c0-3.2 4-3.45 4 0v5.7h5v-6.9c0-6.3-6.8-6.07-9.6-2.97V9.5h-4.4v11z"/></svg></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Informática</h4>
      <ul>
        <li><a href="informatica.html">Manutenção</a></li>
        <li><a href="informatica.html">Redes</a></li>
        <li><a href="servicos.html">Sistemas</a></li>
        <li><a href="servicos.html">Websites</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Segurança</h4>
      <ul>
        <li><a href="seguranca.html">Câmeras CCTV</a></li>
        <li><a href="seguranca.html">Cerca Elétrica</a></li>
        <li><a href="seguranca.html">Monitorização</a></li>
        <li><a href="eletricidade.html">Electricidade</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Empresa</h4>
      <ul>
        <li><a href="sobre.html">Sobre Nós</a></li>
        <li><a href="projetos.html">Projetos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
        <li><a href="consultoria.html">Consultoria</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Elite Company. Todos os direitos reservados. — Nampula, Moçambique</p>
    <p style="color:rgba(143,170,200,0.4); font-size:0.75rem;">Política de Privacidade &nbsp;·&nbsp; Termos de Uso</p>
  </div>
</footer>

<!-- ── WHATSAPP FLOAT ── -->
<a href="https://wa.me/258XXXXXXXXX?text=Olá, gostaria de um orçamento" class="whatsapp-float social-icon social-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5C18.7 1.7 16 1 13.1 1 7.3 1 2.2 6.1 2.2 11.9c0 2.1.6 4.1 1.7 5.8L1 23l5.6-1.5c1.6.9 3.4 1.4 5.4 1.4 5.8 0 10.9-5.1 10.9-10.9 0-2.9-1.2-5.7-3.4-7.8zM14.8 16.8c-.2.6-.7 1.1-1.3 1.3-.4.2-.9.2-1.5.1-1.5-.2-3-1.4-4.4-3.4-1-1.4-1.6-2.9-1.8-4.3-.1-.5 0-1 .3-1.4.2-.4.6-.6 1-.6h1.4c.3 0 .6.1.8.4l.8 1.3c.2.3.2.6.1 1-.1.4-.3.7-.6.9l-.4.3c-.2.2-.3.3-.2.5.5 1.4 1.6 2.8 3.1 4.3 1.2 1.2 2.4 1.8 3.5 2 .2 0 .4 0 .6-.1.3-.1.5-.3.6-.6l.3-.8c.1-.4.3-.7.7-.8.4-.1.9 0 1.3.1.5.1.9.3 1.2.6.2.3.2.7.1 1l-.4 1.6z"/></svg></a>`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = headerHTML;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerHTML;
    this.style.display = 'block';
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);