const conditions = [
  { icon: '🩺', title: 'Low Back Pain', body: 'Evaluation and treatment strategies built around your symptoms, mobility, and goals.' },
  { icon: '🧠', title: 'Migraines', body: 'Targeted care designed to reduce frequency, severity, and impact on daily life.' },
  { icon: '🦴', title: 'Neck Pain', body: 'Personalized options to address tension, irritation, and movement limitations.' },
  { icon: '🤝', title: 'Joint Pain', body: 'Support for improved function, comfort, and long-term quality of life.' },
];

const features = [
  ['Thoughtful evaluations', 'We start with a detailed conversation and exam to understand your experience and concerns.'],
  ['Patient-first communication', 'You’ll understand your options, timeline, and next steps before treatment begins.'],
  ['Continuity of care', 'We work with you through follow-up and progress assessment for a more confident recovery path.'],
];

const resources = [
  { icon: '📄', title: 'Patient Forms', body: 'Access information needed before your first visit and follow-up appointments.' },
  { icon: '🔐', title: 'Patient Portal', body: 'Review information and manage communication with the clinic in one secure place.' },
  { icon: '🎥', title: 'Videos', body: 'Learn more about pain management topics and what to expect from clinic visits.' },
  { icon: '📍', title: 'Location', body: 'Conveniently located in Overland Park with phone and appointment guidance available.' },
];

const reviews = [
  'The clinic took the time to explain everything and helped me feel comfortable with my treatment plan.',
  'I finally felt listened to. The staff were kind, organized, and focused on improving my quality of life.',
  'Professional care and clear communication made the entire process feel straightforward and reassuring.',
];

function Button({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a className={`button${secondary ? ' button-secondary' : ''}`} href={href}>{children}</a>;
}

export default function HomePage() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="brandline"><span className="dot" />Genesis Pain Clinic <span className="top-location">• Overland Park, KS</span></div>
          <div className="top-actions"><a href="tel:+19138714688">(913) 871-4688</a><a href="mailto:info@genesispain.com">info@genesispain.com</a></div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="logo" aria-label="Genesis Pain Clinic home">
            <span className="logo-mark">GP</span><span className="logo-text"><strong>Genesis Pain</strong><small>Clinic</small></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a><a href="#conditions">Conditions</a><a href="#providers">Providers</a><a href="#patients">Patients</a><a href="#contact">Contact</a>
            <Button href="#contact">Book Appointment</Button>
          </nav>
          <a className="mobile-call" href="tel:+19138714688">Call</a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Compassionate, personalized care</div>
              <h1>Move toward a life with less pain.</h1>
              <p>We help patients manage chronic and acute pain with an individualized treatment plan designed around the source of discomfort and what matters most to them.</p>
              <div className="hero-actions"><Button href="#contact">Request an Appointment</Button><Button href="tel:+19138714688" secondary>Call the Clinic</Button></div>
              <div className="hero-stats"><div className="stat"><strong>12+</strong><span>Years of care</span></div><div className="stat"><strong>1:1</strong><span>Treatment planning</span></div><div className="stat"><strong>All</strong><span>Major insurances*</span></div></div>
            </div>
            <div className="hero-card"><div className="hero-image" role="img" aria-label="Doctor and patient in a clinic"><div className="badge"><strong>Open Monday – Friday</strong><span>8:00 AM – 4:30 PM</span></div></div></div>
          </div>
        </section>

        <section className="section" id="conditions"><div className="container">
          <div className="section-heading"><div className="eyebrow">Conditions &amp; treatments</div><h2>Care tailored to the root cause.</h2></div>
          <div className="cards">{conditions.map((item) => <article className="card" key={item.title}><div className="icon-box" aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div></section>

        <section className="section" id="about"><div className="container split">
          <div className="photo-box" role="img" aria-label="Bright clinic consultation space" />
          <div><div className="eyebrow">Why patients choose us</div><h2>Clear guidance. Personalized treatment.</h2><p>At Genesis Pain Clinic, we focus on identifying the source of your pain and building a plan that respects your health history, lifestyle, and recovery goals.</p>
            <div className="feature-list">{features.map(([title, body]) => <div className="feature-row" key={title}><span className="check" aria-hidden="true">✓</span><div><strong>{title}</strong><p>{body}</p></div></div>)}</div>
          </div>
        </div></section>

        <section className="section process" id="providers"><div className="container">
          <div className="section-heading"><div className="eyebrow">How it works</div><h2>A straightforward path to relief.</h2></div>
          <div className="steps">{[['1', 'Schedule', 'Reach out by phone or online to request an evaluation and appointment time.'], ['2', 'Evaluate', 'Meet with the care team to review symptoms, goals, history, and possible treatment options.'], ['3', 'Treat', 'Begin a personalized plan designed to improve comfort, mobility, and daily function.']].map(([number, title, body]) => <article className="step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div></section>

        <section className="section" id="patients"><div className="container">
          <div className="section-heading"><div className="eyebrow">For patients</div><h2>Helpful resources and support.</h2></div>
          <div className="cards">{resources.map((item) => <article className="card" key={item.title}><div className="icon-box" aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div></section>

        <section className="section"><div className="container">
          <div className="section-heading"><div className="eyebrow">Patient stories</div><h2>Support that patients can feel confident in.</h2></div>
          <div className="reviews">{reviews.map((review, index) => <article className="review" key={review}><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“{review}”</p><strong>— Patient Review {index + 1}</strong></article>)}</div>
        </div></section>

        <section className="cta" id="contact"><div className="container cta-inner"><div><div className="eyebrow">Need help?</div><h2>Request an appointment today.</h2></div><Button href="tel:+19138714688">Call (913) 871-4688</Button></div></section>
      </main>

      <footer className="footer"><div className="container">
        <div className="footer-grid"><div><h3>Genesis Pain Clinic</h3><p>Personalized pain management care for patients seeking relief, function, and confidence in daily life.</p></div>
          <div><h4>Quick links</h4><ul><li><a href="#about">About</a></li><li><a href="#conditions">Conditions</a></li><li><a href="#providers">Providers</a></li></ul></div>
          <div><h4>Contact</h4><ul><li>6700 W 121st St, Suite 300</li><li>Overland Park, KS 66209</li><li><a href="tel:+19138714688">(913) 871-4688</a></li></ul></div>
          <div><h4>Hours</h4><ul><li>Mon – Fri: 8:00 AM – 4:30 PM</li><li>New patient appointments available</li></ul></div>
        </div>
        <div className="copy">© {new Date().getFullYear()} Genesis Pain Clinic Demo. Demonstration site; verify all content before launch.</div>
      </div></footer>
    </>
  );
}
