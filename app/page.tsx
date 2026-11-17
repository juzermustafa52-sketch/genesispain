'use client';

import { useEffect, useState } from 'react';

const conditions = [
  'Back and neck pain', 'Migraines and headaches', 'Joint pain', 'Complex regional pain syndrome',
  'Spinal stenosis', 'Whiplash', 'Shingles-related pain', 'Sports and accident injuries',
];

const procedures = [
  ['Epidural steroid injections', 'Targeted injections used to address pain and inflammation around the spine.'],
  ['Nerve blocks & ablation', 'Diagnostic and therapeutic procedures tailored to your symptoms and care plan.'],
  ['Spinal cord stimulation', 'Evaluation and trial options for people living with persistent pain.'],
  ['Joint & trigger point injections', 'In-office procedures for selected joint, muscle, and soft-tissue conditions.'],
];

const values = [
  ['Care', 'Thoughtful attention to your health, history, and individual needs.'],
  ['Compassion', 'A supportive, respectful experience at every step of your care.'],
  ['Communication', 'Clear explanations so you can make informed decisions about treatment.'],
  ['Commitment', 'A team focused on helping you work toward lasting improvement.'],
  ['Competence', 'Experienced pain specialists using evidence-informed treatment options.'],
];

const services = [
  ['Non-surgical care', 'Personalized options focused on pain relief without surgery.'],
  ['Minimally invasive procedures', 'A range of interventional treatments recommended when appropriate.'],
  ['Individual treatment plans', 'Care shaped around your condition, goals, and response to treatment.'],
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon"><path d="M4 10h11M10 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function MenuIcon({ open }: { open: boolean }) {
  return <span className={`menu-icon${open ? ' open' : ''}`} aria-hidden="true"><i /><i /><i /></span>;
}

function CallButton({ children = 'Call for an appointment' }: { children?: React.ReactNode }) {
  return <a className="button button-orange" href="tel:+19138714688">{children}<ArrowIcon /></a>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <a className="utility-address" href="https://maps.google.com/?q=6700+W+121st+St+Suite+300+Overland+Park+KS+66209" target="_blank" rel="noreferrer">
            <span className="pin-icon" aria-hidden="true">⌖</span> 6700 W 121st St, Suite 300, Overland Park, KS 66209
          </a>
          <div className="utility-links"><a href="tel:+19138714688">913.871.4688</a><span aria-hidden="true">|</span><a href="mailto:admin@genesispain.com">admin@genesispain.com</a></div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Genesis Pain Clinic home" onClick={closeMenu}>
            <span className="brand-symbol" aria-hidden="true"><span>G</span><i /></span>
            <span className="brand-name">GENESIS<small>PAIN CLINIC</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <MenuIcon open={menuOpen} />
          </button>
          <nav id="main-navigation" className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About Genesis</a>
            <details className="nav-dropdown">
              <summary>What We Treat <span className="chevron" aria-hidden="true" /></summary>
              <div className="dropdown-panel">
                <a href="#conditions" onClick={closeMenu}>Conditions we treat</a>
                <a href="#treatments" onClick={closeMenu}>Treatments & procedures</a>
              </div>
            </details>
            <a href="#approach" onClick={closeMenu}>Our Approach</a>
            <a href="#patients" onClick={closeMenu}>For Patients</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="button button-orange nav-cta" href="tel:+19138714688" onClick={closeMenu}>Appointments <ArrowIcon /></a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span /> A better path forward</p>
              <h1>Are you suffering<br className="desktop-break" /> from pain?</h1>
              <p className="hero-lede">Compassionate, personalized pain care to help you move toward a healthier life.</p>
              <div className="same-day"><span className="same-day-mark">✓</span><strong>Same Day Appointments Available!</strong></div>
              <div className="hero-actions"><CallButton>Schedule an appointment</CallButton><a className="text-link" href="#about">Discover Genesis <ArrowIcon /></a></div>
              <p className="hero-note">Call our team today to discuss your care options.</p>
            </div>
            <div className="hero-visual reveal" aria-label="A caring, comfortable clinical environment">
              <div className="hero-photo" role="img" aria-label="Doctor speaking with a patient in a bright medical clinic" />
              <div className="hero-stamp"><span className="stamp-small">GENESIS PAIN CLINIC</span><strong>Reviving<br />wellness.</strong><span className="stamp-line" /></div>
              <div className="hero-caption"><span className="caption-dot" /> Care that starts with listening</div>
            </div>
          </div>
          <div className="hero-bottom container"><span>PERSONALIZED PAIN MANAGEMENT</span><span className="hero-bottom-line" /><span>OVERLAND PARK, KANSAS</span></div>
        </section>

        <section className="intro section" id="about">
          <div className="container intro-grid">
            <div className="intro-heading reveal"><p className="eyebrow"><span /> About Genesis</p><h2>Reviving wellness.<br /><em>Restoring possibility.</em></h2></div>
            <div className="intro-copy reveal"><p className="lead">We believe life can be bigger than pain.</p><p>Genesis Pain Clinic provides compassionate, personalized care for people living with acute and chronic pain. Our team takes time to understand your experience and explore thoughtful options for extended relief.</p><p>We focus on non-drug, non-surgical, and minimally invasive approaches whenever appropriate—always with care shaped around you.</p><a className="underlined-link" href="#approach">Get to know our approach <ArrowIcon /></a></div>
          </div>
        </section>

        <section className="values-section section" id="approach">
          <div className="container">
            <div className="section-title centered reveal"><p className="eyebrow"><span /> What matters to us</p><h2>Care that sees the <em>whole person.</em></h2><p>Advanced pain care, guided by empathy and grounded in your individual needs.</p></div>
            <div className="values-grid">{values.map(([title, body], index) => <article className="value-card reveal" key={title}><span className="value-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p><span className="value-rule" /></article>)}</div>
          </div>
        </section>

        <section className="what-we-do section">
          <div className="container what-grid">
            <div className="what-photo reveal" role="img" aria-label="Modern, welcoming care setting"><div className="photo-label"><span>GENESIS PAIN CLINIC</span><strong>A partner in your<br />journey to relief.</strong></div></div>
            <div className="what-copy reveal"><p className="eyebrow"><span /> What we do</p><h2>Thoughtful care.<br /><em>Meaningful relief.</em></h2><p>Our specialists bring together advanced medicine, technology, and a personal touch to create a care plan that fits your needs. We’ll walk you through your options and help you understand what comes next.</p><div className="service-list">{services.map(([title, body], index) => <div className="service-row" key={title}><span className="service-index">0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowIcon /></div>)}</div></div>
          </div>
        </section>

        <section className="conditions-section section" id="conditions">
          <div className="container conditions-layout">
            <div className="conditions-heading reveal"><p className="eyebrow"><span /> How we can help</p><h2>When pain gets in the way, <em>we’re here.</em></h2><p>We evaluate and care for a range of pain conditions. Your provider will work with you to understand your symptoms and discuss appropriate next steps.</p><a className="underlined-link" href="#contact">Talk with our team <ArrowIcon /></a></div>
            <div className="conditions-list reveal">{conditions.map((condition, index) => <a href="#contact" className="condition-item" key={condition}><span>{String(index + 1).padStart(2, '0')}</span><strong>{condition}</strong><ArrowIcon /></a>)}</div>
          </div>
        </section>

        <section className="treatments-section section" id="treatments">
          <div className="container">
            <div className="section-title reveal"><p className="eyebrow"><span /> Treatment options</p><h2>Personalized pain management, <em>with a plan.</em></h2><p>Treatment recommendations are based on your individual evaluation, needs, and goals.</p></div>
            <div className="treatment-grid">{procedures.map(([title, body], index) => <article className="treatment-card reveal" key={title}><span className="treatment-icon" aria-hidden="true">{['✳', '⌁', '◉', '✚'][index]}</span><span className="treatment-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p><a href="#contact" aria-label={`Ask us about ${title}`}><ArrowIcon /></a></article>)}</div>
            <p className="treatment-disclaimer">Not every treatment is right for every patient. Your provider will discuss potential benefits, risks, and alternatives with you.</p>
          </div>
        </section>

        <section className="patient-section section" id="patients">
          <div className="container patient-banner reveal"><div><p className="eyebrow"><span /> For patients</p><h2>Let’s take the<br /><em>next step together.</em></h2><p>Have questions about an appointment, insurance, or what to expect? Our team is here to help you get started.</p><CallButton>Call 913.871.4688</CallButton></div><div className="patient-art" aria-hidden="true"><span className="art-circle art-one" /><span className="art-circle art-two" /><span className="art-cross">+</span><span className="art-word">care<br />comes<br />first.</span></div></div>
        </section>

        <section className="insurance-section"><div className="container insurance-inner"><span className="insurance-mark" aria-hidden="true">✓</span><div><p className="eyebrow"><span /> Insurance</p><h2>Questions about coverage?</h2><p>We accept most commercial insurance plans. Please contact our office to confirm your specific coverage and discuss any questions.</p></div><a className="button button-outline" href="tel:+19138714688">Ask our team <ArrowIcon /></a></div></section>

        <section className="contact-section section" id="contact">
          <div className="container contact-grid"><div className="contact-copy reveal"><p className="eyebrow"><span /> Visit Genesis</p><h2>Here when you’re <em>ready.</em></h2><p>Reach out to schedule an appointment or speak with our team about getting started.</p><CallButton>913.871.4688</CallButton><a className="contact-email" href="mailto:admin@genesispain.com">admin@genesispain.com</a></div><div className="contact-details reveal"><div className="detail-block"><span className="detail-label">FIND US</span><a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=6700+W+121st+St+Suite+300+Overland+Park+KS+66209">6700 W 121st St, Suite 300<br />Overland Park, KS 66209 <ArrowIcon /></a></div><div className="detail-block"><span className="detail-label">OFFICE HOURS</span><p>Monday – Friday<br />8:00 am – 4:30 pm</p></div><div className="detail-block"><span className="detail-label">GET IN TOUCH</span><p><a href="tel:+19138714688">913.871.4688</a><br /><a href="mailto:admin@genesispain.com">admin@genesispain.com</a></p></div></div></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main"><a className="brand footer-brand" href="#home" aria-label="Genesis Pain Clinic home"><span className="brand-symbol" aria-hidden="true"><span>G</span><i /></span><span className="brand-name">GENESIS<small>PAIN CLINIC</small></span></a><p className="footer-tagline">Reviving wellness.<br />Helping you move forward.</p><div className="footer-nav"><div><span className="footer-label">EXPLORE</span><a href="#about">About Genesis</a><a href="#approach">Our approach</a><a href="#conditions">Conditions</a><a href="#treatments">Treatments</a></div><div><span className="footer-label">CONTACT</span><a href="tel:+19138714688">913.871.4688</a><a href="mailto:admin@genesispain.com">admin@genesispain.com</a><a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=6700+W+121st+St+Suite+300+Overland+Park+KS+66209">Overland Park, Kansas</a></div></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Genesis Pain Clinic</span><span>Care. Compassion. Communication. Commitment. Competence.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  );
}
