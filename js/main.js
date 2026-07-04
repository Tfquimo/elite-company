/* ══════════════════════════════════════════════
   ELITE COMPANY — Global JavaScript
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── LOADER ── */
  const loader = document.querySelector('.loader-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a:not(.nav-cta)').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#')) {
      const linkPage = href.split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    }
  });

  /* ── MOBILE MENU ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── SCROLL ANIMATIONS ── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all first
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });
      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ── PROJECT FILTERS ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Filter cards
        const cat = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
          if (cat === 'todos' || card.getAttribute('data-category') === cat) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ── PROJECT MODAL ── */
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  if (modalOverlay) {
    document.querySelectorAll('[data-modal]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        const data = getProjectData(modalId);
        if (data) {
          document.querySelector('.modal-img').src = data.img;
          document.querySelector('.modal-img').alt = data.title;
          document.querySelector('.modal-body .project-card-tag').textContent = data.category;
          document.querySelector('.modal-body h3').textContent = data.title;
          document.querySelector('.modal-body .modal-desc').textContent = data.desc;
          // Set details list
          const detailsList = document.querySelector('.modal-body ul');
          detailsList.innerHTML = data.details.map(d => `<li>${d}</li>`).join('');
          modalOverlay.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    // Close modal
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── FORM VALIDATION ── */
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const btn = form.querySelector('.btn-primary');

      // Clear previous errors
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

      // Validate required fields
      form.querySelectorAll('[required]').forEach(field => {
        const group = field.closest('.form-group');
        if (!field.value.trim()) {
          group.classList.add('error');
          isValid = false;
        }
        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value.trim())) {
            group.classList.add('error');
            isValid = false;
          }
        }
      });

      if (isValid) {
        // Simulate sending
        const originalText = btn.textContent;
        btn.textContent = 'A enviar...';
        btn.classList.add('loading');

        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('loading');
          // Show success message
          const successMsg = form.querySelector('.form-success');
          if (successMsg) {
            successMsg.classList.add('show');
            form.reset();
            setTimeout(() => successMsg.classList.remove('show'), 5000);
          }
        }, 1500);

        /* ── EmailJS Integration (uncomment and fill credentials) ──
        emailjs.sendForm(
          'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
          'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
          form,
          'YOUR_PUBLIC_KEY'      // Replace with your EmailJS Public Key
        ).then(() => {
          btn.textContent = originalText;
          btn.classList.remove('loading');
          const successMsg = form.querySelector('.form-success');
          if (successMsg) {
            successMsg.classList.add('show');
            form.reset();
            setTimeout(() => successMsg.classList.remove('show'), 5000);
          }
        }).catch((error) => {
          btn.textContent = originalText;
          btn.classList.remove('loading');
          alert('Erro ao enviar. Tente novamente.');
          console.error('EmailJS error:', error);
        });
        */
      }
    });
  });

  /* ── NAV SCROLL STATE ── */
  const nav = document.querySelector('nav');
  const updateNav = () => {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  updateNav();
  window.addEventListener('scroll', updateNav);

});

