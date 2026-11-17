const conditions = [
  'Low back pain',
  'Migraines & headaches',
  'Neck pain',
  'Joint pain',
  'Complex regional pain syndrome',
  'Spinal stenosis',
  'Whiplash',
  'Shingles-related pain',
  'Sports injuries',
  'Accident-related pain',
];

const treatmentCards = [
  {
    title: 'Epidural steroid injections',
    body: 'Targeted pain relief for inflammation and irritation near the spine.',
  },
  {
    title: 'Nerve blocks & ablation',
    body: 'Diagnostic and therapeutic procedures designed around your symptoms.',
  },
  {
    title: 'Spinal cord stimulation',
    body: 'Advanced treatment options for persistent pain that has not improved with conservative care.',
  },
  {
    title: 'Joint & trigger point injections',
    body: 'Treatment strategies for selected joints, muscles, and soft-tissue pain.',
  },
];

const values = [
  ['Care', 'Personalized attention centered on your health history, preferences, and goals.'],
  ['Compassion', 'A supportive experience designed to help you feel heard and understood.'],
  ['Communication', 'Clear education and guidance so you know your treatment options and next steps.'],
  ['Commitment', 'A care plan built around long-term improvement and sustained relief.'],
  ['Competence', 'Experienced specialists focused on evidence-informed pain management.'],
] as const;

