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
      <div class="space-y-12 max-w-7xl mx-auto px-4 font-mono">
        
        <!-- Section Subtitle & Main Title -->
        <div class="text-center space-y-3">
          <div class="inline-flex items-center space-x-2 px-3 py-1 bg-[#0A0A0C] border border-[#E3262E]/40 text-[#E3262E] text-xs font-mono uppercase tracking-widest">
            <span class="w-2 h-2 rounded-full bg-[#E3262E] animate-pulse"></span>
            <span>SCENE 04 / BACKEND ARCHITECTURE &amp; TEAM</span>
          </div>

          <h2 class="font-serif text-3xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
            THE JOURNEY OF <span class="text-[#E3262E]">SIGNAL ATLAS.</span>
          </h2>
          <p class="text-xs lg:text-sm text-[#8A8A8A] max-w-2xl mx-auto font-mono uppercase tracking-wider">
            "Emerging technology hubs announce themselves before anyone names them. Signal Atlas is the backend that finds it."
          </p>
        </div>

        <!-- 3-Step Journey Timeline Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Step 1 -->
          <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 hover:border-[#E3262E]/60 transition-colors duration-300 relative group">
            <div class="text-xs font-mono text-[#E3262E] tracking-widest mb-3">01 / THE CORE THESIS</div>
            <h3 class="font-serif text-xl font-bold text-white mb-2 uppercase">MULTI-SOURCE CONVERGENCE</h3>
            <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
              A university publishes a lab opening, an incubator announces a cohort, a company posts a facility expansion, a meetup appears \u2014 four unrelated organisations, four unrelated websites, the same city and domain within weeks.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 hover:border-[#E3262E]/60 transition-colors duration-300 relative group">
            <div class="text-xs font-mono text-[#E3262E] tracking-widest mb-3">02 / PURE DOMAIN ARCHITECTURE</div>
            <div class="font-mono text-[10px] text-emerald-400 mb-1">app/domain/ ZERO I/O</div>
            <h3 class="font-serif text-xl font-bold text-white mb-2 uppercase">DECOMPOSABLE SCORING</h3>
            <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
              Scores decay exponentially ($S = sum w cdot e^{-0.1 cdot 	ext{days}}$). Source-concentration caps prevent single-source dominating. Every zone score decomposes into verified component contributions.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 hover:border-[#E3262E]/60 transition-colors duration-300 relative group">
            <div class="text-xs font-mono text-[#E3262E] tracking-widest mb-3">03 / DOM DRIFT RECOVERY</div>
            <div class="font-mono text-[10px] text-amber-400 mb-1">BRIGHT DATA + LLM HEALING</div>
            <h3 class="font-serif text-xl font-bold text-white mb-2 uppercase">SELF-HEALING PIPELINES</h3>
            <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
              When a source site changes markup, fill-rate drops flag collector DEGRADED. Gemini LLM agent synthesizes a clean CSS selector patch for human operator approval.
            </p>
          </div>

        </div>

        <!-- Team Section -->
        <div class="pt-8 border-t border-[#1F2937] space-y-8">
          <div class="text-center">
            <div class="font-mono text-xs text-[#E3262E] tracking-widest uppercase">THE ARCHITECTS</div>
            <h3 class="font-serif text-2xl lg:text-3xl font-bold text-white uppercase mt-1">ENGINEERING TEAM</h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Team Member 1 -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] overflow-hidden hover:border-[#E3262E] transition-colors duration-300">
              <div class="aspect-square bg-[#050505] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=400" alt="Ganesh Nair" class="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
              </div>
              <div class="p-5 border-t border-[#1F2937]">
                <h4 class="font-serif text-lg font-bold text-white uppercase">GANESH NAIR</h4>
                <div class="text-[11px] text-[#E3262E] font-mono uppercase mb-2">FRONTEND &amp; SPATIAL UI ARCHITECT</div>
                <p class="text-xs text-[#8A8A8A] font-mono leading-relaxed">
                  Engineered the spatial convergence UI, Leaflet vector maps, and real-time telemetry orchestrator.
                </p>
              </div>
            </div>

            <!-- Team Member 2 -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] overflow-hidden hover:border-[#E3262E] transition-colors duration-300">
              <div class="aspect-square bg-[#050505] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" alt="Arjit Ujjawal" class="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
              </div>
              <div class="p-5 border-t border-[#1F2937]">
                <h4 class="font-serif text-lg font-bold text-white uppercase">ARJIT UJJAWAL</h4>
                <div class="text-[11px] text-[#E3262E] font-mono uppercase mb-2">BACKEND &amp; DOMAIN ARCHITECT</div>
                <p class="text-xs text-[#8A8A8A] font-mono leading-relaxed">
                  Architected pure domain models, time-decay scoring math, and LLM self-healing pipeline integrations.
                </p>
              </div>
            </div>

            <!-- Team Member 3 (Optional) -->
            <div class="bg-[#0A0A0C] border border-[#1F2937] overflow-hidden hover:border-[#E3262E] transition-colors duration-300 sm:col-span-2 lg:col-span-1">
              <div class="aspect-square bg-[#050505] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" alt="Teammate" class="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
              </div>
              <div class="p-5 border-t border-[#1F2937]">
                <h4 class="font-serif text-lg font-bold text-white uppercase">TEAM MEMBER</h4>
                <div class="text-[11px] text-[#E3262E] font-mono uppercase mb-2">COLLECTOR &amp; REGISTRY LEAD</div>
                <p class="text-xs text-[#8A8A8A] font-mono leading-relaxed">
                  Managed Bright Data Scraper Studio collector configurations and spatial dataset normalizations.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    `;
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
