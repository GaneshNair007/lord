(() => {
  // AboutView.js
  var AboutView = class {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.render();
    }
    render() {
      if (!this.container) return;
      this.container.innerHTML = `
      <div class="space-y-20 max-w-6xl mx-auto px-4 font-mono pb-16">
        
        <!-- ==========================================
             HERO / MISSION STATEMENT
             ========================================== -->
        <div class="text-center space-y-6 pt-6 reveal-on-scroll">
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#0A0A0C] border border-[#E3262E]/50 text-[#E3262E] text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(227,38,46,0.15)]">
            <span class="w-2 h-2 rounded-full bg-[#E3262E] animate-pulse"></span>
            <span>SCENE 02 / ABOUT SIGNAL ATLAS</span>
          </div>

          <!-- Featured Quote Banner -->
          <blockquote class="font-serif text-2xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight max-w-4xl mx-auto leading-tight">
            "WE DON'T SCRAPE OPPORTUNITIES \u2014 WE SCRAPE THE SIGNALS THAT REVEAL WHERE OPPORTUNITIES ARE <span class="text-[#E3262E]">ABOUT TO EMERGE."</span>
          </blockquote>

          <p class="text-xs md:text-sm text-[#8A8A8A] max-w-3xl mx-auto font-mono leading-relaxed uppercase tracking-wider">
            Signal Atlas shifts web data extraction from passive list-gathering to predictive spatial intelligence. Born out of the <strong class="text-white">"Into the Scrape-Verse"</strong> hackathon, we built this platform to see past the noise and detect geographic terrain before it becomes entirely visible.
          </p>
        </div>

        <!-- ==========================================
             PROBLEM VS SOLUTION (PARADIGM SHIFT)
             ========================================== -->
        <div class="space-y-6 reveal-on-scroll">
          <div class="text-center">
            <div class="text-xs text-[#E3262E] font-mono uppercase tracking-widest">THE PARADIGM SHIFT</div>
            <h2 class="font-serif text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-tight mt-1">REACTIVE LISTINGS VS. PREDICTIVE CONVERGENCE</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Reactive Data Problem Card -->
            <div class="bg-[#0A0A0C] border border-red-950 p-8 space-y-4 relative group hover:border-red-900/80 transition-all duration-500 shadow-xl">
              <div class="flex items-center justify-between border-b border-red-950/60 pb-3">
                <span class="text-xs text-red-500 font-mono font-bold uppercase tracking-widest">01 / THE PROBLEM</span>
                <span class="px-2 py-0.5 text-[10px] bg-red-950/40 text-red-400 border border-red-900/60 font-mono">REACTIVE DATA</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-white uppercase tracking-tight">THE REACTIVE DATA PROBLEM</h3>
              <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
                Conventional web scrapers and analytics engines are inherently reactive. They collect data on opportunities that are already formal, listed, and saturated\u2014such as job postings, public tenders, or active event registrations.
              </p>
              <p class="text-xs text-red-400/90 leading-relaxed font-mono pt-2 border-t border-red-950/40">
                \u26A0\uFE0F By the time a listing appears on major aggregators, the market shift has already occurred, and competition is fierce.
              </p>
            </div>

            <!-- Convergence Solution Card -->
            <div class="bg-[#0A0A0C] border border-[#E3262E]/60 p-8 space-y-4 relative group hover:border-[#E3262E] transition-all duration-500 shadow-[0_0_30px_rgba(227,38,46,0.1)]">
              <div class="flex items-center justify-between border-b border-[#1F2937] pb-3">
                <span class="text-xs text-[#E3262E] font-mono font-bold uppercase tracking-widest">02 / OUR APPROACH</span>
                <span class="px-2 py-0.5 text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 font-mono">PREDICTIVE CONVERGENCE</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-white uppercase tracking-tight">OUR CONVERGENCE SOLUTION</h3>
              <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
                Instead of scraping formal job boards, Signal Atlas continuously ingests early public signals. We track university research lab announcements, corporate press releases, incubator portfolio expansions, and local meetup launches across multiple independent web sources.
              </p>
              <p class="text-xs text-emerald-400 leading-relaxed font-mono pt-2 border-t border-[#1F2937]">
                \u26A1 By detecting <strong class="text-white">Signal Convergence</strong>\u2014clusters of distinct early signals occurring within a shared geography and technical domain\u2014our engine highlights emerging opportunity ecosystems weeks or months before they become obvious.
              </p>
            </div>

          </div>
        </div>

        <!-- ==========================================
             PLATFORM CAPABILITIES (4 CARDS GRID)
             ========================================== -->
        <div class="space-y-8 reveal-on-scroll">
          <div class="text-center">
            <div class="text-xs text-[#E3262E] font-mono uppercase tracking-widest">PLATFORM ARCHITECTURE</div>
            <h2 class="font-serif text-2xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1">CORE PLATFORM CAPABILITIES</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Capability 1 -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 space-y-3 hover:border-[#E3262E] transition-all duration-300 group">
              <div class="flex items-center justify-between">
                <div class="text-xs text-[#E3262E] font-mono font-bold">CAPABILITY // 01</div>
                <span class="text-[10px] text-[#8A8A8A] border border-[#1F2937] px-2 py-0.5">LEAFLET / MAPBOX UI</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-white uppercase">PREDICTIVE SPATIAL INTELLIGENCE</h3>
              <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
                A centralized, dark-themed Mapbox/Leaflet UI displaying geographic convergence hubs, signal density vectors, and underlying data feeds in real time.
              </p>
            </div>

            <!-- Capability 2 -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 space-y-3 hover:border-[#E3262E] transition-all duration-300 group">
              <div class="flex items-center justify-between">
                <div class="text-xs text-[#E3262E] font-mono font-bold">CAPABILITY // 02</div>
                <span class="text-[10px] text-[#8A8A8A] border border-[#1F2937] px-2 py-0.5">TIME-DECAY MATH</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-white uppercase">CONVERGENCE SCORING ENGINE</h3>
              <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
                Grouping signals by city and domain, our platform applies a mathematical time-decay algorithm ($S = sum w cdot e^{-0.1 cdot 	ext{days}}$) to compute an actionable, decomposable Emergence Score.
              </p>
            </div>

            <!-- Capability 3 -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 space-y-3 hover:border-[#E3262E] transition-all duration-300 group">
              <div class="flex items-center justify-between">
                <div class="text-xs text-[#E3262E] font-mono font-bold">CAPABILITY // 03</div>
                <span class="text-[10px] text-[#8A8A8A] border border-[#1F2937] px-2 py-0.5">GEMINI AI RECOVERY</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-white uppercase">AUTOMATED SELF-HEALING</h3>
              <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
                Reliability is built into our core. Our pipeline features an automated failure loop that detects target site DOM mutations, holds the degraded state, and instantly executes a JSON recovery using AI.
              </p>
            </div>

            <!-- Capability 4 -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 space-y-3 hover:border-[#E3262E] transition-all duration-300 group">
              <div class="flex items-center justify-between">
                <div class="text-xs text-[#E3262E] font-mono font-bold">CAPABILITY // 04</div>
                <span class="text-[10px] text-[#8A8A8A] border border-[#1F2937] px-2 py-0.5">SCRAPER STUDIO</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-white uppercase">CUSTOM AI COLLECTORS</h3>
              <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
                Powered by Bright Data Scraper Studio, our infrastructure runs on custom collectors generated via natural-language CLI prompts, ensuring 100% compliance using only publicly available web data.
              </p>
            </div>

          </div>
        </div>

        <!-- ==========================================
             TEAM ARCHITECTS SECTION
             ========================================== -->
        <div class="pt-10 border-t border-[#1F2937] space-y-10 reveal-on-scroll">
          <div class="text-center">
            <div class="font-mono text-xs text-[#E3262E] tracking-widest uppercase">THE ARCHITECTS</div>
            <h2 class="font-serif text-2xl lg:text-4xl font-extrabold text-white uppercase tracking-tight mt-1">ENGINEERING TEAM</h2>
            <p class="text-xs text-[#8A8A8A] font-mono uppercase tracking-wider mt-1">Built for Into the Scrape-Verse (WeMakeDevs \xD7 Bright Data)</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Team Member 1: Ganesh Nair -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] overflow-hidden hover:border-[#E3262E] transition-all duration-500 group shadow-xl">
              <div class="aspect-square bg-[#050505] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=400" alt="Ganesh Nair" class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
              </div>
              <div class="p-5 border-t border-[#1F2937] space-y-2">
                <h4 class="font-serif text-lg font-bold text-white uppercase">GANESH NAIR</h4>
                <div class="text-[11px] text-[#E3262E] font-mono uppercase">FRONTEND &amp; SPATIAL UI ARCHITECT</div>
                <p class="text-xs text-[#8A8A8A] font-mono leading-relaxed">
                  Engineered the spatial convergence UI, Leaflet vector map visualizations, and real-time telemetry orchestrator.
                </p>
              </div>
            </div>

            <!-- Team Member 2: Arjit Ujjawal -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] overflow-hidden hover:border-[#E3262E] transition-all duration-500 group shadow-xl">
              <div class="aspect-square bg-[#050505] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" alt="Arjit Ujjawal" class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
              </div>
              <div class="p-5 border-t border-[#1F2937] space-y-2">
                <h4 class="font-serif text-lg font-bold text-white uppercase">ARJIT UJJAWAL</h4>
                <div class="text-[11px] text-[#E3262E] font-mono uppercase">BACKEND &amp; DOMAIN ARCHITECT</div>
                <p class="text-xs text-[#8A8A8A] font-mono leading-relaxed">
                  Architected pure domain models, time-decay scoring algorithms, and LLM self-healing pipeline integrations.
                </p>
              </div>
            </div>

            <!-- Team Member 3: Registry Lead -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] overflow-hidden hover:border-[#E3262E] transition-all duration-500 group shadow-xl sm:col-span-2 lg:col-span-1">
              <div class="aspect-square bg-[#050505] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" alt="Teammate" class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
              </div>
              <div class="p-5 border-t border-[#1F2937] space-y-2">
                <h4 class="font-serif text-lg font-bold text-white uppercase">TEAM MEMBER</h4>
                <div class="text-[11px] text-[#E3262E] font-mono uppercase">COLLECTOR &amp; REGISTRY LEAD</div>
                <p class="text-xs text-[#8A8A8A] font-mono leading-relaxed">
                  Managed Bright Data Scraper Studio collector configurations, prompt engineering, and dataset normalizations.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    `;
      this.initScrollAnimations();
    }
    initScrollAnimations() {
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        }, { threshold: 0.1 });
        const targets = this.container.querySelectorAll(".reveal-on-scroll");
        targets.forEach((el) => observer.observe(el));
      }, 50);
    }
    destroy() {
      this.container.innerHTML = "";
    }
  };

  // app.js
  var App = class {
    constructor() {
      this.aboutView = null;
      this.init();
    }
    init() {
      try {
        window.addEventListener("error", (e) => {
          console.error("Signal Atlas Runtime Exception:", e);
        });
        const aboutMount = document.getElementById("about-section-mount");
        if (aboutMount) {
          this.aboutView = new AboutView("about-section-mount");
        }
        this.initHeroCanvas();
        this.initCustomCursor();
        this.initNavigation();
        this.initScrollSpy();
      } catch (err) {
        console.error("App Initialization Error:", err);
      }
    }
    initHeroCanvas() {
      const canvas = document.getElementById("hero-web-canvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      let width, height;
      let particles = [];
      const resize = () => {
        width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
        createParticles();
      };
      const createParticles = () => {
        particles = [];
        const numParticles = Math.floor(width * height / 12e3);
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 2 + 1
          });
        }
      };
      window.addEventListener("resize", resize);
      resize();
      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(227, 38, 46, 0.6)";
          ctx.fill();
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(227, 38, 46, ${0.35 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
    initCustomCursor() {
      const cursor = document.getElementById("custom-cursor");
      if (!cursor) return;
      window.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    }
    initNavigation() {
      const targets = document.querySelectorAll("[data-target]");
      targets.forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = el.getAttribute("data-target");
          this.scrollToSection(targetId);
        });
      });
    }
    scrollToSection(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    initScrollSpy() {
      const sections = ["scene-01", "scene-02"];
      const navItems = document.querySelectorAll(".nav-link-item");
      const dots = document.querySelectorAll(".indicator-dot");
      const updateActiveState = (activeId) => {
        navItems.forEach((item) => {
          if (item.getAttribute("data-target") === activeId) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
        dots.forEach((dot) => {
          if (dot.getAttribute("data-target") === activeId) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateActiveState(entry.target.id);
          }
        });
      }, { threshold: 0.3 });
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    window.app = new App();
  });
})();
