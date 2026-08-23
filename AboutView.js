/**
 * Signal Atlas — About View Component (PROJECT / ATLAS Editorial Design System)
 */

export class AboutView {
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
              A university publishes a lab opening, an incubator announces a cohort, a company posts a facility expansion, a meetup appears — four unrelated organisations, four unrelated websites, the same city and domain within weeks.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 hover:border-[#E3262E]/60 transition-colors duration-300 relative group">
            <div class="text-xs font-mono text-[#E3262E] tracking-widest mb-3">02 / PURE DOMAIN ARCHITECTURE</div>
            <div class="font-mono text-[10px] text-emerald-400 mb-1">app/domain/ ZERO I/O</div>
            <h3 class="font-serif text-xl font-bold text-white mb-2 uppercase">DECOMPOSABLE SCORING</h3>
            <p class="text-xs text-[#8A8A8A] leading-relaxed font-mono">
              Scores decay exponentially ($S = \sum w \cdot e^{-0.1 \cdot \text{days}}$). Source-concentration caps prevent single-source dominating. Every zone score decomposes into verified component contributions.
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
    this.container.innerHTML = '';
  }
}
