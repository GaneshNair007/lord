/**
 * Signal Atlas — About View Component
 */

export class AboutView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="min-h-[calc(100vh-64px)] pb-16 overflow-hidden">
        
        <!-- Hero Section -->
        <section class="max-w-4xl mx-auto px-4 lg:px-8 pt-12 lg:pt-20 pb-12">
          <div class="space-y-8 text-center animate-[fade-in-up_1s_ease-out_forwards] opacity-0" style="animation: fadeInUp 1s ease-out forwards;">
            <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
              <span>Behind the Atlas</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              The Journey of <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">Signal Atlas</span>
            </h1>
            
            <p class="text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
              We started with a simple question: "How can we detect emerging technological and civic hubs before they are formally announced?"
            </p>
          </div>
        </section>

        <!-- Journey Section -->
        <section class="max-w-4xl mx-auto px-4 lg:px-8 py-12 border-t border-[#1F2937]/80 relative">
          <!-- Subtle background glow -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div class="space-y-12 relative z-10">
            
            <!-- Step 1 -->
            <div class="relative pl-8 border-l-2 border-emerald-500/30 hover:border-emerald-500 transition-colors duration-500 opacity-0" style="animation: fadeInUp 1s ease-out 0.3s forwards;">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0A0E14] border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <h3 class="text-xl font-bold text-white mb-2">The Idea</h3>
              <p class="text-[#94A3B8] leading-relaxed">
                Emerging technology hubs announce themselves before anyone names them. A university publishes a lab opening, an incubator announces a cohort, a company posts a facility expansion, a meetup appears — four unrelated organisations, four unrelated websites, the same city and the same technical domain, all within a few weeks. Nobody publishes that. It only exists as a pattern across sources. We wanted to build the backend that finds it.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="relative pl-8 border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-colors duration-500 opacity-0" style="animation: fadeInUp 1s ease-out 0.6s forwards;">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0A0E14] border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              <h3 class="text-xl font-bold text-white mb-2">The Architecture</h3>
              <p class="text-[#94A3B8] leading-relaxed">
                We designed an orchestrator that scrapes four categories of public early signal across cities like Delhi and San Francisco with Bright Data collectors. It normalizes them, merges duplicate reports, and scores each bin by time-decayed weighted evidence. Everything is mathematically decomposable so judges can verify the scoring rule.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="relative pl-8 border-l-2 border-amber-500/30 hover:border-amber-500 transition-colors duration-500 opacity-0" style="animation: fadeInUp 1s ease-out 0.9s forwards;">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0A0E14] border-2 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              <h3 class="text-xl font-bold text-white mb-2">Self-Healing Data Pipelines</h3>
              <p class="text-[#94A3B8] leading-relaxed">
                The hardest part of web scraping is DOM drift. A layout change silently starves a scraper: it keeps returning 200, the rows keep arriving, the fields are empty. We built a self-healing pipeline that flags collectors as DEGRADED and uses an approval-gated repair path through an LLM to auto-patch CSS selectors.
              </p>
            </div>

          </div>
        </section>

        <!-- Team Section -->
        <section class="max-w-5xl mx-auto px-4 lg:px-8 py-16 border-t border-[#1F2937]/80 mt-8">
          <div class="text-center mb-12 opacity-0" style="animation: fadeInUp 1s ease-out 1.2s forwards;">
            <h2 class="text-3xl font-bold text-white tracking-tight">Meet the Architects</h2>
            <p class="text-[#94A3B8] mt-2">The builders behind the intelligence engine.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0" style="animation: fadeInUp 1s ease-out 1.5s forwards;">
            
            <!-- Team Member 1 -->
            <div class="group relative rounded-2xl bg-[#0A0E14] border border-[#1F2937] overflow-hidden hover:border-emerald-500/50 transition duration-500 shadow-xl">
              <div class="aspect-square bg-[#141924] flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=400" alt="Team Member" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/40 to-transparent"></div>
              </div>
              <div class="p-6 relative z-10 -mt-12">
                <h3 class="text-xl font-bold text-white drop-shadow-md">Ganesh Nair</h3>
                <div class="text-xs text-emerald-400 font-mono mb-3">YOUR ROLE / TITLE</div>
                <p class="text-sm text-[#94A3B8]">
                  [Add your bio here: What did you build? What drives you? E.g., "I engineered the spatial convergence algorithm and the dynamic UI orchestration..."]
                </p>
              </div>
            </div>

            <!-- Team Member 2 -->
            <div class="group relative rounded-2xl bg-[#0A0E14] border border-[#1F2937] overflow-hidden hover:border-indigo-500/50 transition duration-500 shadow-xl">
              <div class="aspect-square bg-[#141924] flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" alt="Team Member" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/40 to-transparent"></div>
              </div>
              <div class="p-6 relative z-10 -mt-12">
                <h3 class="text-xl font-bold text-white drop-shadow-md">Arjit Ujjawal</h3>
                <div class="text-xs text-indigo-400 font-mono mb-3">THEIR ROLE / TITLE</div>
                <p class="text-sm text-[#94A3B8]">
                  [Add teammate bio here: E.g., "Architected the Python backend, the pure domain rules, and the LLM self-healing LLM integration..."]
                </p>
              </div>
            </div>

            <!-- Team Member 3 -->
            <div class="group relative rounded-2xl bg-[#0A0E14] border border-[#1F2937] overflow-hidden hover:border-amber-500/50 transition duration-500 shadow-xl sm:col-span-2 lg:col-span-1">
              <div class="aspect-square bg-[#141924] flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" alt="Team Member" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/40 to-transparent"></div>
              </div>
              <div class="p-6 relative z-10 -mt-12">
                <h3 class="text-xl font-bold text-white drop-shadow-md">Third Member (Optional)</h3>
                <div class="text-xs text-amber-400 font-mono mb-3">THEIR ROLE / TITLE</div>
                <p class="text-sm text-[#94A3B8]">
                  [Add teammate bio here: E.g., "Led the Bright Data collector deployments and spatial data normalizations..."]
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    `;

    // Add CSS animations globally if not present
    if (!document.getElementById('about-animations')) {
      const style = document.createElement('style');
      style.id = 'about-animations';
      style.innerHTML = `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  destroy() {
    this.container.innerHTML = '';
  }
}
