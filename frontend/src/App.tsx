import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu, Sparkles, X } from "lucide-react";
import "@/App.css";

type Project = {
  number: string;
  title: string;
  role: string;
  description: string;
  tools: string[];
  tone: string;
  label: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Sport4All",
    role: "Product Concept & UI/UX Designer",
    description:
      "Project individual yang dibuat menggunakan Figma. Saya mengembangkan konsep, fitur, user flow, serta merancang keseluruhan interface aplikasi.",
    tools: ["Figma"],
    tone: "lime",
    label: "Product concept",
  },
  {
    number: "02",
    title: "PDAM Smart Management",
    role: "UI/UX Designer",
    description:
      "Project tim menggunakan Figma. Saya bertanggung jawab merancang dashboard, customer management, billing, login, dan keseluruhan pengalaman pengguna.",
    tools: ["Figma"],
    tone: "ink",
    label: "Team project",
  },
  {
    number: "03",
    title: "Sports App Wireflow",
    role: "UI/UX Exploration",
    description:
      "Eksplorasi wireflow untuk aplikasi olahraga menggunakan Figma. Bukan produk final, tetapi menjadi latihan menyusun alur aplikasi dan user journey.",
    tools: ["Figma"],
    tone: "blush",
    label: "Flow exploration",
  },
];

const navItems = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "project", label: "Project" },
  { id: "kontak", label: "Kontak" },
];

const profilePhoto = "https://customer-assets-jai6qajn.emergentagent.net/job_nv-design-studio/artifacts/u7h4uap7_WhatsApp%20Image%202026-08-27%20at%2014.07.50%20%281%29.jpeg";

