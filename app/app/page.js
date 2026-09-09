'use client'

import { useEffect, useState } from 'react'

const features = [
  ['✦', 'AI Workflows', 'Turn repetitive tasks into intelligent workflows that run with almost no effort.'],
  ['⌁', 'Smart Analytics', 'Understand what matters with elegant dashboards and clear AI-generated insights.'],
  ['↗', 'Lightning Fast', 'Designed for speed, with a frictionless experience from first click to final result.'],
  ['◎', 'Team Ready', 'Collaborate, share projects, and keep everyone aligned in one beautiful workspace.'],
  ['⌘', 'Flexible Integrations', 'Connect the tools you already use and bring your workflows into one place.'],
  ['◈', 'Enterprise Security', 'A security-first foundation designed for growing teams and serious businesses.']
]

const testimonials = [
  ['“The interface feels premium, fast and ridiculously easy to use.”', 'Maya Chen', 'Product Designer'],
  ['“We replaced three tools with one workflow and saved hours every week.”', 'Daniel Reed', 'Operations Lead'],
  ['“Our team adopted it in a day. That almost never happens with new software.”', 'Sofia Malik', 'Growth Director']
]

function LogoMark() {
  return <span className="logo-mark">A</span>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="noise" />

      <nav className={scrolled ? 'nav nav-scrolled' : 'nav'}>
        <a href="#" className="brand"><LogoMark /><span>Aurora AI</span></a>
        <div className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#showcase" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </div>
        <div className="nav-actions">
          <a className="login" href="#">Sign in</a>
          <a className="btn btn-small" href="#pricing">Get started</a>
        </div>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
      </nav>

      <section className="hero container">
        <div className="eyebrow"><span className="dot" /> AI WORKSPACE FOR MODERN TEAMS</div>
        <h1>Turn ideas into<br/><span>momentum.</span></h1>
        <p className="hero-copy">One beautifully simple AI workspace to create, automate, analyze and move your best work forward.</p>
        <div className="hero-actions">
          <a className="btn" href="#pricing">Start building free <span>→</span></a>
          <a className="btn btn-ghost" href="#showcase"><span className="play">▶</span> Watch demo</a>
        </div>
        <div className="hero-proof"><div className="avatar-stack"><span>MK</span><span>DR</span><span>SM</span><span>+</span></div><p>Trusted by <strong>2,000+ teams</strong> building smarter.</p></div>

        <div id="showcase" className="dashboard-shell">
          <div className="dashboard-topbar"><div className="traffic"><i/><i/><i/></div><div className="dash-title">Aurora / Workspace</div><div className="mini-avatar">GS</div></div>
          <div className="dashboard-body">
            <aside className="sidebar">
              <div className="side-logo"><LogoMark/> <b>Aurora</b></div>
              <div className="side-section">WORKSPACE</div>
              <div className="side-link active">⌂ <span>Overview</span></div>
              <div className="side-link">✦ <span>AI Studio</span></div>
              <div className="side-link">▤ <span>Projects</span></div>
              <div className="side-link">◫ <span>Analytics</span></div>
              <div className="side-section">TOOLS</div>
              <div className="side-link">⌁ <span>Automations</span></div>
              <div className="side-link">⚙ <span>Integrations</span></div>
            </aside>
            <div className="dash-content">
              <div className="dash-head"><div><span className="muted">Tuesday, 9 September</span><h3>Good evening, Alex.</h3></div><button>+ New project</button></div>
              <div className="stats-grid">
                <div className="stat-card"><span>Tasks automated</span><strong>12.8K</strong><small>↑ 18.4% this month</small></div>
                <div className="stat-card"><span>Hours saved</span><strong>384</strong><small>↑ 11.2% this month</small></div>
                <div className="stat-card"><span>Success rate</span><strong>98.7%</strong><small>Best performance yet</small></div>
              </div>
              <div className="chart-card">
                <div className="chart-head"><div><span>Activity</span><b>Automation runs</b></div><div className="pill">Last 30 days⌄</div></div>
                <div className="chart-wrap"><svg viewBox="0 0 700 210" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#8b5cf6" stopOpacity=".35"/><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/></linearGradient></defs><path d="M0,165 C45,160 65,125 110,137 C155,150 170,103 220,112 C270,121 285,70 335,83 C390,98 402,50 450,62 C505,77 525,35 575,46 C620,56 655,20 700,31 L700,210 L0,210 Z" fill="url(#fill)"/><path d="M0,165 C45,160 65,125 110,137 C155,150 170,103 220,112 C270,121 285,70 335,83 C390,98 402,50 450,62 C505,77 525,35 575,46 C620,56 655,20 700,31" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round"/></svg></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip container"><p>BUILT FOR AMBITIOUS TEAMS AT</p><div className="logos"><span>Northstar</span><span>Vertex</span><span>Canvas</span><span>Pulse</span><span>Linearix</span></div></section>

      <section id="features" className="section container">
        <div className="section-heading"><div><div className="eyebrow">POWERFUL BY DESIGN</div><h2>Everything you need.<br/><span>Nothing you don't.</span></h2></div><p>A focused toolkit for teams that want to move quickly without adding more complexity.</p></div>
        <div className="feature-grid">{features.map(([icon,title,copy]) => <article className="feature-card" key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{copy}</p><a href="#">Learn more →</a></article>)}</div>
      </section>

      <section className="spotlight-wrap"><div className="container spotlight"><div className="spotlight-copy"><div className="eyebrow">AI THAT WORKS WITH YOU</div><h2>Your next best move,<br/><span>already in motion.</span></h2><p>Aurora turns scattered tasks and data into clear next steps. Create once, automate forever, and keep your team focused on higher-value work.</p><div className="check-list"><span>✓ Natural-language workflow builder</span><span>✓ Real-time AI recommendations</span><span>✓ Reusable templates for every team</span></div><a className="btn" href="#pricing">Explore Aurora <span>→</span></a></div><div className="ai-card"><div className="ai-glow"/><div className="ai-top"><div className="spark">✦</div><span>Aurora Copilot</span><div className="online">● Online</div></div><div className="prompt"><span>You</span><p>Summarize our weekly performance and suggest the three highest-impact actions.</p></div><div className="response"><span>✦ Aurora</span><p>Your highest-impact opportunities are:</p><div className="recommend"><b>01</b><div><strong>Improve onboarding completion</strong><small>Potential impact: +14% activation</small></div></div><div className="recommend"><b>02</b><div><strong>Re-engage dormant accounts</strong><small>428 qualified users identified</small></div></div><div className="recommend"><b>03</b><div><strong>Automate weekly reporting</strong><small>Save ~7.5 hours per week</small></div></div></div></div></div></section>

      <section className="section container"><div className="center-heading"><div className="eyebrow">LOVED BY MODERN TEAMS</div><h2>Work feels better<br/><span>when tools do too.</span></h2></div><div className="testimonial-grid">{testimonials.map(([quote,name,role],i)=><article className="testimonial" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="person"><div className="person-avatar">{name.split(' ').map(n=>n[0]).join('')}</div><div><strong>{name}</strong><span>{role}</span></div></div></article>)}</div></section>

      <section id="pricing" className="section container"><div className="center-heading"><div className="eyebrow">SIMPLE PRICING</div><h2>Start free. <span>Scale when ready.</span></h2><p>No complicated tiers. Just what you need to get great work done.</p></div><div className="pricing-grid"><div className="price-card"><span className="price-name">Starter</span><h3>£0<small>/month</small></h3><p>Perfect for trying Aurora and launching your first workflows.</p><a className="btn btn-ghost full" href="#">Start free</a><div className="price-list"><span>✓ 3 active projects</span><span>✓ 100 AI actions / month</span><span>✓ Core integrations</span><span>✓ Community support</span></div></div><div className="price-card featured"><div className="popular">MOST POPULAR</div><span className="price-name">Pro</span><h3>£24<small>/month</small></h3><p>For creators and teams that want to automate serious work.</p><a className="btn full" href="#">Start 14-day trial</a><div className="price-list"><span>✓ Unlimited projects</span><span>✓ 5,000 AI actions / month</span><span>✓ Premium integrations</span><span>✓ Advanced analytics</span><span>✓ Priority support</span></div></div><div className="price-card"><span className="price-name">Business</span><h3>Custom</h3><p>For organizations that need scale, control and dedicated support.</p><a className="btn btn-ghost full" href="#">Contact sales</a><div className="price-list"><span>✓ Unlimited AI actions</span><span>✓ SSO & advanced security</span><span>✓ Custom integrations</span><span>✓ Dedicated success manager</span></div></div></div></section>

      <section id="about" className="cta container"><div className="cta-glow"/><div className="eyebrow">YOUR NEXT PROJECT STARTS HERE</div><h2>Do more of the work<br/>that actually <span>matters.</span></h2><p>Join thousands of teams already moving faster with Aurora AI.</p><a className="btn btn-light" href="#">Start building for free <span>→</span></a></section>

      <footer><div className="container footer-grid"><div><a className="brand" href="#"><LogoMark/><span>Aurora AI</span></a><p>Intelligent software for ambitious teams.</p></div><div><b>Product</b><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#">Integrations</a></div><div><b>Company</b><a href="#">About</a><a href="#">Careers</a><a href="#">Contact</a></div><div><b>Resources</b><a href="#">Blog</a><a href="#">Help Center</a><a href="#">Changelog</a></div></div><div className="container footer-bottom"><span>© 2026 Aurora AI. Demo concept website.</span><div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">X</a><a href="#">LinkedIn</a></div></div></footer>
    </main>
  )
}
