(() => {
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
      const accentColor = isCivic ? "#F59E0B" : "#E3262E";
      const accentBg = isCivic ? "bg-amber-950/60 border-amber-500/40 text-amber-400" : "bg-red-950/60 border-[#E3262E]/60 text-[#E3262E]";
      this.container.innerHTML = `
      <div class="fixed inset-0 z-50 overflow-hidden font-mono">
        
        <!-- Backdrop Overlay -->
        <div id="drawer-backdrop" class="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"></div>

        <!-- Slide-Over Drawer Container -->
        <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div class="w-screen max-w-xl bg-[#0A0A0C] border-l border-[#1F2937] text-white flex flex-col shadow-2xl">
            
            <!-- Drawer Header -->
            <div class="p-6 bg-[#050505] border-b border-[#1F2937] flex items-start justify-between">
              <div class="space-y-1.5 pr-4">
                <div class="flex items-center space-x-2">
                  <span class="px-2.5 py-0.5 text-[10px] font-mono border uppercase tracking-wider ${accentBg}">
                    ${isCivic ? "Civic Issue \xB7 Seeded Data" : "Opportunity Cluster"}
                  </span>
                  <span class="text-xs text-[#8A8A8A] font-mono uppercase">${this.signal.city}</span>
                </div>
                <h3 class="font-serif text-xl font-bold text-white uppercase tracking-tight leading-snug">${this.signal.title}</h3>
              </div>
              <button id="drawer-close-btn" class="p-2 text-[#8A8A8A] hover:text-white hover:bg-[#1F2937] transition" aria-label="Close drawer">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <!-- Emergence Score Badge + Gloss Banner -->
            <div class="p-4 bg-[#050505] border-b border-[#1F2937] flex items-center justify-between gap-4">
              <div class="flex items-center space-x-3">
                <div class="px-3.5 py-2 bg-[#0A0A0C] border border-[#1F2937] font-mono text-center">
                  <div class="text-[10px] text-[#8A8A8A] uppercase">S_emergence</div>
                  <div class="text-xl font-extrabold" style="color: ${accentColor}">${this.signal.emergenceScore.toFixed(2)}</div>
                </div>
                <div>
                  <div class="text-xs font-bold text-white flex items-center space-x-1.5 font-mono">
                    <span>SIGNAL VELOCITY: <strong style="color: ${accentColor}">${this.signal.signalVelocity}</strong></span>
                    <span class="text-[11px] font-mono text-emerald-400 font-semibold">${this.signal.scoreChange}</span>
                  </div>
                  <div class="text-xs text-[#8A8A8A] mt-0.5 italic font-mono">
                    "${this.signal.confidenceGloss}"
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Tabs -->
            <div class="flex border-b border-[#1F2937] bg-[#050505] px-6 text-xs font-mono">
              <button id="tab-overview" class="py-3 px-4 border-b-2 uppercase transition ${this.activeTab === "overview" ? "border-[#E3262E] text-white font-bold" : "border-transparent text-[#8A8A8A] hover:text-white"}">
                Overview &amp; Metrics
              </button>
              <button id="tab-sources" class="py-3 px-4 border-b-2 uppercase transition ${this.activeTab === "sources" ? "border-[#E3262E] text-white font-bold" : "border-transparent text-[#8A8A8A] hover:text-white"}">
                Sources (${this.signal.sources ? this.signal.sources.length : 0})
              </button>
              <button id="tab-timeline" class="py-3 px-4 border-b-2 uppercase transition ${this.activeTab === "timeline" ? "border-[#E3262E] text-white font-bold" : "border-transparent text-[#8A8A8A] hover:text-white"}">
                Timeline
              </button>
              <button id="tab-json" class="py-3 px-4 border-b-2 uppercase transition ${this.activeTab === "json" ? "border-[#E3262E] text-white font-bold" : "border-transparent text-[#8A8A8A] hover:text-white"}">
                Raw JSON
              </button>
            </div>

            <!-- Tab Content Body -->
            <div class="flex-1 overflow-y-auto p-6 space-y-6">
              ${this.renderTabContent()}
            </div>

            <!-- Drawer Footer -->
            <div class="p-4 bg-[#050505] border-t border-[#1F2937] flex items-center justify-between text-xs font-mono">
              <span class="text-[#8A8A8A]">Updated: ${this.signal.lastUpdated || "2 mins ago"}</span>
              <button id="drawer-inspect-pipeline-btn" class="px-3 py-1.5 bg-[#E3262E] text-white font-bold uppercase transition hover:bg-[#C11B22]">
                Inspect Pipeline Health \u2192
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
        <div class="space-y-3 font-mono">
          <div class="text-xs text-[#8A8A8A] uppercase tracking-wider">Ingested Public Sources (${this.signal.sources.length})</div>
          ${this.signal.sources.map((src) => `
            <div class="p-4 bg-[#050505] border border-[#1F2937] space-y-1">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-white">${src.name}</span>
                <span class="px-2 py-0.5 text-[10px] bg-[#0A0A0C] border border-[#1F2937] text-emerald-400 font-mono">${src.status}</span>
              </div>
              <div class="text-xs text-[#8A8A8A] flex justify-between pt-1">
                <span>Category: ${src.type}</span>
                <span>Signal Count: <strong>${src.count}</strong></span>
              </div>
            </div>
          `).join("")}
        </div>
      `;
      }
      if (this.activeTab === "timeline") {
        return `
        <div class="space-y-4 font-mono">
          <div class="text-xs text-[#8A8A8A] uppercase tracking-wider">Chronological Evidence Trail</div>
          <div class="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1F2937]">
            ${this.signal.timeline ? this.signal.timeline.map((t) => `
              <div class="relative pl-7 space-y-0.5">
                <div class="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#E3262E] border-2 border-[#050505]"></div>
                <div class="text-[10px] text-[#E3262E] font-mono">${t.timestamp}</div>
                <div class="text-xs text-white leading-relaxed font-mono">${t.label}</div>
              </div>
            `).join("") : '<div class="text-xs text-[#8A8A8A]">No timeline data recorded.</div>'}
          </div>
        </div>
      `;
      }
      if (this.activeTab === "json") {
        return `
        <div class="space-y-2 font-mono">
          <div class="text-xs text-[#8A8A8A] uppercase tracking-wider">Raw Collector Ingestion Payload</div>
          <pre class="p-4 bg-[#050505] border border-[#1F2937] text-xs text-emerald-400 overflow-x-auto rounded-none font-mono">${JSON.stringify(this.signal.rawPayload || this.signal, null, 2)}</pre>
        </div>
      `;
      }
      const m = this.signal.radarMetrics || { diversity: 85, velocity: 80, density: 90, recency: 88 };
      return `
      <div class="space-y-6 font-mono">
        <div class="space-y-3">
          <div class="text-xs text-[#8A8A8A] uppercase tracking-wider">Spatio-Temporal Convergence Density</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="p-3 bg-[#050505] border border-[#1F2937]">
              <div class="text-[10px] text-[#8A8A8A]">SOURCE DIVERSITY</div>
              <div class="text-lg font-bold text-white">${m.diversity}%</div>
            </div>
            <div class="p-3 bg-[#050505] border border-[#1F2937]">
              <div class="text-[10px] text-[#8A8A8A]">SIGNAL VELOCITY</div>
              <div class="text-lg font-bold text-[#E3262E]">${m.velocity}%</div>
            </div>
            <div class="p-3 bg-[#050505] border border-[#1F2937]">
              <div class="text-[10px] text-[#8A8A8A]">SPATIAL DENSITY</div>
              <div class="text-lg font-bold text-white">${m.density}%</div>
            </div>
            <div class="p-3 bg-[#050505] border border-[#1F2937]">
              <div class="text-[10px] text-[#8A8A8A]">RECENCY DECAY</div>
              <div class="text-lg font-bold text-white">${m.recency}%</div>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="text-xs text-[#8A8A8A] uppercase tracking-wider">Scraper Collector Origin</div>
          <div class="p-4 bg-[#050505] border border-[#1F2937] text-xs space-y-1 text-[#8A8A8A]">
            <div>Collector ID: <strong class="text-white font-mono">${this.signal.rawPayload ? this.signal.rawPayload.primary_collector || "brightdata_job_harvester_v2" : "brightdata_harvester"}</strong></div>
            <div>Source Categories Ingested: <strong class="text-white font-mono">${this.signal.category}</strong></div>
          </div>
        </div>
      </div>
    `;
    }
    attachEvents() {
      const backdrop = this.container.querySelector("#drawer-backdrop");
      const closeBtn = this.container.querySelector("#drawer-close-btn");
      const inspectBtn = this.container.querySelector("#drawer-inspect-pipeline-btn");
      if (backdrop) backdrop.addEventListener("click", () => this.close());
      if (closeBtn) closeBtn.addEventListener("click", () => this.close());
      if (inspectBtn) {
        inspectBtn.addEventListener("click", () => {
          this.close();
          this.onInspectPipeline();
        });
      }
      const tabOverview = this.container.querySelector("#tab-overview");
      const tabSources = this.container.querySelector("#tab-sources");
      const tabTimeline = this.container.querySelector("#tab-timeline");
      const tabJson = this.container.querySelector("#tab-json");
      if (tabOverview) tabOverview.addEventListener("click", () => {
        this.activeTab = "overview";
        this.render();
      });
      if (tabSources) tabSources.addEventListener("click", () => {
        this.activeTab = "sources";
        this.render();
      });
      if (tabTimeline) tabTimeline.addEventListener("click", () => {
        this.activeTab = "timeline";
        this.render();
      });
      if (tabJson) tabJson.addEventListener("click", () => {
        this.activeTab = "json";
        this.render();
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
      <div class="bg-[#050505] flex flex-col font-mono">
        
        <!-- Live Signal Ticker Banner -->
        <div class="bg-[#0A0A0C] border-b border-[#1F2937] px-4 py-2 text-xs text-[#8A8A8A] ticker-wrap">
          <div class="ticker-move flex items-center space-x-8 font-mono">
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#E3262E] animate-pulse"></span>
              <strong class="text-white">Austin, TX:</strong> Quantum Compute R&amp;D Campus S_emergence=8.42 (+140%)
            </span>
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#E3262E] animate-pulse"></span>
              <strong class="text-white">San Jose, CA:</strong> AV Testing Hub S_emergence=9.15 (+210%)
            </span>
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <strong class="text-white">Austin, TX (Civic Seeded):</strong> South End Drainage S_emergence=8.10 (+115%)
            </span>
            <span class="inline-flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-[#E3262E] animate-pulse"></span>
              <strong class="text-white">Seattle, WA:</strong> AI Micro-Data Center Substation S_emergence=8.90 (+175%)
            </span>
          </div>
        </div>

        <!-- Toolbar Controls & Mode Switcher -->
        <div class="bg-[#0A0A0C] border-b border-[#1F2937] px-4 lg:px-8 py-3.5 space-y-3">
          <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            <!-- Dual-Mode Switcher Toggle -->
            <div class="flex items-center bg-[#050505] p-1 border border-[#1F2937] w-full md:w-auto">
              <button id="mode-btn-opp" class="flex-1 md:flex-initial px-4 py-1.5 text-xs font-mono font-bold uppercase transition flex items-center justify-center space-x-2 ${!isCivic ? "bg-[#E3262E] text-white shadow-sm" : "text-[#8A8A8A] hover:text-white"}">
                <span>OPPORTUNITIES (LIVE SCRAPED)</span>
              </button>

              <button id="mode-btn-civic" class="flex-1 md:flex-initial px-4 py-1.5 text-xs font-mono font-bold uppercase transition flex items-center justify-center space-x-2 ${isCivic ? "bg-amber-500 text-black shadow-sm" : "text-[#8A8A8A] hover:text-white"}">
                <span>CIVIC ISSUES (SEEDED DEMO)</span>
              </button>
            </div>

            <!-- Filters Row -->
            <div class="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs font-mono">
              
              <!-- City Selector -->
              <div class="flex items-center space-x-1.5 bg-[#050505] px-3 py-1.5 border border-[#1F2937]">
                <span class="text-[#8A8A8A]">CITY:</span>
                <select id="filter-city" class="bg-transparent text-white border-none focus:ring-0 font-mono uppercase cursor-pointer">
                  ${getCities().map((c) => `<option value="${c}" ${this.filters.city === c ? "selected" : ""} class="bg-[#0A0A0C] text-white">${c === "all" ? "ALL METROS" : c}</option>`).join("")}
                </select>
              </div>

              <!-- Category Filter -->
              <div class="flex items-center space-x-1.5 bg-[#050505] px-3 py-1.5 border border-[#1F2937]">
                <span class="text-[#8A8A8A]">CATEGORY:</span>
                <select id="filter-category" class="bg-transparent text-white border-none focus:ring-0 font-mono uppercase cursor-pointer">
                  ${categories.map((cat) => `<option value="${cat}" ${this.filters.category === cat ? "selected" : ""} class="bg-[#0A0A0C] text-white">${cat === "all" ? "ALL CATEGORIES" : cat}</option>`).join("")}
                </select>
              </div>

              <!-- Emergence Slider -->
              <div class="flex items-center space-x-2 bg-[#050505] px-3 py-1.5 border border-[#1F2937]">
                <span class="text-[#8A8A8A]">MIN S_EMERGENCE:</span>
                <input type="range" id="filter-score" min="0" max="10" step="0.5" value="${this.filters.minScore}" class="w-20 accent-[#E3262E] cursor-pointer">
                <span id="filter-score-val" class="font-mono text-[#E3262E] font-bold w-6 text-right">${this.filters.minScore}</span>
              </div>

            </div>

          </div>
        </div>

        <!-- Main Map Area -->
        <div class="relative flex-1 min-h-[520px] w-full flex flex-col mt-4">
          
          <!-- Leaflet / Vector Spatial Map Container -->
          <div id="map-container" class="map-canvas-container"></div>

          <!-- Empty State Overlay -->
          <div id="map-empty-state" class="${this.currentDataset.length > 0 ? "hidden" : ""} absolute inset-0 z-10 bg-[#050505]/90 backdrop-blur-sm flex items-center justify-center p-6 text-center">
            <div class="max-w-md p-8 bg-[#0A0A0C] border border-[#1F2937] space-y-3 shadow-2xl">
              <h3 class="text-base font-bold font-serif text-white uppercase">NO CONVERGENCE DETECTED YET</h3>
              <p class="text-xs text-[#8A8A8A] font-mono">Signals accumulate as collectors run. Try lowering the emergence score threshold filter above.</p>
              <button id="reset-filters-btn" class="px-4 py-2 bg-[#E3262E] text-white text-xs font-mono font-bold uppercase transition hover:bg-[#C11B22]">
                RESET THRESHOLD FILTER
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
      this.attachEvents();
      this.initMap();
    }
    initMap() {
      setTimeout(() => {
        const mapEl = document.getElementById("map-container");
        if (!mapEl) return;
        const dataset = this.currentDataset;
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
        const borderColor = isCivic ? "border-amber-400 text-amber-400" : "border-[#E3262E] text-[#E3262E]";
        const customIcon = L.divIcon({
          className: "custom-map-marker",
          html: `
          <div class="relative group cursor-pointer" data-id="${item.id}">
            <div class="w-10 h-10 rounded-full bg-[#050505]/90 border-2 ${borderColor} ${pulseClass} flex items-center justify-center font-mono text-xs font-bold shadow-2xl">
              ${item.emergenceScore.toFixed(1)}
            </div>
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[#0A0A0C] text-white text-[11px] font-mono px-3 py-1.5 border border-[#1F2937] whitespace-nowrap z-50 shadow-xl">
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
      const accentColor = isCivic ? "#F59E0B" : "#E3262E";
      const pulseClass = isCivic ? "marker-pulse-civic" : "marker-pulse-opp";
      const cityPositions = {
        "Austin, TX": { left: "45%", top: "65%" },
        "San Jose, CA": { left: "20%", top: "45%" },
        "Seattle, WA": { left: "25%", top: "25%" },
        "Boston, MA": { left: "80%", top: "35%" }
      };
      container.innerHTML = `
      <div class="relative w-full h-full bg-[#080808] overflow-hidden flex flex-col justify-between p-6">
        
        <svg class="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F2937" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path d="M 100 200 Q 300 100 600 300 T 1100 200" fill="none" stroke="#E3262E" stroke-opacity="0.2" stroke-width="2"/>
        </svg>

        <div class="relative z-10 flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
          <div class="flex items-center space-x-2 bg-[#0A0A0C] px-3 py-1.5 border border-[#1F2937]">
            <span class="w-2 h-2 rounded-full" style="background-color: ${accentColor}"></span>
            <span class="text-white font-bold">${isCivic ? "CIVIC ISSUES MODE (SEEDED DATA)" : "OPPORTUNITIES MODE (LIVE SCRAPED)"}</span>
          </div>
          <div class="bg-[#0A0A0C] px-3 py-1.5 border border-[#1F2937]">
            SHOWING <strong class="text-white">${dataset.length}</strong> SPATIAL CLUSTERS
          </div>
        </div>

        <div class="relative z-10 flex-1 my-4">
          ${dataset.map((item) => {
        const pos = cityPositions[item.city] || { left: "50%", top: "50%" };
        return `
              <div class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style="left: ${pos.left}; top: ${pos.top};" data-marker-id="${item.id}">
                <div class="w-12 h-12 rounded-full border-2 ${pulseClass} flex items-center justify-center font-mono text-xs font-bold shadow-2xl transition hover:scale-110" style="background-color: rgba(5,5,5,0.9); border-color: ${accentColor}; color: ${accentColor}">
                  ${item.emergenceScore.toFixed(1)}
                </div>
                <div class="mt-2 bg-[#0A0A0C] text-white text-xs font-mono px-3 py-2 border border-[#1F2937] shadow-xl text-center whitespace-nowrap">
                  <div class="font-bold text-white uppercase">${item.title}</div>
                  <div class="text-[11px] text-[#8A8A8A] font-mono">${item.city} \u2022 ${item.scoreChange}</div>
                </div>
              </div>
            `;
      }).join("")}
        </div>

        <div class="relative z-10 text-[11px] text-[#8A8A8A] font-mono text-center uppercase tracking-wider">
          Click any cluster node above to inspect spatial breakdown &amp; raw payload drawer.
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
          onInspectPipeline: () => this.onNavigate("scene-03")
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
        <div class="bg-[#050505] border border-[#1F2937] p-8 text-center text-[#8A8A8A] font-mono">
          <div class="text-xs uppercase font-bold text-white mb-1">Payload Diff Inspector Idle</div>
          <p class="text-xs">Simulate a scraper DOM drift incident above to inspect side-by-side payload transformations.</p>
        </div>
      `;
        return;
      }
      const brokenStr = JSON.stringify(this.brokenPayload, null, 2);
      const healedStr = this.healedPayload ? JSON.stringify(this.healedPayload, null, 2) : "// Awaiting self-healing agent patch generation...";
      this.container.innerHTML = `
      <div class="bg-[#050505] border border-[#1F2937] overflow-hidden font-mono">
        
        <!-- Header -->
        <div class="bg-[#0A0A0C] px-5 py-3 border-b border-[#1F2937] flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-xs font-mono font-bold text-white uppercase tracking-wider">Payload Diff Viewer</span>
            <span class="text-[10px] px-2 py-0.5 border border-[#E3262E]/40 text-[#E3262E] font-mono uppercase">Side-by-Side</span>
          </div>
          <div class="text-xs font-mono text-[#8A8A8A]">
            COLLECTOR: <span class="text-white font-bold">brightdata_job_harvester_v2</span>
          </div>
        </div>

        <!-- Side-by-Side Code View -->
        <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1F2937]">
          
          <!-- Broken Column -->
          <div class="p-4 bg-[#050505]">
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#1F2937]">
              <span class="text-xs font-bold font-mono text-[#E3262E] flex items-center space-x-1.5 uppercase">
                <span class="w-2 h-2 rounded-full bg-[#E3262E]"></span>
                <span>Degraded Input (Broken DOM AST)</span>
              </span>
              <span class="text-[10px] font-mono text-[#E3262E] bg-red-950/40 px-2 py-0.5 border border-[#E3262E]/40 uppercase">VALIDATION_FAILED</span>
            </div>
            
            <pre class="text-xs text-red-200 overflow-x-auto p-3 bg-[#0A0A0C] border border-[#E3262E]/30 leading-relaxed max-h-96 font-mono"><code>${this.escapeHtml(brokenStr)}</code></pre>

            <div class="mt-3 text-[11px] text-[#E3262E] font-mono bg-red-950/30 p-2.5 border border-[#E3262E]/40">
              \u274C Null value in required spatial key <code class="bg-[#050505] px-1 py-0.5 text-white">location_raw</code>. Collector execution halted.
            </div>
          </div>

          <!-- Healed Column -->
          <div class="p-4 bg-[#050505]">
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#1F2937]">
              <span class="text-xs font-bold font-mono text-emerald-400 flex items-center space-x-1.5 uppercase">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Transformed Output (Auto-Healed JSON)</span>
              </span>
              <span class="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-500/30 uppercase">
                ${this.healedPayload ? "PASSED_AUTO_HEALED" : "PENDING_REPAIR"}
              </span>
            </div>

            <pre class="text-xs text-emerald-200 overflow-x-auto p-3 bg-[#0A0A0C] border border-emerald-500/30 leading-relaxed max-h-96 font-mono"><code>${this.escapeHtml(healedStr)}</code></pre>

            ${this.healedPayload ? `
              <div class="mt-3 text-[11px] text-emerald-400 font-mono bg-emerald-950/30 p-2.5 border border-emerald-500/40 flex items-center justify-between">
                <span>\u2705 Repaired key <code class="bg-[#050505] px-1 py-0.5 text-white">location_raw</code> &amp; fallback selector attached.</span>
                <span class="text-[10px] bg-emerald-950/60 text-emerald-300 px-2 py-0.5 border border-emerald-500/30">99.4% Match</span>
              </div>
            ` : `
              <div class="mt-3 text-[11px] text-amber-400 font-mono bg-amber-950/30 p-2.5 border border-amber-500/40 animate-pulse">
                \u23F3 Waiting for AI Repair Agent trigger...
              </div>
            `}
          </div>

        </div>

      </div>
    `;
    }
    escapeHtml(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
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
      let statusBadgeColor = "bg-emerald-950/40 text-emerald-400 border-emerald-500/30";
      let statusLabel = "\u{1F7E2} SYSTEM HEALTHY \u2014 ALL 4 COLLECTORS OPERATIONAL (FILL RATE 100%)";
      if (isDegraded) {
        statusBadgeColor = "bg-red-950/60 text-[#E3262E] border-[#E3262E] animate-pulse";
        statusLabel = "\u{1F534} CRITICAL: DOM SELECTOR DRIFT DETECTED IN BRIGHTDATA COLLECTOR";
      } else if (isRepairing) {
        statusBadgeColor = "bg-amber-950/60 text-amber-400 border-amber-500/40 animate-pulse";
        statusLabel = "\u{1F7E1} REPAIRING: GEMINI LLM AGENT SYNTHESIZING AST SELECTOR PATCH";
      } else if (isHealedUnapproved) {
        statusBadgeColor = "bg-indigo-950/60 text-indigo-300 border-indigo-500/40 animate-pulse";
        statusLabel = "\u{1F535} AUTO-PATCH GENERATED: AST DIFF READY FOR OPERATOR APPROVAL";
      }
      this.container.innerHTML = `
      <div class="space-y-8 max-w-7xl mx-auto px-4 font-mono">
        
        <!-- Header & Interactive Controls -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#1F2937]">
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1.5 border text-xs font-mono mb-3 ${statusBadgeColor}">
              <span class="w-2 h-2 rounded-full ${isDegraded ? "bg-[#E3262E] animate-ping" : "bg-emerald-400"}"></span>
              <span>${statusLabel}</span>
            </div>
            <h2 class="font-serif text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-tight">PIPELINE HEALTH &amp; RECOVERY CONSOLE</h2>
            <p class="text-xs text-[#8A8A8A] mt-1 font-mono uppercase tracking-wider">Autonomous DOM Drift Detection \xB7 Schema Auto-Repair \xB7 Human Operator Approval Gating</p>
          </div>

          <!-- Quick Action Buttons matching Editorial Theme -->
          <div class="flex flex-wrap items-center gap-3">
            <button id="btn-drift" class="px-4 py-2.5 bg-red-950/40 hover:bg-red-900/60 text-[#E3262E] border border-[#E3262E]/60 text-xs font-bold font-mono uppercase transition flex items-center space-x-2 ${!isHealthy ? "opacity-40 cursor-not-allowed" : ""}" ${!isHealthy ? "disabled" : ""}>
              <span>1. SIMULATE DRIFT</span>
            </button>

            <button id="btn-heal" class="px-4 py-2.5 bg-[#E3262E] hover:bg-[#C11B22] text-white text-xs font-bold font-mono uppercase transition flex items-center space-x-2 shadow-lg shadow-[#E3262E]/20 ${!isDegraded ? "opacity-40 cursor-not-allowed" : ""}" ${!isDegraded ? "disabled" : ""}>
              <span>2. TRIGGER LLM REPAIR</span>
            </button>

            <button id="btn-approve" class="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-extrabold font-mono uppercase transition flex items-center space-x-2 shadow-lg shadow-emerald-500/20 ${!isHealedUnapproved ? "opacity-40 cursor-not-allowed" : ""}" ${!isHealedUnapproved ? "disabled" : ""}>
              <span>3. APPROVE AUTO-PATCH</span>
            </button>

            <button id="btn-reset" class="px-3 py-2.5 bg-[#0A0A0C] hover:bg-[#141924] text-[#8A8A8A] hover:text-white border border-[#1F2937] text-xs font-mono uppercase transition" title="Reset Demo">
              <span>RESET</span>
            </button>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-[#0A0A0C] p-5 border border-[#1F2937]">
            <div class="text-[11px] text-[#8A8A8A] font-mono uppercase tracking-wider">Collector Status</div>
            <div class="text-2xl font-bold font-mono text-white mt-1">
              ${isDegraded ? "3/4 ONLINE" : "4/4 ONLINE"}
            </div>
            <div class="text-[10px] text-[#E3262E] font-mono mt-1">${isDegraded ? "1 Collector Degraded" : "100% Collector Fill Rate"}</div>
          </div>

          <div class="bg-[#0A0A0C] p-5 border border-[#1F2937]">
            <div class="text-[11px] text-[#8A8A8A] font-mono uppercase tracking-wider">Pipeline Uptime</div>
            <div class="text-2xl font-bold font-mono text-emerald-400 mt-1">99.8%</div>
            <div class="text-[10px] text-[#8A8A8A] font-mono mt-1">Zero Data Loss Architecture</div>
          </div>

          <div class="bg-[#0A0A0C] p-5 border border-[#1F2937]">
            <div class="text-[11px] text-[#8A8A8A] font-mono uppercase tracking-wider">Auto-Healed Incidents</div>
            <div class="text-2xl font-bold font-mono text-[#E3262E] mt-1">${state.healedIncidentsCount}</div>
            <div class="text-[10px] text-[#8A8A8A] font-mono mt-1">Mean Repair: 1.4s</div>
          </div>

          <div class="bg-[#0A0A0C] p-5 border border-[#1F2937]">
            <div class="text-[11px] text-[#8A8A8A] font-mono uppercase tracking-wider">Active Selector Schema</div>
            <div class="text-xl font-bold font-mono text-white mt-1 truncate">${state.currentSelector}</div>
            <div class="text-[10px] text-[#8A8A8A] font-mono mt-1">Bright Data Harvester v2.4</div>
          </div>
        </div>

        <!-- Horizontal Pipeline Step Machine Visualizer -->
        <div class="bg-[#0A0A0C] border border-[#1F2937] p-6 space-y-4">
          <div class="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest flex items-center justify-between border-b border-[#1F2937] pb-3">
            <span>5-STEP RECOVERABLE SCRAPER LIFECYCLE</span>
            <span>DOM DRIFT RECOVERY PROTOCOL</span>
          </div>

          <div class="pipeline-track mx-auto">
            <div class="pipeline-step ${isHealthy || isDegraded || isRepairing || isHealedUnapproved ? "active-step" : ""}">
              <div class="step-label">01. DISCOVER</div>
              <div class="step-status text-emerald-400">100% FILL RATE</div>
            </div>
            <div class="pipeline-step ${isHealthy || isDegraded || isRepairing || isHealedUnapproved ? "active-step" : ""}">
              <div class="step-label">02. EXTRACT</div>
              <div class="step-status text-emerald-400">RAW DATA STREAM</div>
            </div>
            <div class="pipeline-step ${isDegraded ? "glitch-step" : "active-step"}">
              <div class="step-label">03. STRUCTURE</div>
              <div class="step-status ${isDegraded ? "text-[#E3262E] font-bold" : "text-emerald-400"}">
                ${isDegraded ? "DOM DRIFT DETECTED" : "SCHEMA VALIDATED"}
              </div>
            </div>
            <div class="pipeline-step ${isRepairing || isHealedUnapproved ? "active-step" : ""}">
              <div class="step-label">04. ANALYZE</div>
              <div class="step-status ${isRepairing ? "text-amber-400 font-bold" : "text-[#8A8A8A]"}">
                ${isRepairing ? "LLM HEALING..." : isHealedUnapproved ? "PATCH SYNTHESIZED" : "AST PARSER READY"}
              </div>
            </div>
            <div class="pipeline-step ${isHealthy && state.healedIncidentsCount > 0 ? "active-step" : ""}">
              <div class="step-label">05. RECOVER</div>
              <div class="step-status text-emerald-400">1.4s AUTO-REPAIRED</div>
            </div>
          </div>
        </div>

        <!-- Payload & AST Diff Inspector Container -->
        <div id="payload-diff-mount" class="bg-[#0A0A0C] border border-[#1F2937] p-6"></div>

      </div>
    `;
      const diffMount = this.container.querySelector("#payload-diff-mount");
      if (diffMount) {
        this.diffViewer = new PayloadDiffViewer("payload-diff-mount");
      }
      this.attachEvents();
      this.subscribeToEngine();
    }
    subscribeToEngine() {
      if (this.unsubscribe) this.unsubscribe();
      this.unsubscribe = selfHealingEngine.subscribe(() => {
        this.render();
      });
    }
    attachEvents() {
      const btnDrift = this.container.querySelector("#btn-drift");
      const btnHeal = this.container.querySelector("#btn-heal");
      const btnApprove = this.container.querySelector("#btn-approve");
      const btnReset = this.container.querySelector("#btn-reset");
      if (btnDrift) btnDrift.addEventListener("click", () => selfHealingEngine.simulateDrift());
      if (btnHeal) btnHeal.addEventListener("click", () => selfHealingEngine.triggerHeal());
      if (btnApprove) btnApprove.addEventListener("click", () => selfHealingEngine.approvePatch());
      if (btnReset) btnReset.addEventListener("click", () => selfHealingEngine.resetDemo());
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
      this.activeMode = "opportunities";
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
        const mapMount = document.getElementById("map-section-mount");
        if (mapMount) {
          this.mapView = new MapDashboardView("map-section-mount", {
            activeMode: this.activeMode,
            onNavigate: (targetView) => this.scrollToSection(targetView)
          });
        }
        const pipelineMount = document.getElementById("pipeline-section-mount");
        if (pipelineMount) {
          this.pipelineView = new PipelineHealthView("pipeline-section-mount");
        }
        const aboutMount = document.getElementById("about-section-mount");
        if (aboutMount) {
          this.aboutView = new AboutView("about-section-mount");
        }
        this.initHeroCanvas();
        this.initCustomCursor();
        this.initNavigation();
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
      let mouse = { x: -1e3, y: -1e3 };
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
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
      const sections = ["scene-01", "scene-02", "scene-03", "scene-04"];
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