const sport4AllSlides = [
  {
    src: "https://customer-assets-jai6qajn.emergentagent.net/job_nv-design-studio/artifacts/967l8um9_FADE%20IN%206%20%282%29.png",
    alt: "Tampilan splash screen aplikasi Sport4All dengan identitas visual merah dan hitam",
  },
  {
    src: "https://customer-assets-jai6qajn.emergentagent.net/job_nv-design-studio/artifacts/hrfbv2pf_iPhone%2016%20Pro%20-%2010%20%282%29.png",
    alt: "Tampilan beranda aplikasi Sport4All berisi aktivitas dan tantangan olahraga",
  },
  {
    src: "https://customer-assets-jai6qajn.emergentagent.net/job_nv-design-studio/artifacts/dbo918dk_iPhone%2016%20Pro%20-%2026%20%281%29.png",
    alt: "Tampilan onboarding Sport4All yang menyambut Novanda",
  },
  {
    src: "https://customer-assets-jai6qajn.emergentagent.net/job_nv-design-studio/artifacts/0e73vd9r_iPhone%2016%20Pro%20-%2027%20%282%29.png",
    alt: "Tampilan onboarding Sport4All dengan ajakan mulai bergerak",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [sportSlide, setSportSlide] = useState(0);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const hashSection = window.location.hash.replace("#", "");
        if (navItems.some((item) => item.id === hashSection)) {
          setActiveSection(hashSection);
          return;
        }
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const previousSportSlide = () => setSportSlide((current) => (current - 1 + sport4AllSlides.length) % sport4AllSlides.length);
  const nextSportSlide = () => setSportSlide((current) => (current + 1) % sport4AllSlides.length);

  return (
    <main className="site-shell" data-testid="portfolio-page">
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header" data-testid="site-header">
        <a className="brand-mark" href="#beranda" onClick={closeMenu} data-testid="brand-home-link" aria-label="NV, kembali ke Beranda">
          <span data-testid="brand-monogram">NV</span>
          <span className="brand-dot" aria-hidden="true" />
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigasi utama" data-testid="desktop-navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => { setActiveSection(item.id); closeMenu(); }}
              data-testid={`nav-${item.id}-link`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          data-testid="mobile-menu-toggle-button"
        >
          {menuOpen ? <X size={21} strokeWidth={2.2} /> : <Menu size={21} strokeWidth={2.2} />}
          <span className="sr-only">{menuOpen ? "Tutup menu" : "Buka menu"}</span>
        </button>

        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigasi mobile" data-testid="mobile-navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => { setActiveSection(item.id); closeMenu(); }}
                data-testid={`mobile-nav-${item.id}-link`}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="beranda" className="hero section-frame" data-testid="hero-section">
        <div className="hero-copy reveal" data-testid="hero-copy">
          <div className="eyebrow" data-testid="hero-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <span data-testid="hero-greeting">Halo, saya</span>
          </div>
          <h1 data-testid="hero-name">
            Mochamad <span>Novanda</span>
            <br /> Vianizar<span className="heading-mark">.</span>
          </h1>
          <p className="hero-headline" data-testid="hero-headline">
            Siswa Rekayasa Perangkat Lunak <span>&amp;</span> UI/UX Enthusiast
          </p>
          <p className="hero-intro" data-testid="hero-introduction">
            Saya senang mengubah ide menjadi pengalaman digital yang terasa jelas, berguna, dan punya karakter. Saat ini saya sedang mencari kesempatan PKL untuk terus bertumbuh bersama tim yang positif.
          </p>
          <div className="hero-actions" data-testid="hero-actions">
            <a className="button button-primary" href="#project" data-testid="hero-projects-button">
              Lihat Project Saya <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <span className="hero-note" data-testid="hero-school-note">SMK Telkom Malang<br />Malang, Indonesia</span>
          </div>
        </div>

        <div className="hero-art reveal reveal-delayed" data-testid="hero-visual-area">
          <div className="hero-art-label" data-testid="hero-art-label">Visual diary / 2024—25</div>
          <div className="profile-frame" data-testid="profile-image-placeholder" aria-label="Area foto profil yang siap diganti">
            <div className="profile-orbit orbit-one" aria-hidden="true" />
            <div className="profile-orbit orbit-two" aria-hidden="true" />
            <img
              className="profile-photo"
              src={profilePhoto}
              alt="Foto profil Mochamad Novanda Vianizar mengenakan hoodie abu-abu"
              data-testid="profile-photo"
            />
            <span className="profile-star star-one" aria-hidden="true">✳</span>
            <span className="profile-star star-two" aria-hidden="true">✳</span>
          </div>
          <div className="profile-status-stack" data-testid="profile-status-stack">
            <div className="status-badge" data-testid="available-for-pkl-badge">
              <span className="status-pulse" aria-hidden="true" />
              AVAILABLE FOR PKL
            </div>
            <p className="open-ideas" data-testid="open-to-new-ideas">
              OPEN TO<br /><strong>NEW IDEAS</strong> <ArrowUpRight size={25} strokeWidth={2.2} aria-hidden="true" />
            </p>
          </div>
        </div>
      </section>

      <div className="marquee-strip" aria-label="Portfolio topics" data-testid="hero-marquee">
        <div className="marquee-track" data-testid="hero-marquee-content">
          <span>DESIGN WITH INTENTION</span><i aria-hidden="true">✳</i><span>LEARN IN PUBLIC</span><i aria-hidden="true">✳</i><span>MAKE IT USEFUL</span><i aria-hidden="true">✳</i><span>DESIGN WITH INTENTION</span>
        </div>
      </div>

      <section id="tentang" className="about section-frame section-padding" data-testid="about-section">
        <div className="section-kicker" data-testid="about-kicker"><span>01</span><span>Tentang saya</span></div>
        <div className="about-grid">
          <h2 className="section-title reveal" data-testid="about-heading">Desain yang<br /><em>berawal dari rasa ingin tahu.</em></h2>
          <div className="about-body reveal reveal-delayed" data-testid="about-content">
            <p className="lead-text" data-testid="about-lead">Saya adalah siswa Rekayasa Perangkat Lunak yang tertarik pada bagaimana teknologi dan manusia bisa bertemu dengan cara yang sederhana.</p>
            <p data-testid="about-description">Bagi saya, UI/UX bukan hanya tentang tampilan yang rapi. Ini tentang mendengarkan, menyusun masalah, lalu membuat alur yang terasa natural untuk digunakan. Saya menikmati proses riset kecil, membuat wireframe, dan menguji ide lewat Figma.</p>
            <a className="text-link" href="#kontak" data-testid="about-contact-link">Mari berkenalan <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="about-footnote" data-testid="about-footnote"><Sparkles size={16} aria-hidden="true" /><span>Curious by nature. Thoughtful by design.</span><span>↘</span></div>
      </section>

      <section className="toolkit section-frame section-padding" data-testid="skills-section">
        <div className="section-kicker" data-testid="skills-kicker"><span>02</span><span>My creative kit</span></div>
        <div className="toolkit-header">
          <h2 className="section-title reveal" data-testid="skills-heading">Alat untuk<br /><em>membuat ide nyata.</em></h2>
          <p className="toolkit-intro reveal reveal-delayed" data-testid="skills-introduction">Beberapa tools yang menemani saya dari ide pertama sampai prototype yang bisa dirasakan.</p>
        </div>
        <div className="skill-shelf" data-testid="skill-shelf">
          <div className="skill-group" data-testid="confident-tools-group">
            <p className="skill-label" data-testid="confident-tools-label">Confident with</p>
            <div className="skill-tags">
              <span className="skill-tag skill-tag-featured" data-testid="skill-figma">Figma <small>01</small></span>
              <span className="skill-tag" data-testid="skill-canva">Canva <small>02</small></span>
              <span className="skill-tag" data-testid="skill-capcut">CapCut <small>03</small></span>
            </div>
          </div>
          <div className="skill-group learning-group" data-testid="learning-tools-group">
            <p className="skill-label" data-testid="learning-tools-label">Currently learning</p>
            <div className="skill-tags">
              <span className="skill-tag skill-tag-outline" data-testid="skill-illustrator">Adobe Illustrator <small>04</small></span>
              <span className="skill-tag skill-tag-outline" data-testid="skill-lightroom">Lightroom <small>05</small></span>
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="projects section-frame section-padding" data-testid="projects-section">
        <div className="section-kicker" data-testid="projects-kicker"><span>03</span><span>Selected projects</span></div>
        <div className="projects-intro">
          <h2 className="section-title reveal" data-testid="projects-heading">Beberapa hal<br /><em>yang pernah saya buat.</em></h2>
          <p className="projects-intro-copy reveal reveal-delayed" data-testid="projects-introduction">Eksplorasi kecil tentang produk, alur, dan pengalaman pengguna—dibuat dengan perhatian pada detail.</p>
        </div>
        <div className="project-list" data-testid="project-list">
          {projects.map((project) => (
            <article className={`project-row project-${project.tone}`} key={project.number} data-testid={`project-${project.number}-card`}>
              <div className="project-information">
                <div className="project-number" data-testid={`project-${project.number}-number`}>{project.number}</div>
                <div className="project-text">
                  <p className="project-label" data-testid={`project-${project.number}-label`}>{project.label}</p>
                  <h3 data-testid={`project-${project.number}-title`}>{project.title}</h3>
                  <p className="project-role" data-testid={`project-${project.number}-role`}>{project.role}</p>
                  <p className="project-description" data-testid={`project-${project.number}-description`}>{project.description}</p>
                  <div className="project-tools" data-testid={`project-${project.number}-tools`}>
                    <span>Tools</span>{project.tools.map((tool) => <b key={tool}>{tool}</b>)}
                  </div>
                </div>
              </div>
              {project.number === "01" ? (
                <div className="project-visual sport-carousel" data-testid="project-01-sport4all-carousel" aria-label="Carousel screenshot Sport4All">
                  <div className="sport-slide-backdrop" style={{ backgroundImage: `url(${sport4AllSlides[sportSlide].src})` }} aria-hidden="true" />
                  <img
                    key={sport4AllSlides[sportSlide].src}
                    className="sport-slide-image"
                    src={sport4AllSlides[sportSlide].src}
                    alt={sport4AllSlides[sportSlide].alt}
                    loading="lazy"
                    data-testid={`sport4all-slide-${sportSlide + 1}-image`}
                  />
                  <button className="carousel-button carousel-previous" type="button" onClick={previousSportSlide} aria-label="Screenshot Sport4All sebelumnya" data-testid="sport4all-previous-button">
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button className="carousel-button carousel-next" type="button" onClick={nextSportSlide} aria-label="Screenshot Sport4All berikutnya" data-testid="sport4all-next-button">
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                  <div className="carousel-footer" data-testid="sport4all-carousel-footer">
                    <span className="carousel-counter" data-testid="sport4all-slide-counter">0{sportSlide + 1} / 0{sport4AllSlides.length}</span>
                    <div className="carousel-dots" aria-label="Pilih screenshot Sport4All" data-testid="sport4all-carousel-dots">
                      {sport4AllSlides.map((slide, index) => (
                        <button
                          key={slide.src}
                          type="button"
                          className={sportSlide === index ? "active" : ""}
                          onClick={() => setSportSlide(index)}
                          aria-label={`Tampilkan screenshot Sport4All ${index + 1}`}
                          aria-current={sportSlide === index ? "true" : undefined}
                          data-testid={`sport4all-dot-${index + 1}-button`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="project-visual" data-testid={`project-${project.number}-visual-placeholder`} aria-label={`Placeholder visual ${project.title}`}>
                  <div className="placeholder-window" aria-hidden="true">
                    <div className="window-top"><span /><span /><span /></div>
                    <div className="window-layout"><div className="window-sidebar" /><div className="window-content"><div /><div /><div /></div></div>
                  </div>
                  <span className="placeholder-caption" data-testid={`project-${project.number}-placeholder-caption`}>replaceable visual / {project.number}</span>
                  <span className="visual-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="kontak" className="contact section-frame" data-testid="contact-section">
        <div className="contact-topline" data-testid="contact-topline"><span>04</span><span>Kontak</span><span className="contact-topline-rule" /></div>
        <div className="contact-content">
          <p className="contact-kicker" data-testid="contact-kicker">Punya ide atau kesempatan?</p>
          <h2 data-testid="contact-heading">Mari buat sesuatu<br /><em>yang berarti.</em></h2>
          <a className="contact-email" href="mailto:novandavianizar@gmail.com" data-testid="contact-email-link">novandavianizar@gmail.com <ArrowUpRight size={25} aria-hidden="true" /></a>
        </div>
        <div className="contact-footer">
          <div className="contact-location" data-testid="contact-location">Malang, Indonesia<br /><span>Available for PKL · 2024—25</span></div>
          <div className="social-links" data-testid="social-links">
            <a href="https://www.linkedin.com/in/mochamad-novanda-vianizar-9776a5431/" target="_blank" rel="noreferrer" data-testid="linkedin-link">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://github.com/Nopann181" target="_blank" rel="noreferrer" data-testid="github-link">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <span className="copyright" data-testid="copyright-text">© NV / 2025</span>
        </div>
      </section>
    </main>
  );
}

export default App;