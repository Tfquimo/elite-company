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
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="social-icon social-facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
        <a href="https://wa.me/258XXXXXXXXX" target="_blank" rel="noopener" aria-label="WhatsApp" class="social-icon social-whatsapp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-icon social-linkedin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
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
<a href="https://wa.me/258XXXXXXXXX?text=Olá, gostaria de um orçamento" class="whatsapp-float social-icon social-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a>`;

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