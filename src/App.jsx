import { useState } from 'react'

const heroImage =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85'
const teamImage =
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85'

function Icon({ name, size = 20 }) {
  const icons = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    arrowUp: (
      <>
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </>
    ),
    arrowDown: (
      <>
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    scan: (
      <>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M7 8v8" />
        <path d="M10 8v8" />
        <path d="M14 8v8" />
        <path d="M17 8v8" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
        <path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    play: <path d="m9 6 9 6-9 6V6Z" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2zM4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[name]}
    </svg>
  )
}

function Brand({ dark = false }) {
  return (
    <a className={`brand ${dark ? 'brand-dark' : ''}`} href="#inicio" aria-label="Rumbo, inicio">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 38 38" fill="none">
          <circle cx="19" cy="19" r="17" stroke="currentColor" strokeWidth="1.6" />
          <path d="M19 5v28M5 19h28" stroke="currentColor" strokeWidth="1" opacity=".5" />
          <path d="m19 8 4 11-4 11-4-11 4-11Z" fill="currentColor" />
          <circle cx="19" cy="19" r="2.1" fill="currentColor" />
        </svg>
      </span>
      <span className="brand-word">RUMBO</span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState(null)

  const openModal = (type) => {
    setMenuOpen(false)
    setModal(type)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
            <a href="#talentos" onClick={() => setMenuOpen(false)}>Tu perfil</a>
            <a href="#oportunidades" onClick={() => setMenuOpen(false)}>Oportunidades</a>
            <a href="#para-empresas" onClick={() => setMenuOpen(false)}>Para empresas</a>
          </nav>
          <button className="header-cta" onClick={() => openModal('activate')}>Activar mi tarjeta <Icon name="arrow" size={16} /></button>
          <button className="mobile-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid hero-inner">
            <div className="hero-copy">
              <p className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> Plataforma de talento juvenil</p>
              <h1>Tu talento<br /><span>no cabe en un CV.</span></h1>
              <p className="hero-lede">Descúbrelo, demuéstralo y hazlo despegar.</p>
              <p className="hero-body">Rumbo convierte lo que sabes hacer en oportunidades reales. Sin filtros de papel, sin años de experiencia como barrera.</p>
              <div className="hero-actions">
                <button className="button button-yellow" onClick={() => openModal('activate')}>Activar mi tarjeta <Icon name="arrow" size={18} /></button>
                <button className="button button-ghost" onClick={() => openModal('scan')}><span className="button-icon"><Icon name="scan" size={17} /></span> Escanear código</button>
              </div>
              <div className="hero-note"><span className="avatar-stack"><i /><i /><i /></span><span>El talento joven ya está<br /><strong>tomando su rumbo.</strong></span></div>
            </div>

            <div className="hero-art" aria-label="Vista previa de un perfil Rumbo validado">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-photo-wrap">
                <img src={heroImage} alt="Jóvenes colaborando en un proyecto" />
                <div className="photo-shade" />
              </div>
              <div className="floating-label label-top"><span className="label-check"><Icon name="check" size={13} /></span> Habilidad validada</div>
              <div className="floating-label label-bottom"><span className="mini-spark"><Icon name="spark" size={15} /></span> Tu próximo paso empieza aquí</div>
              <div className="profile-mini-card">
                <div className="mini-card-top"><span className="mini-avatar">KC</span><span className="verified"><Icon name="check" size={11} /> Verificado</span></div>
                <p className="mini-card-name">Katherine C.</p>
                <p className="mini-card-role">Diseño &amp; estrategia</p>
                <div className="mini-card-score"><div className="score-ring"><span>92</span></div><div><strong>Perfil en movimiento</strong><small>4 habilidades destacadas</small></div></div>
              </div>
              <div className="hero-index">01 <span>/</span> 04</div>
            </div>
          </div>
          <div className="hero-bottom-line hero-inner"><span>Habilidades que sí cuentan</span><span className="line" /><span>Scroll para descubrir <Icon name="arrowDown" size={15} /></span></div>
        </section>

        <section className="intro-strip">
          <div className="section-inner intro-grid">
            <p className="eyebrow">La ruta cambia cuando te ves con claridad</p>
            <p className="intro-statement">Hay mucho talento allá afuera <em>esperando ser visto.</em></p>
            <p className="intro-description">Rumbo une tus habilidades, tus evidencias y las oportunidades que hacen sentido para ti. Una tarjeta, un perfil vivo, un camino con dirección.</p>
          </div>
        </section>

        <section className="steps-section section-inner" id="como-funciona">
          <div className="section-heading steps-heading">
            <div><p className="eyebrow">Del kiosco a tu próxima oportunidad</p><h2>Tu primer empleo,<br /><em>en 3 pasos.</em></h2></div>
            <p>Tu punto de partida no tiene que ser perfecto. Solo tiene que ser tuyo.</p>
          </div>
          <div className="steps-list">
            <article className="step-card step-active"><div className="step-number">01</div><div className="step-icon"><Icon name="target" size={23} /></div><h3>Valida tu potencial</h3><p>Acércate a un kiosco de la red, usa tu tarjeta y completa retos interactivos de habilidades.</p><a href="#talentos">Conocer el proceso <Icon name="arrow" size={15} /></a></article>
            <article className="step-card"><div className="step-number">02</div><div className="step-icon"><Icon name="spark" size={23} /></div><h3>Descubre tu perfil</h3><p>Tus resultados se sincronizan para revelar tus talentos clave y tu compatibilidad laboral.</p><a href="#talentos">Ver un perfil <Icon name="arrow" size={15} /></a></article>
            <article className="step-card"><div className="step-number">03</div><div className="step-icon"><Icon name="arrowUp" size={23} /></div><h3>Ponte en el mapa</h3><p>Accede a vacantes reales y sigue rutas cortas de aprendizaje para destacar aún más.</p><a href="#oportunidades">Explorar oportunidades <Icon name="arrow" size={15} /></a></article>
          </div>
        </section>

        <section className="talent-section" id="talentos">
          <div className="section-inner talent-grid">
            <div className="dashboard-wrap">
              <div className="dashboard-glow" />
              <div className="dashboard-card">
                <div className="dashboard-nav"><span className="dashboard-logo"><span className="tiny-mark">✦</span> rumbo</span><span className="dashboard-menu">•••</span></div>
                <div className="dashboard-heading"><div><span className="dash-kicker">MI PERFIL DE TALENTO</span><h3>Katherine<br /><em>Cundano.</em></h3></div><div className="dash-avatar">KC</div></div>
                <div className="validation-banner"><span className="validation-icon"><Icon name="check" size={14} /></span><span><strong>Perfil validado</strong><small>Kiosco #04 · Campus Central</small></span><span className="banner-date">28.08.26</span></div>
                <div className="skill-list"><div className="skill-row"><div className="skill-meta"><span>Pensamiento analítico y lógica</span><strong>92%</strong></div><div className="skill-track"><i style={{ width: '92%' }} /></div><small>SOBRESALIENTE</small></div><div className="skill-row"><div className="skill-meta"><span>Resolución de problemas</span><strong>88%</strong></div><div className="skill-track"><i style={{ width: '88%' }} /></div><small>AVANZADO</small></div><div className="skill-row"><div className="skill-meta"><span>Creatividad visual y espacial</span><strong>75%</strong></div><div className="skill-track"><i style={{ width: '75%' }} /></div><small>INTERMEDIO</small></div></div>
                <div className="dashboard-footer"><span><Icon name="lock" size={14} /> Tú decides qué compartir</span><button aria-label="Ver perfil"><Icon name="arrow" size={16} /></button></div>
              </div>
              <span className="dashboard-tag">RESULTADOS<br /><strong>EN TIEMPO REAL</strong></span>
            </div>
            <div className="talent-copy"><p className="eyebrow">Tus talentos validados</p><h2>Lo que haces bien<br /><em>también habla de ti.</em></h2><p>Tu perfil no se arma con palabras bonitas. Se construye con retos, evidencias y capacidades que puedes demostrar.</p><div className="talent-highlight"><span className="highlight-icon"><Icon name="spark" size={18} /></span><div><strong>Tu perfil está vivo</strong><p>Cada nuevo reto, curso o proyecto suma una coordenada a tu camino.</p></div></div><button className="text-button" onClick={() => openModal('activate')}>Construir mi perfil <Icon name="arrow" size={17} /></button></div>
          </div>
        </section>

        <section className="opportunities-section section-inner" id="oportunidades">
          <div className="section-heading opportunities-heading"><div><p className="eyebrow">Compatibilidad laboral</p><h2>Encuentra dónde<br /><em>encajas hoy.</em></h2></div><div className="heading-side"><p>Oportunidades que miran primero tus fortalezas. Porque el lugar correcto también se siente como una dirección.</p><a className="underlined-link" href="#para-empresas">¿Buscas talento? <Icon name="arrow" size={15} /></a></div></div>
          <div className="opportunity-layout"><div className="opportunity-feature"><div className="feature-top"><span className="match-badge">94% match</span><span className="feature-save">♡</span></div><div className="feature-content"><span className="job-type">OPORTUNIDAD DESTACADA</span><h3>Analista de<br />Datos Junior</h3><p>Tu lógica y análisis estructurado tienen un lugar aquí.</p><div className="company-line"><span className="company-mark">N</span><span>Empresa aliada <small>Managua · Híbrido</small></span></div><button className="light-button" onClick={() => openModal('jobs')}>Ver vacantes disponibles <Icon name="arrow" size={16} /></button></div><div className="feature-grid-lines" /></div><div className="opportunity-list"><article className="job-card"><div className="job-card-top"><span className="job-index">02</span><span className="job-match">85%</span></div><span className="job-type">TECNOLOGÍA</span><h3>Asistente de Desarrollo<br />Web / Software</h3><p>Resuelves problemas y entiendes la lógica de los procesos.</p><div className="job-bottom"><span>Managua · Remoto</span><button aria-label="Ver oportunidad" onClick={() => openModal('jobs')}><Icon name="arrowUp" size={16} /></button></div></article><article className="job-card job-card-muted"><div className="job-card-top"><span className="job-index">03</span><span className="job-match">81%</span></div><span className="job-type">COMUNICACIÓN</span><h3>Creador/a de Contenido<br />Digital</h3><p>Tu mirada visual puede mover ideas y conectar personas.</p><div className="job-bottom"><span>Managua · Híbrido</span><button aria-label="Ver oportunidad" onClick={() => openModal('jobs')}><Icon name="arrowUp" size={16} /></button></div></article></div></div>
        </section>

        <section className="growth-section">
          <div className="section-inner growth-grid"><div className="growth-copy"><p className="eyebrow">Ruta de crecimiento</p><h2>Cierra el círculo.<br /><em>Abre el camino.</em></h2><p>Cuando sabes hacia dónde ir, aprender se vuelve parte del viaje. Te sugerimos cursos cortos que hacen que tu perfil llegue más lejos.</p><div className="course-card"><div className="course-icon"><Icon name="arrowUp" size={22} /></div><div className="course-info"><span>CURSO RECOMENDADO · 15 HRS</span><h3>Introducción a Bases<br />de Datos y SQL</h3><div className="course-progress"><span>Impacto en tu perfil</span><strong>+13%</strong><div><i /></div></div></div><button className="course-action" onClick={() => openModal('course')}><Icon name="arrow" size={17} /></button></div><button className="text-button" onClick={() => openModal('course')}>Ver todos los cursos <Icon name="arrow" size={17} /></button></div><div className="growth-art"><div className="growth-photo"><img src={teamImage} alt="Equipo joven colaborando" /><div className="growth-photo-overlay" /></div><div className="orbit-label"><span>01</span> habilidad + <span>01</span> oportunidad</div><div className="growth-sticker"><Icon name="spark" size={17} /> <span>Tu crecimiento<br /><strong>no tiene techo</strong></span></div><div className="path-line" /></div></div>
        </section>

        <section className="trust-section section-inner" id="para-empresas"><div className="trust-heading"><p className="eyebrow">Para quienes abren puertas</p><h2>Contrata el potencial,<br /><em>no solo el papel.</em></h2></div><div className="trust-content"><p>Sin filtros de papel ni CVs inflados. Rumbo ayuda a identificar talento práctico mediante evidencias reales de desempeño, siempre con revisión humana y respeto por la privacidad.</p><div className="trust-points"><div><span><Icon name="target" size={18} /></span><strong>Skills-first</strong><small>Las capacidades antes que los cargos.</small></div><div><span><Icon name="lock" size={18} /></span><strong>Con control</strong><small>Cada joven decide qué compartir.</small></div><div><span><Icon name="briefcase" size={18} /></span><strong>Con propósito</strong><small>Conexiones que sí pueden avanzar.</small></div></div></div></section>

        <section className="final-cta"><div className="final-cta-shape shape-left" /><div className="final-cta-shape shape-right" /><div className="final-cta-inner"><div className="cta-compass"><span>R</span><div className="compass-needle" /></div><p className="eyebrow light-eyebrow">El siguiente paso es tuyo</p><h2>Encuentra tu<br /><em>propio rumbo.</em></h2><p>Tu talento ya está ahí. Nosotros te ayudamos a ponerlo en movimiento.</p><button className="button button-yellow" onClick={() => openModal('activate')}>Activar mi tarjeta <Icon name="arrow" size={18} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="section-inner footer-top"><div><Brand dark /><p>En busca de oportunidades.</p></div><div className="footer-links"><div><span>EXPLORA</span><a href="#como-funciona">Cómo funciona</a><a href="#talentos">Tu perfil</a><a href="#oportunidades">Oportunidades</a></div><div><span>RUMBO</span><a href="#para-empresas">Para empresas</a><a href="#inicio">Privacidad</a><a href="#inicio">Contacto</a></div></div><div className="footer-social"><span>SÍGUENOS</span><div><a href="#inicio" aria-label="Instagram"><Icon name="instagram" size={18} /></a><a href="#inicio" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a></div></div></div><div className="section-inner footer-bottom"><span>© 2026 Rumbo · Chontal Noxus</span><span>Centro Tecnológico Josefa Toledo de Aguerri</span><span>Hecho para abrir caminos <b>↗</b></span></div></footer>

      {modal && <div className="modal-backdrop" role="presentation" onClick={() => setModal(null)}><div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Cerrar" onClick={() => setModal(null)}><Icon name="close" size={18} /></button><div className="modal-symbol">{modal === 'scan' ? <Icon name="scan" size={28} /> : modal === 'course' ? <Icon name="spark" size={28} /> : <span>R</span>}</div><p className="eyebrow">{modal === 'jobs' ? 'Próximamente' : modal === 'course' ? 'Ruta de crecimiento' : 'Tu próximo paso'}</p><h2 id="modal-title">{modal === 'scan' ? 'Escanea tu código Rumbo.' : modal === 'jobs' ? 'Las oportunidades están tomando forma.' : modal === 'course' ? 'Aprender también es avanzar.' : 'Activa tu tarjeta y descubre tu potencial.'}</h2><p>{modal === 'scan' ? 'La cámara del kiosco estará lista para conectar tu tarjeta con tu perfil validado.' : modal === 'jobs' ? 'Estamos preparando una red de empresas que buscan capacidades como las tuyas. Muy pronto podrás ver vacantes y retos reales.' : modal === 'course' ? 'Estamos curando cursos gratuitos y rutas cortas para ayudarte a cerrar la brecha entre tu talento y tu próxima oportunidad.' : 'Rumbo está preparando el piloto para que jóvenes como tú puedan convertir sus habilidades en evidencias. Déjanos tus datos para ser de los primeros.'}</p>{modal === 'activate' && <form className="modal-form" onSubmit={(event) => { event.preventDefault(); setModal('success') }}><input type="email" placeholder="Tu correo electrónico" aria-label="Tu correo electrónico" required /><button className="button button-navy" type="submit">Quiero tomar mi rumbo <Icon name="arrow" size={17} /></button></form>}{modal === 'success' && <div className="success-message"><Icon name="check" size={18} /> Te tenemos en el radar. ¡Gracias por confiar en tu talento!</div>}{modal !== 'activate' && modal !== 'success' && <button className="button button-navy modal-action" onClick={() => setModal(null)}>Entendido <Icon name="arrow" size={17} /></button>}</div></div>}
    </div>
  )
}

export default App
