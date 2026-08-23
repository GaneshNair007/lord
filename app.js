/**
 * Signal Atlas — Main Application Orchestrator (Full Scrollable Web App)
 */

import { TopBar } from './TopBar.js';
import { LandingView } from './LandingView.js';
import { MapDashboardView } from './MapDashboardView.js';
import { PipelineHealthView } from './PipelineHealthView.js';
import { AboutView } from './AboutView.js';

class App {
  constructor() {
    this.activeMode = 'opportunities';
    this.activeView = 'landing';
    this.topBar = null;
    this.landingView = null;
    this.mapView = null;
    this.pipelineView = null;
    this.aboutView = null;

    this.init();
  }

  init() {
    try {
      window.addEventListener('error', (e) => {
        console.error("Signal Atlas Runtime Exception:", e);
      });

      const mainMount = document.getElementById('main-mount');
      if (mainMount) {
        mainMount.innerHTML = `
          <div id="section-landing" class="min-h-screen relative border-b border-[#1F2937]/50"></div>
          <div id="section-map" class="min-h-screen relative border-b border-[#1F2937]/50 py-8"></div>
          <div id="section-pipeline" class="min-h-screen relative border-b border-[#1F2937]/50 py-8"></div>
          <div id="section-about" class="min-h-screen relative py-8"></div>
        `;

        // Instantiate all section views sequentially
        this.landingView = new LandingView('section-landing', {
          onNavigate: (targetView, targetMode) => this.scrollToSection(targetView, targetMode)
        });

        this.mapView = new MapDashboardView('section-map', {
          activeMode: this.activeMode,
          onNavigate: (targetView, targetMode) => this.scrollToSection(targetView, targetMode)
        });

        this.pipelineView = new PipelineHealthView('section-pipeline');
        this.aboutView = new AboutView('section-about');
      }

      // Initialize persistent TopBar header
      this.topBar = new TopBar('topbar-mount', {
        activeView: 'landing',
        activeMode: this.activeMode,
        onViewChange: (view) => this.scrollToSection(view),
        onModeChange: (mode) => this.setMode(mode)
      });

      // ScrollSpy to update TopBar active tab as user scrolls down the page
      this.initScrollSpy();

      // Keyboard accessibility
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const backdrop = document.getElementById('drawer-backdrop');
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
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setMode(mode) {
    this.activeMode = mode;
    if (this.topBar) {
      this.topBar.update(this.activeView, this.activeMode);
    }
    if (this.mapView && typeof this.mapView.setMode === 'function') {
      this.mapView.setMode(mode);
    }
  }

  initScrollSpy() {
    const sections = [
      { id: 'section-landing', name: 'landing' },
      { id: 'section-[#section-landing]', name: 'landing' },
      { id: 'section-map', name: 'map' },
      { id: 'section-pipeline', name: 'pipeline' },
      { id: 'section-about', name: 'about' }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const matched = sections.find(s => s.id === entry.target.id);
          if (matched && this.topBar) {
            this.activeView = matched.name;
            this.topBar.update(matched.name, this.activeMode);
          }
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