/* ── PROJECT DATA ── */
function getProjectData(id) {
  const projects = {
    'videovigilancia': {
      img: 'images/hex-cameras1.jpg',
      category: 'Sistema de Segurança',
      title: 'Videovigilância — Complexo Empresarial Nampula',
      desc: 'Instalação e configuração completa de sistema de videovigilância com 20 câmeras Hikvision de alta definição, NVR centralizado com capacidade de gravação de 30 dias, e acesso remoto via smartphone e desktop.',
      details: [
        '20 câmeras Hikvision IP de alta definição',
        'NVR centralizado com armazenamento 4TB',
        'Configuração de acesso remoto via Hik-Connect',
        'Instalação de cablagem estruturada Cat6',
        'Monitorização 24/7 com alertas automáticos',
        'Formação da equipa de segurança'
      ]
    },
    'gestao-vendas': {
      img: 'images/hex-sistemas.jpg',
      category: 'Desenvolvimento',
      title: 'Sistema de Gestão de Vendas — ECV',
      desc: 'Desenvolvimento de aplicação desktop completa em .NET 8 com SQLite para gestão de vendas, stocks e relatórios financeiros. Sistema modular com interface intuitiva e suporte multi-utilizador.',
      details: [
        'Aplicação desktop .NET 8 / Windows Forms',
        'Base de dados SQLite com backup automático',
        'Módulos: Vendas, Stocks, Relatórios, Clientes',
        'Sistema de facturação e recibos',
        'Controlo de acessos multi-utilizador',
        'Relatórios exportáveis em PDF e Excel'
      ]
    },
    'rede-corporativa': {
      img: 'images/hex-redes.jpg',
      category: 'Redes',
      title: 'Rede Corporativa Empresarial',
      desc: 'Projecto e implementação de infraestrutura de rede completa para empresa com múltiplos departamentos, incluindo segmentação por VLANs e segurança perimetral.',
      details: [
        'Configuração de switches geridos Layer 2/3',
        'Segmentação de rede com VLANs',
        'Instalação de pontos de acesso WiFi 6',
        'Firewall e controlo de tráfego',
        'Cablagem estruturada Cat6A certificada',
        'Documentação técnica completa'
      ]
    },
    'portal-web': {
      img: 'images/hex-web.jpg',
      category: 'Web',
      title: 'Portal Web Institucional',
      desc: 'Design e desenvolvimento de website profissional responsivo com sistema de gestão de conteúdos, integração com redes sociais e optimização SEO.',
      details: [
        'Design responsivo e moderno',
        'Sistema de gestão de conteúdos (CMS)',
        'Optimização SEO completa',
        'Integração com redes sociais',
        'Formulário de contacto com notificações',
        'Certificado SSL e hosting configurado'
      ]
    },
    'eletrica-industrial': {
      img: 'images/hex-eletricidade1.jpg',
      category: 'Electricidade',
      title: 'Instalação Elétrica Industrial',
      desc: 'Projecto e instalação eléctrica completa para unidade industrial, incluindo quadros de distribuição, iluminação industrial e sistema de emergência.',
      details: [
        'Projecto eléctrico conforme normas',
        'Quadros de distribuição principal e secundários',
        'Iluminação industrial LED de alta eficiência',
        'Sistema de alimentação de emergência',
        'Instalação de tomadas industriais trifásicas',
        'Certificação e teste final'
      ]
    },
    'cerca-residencial': {
      img: 'images/hex-cerca.jpg',
      category: 'Segurança',
      title: 'Cerca Elétrica Residencial',
      desc: 'Instalação de sistema de cerca eléctrica perimetral para residência de alto padrão, com central de alarme integrada e monitorização remota.',
      details: [
        'Cerca eléctrica de 6 fios com 200m',
        'Central de alarme com bateria de backup',
        'Sensores de movimento perimetrais',
        'Sirene de alta potência',
        'Monitorização via aplicação móvel',
        'Placas de sinalização regulamentares'
      ]
    },
    'kit-seguranca': {
      img: 'images/hex-kit-seguranca.jpg',
      category: 'Segurança',
      title: 'Kit Segurança Completo',
      desc: 'Solução integrada de segurança combinando câmeras de vigilância, cerca eléctrica, alarme e controlo de acesso para condomínio residencial.',
      details: [
        '8 câmeras IP Full HD com visão nocturna',
        'NVR 8 canais com armazenamento 2TB',
        'Cerca eléctrica perimetral completa',
        'Sistema de alarme com sensores',
        'Controlo de acesso por cartão',
        'Central de monitorização 24/7'
      ]
    },
    'consultoria-pme': {
      img: 'images/hex-dev.jpg',
      category: 'Consultoria',
      title: 'Consultoria TI para PME',
      desc: 'Auditoria tecnológica completa e planeamento estratégico de TI para pequena e média empresa, incluindo roadmap de transformação digital.',
      details: [
        'Auditoria de infraestrutura existente',
        'Análise de necessidades e gaps',
        'Roadmap de transformação digital',
        'Recomendações de software e hardware',
        'Plano de contingência e backup',
        'Acompanhamento trimestral'
      ]
    }
  };
  return projects[id] || null;
}
