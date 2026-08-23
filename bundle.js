(() => {
  // selfHealingEngine.js
  var SelfHealingEngine = class {
    constructor() {
      this.status = "HEALTHY";
      this.activeCollectorsCount = 4;
      this.uptime = 99.8;
      this.healedIncidentsCount = 12;
      this.meanTimeToRepairSeconds = 1.4;
      this.collectors = [
        { id: "c1", name: "Bright Data Job Harvester (v2.4)", target: "Public Career Portals", status: "HEALTHY", errorRate: "0.02%", lastSync: "2m ago" },
        { id: "c2", name: "USPTO Patent Assignment Stream", target: "Federal IP Registry", status: "HEALTHY", errorRate: "0.00%", lastSync: "5m ago" },
        { id: "c3", name: "Commercial Zoning Harvester", target: "Municipal Permit Portals", status: "HEALTHY", errorRate: "0.01%", lastSync: "1m ago" },
        { id: "c4", name: "Municipal Council Agenda Harvester", target: "City Clerk PDF Records", status: "HEALTHY", errorRate: "0.00%", lastSync: "12m ago" }
      ];
      this.listeners = [];
      this.logHistory = [
        { timestamp: this.getTimestamp(), level: "INFO", source: "SYSTEM", message: "Collector pipeline orchestrator online. 4/4 workers active." },
        { timestamp: this.getTimestamp(), level: "INFO", source: "BRIGHTDATA", message: "Successfully ingested 152 public job listings across target metro areas." },
        { timestamp: this.getTimestamp(), level: "INFO", source: "CONVERGENCE", message: "Emergence Index recalculation complete. 4 cluster candidates updated." }
      ];
      this.brokenPayload = null;
      this.healedPayload = null;
    }
    subscribe(listener) {
      this.listeners.push(listener);
      listener(this.getSnapshot());
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
    notify() {
      const snapshot = this.getSnapshot();
      this.listeners.forEach((l) => l(snapshot));
    }
    getSnapshot() {
      return {
        status: this.status,
        activeCollectorsCount: this.activeCollectorsCount,
        totalCollectorsCount: 4,
        uptime: this.uptime,
        healedIncidentsCount: this.healedIncidentsCount,
        meanTimeToRepairSeconds: this.meanTimeToRepairSeconds,
        collectors: [...this.collectors],
        logHistory: [...this.logHistory],
        brokenPayload: this.brokenPayload,
        healedPayload: this.healedPayload
      };
    }
    getTimestamp() {
      const now = /* @__PURE__ */ new Date();
      return now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0");
    }
    addLog(level, source, message) {
      const entry = {
        timestamp: this.getTimestamp(),
        level,
        source,
        message
      };
      this.logHistory.push(entry);
      if (this.logHistory.length > 80) this.logHistory.shift();
      this.notify();
    }
    /**
     * Step 1: Simulate Selector Drift / Schema Break
     * Per Section 2 fix: Holds degraded 🔴 state sitting for 2-3 seconds before repair.
     */
    simulateDrift() {
      if (this.status !== "HEALTHY") return;
      this.status = "DEGRADED";
      this.collectors[0].status = "DEGRADED";
      this.collectors[0].errorRate = "94.2%";
      this.brokenPayload = {
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        collector_id: "brightdata_job_harvester_v2",
        target_url: "https://public-listing-portal.example/jobs/tech-rnd-austin",
        extracted_fields: {
          company_name: "Undisclosed Stealth R&D",
          job_title: "Lead Quantum Hardware Architect",
          location_raw: null,
          // ❌ BROKEN SELECTOR NULL
          posted_date: "2026-08-22",
          salary_range: "$220,000 - $280,000",
          department_code: void 0
          // ❌ MISSING KEY
        },
        scraper_error: "DOMSelectorNotFoundError: Selector 'div.legacy-job-card-2024 > span.loc-v1' returned 0 DOM elements.",
        http_status: 200,
        validation_status: "FAILED_SCHEMA_CHECK"
      };
      this.healedPayload = null;
      this.addLog("ERROR", "SCRAPER_ENGINE", "CRITICAL: 'brightdata_job_harvester_v2' DOM extraction failed!");
      this.addLog("WARN", "DOM_INSPECTOR", "Target DOM mutation detected on host public-listing-portal.example");
      this.addLog("ERROR", "SCHEMA_VALIDATOR", "Validation failed: 'location_raw' is null. Emergence scoring suspended for Austin R&D cluster.");
      this.notify();
    }
    /**
     * Step 2: Trigger Self-Healing AI Repair Agent
     */
    triggerSelfHealing() {
      if (this.status !== "DEGRADED") return;
      this.status = "REPAIRING";
      this.collectors[0].status = "REPAIRING";
      this.addLog("INFO", "SELF_HEAL_AGENT", "Initiating autonomous DOM repair workflow...");
      this.notify();
      setTimeout(() => {
        this.addLog("DEBUG", "DOM_ANALYZER", "Fetching HTML DOM AST snapshot from latest Bright Data raw stream...");
      }, 400);
      setTimeout(() => {
        this.addLog("INFO", "LLM_INFERENCE", "Prompting Gemini AI agent with broken selector & updated DOM tree...");
      }, 900);
      setTimeout(() => {
        this.addLog("INFO", "SELECTOR_RESOLVER", `AI Agent identified match: modern fallback '[data-testid="job-location-meta"]' (99.4% confidence)`);
        this.healedPayload = {
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          collector_id: "brightdata_job_harvester_v2",
          target_url: "https://public-listing-portal.example/jobs/tech-rnd-austin",
          extracted_fields: {
            company_name: "Undisclosed Stealth R&D",
            job_title: "Lead Quantum Hardware Architect",
            location_raw: "Austin, TX (78701)",
            // ✅ REPAIRED & NORMALIZED
            posted_date: "2026-08-22",
            salary_range: "$220,000 - $280,000",
            department_code: "QUANTUM_RD_01"
            // ✅ INFERRED & POPULATED
          },
          healed_by_agent: "Gemini-3.6-DOM-Repair-V2",
          patch_applied: {
            deprecated_selector: "div.legacy-job-card-2024 > span.loc-v1",
            active_selector: '[data-testid="job-location-meta"]',
            fallback_strategy: "semantic_attribute_match"
          },
          http_status: 200,
          validation_status: "PASSED_AUTO_HEALED"
        };
        this.status = "HEALED_UNAPPROVED";
        this.collectors[0].status = "PATCH_PENDING";
        this.addLog("SUCCESS", "AUTO_PATCH", "Generated synthetic DOM patch #PAT-2026-0881. Awaiting operator verification.");
        this.notify();
      }, 1600);
    }
    /**
     * Step 3: Operator Approves Patch
     */
    approvePatch() {
      if (this.status !== "HEALED_UNAPPROVED") return;
      this.status = "HEALTHY";
      this.collectors[0].status = "HEALTHY";
      this.collectors[0].errorRate = "0.01%";
      this.healedIncidentsCount += 1;
      this.addLog("SUCCESS", "ORCHESTRATOR", "Auto-patch #PAT-2026-0881 approved & deployed to Bright Data live scraper pool.");
      this.addLog("INFO", "CONVERGENCE", "Pipeline re-synced. Emergence score for Austin Quantum Campus restored to 8.42.");
      this.notify();
    }
    reset() {
      this.status = "HEALTHY";
      this.collectors[0].status = "HEALTHY";
      this.collectors[0].errorRate = "0.02%";
      this.brokenPayload = null;
      this.healedPayload = null;
      this.addLog("INFO", "SYSTEM", "Reset self-healing demonstration environment.");
      this.notify();
    }
  };
  var selfHealingEngine = new SelfHealingEngine();

  // TopBar.js
  var TopBar = class {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      this.activeView = options.activeView || "landing";
      this.activeMode = options.activeMode || "opportunities";
      this.onViewChange = options.onViewChange || (() => {
      });
      this.onModeChange = options.onModeChange || (() => {
      });
      this.pipelineState = selfHealingEngine.getSnapshot();
      selfHealingEngine.subscribe((state) => {
        this.pipelineState = state;
        this.render();
      });
      this.render();
    }
    update(activeView, activeMode) {
      this.activeView = activeView;
      this.activeMode = activeMode;
      this.render();
    }
    render() {
      if (!this.container) return;
      const isDegraded = this.pipelineState.status === "DEGRADED" || this.pipelineState.status === "REPAIRING";
      const isHealedUnapproved = this.pipelineState.status === "HEALED_UNAPPROVED";
      let statusDotColor = "bg-emerald-500";
      let statusText = "Live \u2022 4 collectors \u2022 updated 2m ago";
      if (isDegraded) {
        statusDotColor = "bg-red-500 animate-pulse";
        statusText = "\u26A0\uFE0F Scraper Drift Detected \u2022 1 Action Required";
      } else if (isHealedUnapproved) {
        statusDotColor = "bg-indigo-400 animate-pulse";
        statusText = "\u2728 Auto-Patch Ready \u2022 Approval Needed";
      }
      this.container.innerHTML = `
      <header class="sticky top-0 z-40 bg-[#0A0E14]/90 backdrop-blur-md border-b border-[#1F2937] px-4 lg:px-8 py-3">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          <!-- Logo & Brand -->
          <div class="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
            <a href="#" id="brand-link" class="flex items-center space-x-2.5 text-white font-bold text-xl tracking-tight hover:opacity-90 transition">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 via-indigo-500 to-amber-500 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <div class="w-full h-full bg-[#0A0E14] rounded-[7px] flex items-center justify-center">
                  <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">SIGNAL ATLAS</span>
            </a>

            <!-- Persistent Live Status Indicator -->
            <div class="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141924] border border-[#1F2937] text-xs text-[#94A3B8]">
              <span class="w-2 h-2 rounded-full ${statusDotColor}"></span>
              <span class="font-medium">${statusText}</span>
            </div>
          </div>

          <!-- Center Navigation Tabs -->
          <nav class="flex items-center space-x-1 bg-[#141924]/80 p-1 rounded-xl border border-[#1F2937]" aria-label="Main Navigation">
            <button id="nav-landing" class="px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition ${this.activeView === "landing" ? "bg-[#1F2937] text-white shadow-sm" : "text-[#94A3B8] hover:text-white"}">
              Overview
            </button>
            <button id="nav-map" class="px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition flex items-center space-x-1.5 ${this.activeView === "map" ? "bg-[#1F2937] text-white shadow-sm" : "text-[#94A3B8] hover:text-white"}">
              <span>Convergence Map</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">Live</span>
            </button>
            <button id="nav-pipeline" class="px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition flex items-center space-x-1.5 ${this.activeView === "pipeline" ? "bg-[#1F2937] text-white shadow-sm" : "text-[#94A3B8] hover:text-white"}">
              <span>Pipeline Health</span>
              ${isDegraded ? '<span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>' : ""}
            </button>
            <button id="nav-about" class="px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium transition flex items-center space-x-1.5 ${this.activeView === "about" ? "bg-[#1F2937] text-white shadow-sm" : "text-[#94A3B8] hover:text-white"}">
              <span>About Us</span>
            </button>
          </nav>

          <!-- Right Action & Mode Badge -->
          <div class="hidden lg:flex items-center space-x-3 text-xs">
            <div class="px-2.5 py-1 rounded-md bg-[#141924] border border-[#1F2937] text-[#94A3B8]">
              Domain: <span class="font-mono text-[#F3F4F6] capitalize">${this.activeMode} Mode</span>
            </div>
            <button id="quick-demo-btn" class="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-medium transition flex items-center space-x-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Self-Healing Demo</span>
            </button>
          </div>

        </div>
      </header>
    `;
      this.attachEvents();
    }
    attachEvents() {
      const brand = this.container.querySelector("#brand-link");
      const landingBtn = this.container.querySelector("#nav-landing");
      const mapBtn = this.container.querySelector("#nav-map");
      const pipelineBtn = this.container.querySelector("#nav-pipeline");
      const aboutBtn = this.container.querySelector("#nav-about");
      const quickDemoBtn = this.container.querySelector("#quick-demo-btn");
      if (brand) brand.addEventListener("click", (e) => {
        e.preventDefault();
        this.onViewChange("landing");
      });
      if (landingBtn) landingBtn.addEventListener("click", () => this.onViewChange("landing"));
      if (mapBtn) mapBtn.addEventListener("click", () => this.onViewChange("map"));
      if (pipelineBtn) pipelineBtn.addEventListener("click", () => this.onViewChange("pipeline"));
      if (aboutBtn) aboutBtn.addEventListener("click", () => this.onViewChange("about"));
      if (quickDemoBtn) quickDemoBtn.addEventListener("click", () => this.onViewChange("pipeline"));
    }
  };

  // LandingView.js
  var LandingView = class {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      this.onNavigate = options.onNavigate || (() => {
      });
      this.render();
    }
    render() {
      if (!this.container) return;
      this.container.innerHTML = `
      <div class="topographic-bg min-h-[calc(100vh-64px)] pb-16">
        
        <!-- Hero Section -->
        <section class="max-w-7xl mx-auto px-4 lg:px-8 pt-12 lg:pt-20 pb-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Hero Text Content -->
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Spatial Intelligence & Scraper Observability Engine</span>
              </div>
              
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Detect early spatial signals <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">before they emerge</span>
              </h1>
              
              <p class="text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                Signal Atlas ingests unstructured public web records \u2014 job postings, patent filings, municipal agendas, commercial permits \u2014 synthesizing spatio-temporal convergence clusters with self-healing scraper pipelines.
              </p>

              <!-- Action CTAs -->
              <div class="flex flex-wrap gap-4 pt-2">
                <button id="hero-cta-map" class="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0A0E14] font-semibold transition shadow-lg shadow-emerald-500/20 flex items-center space-x-2">
                  <span>Explore Convergence Map</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>

                <button id="hero-cta-pipeline" class="px-6 py-3.5 rounded-xl bg-[#141924] hover:bg-[#1E2536] text-white border border-[#1F2937] font-medium transition flex items-center space-x-2">
                  <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <span>Inspect Self-Healing Pipeline</span>
                </button>
              </div>

              <!-- Quick Metrics Row -->
              <div class="pt-6 border-t border-[#1F2937]/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div class="text-2xl font-bold font-mono text-white">4 Sources</div>
                  <div class="text-xs text-[#94A3B8]">Ingested & Cross-Linked</div>
                </div>
                <div>
                  <div class="text-2xl font-bold font-mono text-emerald-400">&lt; 1.4s</div>
                  <div class="text-xs text-[#94A3B8]">Mean Self-Healing Time</div>
                </div>
                <div>
                  <div class="text-2xl font-bold font-mono text-indigo-400">99.8%</div>
                  <div class="text-xs text-[#94A3B8]">Pipeline Uptime</div>
                </div>
              </div>
            </div>

            <!-- Hero Interactive Teaser Card -->
            <div class="lg:col-span-5">
              <div class="relative rounded-2xl bg-[#141924] border border-[#1F2937] p-6 shadow-2xl overflow-hidden group">
                
                <!-- Teaser Label Header -->
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-[#1F2937]">
                  <div class="flex items-center space-x-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-xs font-mono text-white font-medium uppercase tracking-wider">Cluster Preview</span>
                  </div>
                  <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-[#1F2937] text-[#94A3B8] font-mono">
                    Live preview \xB7 sample data
                  </span>
                </div>

                <!-- Teaser Interactive Pulse Visual -->
                <div class="relative h-48 bg-[#0A0E14] rounded-xl border border-[#1F2937] p-4 flex items-center justify-around overflow-hidden">
                  
                  <!-- Topo subtle lines -->
                  <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  <!-- Opportunity Pulse Marker -->
                  <div class="relative z-10 text-center cursor-pointer transform hover:scale-105 transition" id="teaser-opp-pin">
                    <div class="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center marker-pulse-opp shadow-lg shadow-emerald-500/20">
                      <span class="text-xs font-mono font-bold text-emerald-400">8.42</span>
                    </div>
                    <div class="mt-2 text-xs font-bold text-white">Austin R&D Campus</div>
                    <div class="text-[10px] text-emerald-400 font-mono">+140% velocity</div>
                  </div>

                  <!-- Divider line -->
                  <div class="h-24 w-px bg-[#1F2937]"></div>

                  <!-- Civic Pulse Marker -->
                  <div class="relative z-10 text-center cursor-pointer transform hover:scale-105 transition" id="teaser-civic-pin">
                    <div class="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center marker-pulse-civic shadow-lg shadow-amber-500/20">
                      <span class="text-xs font-mono font-bold text-amber-400">8.10</span>
                    </div>
                    <div class="mt-2 text-xs font-bold text-white">Austin Drainage Resilience</div>
                    <div class="text-[10px] text-amber-400 font-mono">Seeded Civic Demo</div>
                  </div>

                </div>

                <!-- Teaser Card Footer info -->
                <div class="mt-4 pt-3 text-xs text-[#94A3B8] flex items-center justify-between">
                  <span>S_emergence calculation active</span>
                  <button id="teaser-explore-btn" class="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-1 transition">
                    <span>Inspect Cluster</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        <!-- Value Proposition Pillars -->
        <section class="max-w-7xl mx-auto px-4 lg:px-8 py-12 border-t border-[#1F2937]">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">Built for Spatio-Temporal Intelligence</h2>
            <p class="text-sm text-[#94A3B8] mt-2">Combining multi-source spatial clustering algorithms with autonomous collector pipeline reliability.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Pillar 1 -->
            <div class="bg-[#141924] rounded-2xl border border-[#1F2937] p-6 hover:border-emerald-500/40 transition group">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.954L9 2.236l6 3 5.447-2.724A2 2 0 0123 4.464v9.976a2 2 0 01-1.553 1.954L15 19.118l-6-3z"/></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Signal Convergence Engine</h3>
              <p class="text-sm text-[#94A3B8] leading-relaxed">
                Works across domains \u2014 from commercial R&D expansion to civic infrastructure shifts \u2014 synthesizing independent public data signals into spatial density indexes.
              </p>
            </div>

            <!-- Pillar 2 -->
            <div class="bg-[#141924] rounded-2xl border border-[#1F2937] p-6 hover:border-indigo-500/40 transition group">
              <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Self-Healing Scraper Pipeline</h3>
              <p class="text-sm text-[#94A3B8] leading-relaxed">
                Autonomous DOM drift detection and Gemini LLM schema auto-repair ensure data pipelines never break when public websites alter CSS classes or structural layouts.
              </p>
            </div>

            <!-- Pillar 3 -->
            <div class="bg-[#141924] rounded-2xl border border-[#1F2937] p-6 hover:border-amber-500/40 transition group">
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Emergence Scoring Math</h3>
              <p class="text-sm text-[#94A3B8] leading-relaxed">
                Multi-source density velocity formulas ($S_{emergence}$) rank geographical clusters by confidence level, signal entropy, and recency baseline deltas.
              </p>
            </div>

          </div>
        </section>

        <!-- Footer with Bright Data credit & compliance micro-disclaimer -->
        <footer class="max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-6 border-t border-[#1F2937] text-xs text-[#94A3B8]">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-2">
              <span>Signal Atlas &copy; 2026. Built with Bright Data Web Scraper APIs.</span>
            </div>
            <div class="text-center sm:text-right text-[11px] text-gray-500">
              <span>Not affiliated with any municipal entity \xB7 Data sourced strictly from public listings &amp; registries</span>
            </div>
          </div>
        </footer>

      </div>
    `;
      this.attachEvents();
    }
    attachEvents() {
      const ctaMap = this.container.querySelector("#hero-cta-map");
      const ctaPipeline = this.container.querySelector("#hero-cta-pipeline");
      const teaserExplore = this.container.querySelector("#teaser-explore-btn");
      const oppPin = this.container.querySelector("#teaser-opp-pin");
      if (ctaMap) ctaMap.addEventListener("click", () => this.onNavigate("map", "opportunities"));
      if (ctaPipeline) ctaPipeline.addEventListener("click", () => this.onNavigate("pipeline", "opportunities"));
      if (teaserExplore) teaserExplore.addEventListener("click", () => this.onNavigate("map", "opportunities"));
      if (oppPin) oppPin.addEventListener("click", () => this.onNavigate("map", "opportunities"));
    }
  };

  // dataset.js
  var OPPORTUNITIES_DATA = [
    {
      id: "opp-001",
      title: "Quantum Compute R&D Campus Expansion",
      city: "Austin, TX",
      coordinates: [30.2672, -97.7431],
      category: "R&D Hiring",
      emergenceScore: 8.42,
      scoreChange: "+140%",
      confidenceGloss: "High confidence \u2014 signal density well above 30-day baseline.",
      signalVelocity: "High",
      lastUpdated: "4 mins ago",
      sources: [
        { name: "Bright Data Scraper \u2014 Public Job Postings", count: 48, status: "Active", type: "Hiring" },
        { name: "USPTO Patent Assignment Feed", count: 6, status: "Active", type: "IP" },
        { name: "Travis County Commercial Permit Filings", count: 3, status: "Active", type: "Real Estate" },
        { name: "SEC Form D Corporate Filings", count: 1, status: "Active", type: "Finance" }
      ],
      radarMetrics: {
        diversity: 92,
        velocity: 88,
        density: 95,
        recency: 90
      },
      timeline: [
        { timestamp: "2026-08-22 14:10", label: "Bright Data detected 34 new Principal Compiler Engineer roles at secret location" },
        { timestamp: "2026-08-21 09:30", label: "Commercial permit #2026-8891 filed for 120,000 sq ft specialized HVAC cleanroom" },
        { timestamp: "2026-08-18 16:45", label: "Patent assignment transfer from MIT to stealth Delaware LLC" },
        { timestamp: "2026-08-10 11:00", label: "Initial baseline signal detected in local industrial zoning filings" }
      ],
      rawPayload: {
        cluster_id: "opp-001",
        geo_center: { lat: 30.2672, lng: -97.7431 },
        city: "Austin, TX",
        primary_collector: "brightdata_job_harvester_v2",
        detected_sources: [
          { source_id: "bd_job_99812", position: "Lead Quantum Hardware Architect", company: "Undisclosed R&D" },
          { source_id: "perm_tx_8891", type: "Commercial Remodel", valuation: "$18,500,000" }
        ],
        emergence_index: 8.42,
        score_breakdown: { velocity: 0.88, "spatial_k-means": 0.95, source_entropy: 0.92 }
      }
    },
    {
      id: "opp-002",
      title: "Autonomous Vehicle Subsystem Testing Hub",
      city: "San Jose, CA",
      coordinates: [37.3382, -121.8863],
      category: "Corporate Filings",
      emergenceScore: 9.15,
      scoreChange: "+210%",
      confidenceGloss: "Critical convergence \u2014 4 independent sources cross-verified.",
      signalVelocity: "Critical",
      lastUpdated: "2 mins ago",
      sources: [
        { name: "Bright Data Scraper \u2014 Tech Career Listings", count: 72, status: "Active", type: "Hiring" },
        { name: "FCC Experimental Radar License Filings", count: 4, status: "Active", type: "Regulatory" },
        { name: "Santa Clara Land Registry Leases", count: 2, status: "Active", type: "Real Estate" }
      ],
      radarMetrics: {
        diversity: 98,
        velocity: 96,
        density: 92,
        recency: 99
      },
      timeline: [
        { timestamp: "2026-08-22 16:30", label: "FCC grants 77GHz millimeter radar experimental emission permit" },
        { timestamp: "2026-08-22 11:15", label: "Bright Data scraper flagged 50+ AV Calibration Technicians in South Bay" },
        { timestamp: "2026-08-19 14:00", label: "Commercial lease executed for 45-acre test track parcel" }
      ],
      rawPayload: {
        cluster_id: "opp-002",
        geo_center: { lat: 37.3382, lng: -121.8863 },
        city: "San Jose, CA",
        primary_collector: "fcc_experimental_license_feed",
        detected_sources: [
          { source_id: "fcc_el_009981", frequency: "76-81 GHz", applicant: "Project Apex Mobility LLC" },
          { source_id: "lease_sc_7712", square_footage: 35e4 }
        ],
        emergence_index: 9.15,
        score_breakdown: { velocity: 0.96, "spatial_k-means": 0.92, source_entropy: 0.98 }
      }
    },
    {
      id: "opp-003",
      title: "Synthetic Biology Biomanufacturing Node",
      city: "Boston, MA",
      coordinates: [42.3601, -71.0589],
      category: "Patent Filings",
      emergenceScore: 7.85,
      scoreChange: "+85%",
      confidenceGloss: "Moderate-high signal \u2014 patent assignment matching hiring spikes.",
      signalVelocity: "Moderate",
      lastUpdated: "12 mins ago",
      sources: [
        { name: "USPTO Patent Registry Collector", count: 14, status: "Active", type: "IP" },
        { name: "Bright Data Scraper \u2014 Biotech Board Listings", count: 28, status: "Active", type: "Hiring" },
        { name: "MA Environmental Impact Review Notices", count: 1, status: "Active", type: "Regulatory" }
      ],
      radarMetrics: {
        diversity: 82,
        velocity: 78,
        density: 85,
        recency: 80
      },
      timeline: [
        { timestamp: "2026-08-22 15:00", label: "MEPA filing submitted for high-volume bioreactor waste treatment" },
        { timestamp: "2026-08-20 08:45", label: "Bright Data harvester cataloged 28 Fermentation Process Specialists" },
        { timestamp: "2026-08-15 13:20", label: "3 CRISPR scale-up patents assigned to Cambridge incubator" }
      ],
      rawPayload: {
        cluster_id: "opp-003",
        geo_center: { lat: 42.3601, lng: -71.0589 },
        city: "Boston, MA",
        primary_collector: "uspto_patent_assignment_stream",
        emergence_index: 7.85
      }
    },
    {
      id: "opp-004",
      title: "Hyperscale AI Micro-Data Center Substation",
      city: "Seattle, WA",
      coordinates: [47.6062, -122.3321],
      category: "Real Estate & Zoning",
      emergenceScore: 8.9,
      scoreChange: "+175%",
      confidenceGloss: "High confidence \u2014 grid power reservation combined with land option.",
      signalVelocity: "High",
      lastUpdated: "7 mins ago",
      sources: [
        { name: "Puget Sound Energy Interconnection Queue", count: 2, status: "Active", type: "Utility" },
        { name: "King County Zoning Amendment Filings", count: 5, status: "Active", type: "Real Estate" },
        { name: "Bright Data Scraper \u2014 Infrastructure Careers", count: 31, status: "Active", type: "Hiring" }
      ],
      radarMetrics: {
        diversity: 88,
        velocity: 92,
        density: 90,
        recency: 94
      },
      timeline: [
        { timestamp: "2026-08-22 12:40", label: "120MW grid interconnection request placed on queue" },
        { timestamp: "2026-08-21 16:10", label: "Zoning re-classification request for heavy industrial power overlay" },
        { timestamp: "2026-08-17 10:00", label: "Bright Data scraper flagged Data Center Electrical Engineers in Bellevue" }
      ],
      rawPayload: {
        cluster_id: "opp-004",
        geo_center: { lat: 47.6062, lng: -122.3321 },
        city: "Seattle, WA",
        primary_collector: "utility_interconnect_feed",
        emergence_index: 8.9
      }
    }
  ];
  var CIVIC_DATA = [
    {
      id: "civic-001",
      title: "South End Drainage & Flood Resilience Shift",
      city: "Austin, TX",
      coordinates: [30.245, -97.76],
      category: "Infrastructure & Climate",
      emergenceScore: 8.1,
      scoreChange: "+115%",
      confidenceGloss: "Seeded demo signal \u2014 high correlation between 311 flood calls & council agendas.",
      signalVelocity: "High",
      lastUpdated: "Seeded Dataset",
      sources: [
        { name: "Austin City Council Public Agenda Collector", count: 4, status: "Static Seed", type: "Agenda" },
        { name: "311 Drainage & Runoff Complaint Logs", count: 184, status: "Static Seed", type: "Civic 311" },
        { name: "FEMA Watershed Assessment Filings", count: 2, status: "Static Seed", type: "Federal" }
      ],
      radarMetrics: {
        diversity: 85,
        velocity: 82,
        density: 90,
        recency: 85
      },
      timeline: [
        { timestamp: "2026-08-22 10:00", label: "City Council Item #42: $14M emergency storm drain bond authorization" },
        { timestamp: "2026-08-19 18:30", label: "311 system recorded 184 localized flooding tickets following storm event" },
        { timestamp: "2026-08-12 14:00", label: "FEMA revised flood plain boundary draft published" }
      ],
      rawPayload: {
        cluster_id: "civic-001",
        is_seeded_demo: true,
        city: "Austin, TX",
        dataset_type: "civic_infrastructure",
        geo_center: { lat: 30.245, lng: -97.76 },
        emergence_index: 8.1
      }
    },
    {
      id: "civic-002",
      title: "Downtown Transit Priority Corridor Re-zoning",
      city: "San Jose, CA",
      coordinates: [37.332, -121.89],
      category: "Zoning & Transit",
      emergenceScore: 7.6,
      scoreChange: "+90%",
      confidenceGloss: "Seeded demo signal \u2014 planning commission draft matches transit grant application.",
      signalVelocity: "Moderate",
      lastUpdated: "Seeded Dataset",
      sources: [
        { name: "VTA Transit Development Advisory", count: 3, status: "Static Seed", type: "Transit" },
        { name: "San Jose Planning Commission Agenda", count: 6, status: "Static Seed", type: "Agenda" }
      ],
      radarMetrics: {
        diversity: 78,
        velocity: 74,
        density: 82,
        recency: 78
      },
      timeline: [
        { timestamp: "2026-08-21 15:30", label: "Planning commission proposes parking minimum elimination in transit zone" },
        { timestamp: "2026-08-16 09:15", label: "VTA submits federal bus rapid transit lane reservation grant" }
      ],
      rawPayload: {
        cluster_id: "civic-002",
        is_seeded_demo: true,
        city: "San Jose, CA",
        dataset_type: "civic_transit",
        geo_center: { lat: 37.332, lng: -121.89 },
        emergence_index: 7.6
      }
    },
    {
      id: "civic-003",
      title: "Waterfront Industrial Noise & Air Quality Overlay",
      city: "Seattle, WA",
      coordinates: [47.585, -122.34],
      category: "Regulatory & Health",
      emergenceScore: 8.75,
      scoreChange: "+160%",
      confidenceGloss: "Seeded demo signal \u2014 multi-point sensor network spikes match council petitions.",
      signalVelocity: "High",
      lastUpdated: "Seeded Dataset",
      sources: [
        { name: "Puget Sound Clean Air Agency Notices", count: 8, status: "Static Seed", type: "Environmental" },
        { name: "Seattle Port Authority Citizen Petitions", count: 310, status: "Static Seed", type: "Public" }
      ],
      radarMetrics: {
        diversity: 90,
        velocity: 88,
        density: 92,
        recency: 89
      },
      timeline: [
        { timestamp: "2026-08-22 08:00", label: "Clean Air Agency issues compliance order for maritime diesel exhaust" },
        { timestamp: "2026-08-18 11:30", label: "Citizen petition with 310 verified signatures submitted to Port Commissioners" }
      ],
      rawPayload: {
        cluster_id: "civic-003",
        is_seeded_demo: true,
        city: "Seattle, WA",
        dataset_type: "civic_regulatory",
        geo_center: { lat: 47.585, lng: -122.34 },
        emergence_index: 8.75
      }
    }
  ];
  function getDataset(mode = "opportunities", filters = {}) {
    const data = mode === "civic" ? CIVIC_DATA : OPPORTUNITIES_DATA;
    return data.filter((item) => {
      if (filters.city && filters.city !== "all" && item.city !== filters.city) {
        return false;
      }
      if (filters.category && filters.category !== "all" && item.category !== filters.category) {
        return false;
      }
      if (filters.minScore && item.emergenceScore < parseFloat(filters.minScore)) {
        return false;
      }
      return true;
    });
  }
  function getCities() {
    return ["all", "Austin, TX", "San Jose, CA", "Seattle, WA", "Boston, MA"];
  }
  function getCategories(mode = "opportunities") {
    if (mode === "civic") {
      return ["all", "Infrastructure & Climate", "Zoning & Transit", "Regulatory & Health"];
    }
    return ["all", "R&D Hiring", "Corporate Filings", "Patent Filings", "Real Estate & Zoning"];
  }

  // SignalDrawer.js
  var SignalDrawer = class {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      this.signal = null;
      this.isOpen = false;
      this.activeTab = "overview";
      this.onInspectPipeline = options.onInspectPipeline || (() => {
      });
      this.render();
    }
    open(signal) {
      this.signal = signal;
      this.isOpen = true;
      this.activeTab = "overview";
      this.render();
      document.body.classList.add("drawer-open");
    }
    close() {
      this.isOpen = false;
      this.render();
      document.body.classList.remove("drawer-open");
    }
    render() {
      if (!this.container) return;
      if (!this.isOpen || !this.signal) {
        this.container.innerHTML = "";
        return;
      }
      const isCivic = this.signal.id.startsWith("civic");
      const accentColor = isCivic ? "#F59E0B" : "#22C55E";
      const accentBg = isCivic ? "bg-amber-500/10 border-amber-500/30 text-amber-400" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
      this.container.innerHTML = `
      <div class="fixed inset-0 z-50 overflow-hidden">
        
        <!-- Backdrop Overlay -->
        <div id="drawer-backdrop" class="absolute inset-0 bg-black/70 backdrop-blur-sm drawer-overlay cursor-pointer"></div>

        <!-- Slide-Over Drawer Container -->
        <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div class="w-screen max-w-xl bg-[#141924] border-l border-[#1F2937] text-white flex flex-col shadow-2xl drawer-content">
            
            <!-- Drawer Header -->
            <div class="p-6 bg-[#0A0E14] border-b border-[#1F2937] flex items-start justify-between">
              <div class="space-y-1 pr-4">
                <div class="flex items-center space-x-2">
                  <span class="px-2.5 py-0.5 rounded text-[11px] font-mono border ${accentBg}">
                    ${isCivic ? "Civic Issue \xB7 Seeded Data" : "Opportunity Cluster"}
                  </span>
                  <span class="text-xs text-[#94A3B8] font-mono">${this.signal.city}</span>
                </div>
                <h3 class="text-xl font-bold text-white tracking-tight leading-snug">${this.signal.title}</h3>
              </div>
              <button id="drawer-close-btn" class="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1F2937] transition" aria-label="Close drawer">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <!-- Emergence Score Badge + Gloss Banner (Section 2 Requirement) -->
            <div class="p-4 bg-[#0F141C] border-b border-[#1F2937] flex items-center justify-between gap-4">
              <div class="flex items-center space-x-3">
                <div class="px-3.5 py-2 rounded-xl bg-[#141924] border border-[#1F2937] font-mono text-center">
                  <div class="text-[10px] text-[#94A3B8] uppercase">S_emergence</div>
                  <div class="text-xl font-extrabold" style="color: ${accentColor}">${this.signal.emergenceScore.toFixed(2)}</div>
                </div>
                <div>
                  <div class="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span>Signal Velocity: <strong style="color: ${accentColor}">${this.signal.signalVelocity}</strong></span>
                    <span class="text-[11px] font-mono text-emerald-400 font-semibold">${this.signal.scoreChange}</span>
                  </div>
                  <!-- One-Line Plain-Language Gloss -->
                  <div class="text-xs text-[#94A3B8] mt-0.5 italic">
                    "${this.signal.confidenceGloss}"
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Tabs -->
            <div class="flex border-b border-[#1F2937] bg-[#0A0E14] px-6 text-xs font-medium">
              <button id="tab-overview" class="py-3 px-4 border-b-2 font-mono transition ${this.activeTab === "overview" ? "border-emerald-500 text-white font-bold" : "border-transparent text-[#94A3B8] hover:text-white"}">
                Overview &amp; Radar
              </button>
              <button id="tab-sources" class="py-3 px-4 border-b-2 font-mono transition ${this.activeTab === "sources" ? "border-emerald-500 text-white font-bold" : "border-transparent text-[#94A3B8] hover:text-white"}">
                Sources (${this.signal.sources ? this.signal.sources.length : 0})
              </button>
              <button id="tab-timeline" class="py-3 px-4 border-b-2 font-mono transition ${this.activeTab === "timeline" ? "border-emerald-500 text-white font-bold" : "border-transparent text-[#94A3B8] hover:text-white"}">
                Timeline
              </button>
              <button id="tab-json" class="py-3 px-4 border-b-2 font-mono transition ${this.activeTab === "json" ? "border-emerald-500 text-white font-bold" : "border-transparent text-[#94A3B8] hover:text-white"}">
                Raw JSON
              </button>
            </div>

            <!-- Drawer Scrollable Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-6">
              ${this.renderTabContent()}
            </div>

            <!-- Drawer Footer Actions -->
            <div class="p-4 bg-[#0A0E14] border-t border-[#1F2937] flex items-center justify-between gap-3">
              <button id="track-cluster-btn" class="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0A0E14] font-semibold text-xs transition flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-500/10">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Track Cluster Alerts</span>
              </button>
              <button id="inspect-source-btn" class="flex-1 py-2.5 rounded-xl bg-[#1F2937] hover:bg-gray-700 text-white font-medium text-xs border border-[#1F2937] transition flex items-center justify-center space-x-1.5">
                <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>Inspect Collector Health</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    `;
      this.attachEvents();
    }
    renderTabContent() {
      if (this.activeTab === "sources") {
        return `
        <div class="space-y-4">
          <h4 class="text-xs font-mono font-bold text-white uppercase tracking-wider">Scraped &amp; Ingested Data Sources</h4>
          <div class="space-y-3">
            ${(this.signal.sources || []).map((s) => `
              <div class="p-3.5 rounded-xl bg-[#0A0E14] border border-[#1F2937] flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-white">${s.name}</div>
                  <div class="text-[11px] text-[#94A3B8] font-mono mt-0.5">Type: ${s.type} \xB7 ${s.count} records synthesized</div>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ${s.status}
                </span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      }
      if (this.activeTab === "timeline") {
        return `
        <div class="space-y-4">
          <h4 class="text-xs font-mono font-bold text-white uppercase tracking-wider">Cluster Convergence Sequence</h4>
          <div class="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1F2937]">
            ${(this.signal.timeline || []).map((t) => `
              <div class="relative">
                <div class="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#141924]"></div>
                <div class="text-[11px] font-mono text-emerald-400 font-semibold">${t.timestamp}</div>
                <div class="text-xs text-[#F3F4F6] mt-0.5 leading-relaxed">${t.label}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      }
      if (this.activeTab === "json") {
        return `
        <div class="space-y-3">
          <div class="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <span>Raw Normalized JSON Payload</span>
            <span class="text-emerald-400">JSON Schema v2.1</span>
          </div>
          <pre class="terminal-font text-xs text-emerald-300 p-4 rounded-xl bg-[#0A0E14] border border-[#1F2937] overflow-x-auto max-h-96 leading-relaxed"><code>${JSON.stringify(this.signal.rawPayload, null, 2)}</code></pre>
        </div>
      `;
      }
      const m = this.signal.radarMetrics || { diversity: 80, velocity: 85, density: 90, recency: 88 };
      return `
      <div class="space-y-6">
        
        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3.5 rounded-xl bg-[#0A0E14] border border-[#1F2937]">
            <div class="text-[11px] text-[#94A3B8] font-mono">Source Diversity</div>
            <div class="text-xl font-bold font-mono text-white mt-1">${m.diversity}%</div>
            <div class="w-full bg-[#1F2937] h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full" style="width: ${m.diversity}%"></div>
            </div>
          </div>
          
          <div class="p-3.5 rounded-xl bg-[#0A0E14] border border-[#1F2937]">
            <div class="text-[11px] text-[#94A3B8] font-mono">Signal Velocity</div>
            <div class="text-xl font-bold font-mono text-white mt-1">${m.velocity}%</div>
            <div class="w-full bg-[#1F2937] h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-indigo-400 h-full rounded-full" style="width: ${m.velocity}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-[#0A0E14] border border-[#1F2937]">
            <div class="text-[11px] text-[#94A3B8] font-mono">Spatial Density</div>
            <div class="text-xl font-bold font-mono text-white mt-1">${m.density}%</div>
            <div class="w-full bg-[#1F2937] h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-amber-400 h-full rounded-full" style="width: ${m.density}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-[#0A0E14] border border-[#1F2937]">
            <div class="text-[11px] text-[#94A3B8] font-mono">Recency Score</div>
            <div class="text-xl font-bold font-mono text-white mt-1">${m.recency}%</div>
            <div class="w-full bg-[#1F2937] h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-teal-400 h-full rounded-full" style="width: ${m.recency}%"></div>
            </div>
          </div>
        </div>

        <!-- Primary Data Summary -->
        <div class="p-4 rounded-xl bg-[#0A0E14] border border-[#1F2937] space-y-2">
          <h4 class="text-xs font-mono font-bold text-white uppercase tracking-wider">Spatial Convergence Assessment</h4>
          <p class="text-xs text-[#94A3B8] leading-relaxed">
            Multi-source anomaly detector registered simultaneous hiring spikes, commercial permit applications, and regulatory filings within a 2.4km radius in ${this.signal.city}.
          </p>
        </div>

      </div>
    `;
    }
    attachEvents() {
      const backdrop = this.container.querySelector("#drawer-backdrop");
      const closeBtn = this.container.querySelector("#drawer-close-btn");
      const inspectBtn = this.container.querySelector("#inspect-source-btn");
      const trackBtn = this.container.querySelector("#track-cluster-btn");
      if (backdrop) backdrop.addEventListener("click", () => this.close());
      if (closeBtn) closeBtn.addEventListener("click", () => this.close());
      if (inspectBtn) inspectBtn.addEventListener("click", () => {
        this.close();
        this.onInspectPipeline();
      });
      if (trackBtn) trackBtn.addEventListener("click", () => {
        alert(`Cluster "${this.signal.title}" is now added to active spatial watchlist.`);
      });
      ["overview", "sources", "timeline", "json"].forEach((tabKey) => {
        const tabBtn = this.container.querySelector(`#tab-${tabKey}`);
        if (tabBtn) {
          tabBtn.addEventListener("click", () => {
            this.activeTab = tabKey;
            this.render();
          });
        }
      });
    }
  };

  // MapDashboardView.js
  var MapDashboardView = class {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      this.activeMode = options.activeMode || "opportunities";
      this.onNavigate = options.onNavigate || (() => {
      });
      this.map = null;
      this.markersGroup = null;
      this.drawer = null;
      this.currentDataset = [];
      this.filters = {
        city: "all",
        category: "all",
        minScore: 0
      };
      this.render();
    }
    setMode(mode) {
      this.activeMode = mode;
      this.filters.category = "all";
      this.render();
    }
    render() {
      if (!this.container) return;
      this.currentDataset = getDataset(this.activeMode, this.filters);
      const isCivic = this.activeMode === "civic";
      const categories = getCategories(this.activeMode);
      this.container.innerHTML = `
      <div class="topographic-bg min-h-[calc(100vh-64px)] flex flex-col">
        
        <!-- Live Signal Ticker Banner (Section 2 Requirement: pause-on-hover, 1 line, text-muted) -->
        <div class="bg-[#0A0E14] border-b border-[#1F2937] px-4 py-2 text-xs text-[#94A3B8] ticker-wrap">
          <div class="ticker-move flex items-center space-x-8 font-mono">
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong class="text-white">Austin, TX:</strong> Quantum Compute R&D Campus S_emergence=8.42 (+140%)
            </span>
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong class="text-white">San Jose, CA:</strong> AV Testing Hub S_emergence=9.15 (+210%)
            </span>
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <strong class="text-white">Austin, TX (Civic Seeded):</strong> South End Drainage S_emergence=8.10 (+115%)
            </span>
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong class="text-white">Seattle, WA:</strong> AI Micro-Data Center Substation S_emergence=8.90 (+175%)
            </span>
          </div>
        </div>

        <!-- Toolbar Controls & Mode Switcher -->
        <div class="bg-[#141924]/90 border-b border-[#1F2937] px-4 lg:px-8 py-3.5 space-y-3">
          <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            <!-- Dual-Mode Switcher Toggle -->
            <div class="flex items-center bg-[#0A0E14] p-1 rounded-xl border border-[#1F2937] w-full md:w-auto">
              <button id="mode-btn-opp" class="flex-1 md:flex-initial px-4 py-1.5 rounded-lg text-xs font-semibold transition flex items-center justify-center space-x-2 ${!isCivic ? "bg-emerald-500 text-[#0A0E14] shadow-sm" : "text-[#94A3B8] hover:text-white"}">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>Opportunities Mode</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded font-mono ${!isCivic ? "bg-emerald-950/60 text-emerald-100" : "bg-[#1F2937] text-gray-400"}">Live Scraped</span>
              </button>

              <button id="mode-btn-civic" class="flex-1 md:flex-initial px-4 py-1.5 rounded-lg text-xs font-semibold transition flex items-center justify-center space-x-2 ${isCivic ? "bg-amber-500 text-[#0A0E14] shadow-sm" : "text-[#94A3B8] hover:text-white"}">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                <span>Civic Issues Mode</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded font-mono ${isCivic ? "bg-amber-950/60 text-amber-100" : "bg-[#1F2937] text-gray-400"}">Seeded Demo</span>
              </button>
            </div>

            <!-- Filters Row -->
            <div class="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs">
              
              <!-- City Selector -->
              <div class="flex items-center space-x-1.5 bg-[#0A0E14] px-3 py-1.5 rounded-xl border border-[#1F2937]">
                <span class="text-[#94A3B8]">City:</span>
                <select id="filter-city" class="bg-transparent text-white border-none focus:ring-0 font-medium cursor-pointer">
                  ${getCities().map((c) => `<option value="${c}" ${this.filters.city === c ? "selected" : ""} class="bg-[#141924] text-white">${c === "all" ? "All Metros" : c}</option>`).join("")}
                </select>
              </div>

              <!-- Category Filter -->
              <div class="flex items-center space-x-1.5 bg-[#0A0E14] px-3 py-1.5 rounded-xl border border-[#1F2937]">
                <span class="text-[#94A3B8]">Category:</span>
                <select id="filter-category" class="bg-transparent text-white border-none focus:ring-0 font-medium cursor-pointer">
                  ${categories.map((cat) => `<option value="${cat}" ${this.filters.category === cat ? "selected" : ""} class="bg-[#141924] text-white">${cat === "all" ? "All Categories" : cat}</option>`).join("")}
                </select>
              </div>

              <!-- Emergence Slider -->
              <div class="flex items-center space-x-2 bg-[#0A0E14] px-3 py-1.5 rounded-xl border border-[#1F2937]">
                <span class="text-[#94A3B8]">Min S_emergence:</span>
                <input type="range" id="filter-score" min="0" max="10" step="0.5" value="${this.filters.minScore}" class="w-20 accent-emerald-500 cursor-pointer">
                <span id="filter-score-val" class="font-mono text-emerald-400 font-bold w-6 text-right">${this.filters.minScore}</span>
              </div>

            </div>

          </div>
        </div>

        <!-- Main Map Area -->
        <div class="relative flex-1 min-h-[550px] w-full flex flex-col">
          
          <!-- Leaflet / Vector Spatial Map Container -->
          <div id="map-container" class="absolute inset-0 z-0 bg-[#0A0E14] overflow-hidden"></div>

          <!-- Empty State Overlay (Section 2 Requirement) -->
          <div id="map-empty-state" class="${this.currentDataset.length > 0 ? "hidden" : ""} absolute inset-0 z-10 bg-[#0A0E14]/85 backdrop-blur-sm flex items-center justify-center p-6 text-center">
            <div class="max-w-md p-8 rounded-2xl bg-[#141924] border border-[#1F2937] space-y-3 shadow-2xl">
              <div class="w-12 h-12 mx-auto rounded-full bg-[#1F2937] flex items-center justify-center text-gray-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              <h3 class="text-base font-bold text-white">No convergence detected yet</h3>
              <p class="text-xs text-[#94A3B8]">Signals accumulate as collectors run. Try lowering the emergence score threshold filter above.</p>
              <button id="reset-filters-btn" class="px-4 py-2 rounded-lg bg-emerald-500 text-[#0A0E14] text-xs font-bold transition hover:bg-emerald-400">
                Reset Threshold Filter
              </button>
            </div>
          </div>

          <!-- Drawer Mounting Container -->
          <div id="drawer-container"></div>

        </div>

      </div>
    `;
      this.attachEvents();
      this.initMap(this.currentDataset);
    }
    initMap(dataset) {
      setTimeout(() => {
        const mapEl = document.getElementById("map-container");
        if (!mapEl) return;
        if (typeof L !== "undefined") {
          try {
            if (!this.map) {
              this.map = L.map("map-container", {
                center: [39.8283, -98.5795],
                zoom: 4,
                zoomControl: false
              });
              L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                attribution: "&copy; CARTO &copy; OpenStreetMap",
                maxZoom: 19
              }).addTo(this.map);
              L.control.zoom({ position: "bottomright" }).addTo(this.map);
            }
            this.updateMarkers(dataset);
            return;
          } catch (e) {
            console.warn("Leaflet map initialization warning, using spatial vector render:", e);
          }
        }
        this.renderVectorSpatialMap(dataset, mapEl);
      }, 50);
    }
    updateMarkers(dataset) {
      if (!this.map || typeof L === "undefined") return;
      if (this.markersGroup) {
        this.map.removeLayer(this.markersGroup);
      }
      this.markersGroup = L.layerGroup().addTo(this.map);
      const bounds = [];
      const isCivic = this.activeMode === "civic";
      dataset.forEach((item) => {
        const coords = item.coordinates;
        bounds.push(coords);
        const pulseClass = isCivic ? "marker-pulse-civic" : "marker-pulse-opp";
        const badgeBg = isCivic ? "bg-amber-500" : "bg-emerald-500";
        const customIcon = L.divIcon({
          className: "custom-map-marker",
          html: `
          <div class="relative group cursor-pointer" data-id="${item.id}">
            <div class="w-10 h-10 rounded-full ${badgeBg}/20 border-2 ${isCivic ? "border-amber-400 text-amber-400" : "border-emerald-400 text-emerald-400"} ${pulseClass} flex items-center justify-center font-mono text-xs font-bold shadow-lg">
              ${item.emergenceScore.toFixed(1)}
            </div>
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[#0A0E14] text-white text-[11px] font-medium px-3 py-1.5 rounded-lg border border-[#1F2937] whitespace-nowrap z-50 shadow-xl">
              ${item.title} (${item.city})
            </div>
          </div>
        `,
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
        const marker = L.marker(coords, { icon: customIcon }).addTo(this.markersGroup);
        marker.on("click", () => this.openDrawer(item));
      });
      if (bounds.length > 0) {
        this.map.fitBounds(bounds, { padding: [80, 80], maxZoom: 10 });
      }
    }
    renderVectorSpatialMap(dataset, container) {
      const isCivic = this.activeMode === "civic";
      const accentColor = isCivic ? "#F59E0B" : "#22C55E";
      const pulseClass = isCivic ? "marker-pulse-civic" : "marker-pulse-opp";
      const cityPositions = {
        "Austin, TX": { left: "45%", top: "65%" },
        "San Jose, CA": { left: "20%", top: "45%" },
        "Seattle, WA": { left: "25%", top: "25%" },
        "Boston, MA": { left: "80%", top: "35%" }
      };
      container.innerHTML = `
      <div class="relative w-full h-full bg-[#0A0E14] overflow-hidden flex flex-col justify-between p-6">
        
        <!-- Topo grid SVG overlay -->
        <svg class="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F2937" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <!-- Contour lines -->
          <path d="M 100 200 Q 300 100 600 300 T 1100 200" fill="none" stroke="#818CF8" stroke-opacity="0.15" stroke-width="2"/>
          <path d="M 150 400 Q 400 250 700 450 T 1200 350" fill="none" stroke="#22C55E" stroke-opacity="0.1" stroke-width="2"/>
        </svg>

        <!-- Legend / Map Status Header -->
        <div class="relative z-10 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
          <div class="flex items-center space-x-2 bg-[#141924]/90 px-3 py-1.5 rounded-xl border border-[#1F2937]">
            <span class="w-2 h-2 rounded-full" style="background-color: ${accentColor}"></span>
            <span class="text-white font-bold">${isCivic ? "Civic Issues Mode (Seeded Data)" : "Opportunities Mode (Live Scraped)"}</span>
          </div>
          <div class="bg-[#141924]/90 px-3 py-1.5 rounded-xl border border-[#1F2937]">
            Showing <strong class="text-white">${dataset.length}</strong> spatial clusters
          </div>
        </div>

        <!-- Interactive Spatial Markers Container -->
        <div class="relative z-10 flex-1 my-4">
          ${dataset.map((item) => {
        const pos = cityPositions[item.city] || { left: "50%", top: "50%" };
        return `
              <div class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style="left: ${pos.left}; top: ${pos.top};" data-marker-id="${item.id}">
                <div class="w-12 h-12 rounded-full border-2 ${pulseClass} flex items-center justify-center font-mono text-xs font-bold shadow-2xl transition hover:scale-110" style="background-color: rgba(10,14,20,0.9); border-color: ${accentColor}; color: ${accentColor}">
                  ${item.emergenceScore.toFixed(1)}
                </div>
                <div class="mt-2 bg-[#141924]/95 text-white text-xs font-medium px-3 py-2 rounded-xl border border-[#1F2937] shadow-xl text-center whitespace-nowrap">
                  <div class="font-bold text-white">${item.title}</div>
                  <div class="text-[11px] text-[#94A3B8] font-mono">${item.city} \xB7 ${item.scoreChange}</div>
                </div>
              </div>
            `;
      }).join("")}
        </div>

        <!-- Vector Footer Note -->
        <div class="relative z-10 text-[11px] text-[#94A3B8] font-mono text-center">
          Click any cluster node above to open spatial breakdown &amp; raw JSON payload drawer.
        </div>

      </div>
    `;
      dataset.forEach((item) => {
        const markerEl = container.querySelector(`[data-marker-id="${item.id}"]`);
        if (markerEl) {
          markerEl.addEventListener("click", () => this.openDrawer(item));
        }
      });
    }
    openDrawer(signal) {
      if (!this.drawer) {
        this.drawer = new SignalDrawer("drawer-container", {
          onInspectPipeline: () => this.onNavigate("pipeline")
        });
      }
      this.drawer.open(signal);
    }
    attachEvents() {
      const oppBtn = this.container.querySelector("#mode-btn-opp");
      const civicBtn = this.container.querySelector("#mode-btn-civic");
      const citySelect = this.container.querySelector("#filter-city");
      const catSelect = this.container.querySelector("#filter-category");
      const scoreSlider = this.container.querySelector("#filter-score");
      const scoreVal = this.container.querySelector("#filter-score-val");
      const resetBtn = this.container.querySelector("#reset-filters-btn");
      if (oppBtn) oppBtn.addEventListener("click", () => this.setMode("opportunities"));
      if (civicBtn) civicBtn.addEventListener("click", () => this.setMode("civic"));
      if (citySelect) {
        citySelect.addEventListener("change", (e) => {
          this.filters.city = e.target.value;
          this.render();
        });
      }
      if (catSelect) {
        catSelect.addEventListener("change", (e) => {
          this.filters.category = e.target.value;
          this.render();
        });
      }
      if (scoreSlider) {
        scoreSlider.addEventListener("input", (e) => {
          this.filters.minScore = parseFloat(e.target.value);
          if (scoreVal) scoreVal.textContent = this.filters.minScore.toFixed(1);
          this.render();
        });
      }
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          this.filters.minScore = 0;
          this.render();
        });
      }
    }
  };

  // PayloadDiffViewer.js
  var PayloadDiffViewer = class {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === "string" ? document.getElementById(containerId) : containerId;
      this.brokenPayload = options.brokenPayload || null;
      this.healedPayload = options.healedPayload || null;
      this.render();
    }
    update(brokenPayload, healedPayload) {
      this.brokenPayload = brokenPayload;
      this.healedPayload = healedPayload;
      this.render();
    }
    render() {
      if (!this.container) return;
      if (!this.brokenPayload) {
        this.container.innerHTML = `
        <div class="bg-[#141924] rounded-2xl border border-[#1F2937] p-8 text-center text-[#94A3B8]">
          <div class="w-12 h-12 mx-auto rounded-full bg-[#1F2937] flex items-center justify-center text-gray-400 mb-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <h4 class="text-sm font-semibold text-white">Payload Diff Inspector Idle</h4>
          <p class="text-xs mt-1">Simulate a scraper DOM drift incident above to inspect side-by-side payload transformations.</p>
        </div>
      `;
        return;
      }
      const brokenStr = JSON.stringify(this.brokenPayload, null, 2);
      const healedStr = this.healedPayload ? JSON.stringify(this.healedPayload, null, 2) : "// Awaiting self-healing agent patch generation...";
      this.container.innerHTML = `
      <div class="bg-[#141924] rounded-2xl border border-[#1F2937] overflow-hidden shadow-xl">
        
        <!-- Header -->
        <div class="bg-[#0A0E14] px-5 py-3 border-b border-[#1F2937] flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-xs font-mono font-bold text-white uppercase tracking-wider">Payload Diff Viewer</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">Side-by-Side</span>
          </div>
          <div class="text-xs font-mono text-[#94A3B8]">
            Collector: <span class="text-emerald-400 font-bold">brightdata_job_harvester_v2</span>
          </div>
        </div>

        <!-- Side-by-Side Code View -->
        <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1F2937]">
          
          <!-- Broken Column -->
          <div class="p-4 bg-[#0A0E14]/70">
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#1F2937]">
              <span class="text-xs font-bold font-mono text-red-400 flex items-center space-x-1.5">
                <span class="w-2 h-2 rounded-full bg-red-500"></span>
                <span>Degraded Input (Broken DOM AST)</span>
              </span>
              <span class="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">VALIDATION_FAILED</span>
            </div>
            
            <pre class="terminal-font text-xs text-red-200 overflow-x-auto p-3 rounded-lg bg-[#0F141C] border border-red-500/20 leading-relaxed max-h-96"><code>${this.escapeHtml(brokenStr)}</code></pre>

            <div class="mt-3 text-[11px] text-red-400 font-mono bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
              \u274C Null value in required spatial key <code class="bg-red-950 px-1 py-0.5 rounded text-white">location_raw</code>. Collector execution halted.
            </div>
          </div>

          <!-- Healed Column -->
          <div class="p-4 bg-[#0A0E14]/70">
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#1F2937]">
              <span class="text-xs font-bold font-mono text-emerald-400 flex items-center space-x-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Transformed Output (Auto-Healed JSON)</span>
              </span>
              <span class="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ${this.healedPayload ? "PASSED_AUTO_HEALED" : "PENDING_REPAIR"}
              </span>
            </div>

            <pre class="terminal-font text-xs text-emerald-200 overflow-x-auto p-3 rounded-lg bg-[#0F141C] border border-emerald-500/20 leading-relaxed max-h-96"><code>${this.escapeHtml(healedStr)}</code></pre>

            ${this.healedPayload ? `
              <div class="mt-3 text-[11px] text-emerald-400 font-mono bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20 flex items-center justify-between">
                <span>\u2705 Repaired key <code class="bg-emerald-950 px-1 py-0.5 rounded text-white">location_raw</code> &amp; fallback selector attached.</span>
                <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">99.4% Match</span>
              </div>
            ` : `
              <div class="mt-3 text-[11px] text-amber-400 font-mono bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 animate-pulse">
                \u23F3 Waiting for AI Repair Agent trigger...
              </div>
            `}
          </div>

        </div>

      </div>
    `;
    }
    escapeHtml(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  };

  // PipelineHealthView.js
  var PipelineHealthView = class {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.diffViewer = null;
      this.unsubscribe = null;
      this.render();
    }
    destroy() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
    render() {
      if (!this.container) return;
      const state = selfHealingEngine.getSnapshot();
      const isDegraded = state.status === "DEGRADED";
      const isRepairing = state.status === "REPAIRING";
      const isHealedUnapproved = state.status === "HEALED_UNAPPROVED";
      const isHealthy = state.status === "HEALTHY";
      let statusBadgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      let statusLabel = "\u{1F7E2} ALL SYSTEMS HEALTHY (100% OPERATIONAL)";
      if (isDegraded) {
        statusBadgeColor = "bg-red-500/10 text-red-400 border-red-500/30 animate-pulse";
        statusLabel = "\u{1F534} CRITICAL: DOM SELECTOR DRIFT DETECTED IN BRIGHTDATA SCRAPER";
      } else if (isRepairing) {
        statusBadgeColor = "bg-amber-500/10 text-amber-400 border-amber-500/30 animate-pulse";
        statusLabel = "\u{1F7E1} REPAIRING: GEMINI AI AGENT SYNTHESIZING FALLBACK AST PATCH";
      } else if (isHealedUnapproved) {
        statusBadgeColor = "bg-indigo-500/10 text-indigo-300 border-indigo-500/30 animate-pulse";
        statusLabel = "\u{1F535} AUTO-PATCH READY: SYNTHETIC SELECTOR GENERATED \u2014 APPROVAL PENDING";
      }
      this.container.innerHTML = `
      <div class="topographic-bg min-h-[calc(100vh-64px)] p-4 lg:p-8 space-y-8 max-w-7xl mx-auto">
        
        <!-- Header & Status Banner -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#1F2937]">
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-mono mb-2 ${statusBadgeColor}">
              <span class="w-2 h-2 rounded-full ${isDegraded ? "bg-red-500 animate-ping" : "bg-emerald-400"}"></span>
              <span>${statusLabel}</span>
            </div>
            <h1 class="text-3xl font-extrabold text-white tracking-tight">Pipeline Health &amp; Self-Healing Console</h1>
            <p class="text-xs text-[#94A3B8] mt-1">Autonomous web scraper DOM drift detection, schema recovery, and operator verification logs.</p>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-2">
            <button id="btn-drift" class="px-4 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-bold transition flex items-center space-x-1.5 ${!isHealthy ? "opacity-50 cursor-not-allowed" : ""}" ${!isHealthy ? "disabled" : ""}>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span>1. Simulate Selector Drift</span>
            </button>

            <button id="btn-heal" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-indigo-600/20 ${!isDegraded ? "opacity-50 cursor-not-allowed" : ""}" ${!isDegraded ? "disabled" : ""}>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>2. Trigger AI Repair Agent</span>
            </button>

            <button id="btn-approve" class="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0A0E14] text-xs font-extrabold transition flex items-center space-x-1.5 shadow-md shadow-emerald-500/20 ${!isHealedUnapproved ? "opacity-50 cursor-not-allowed" : ""}" ${!isHealedUnapproved ? "disabled" : ""}>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>3. Approve Auto-Patch</span>
            </button>

            <button id="btn-reset" class="p-2.5 rounded-xl bg-[#141924] hover:bg-[#1E2536] text-[#94A3B8] border border-[#1F2937] text-xs transition" title="Reset Demo">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-[#141924] p-5 rounded-2xl border border-[#1F2937]">
            <div class="text-xs text-[#94A3B8] font-mono">Active Scrapers</div>
            <div class="text-2xl font-bold font-mono text-white mt-1">
              ${isDegraded ? "3/4" : "4/4"} <span class="text-xs text-emerald-400 font-normal">Active</span>
            </div>
          </div>

          <div class="bg-[#141924] p-5 rounded-2xl border border-[#1F2937]">
            <div class="text-xs text-[#94A3B8] font-mono">Pipeline Uptime</div>
            <div class="text-2xl font-bold font-mono text-emerald-400 mt-1">99.8%</div>
          </div>

          <div class="bg-[#141924] p-5 rounded-2xl border border-[#1F2937]">
            <div class="text-xs text-[#94A3B8] font-mono">Auto-Healed Incidents</div>
            <div class="text-2xl font-bold font-mono text-indigo-400 mt-1">${state.healedIncidentsCount}</div>
          </div>

          <div class="bg-[#141924] p-5 rounded-2xl border border-[#1F2937]">
            <div class="text-xs text-[#94A3B8] font-mono">Mean Time to Repair (MTTR)</div>
            <div class="text-2xl font-bold font-mono text-white mt-1">1.4s</div>
          </div>
        </div>

        <!-- Collector Status Table -->
        <div class="bg-[#141924] rounded-2xl border border-[#1F2937] overflow-hidden">
          <div class="bg-[#0A0E14] px-6 py-3.5 border-b border-[#1F2937] flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-white uppercase tracking-wider">Collector Pipelines Status</span>
            <span class="text-xs text-[#94A3B8]">Bright Data Web Scraper API Engine</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#0D121B] text-[#94A3B8] font-mono border-b border-[#1F2937]">
                <tr>
                  <th class="px-6 py-3">Collector ID</th>
                  <th class="px-6 py-3">Target Public Portal</th>
                  <th class="px-6 py-3">Error Rate</th>
                  <th class="px-6 py-3">Last Sync</th>
                  <th class="px-6 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#1F2937] text-white">
                ${state.collectors.map((c) => {
        let badge = '<span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">\u{1F7E2} Healthy</span>';
        if (c.status === "DEGRADED") {
          badge = '<span class="px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-mono animate-pulse">\u{1F534} Degraded (DOM Drift)</span>';
        } else if (c.status === "REPAIRING") {
          badge = '<span class="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono animate-pulse">\u{1F7E1} AI Repairing</span>';
        } else if (c.status === "PATCH_PENDING") {
          badge = '<span class="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">\u{1F535} Patch Pending</span>';
        }
        return `
                    <tr class="hover:bg-[#1E2536]/50 transition">
                      <td class="px-6 py-3.5 font-mono font-bold">${c.name}</td>
                      <td class="px-6 py-3.5 text-[#94A3B8]">${c.target}</td>
                      <td class="px-6 py-3.5 font-mono ${c.errorRate !== "0.00%" && c.errorRate !== "0.01%" && c.errorRate !== "0.02%" ? "text-red-400 font-bold" : "text-gray-300"}">${c.errorRate}</td>
                      <td class="px-6 py-3.5 text-[#94A3B8]">${c.lastSync}</td>
                      <td class="px-6 py-3.5 text-right">${badge}</td>
                    </tr>
                  `;
      }).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Side-by-Side Payload Diff Inspector -->
        <div id="diff-viewer-mount"></div>

        <!-- Streaming Terminal Console (Section 2 & 3 Requirement) -->
        <div class="bg-[#0A0E14] rounded-2xl border border-[#1F2937] overflow-hidden shadow-2xl">
          <div class="bg-[#0F141C] px-5 py-3 border-b border-[#1F2937] flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div class="flex space-x-1.5">
                <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span class="text-xs font-mono text-gray-300 font-bold ml-2">Collector Stream Log Console</span>
            </div>
            <span class="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">REALTIME LOG STREAM</span>
          </div>

          <div id="terminal-log-output" class="p-5 font-mono text-xs space-y-2 overflow-y-auto max-h-80 text-gray-300 leading-relaxed">
            ${state.logHistory.map((l) => {
        let color = "text-gray-300";
        if (l.level === "ERROR") color = "text-red-400 font-bold bg-red-500/10 p-1 rounded";
        if (l.level === "WARN") color = "text-amber-400 font-semibold";
        if (l.level === "SUCCESS") color = "text-emerald-400 font-semibold";
        return `
                <div class="flex items-start space-x-3">
                  <span class="text-[#94A3B8] text-[11px] select-none">${l.timestamp}</span>
                  <span class="px-1.5 py-0.2 rounded text-[10px] bg-[#1F2937] text-indigo-300 select-none">${l.source}</span>
                  <span class="${color}">${l.message}</span>
                </div>
              `;
      }).join("")}
          </div>
        </div>

      </div>
    `;
      this.attachEvents();
      if (!this.diffViewer) {
        this.diffViewer = new PayloadDiffViewer("diff-viewer-mount", {
          brokenPayload: state.brokenPayload,
          healedPayload: state.healedPayload
        });
      } else {
        this.diffViewer.update(state.brokenPayload, state.healedPayload);
      }
      this.unsubscribe = selfHealingEngine.subscribe((newState) => {
        this.updateStateUI(newState);
      });
    }
    updateStateUI(state) {
      const term = document.getElementById("terminal-log-output");
      if (term) {
        term.innerHTML = state.logHistory.map((l) => {
          let color = "text-gray-300";
          if (l.level === "ERROR") color = "text-red-400 font-bold bg-red-500/10 p-1 rounded";
          if (l.level === "WARN") color = "text-amber-400 font-semibold";
          if (l.level === "SUCCESS") color = "text-emerald-400 font-semibold";
          return `
          <div class="flex items-start space-x-3">
            <span class="text-[#94A3B8] text-[11px] select-none">${l.timestamp}</span>
            <span class="px-1.5 py-0.2 rounded text-[10px] bg-[#1F2937] text-indigo-300 select-none">${l.source}</span>
            <span class="${color}">${l.message}</span>
          </div>
        `;
        }).join("");
        term.scrollTop = term.scrollHeight;
      }
      if (this.diffViewer) {
        this.diffViewer.update(state.brokenPayload, state.healedPayload);
      }
    }
    attachEvents() {
      const btnDrift = this.container.querySelector("#btn-drift");
      const btnHeal = this.container.querySelector("#btn-heal");
      const btnApprove = this.container.querySelector("#btn-approve");
      const btnReset = this.container.querySelector("#btn-reset");
      if (btnDrift) btnDrift.addEventListener("click", () => {
        selfHealingEngine.simulateDrift();
        this.render();
      });
      if (btnHeal) btnHeal.addEventListener("click", () => {
        selfHealingEngine.triggerSelfHealing();
        this.render();
      });
      if (btnApprove) btnApprove.addEventListener("click", () => {
        selfHealingEngine.approvePatch();
        this.render();
      });
      if (btnReset) btnReset.addEventListener("click", () => {
        selfHealingEngine.reset();
        this.render();
      });
    }
  };

  // AboutView.js
  var AboutView = class {
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
                Emerging technology hubs announce themselves before anyone names them. A university publishes a lab opening, an incubator announces a cohort, a company posts a facility expansion, a meetup appears \u2014 four unrelated organisations, four unrelated websites, the same city and the same technical domain, all within a few weeks. Nobody publishes that. It only exists as a pattern across sources. We wanted to build the backend that finds it.
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
      if (!document.getElementById("about-animations")) {
        const style = document.createElement("style");
        style.id = "about-animations";
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
      this.container.innerHTML = "";
    }
  };

  // app.js
  var App = class {
    constructor() {
      this.activeMode = "opportunities";
      this.activeView = "landing";
      this.topBar = null;
      this.landingView = null;
      this.mapView = null;
      this.pipelineView = null;
      this.aboutView = null;
      this.init();
    }
    init() {
      try {
        window.addEventListener("error", (e) => {
          console.error("Signal Atlas Runtime Exception:", e);
        });
        const mainMount = document.getElementById("main-mount");
        if (mainMount) {
          mainMount.innerHTML = `
          <div id="section-landing" class="min-h-screen relative border-b border-[#1F2937]/50"></div>
          <div id="section-map" class="min-h-screen relative border-b border-[#1F2937]/50 py-8"></div>
          <div id="section-pipeline" class="min-h-screen relative border-b border-[#1F2937]/50 py-8"></div>
          <div id="section-about" class="min-h-screen relative py-8"></div>
        `;
          this.landingView = new LandingView("section-landing", {
            onNavigate: (targetView, targetMode) => this.scrollToSection(targetView, targetMode)
          });
          this.mapView = new MapDashboardView("section-map", {
            activeMode: this.activeMode,
            onNavigate: (targetView, targetMode) => this.scrollToSection(targetView, targetMode)
          });
          this.pipelineView = new PipelineHealthView("section-pipeline");
          this.aboutView = new AboutView("section-about");
        }
        this.topBar = new TopBar("topbar-mount", {
          activeView: "landing",
          activeMode: this.activeMode,
          onViewChange: (view) => this.scrollToSection(view),
          onModeChange: (mode) => this.setMode(mode)
        });
        this.initScrollSpy();
        window.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            const backdrop = document.getElementById("drawer-backdrop");
            if (backdrop) backdrop.click();
          }
        });
      } catch (err) {
        console.error("App Initialization Error:", err);
      }
    }
    scrollToSection(view, mode = null) {
      if (mode) {
        this.setMode(mode);
      }
      const targetEl = document.getElementById(`section-${view}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMode(mode) {
      this.activeMode = mode;
      if (this.topBar) {
        this.topBar.update(this.activeView, this.activeMode);
      }
      if (this.mapView && typeof this.mapView.setMode === "function") {
        this.mapView.setMode(mode);
      }
    }
    initScrollSpy() {
      const sections = [
        { id: "section-landing", name: "landing" },
        { id: "section-[#section-landing]", name: "landing" },
        { id: "section-map", name: "map" },
        { id: "section-pipeline", name: "pipeline" },
        { id: "section-about", name: "about" }
      ];
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find((s) => s.id === entry.target.id);
            if (matched && this.topBar) {
              this.activeView = matched.name;
              this.topBar.update(matched.name, this.activeMode);
            }
          }
        });
      }, { threshold: 0.2 });
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    window.app = new App();
  });
})();