const resources = [
  ['Patient forms', 'Information to help you prepare before your appointment.'],
  ['Insurance questions', 'Coverage guidance for your treatment and care plan.'],
  ['Location details', 'Conveniently located in Overland Park, Kansas.'],
  ['Contact the clinic', 'Reach our team by phone or email for support.'],
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="arrow-icon">
      <path d="M4 10h11M10 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CallButton({ light = false, children = 'Request an Appointment' }: { light?: boolean; children?: React.ReactNode }) {
  return (
    <a className={`button ${light ? 'button-light' : 'button-primary'}`} href="tel:+19138714688">
      {children}
      <ArrowIcon />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <a href="https://maps.google.com/?q=6700+W+121st+St+Suite+300+Overland+Park+KS+66209" target="_blank" rel="noreferrer" className="utility-link utility-location">
            6700 W 121st St, Suite 300, Overland Park, KS 66209
          </a>
          <div className="utility-links">
            <a href="tel:+19138714688">(913) 871-4688</a>
            <span aria-hidden="true">|</span>
            <a href="mailto:admin@genesispain.com">admin@genesispain.com</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Genesis Pain Clinic home">
            <span className="brand-mark" aria-hidden="true">G</span>
            <span className="brand-text">
              <strong>Genesis</strong>
              <small>Pain Clinic</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#conditions">Conditions</a>
            <a href="#treatments">Treatments</a>
            <a href="#patients">For Patients</a>
            <a href="#contact">Contact</a>
            <CallButton light>Appointments</CallButton>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A better path forward</p>
              <h1>Are you suffering from pain?</h1>
              <p className="hero-text">
                Compassionate, personalized pain management designed around the source of your discomfort.
              </p>
              <div className="hero-promo">
                <span className="promo-check" aria-hidden="true">✓</span>
                <span>Same Day Appointments Available!</span>
              </div>
              <div className="hero-actions">
                <CallButton>Request an Appointment</CallButton>
                <a className="text-link" href="#about">
                  Learn about Genesis <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Doctor and patient in a professional clinic environment">
              <div className="hero-photo" />
              <div className="floating-tag">
                <span>Compassionate care</span>
                <strong>Reviving wellness.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="container intro-grid">
            <div className="intro-copy-block">
              <p className="eyebrow eyebrow-dark">About Genesis</p>
              <h2>
                Reviving wellness.<br />
                Restoring possibility.
              </h2>
            </div>
            <div className="intro-copy">
              <p className="intro-lead">We believe life can be bigger than pain.</p>
              <p>
                Genesis Pain Clinic provides personalized care for adults living with acute and chronic pain.
                We focus on understanding the source of discomfort and creating a treatment plan designed around
                your goals, your health history, and the type of relief you want to achieve.
              </p>
              <p>
                Our methods combine advanced pain management, compassionate communication, and a thoughtful approach
                to care—without relying on a one-size-fits-all model.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section section">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">What matters to us</p>
              <h2>
                Care that sees the <em>whole person.</em>
              </h2>
            </div>
            <div className="values-grid">
              {values.map(([title, text], index) => (
                <article className="value-card" key={title}>
                  <span className="value-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="what-we-do section">
          <div className="container what-grid">
            <div className="what-photo" aria-label="Comfortable care environment" />
            <div className="what-copy">
              <p className="eyebrow">What we do</p>
              <h2>
                Thoughtful care.<br />
                Meaningful relief.
              </h2>
              <p>
                Our specialists focus on targeted, evidence-informed treatment options that are chosen for the
                individual patient—not just the diagnosis. We work to reduce pain while helping you improve your
                quality of life and daily function.
              </p>
              <div className="resource-list">
                {resources.map(([title, text], index) => (
                  <div className="resource-row" key={title}>
                    <span className="resource-index">0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                    <ArrowIcon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="conditions section" id="conditions">
          <div className="container conditions-grid">
            <div className="conditions-copy">
              <p className="eyebrow">How we can help</p>
              <h2>
                When pain gets in the way,<br />
                <em>we’re here.</em>
              </h2>
              <p>
                We evaluate a broad range of pain conditions and tailor recommendations around the source of your
                symptoms, your goals, and your lifestyle.
              </p>
            </div>
            <div className="condition-list">
              {conditions.map((condition, index) => (
                <a href="#contact" className="condition-item" key={condition}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{condition}</strong>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="treatments section" id="treatments">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Treatment options</p>
              <h2>
                Personalized pain management,<br />
                <em>with a plan.</em>
              </h2>
            </div>

            <div className="treatment-grid">
              {treatmentCards.map((item, index) => (
                <article className="treatment-card" key={item.title}>
                  <span className="treatment-icon" aria-hidden="true">
                    {['✦', '◌', '◎', '✚'][index]}
                  </span>
                  <span className="treatment-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a href="#contact" aria-label={`Ask us about ${item.title}`}>
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="patients section" id="patients">
          <div className="container patient-panel">
            <div>
              <p className="eyebrow">For patients</p>
              <h2>
                Let’s take the next step<br />
                <em>together.</em>
              </h2>
              <p>
                Reach out to learn more about symptoms, insurance coverage, treatment options, or scheduling an
                appointment.
              </p>
              <CallButton>Call (913) 871-4688</CallButton>
            </div>
            <div className="patient-art" aria-hidden="true">
              <span className="art-circle art-one" />
              <span className="art-circle art-two" />
              <span className="art-plus">+</span>
              <span className="art-word">care</span>
            </div>
          </div>
        </section>

        <section className="insurance" aria-label="Insurance information">
          <div className="container insurance-inner">
            <span className="insurance-check" aria-hidden="true">✓</span>
            <div>
              <p className="eyebrow">Insurance</p>
              <h2>Questions about coverage?</h2>
            </div>
            <a className="button button-outline" href="tel:+19138714688">
              Ask our team <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Visit Genesis</p>
              <h2>
                Here when you’re<br />
                <em>ready.</em>
              </h2>
              <p>
                Reach out to schedule a consultation or speak with our team about treatment options and next steps.
              </p>
              <CallButton>913.871.4688</CallButton>
              <a className="contact-email" href="mailto:admin@genesispain.com">admin@genesispain.com</a>
            </div>

            <div className="contact-details">
              <div className="detail-block">
                <span className="detail-label">Find us</span>
                <a href="https://maps.google.com/?q=6700+W+121st+St+Suite+300+Overland+Park+KS+66209" target="_blank" rel="noreferrer">
                  6700 W 121st St, Suite 300<br />Overland Park, KS 66209
                </a>
              </div>
              <div className="detail-block">
                <span className="detail-label">Office hours</span>
                <p>Monday – Friday<br />8:00 AM – 4:30 PM</p>
              </div>
              <div className="detail-block">
                <span className="detail-label">Get in touch</span>
                <p>
                  <a href="tel:+19138714688">(913) 871-4688</a><br />
                  <a href="mailto:admin@genesispain.com">admin@genesispain.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#home" className="brand footer-brand-link" aria-label="Genesis Pain Clinic home">
              <span className="brand-mark" aria-hidden="true">G</span>
              <span className="brand-text">
                <strong>Genesis</strong>
                <small>Pain Clinic</small>
              </span>
            </a>
            <p>Reviving wellness.<br />Helping you move forward.</p>
          </div>

          <div className="footer-nav">
            <div>
              <span className="detail-label">Explore</span>
              <a href="#about">About Genesis</a>
              <a href="#conditions">Conditions</a>
              <a href="#treatments">Treatments</a>
            </div>
            <div>
              <span className="detail-label">Contact</span>
              <a href="tel:+19138714688">(913) 871-4688</a>
              <a href="mailto:admin@genesispain.com">admin@genesispain.com</a>
              <a href="https://maps.google.com/?q=6700+W+121st+St+Suite+300+Overland+Park+KS+66209" target="_blank" rel="noreferrer">Overland Park, KS</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Genesis Pain Clinic</span>
          <span>Care. Compassion. Communication. Commitment. Competence.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
