/**
 * SPIDER-MAN AUTONOMOUS WEB INTELLIGENCE — REVERTED PRECISE 3-SCENE BUNDLE
 * 01. OVERVIEW (Evolving Web Canvas) + 02. CONVERGENCE MAP (Original D3 Map) + 03. PIPELINE HEALTH
 */

let currentSceneIndex = 0;
let isAnimating = false;
let scrollLockTimeout = null;

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initPalominoScrollPrecise();
  initHeroWebCanvas();
  initOriginalGeoMap();
  initHorizontalPipeline();
});

/* --- 1. Custom Lerping Cursor Follower --- */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .indicator-dot, .nav-link-item')) {
      cursor.classList.add('hovered');
      cursor.innerText = '';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .indicator-dot, .nav-link-item')) {
      cursor.classList.remove('hovered');
      cursor.innerText = '';
    }
  });
}

/* --- 2. PRECISE 1-STEP SCROLL LOCKING --- */
function initPalominoScrollPrecise() {
  const scenes = document.querySelectorAll('.scene-section');
  const dots = document.querySelectorAll('.indicator-dot');
  const navLinks = document.querySelectorAll('.nav-link-item');
  const totalScenes = scenes.length;

  function goToScene(targetIndex) {
    if (targetIndex < 0 || targetIndex >= totalScenes || targetIndex === currentSceneIndex || isAnimating) return;

    isAnimating = true;

    const currentScene = scenes[currentSceneIndex];
    const nextScene = scenes[targetIndex];

    if (targetIndex > currentSceneIndex) {
      currentScene.classList.remove('scene-active');
      currentScene.classList.add('scene-exit');
    } else {
      currentScene.classList.remove('scene-active', 'scene-exit');
    }

    nextScene.classList.remove('scene-exit');
    nextScene.classList.add('scene-active');

    dots.forEach((dot, idx) => {
      if (idx === targetIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });

    navLinks.forEach(link => {
      if (parseInt(link.getAttribute('data-scene')) === targetIndex) link.classList.add('active');
      else link.classList.remove('active');
    });

    currentSceneIndex = targetIndex;

    if (scrollLockTimeout) clearTimeout(scrollLockTimeout);
    scrollLockTimeout = setTimeout(() => {
      isAnimating = false;
    }, 1200);
  }

  let lastWheelTime = 0;
  window.addEventListener('wheel', (e) => {
    e.preventDefault();

    const now = Date.now();
    if (isAnimating || (now - lastWheelTime < 1000)) return;

    if (Math.abs(e.deltaY) > 25) {
      lastWheelTime = now;
      if (e.deltaY > 0) {
        goToScene(currentSceneIndex + 1);
      } else {
        goToScene(currentSceneIndex - 1);
      }
    }
  }, { passive: false });

  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (isAnimating) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffY) > 50) {
      if (diffY > 0) goToScene(currentSceneIndex + 1);
      else goToScene(currentSceneIndex - 1);
    }
  }, { passive: true });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToScene(idx));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const idx = parseInt(link.getAttribute('data-scene'));
      if (!isNaN(idx)) goToScene(idx);
    });
  });
}

/* --- 3. Scene 01: Evolving Spider-Web Network Canvas --- */
function initHeroWebCanvas() {
  const canvas = document.getElementById('hero-web-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const numNodes = 75;
  const nodes = [];

  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() > 0.85 ? 4 : 2,
      isRed: Math.random() > 0.8
    });
  }

  function renderHeroWeb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
    });

    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.25;
          ctx.strokeStyle = nodes[i].isRed || nodes[j].isRed ? `rgba(227, 38, 46, ${alpha})` : `rgba(255, 255, 255, ${alpha * 0.6})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(node => {
      ctx.fillStyle = node.isRed ? '#E3262E' : '#FFFFFF';
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();

      if (node.isRed) {
        ctx.strokeStyle = 'rgba(227, 38, 46, 0.4)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    requestAnimationFrame(renderHeroWeb);
  }
  renderHeroWeb();
}

/* --- 4. Scene 02: ORIGINAL REAL D3 GEOJSON MAP DASHBOARD COMPONENT --- */
const CONVERGENCE_NODES = [
  { id: 'node-austin', city: 'Austin', country: 'USA', coordinates: [-97.7431, 30.2672], domain: 'Tech & Mobility', score: 9.8, fillRate: '99.8%' },
  { id: 'node-sanjose', city: 'San Jose', country: 'USA', coordinates: [-121.8863, 37.3382], domain: 'Semiconductors', score: 9.6, fillRate: '100%' },
  { id: 'node-london', city: 'London', country: 'UK', coordinates: [-0.1276, 51.5074], domain: 'Fintech Hub', score: 9.1, fillRate: '98.5%' },
  { id: 'node-berlin', city: 'Berlin', country: 'Germany', coordinates: [13.4050, 52.5200], domain: 'AI Research', score: 8.9, fillRate: '99.1%' },
  { id: 'node-bangalore', city: 'Bengaluru', country: 'India', coordinates: [77.5946, 12.9716], domain: 'Global Capability Center', score: 9.7, fillRate: '99.4%' },
  { id: 'node-pune', city: 'Pune', country: 'India', coordinates: [73.8567, 18.5204], domain: 'EV & Automotive R&D', score: 9.3, fillRate: '97.9%' },
  { id: 'node-singapore', city: 'Singapore', country: 'Singapore', coordinates: [103.8198, 1.3521], domain: 'Deep Tech & Logistics', score: 9.4, fillRate: '99.0%' },
  { id: 'node-tokyo', city: 'Tokyo', country: 'Japan', coordinates: [139.6917, 35.6895], domain: 'Robotics & Optical', score: 9.2, fillRate: '98.8%' }
];

const SIGNAL_CONNECTIONS = [
  { source: [-121.8863, 37.3382], target: [77.5946, 12.9716] },
  { source: [-97.7431, 30.2672], target: [13.4050, 52.5200] },
  { source: [-0.1276, 51.5074], target: [103.8198, 1.3521] },
  { source: [77.5946, 12.9716], target: [73.8567, 18.5204] },
  { source: [139.6917, 35.6895], target: [-121.8863, 37.3382] }
];

function initOriginalGeoMap() {
  const mount = document.getElementById('map-dashboard-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="lg:col-span-8">
        <div class="map-canvas-container" id="map-container">
          <svg class="map-svg" id="map-svg"></svg>
          <div id="node-card" class="hidden absolute bottom-6 left-6 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#1F2937] p-4 text-white w-72 shadow-2xl z-20 font-mono text-xs">
            <div class="flex justify-between items-center pb-2 border-b border-[#1F2937]">
              <span id="card-city" class="font-serif font-bold text-base">Austin, USA</span>
              <span id="card-score" class="text-[#E3262E] font-bold">9.8</span>
            </div>
            <div class="space-y-1 pt-3">
              <div class="text-[#8A8A8A]">DOMAIN: <span id="card-domain" class="text-white">Tech & Mobility</span></div>
              <div class="text-[#8A8A8A]">FILL RATE: <span id="card-fill" class="text-[#E3262E]">99.8%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 bg-[#0D0D0D] border border-[#1F2937] p-6 space-y-4 text-white font-mono text-xs">
        <div class="text-[#E3262E] tracking-widest uppercase">ACTIVE CONVERGENCE INDEX</div>
        <div class="space-y-2 max-h-[440px] overflow-y-auto pr-1" id="node-index-list"></div>
      </div>
    </div>
  `;

  renderOriginalD3Map();
  renderNodeList();
}

function renderOriginalD3Map() {
  const container = document.getElementById('map-container');
  const svg = d3.select('#map-svg');
  if (!container || svg.empty()) return;

  const width = container.clientWidth || 800;
  const height = container.clientHeight || 520;

  svg.attr('viewBox', `0 0 ${width} ${height}`);

  const projection = d3.geoNaturalEarth1()
    .scale(width / 5.2)
    .translate([width / 2, height / 1.8]);

  const path = d3.geoPath().projection(projection);

  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(res => res.json())
    .then(worldData => {
      const countries = topojson.feature(worldData, worldData.objects.countries);

      svg.append('g')
        .selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'map-country')
        .attr('d', path);

      const arcGroup = svg.append('g');
      SIGNAL_CONNECTIONS.forEach(conn => {
        const p1 = projection(conn.source);
        const p2 = projection(conn.target);
        if (p1 && p2) {
          const dx = p2[0] - p1[0];
          const dy = p2[1] - p1[1];
          const dr = Math.sqrt(dx * dx + dy * dy) * 1.2;
          arcGroup.append('path')
            .attr('class', 'map-arc')
            .attr('d', `M${p1[0]},${p1[1]}A${dr},${dr} 0 0,1 ${p2[0]},${p2[1]}`);
        }
      });

      const nodeGroup = svg.append('g');
      CONVERGENCE_NODES.forEach(node => {
        const pos = projection(node.coordinates);
        if (!pos) return;

        const g = nodeGroup.append('g')
          .attr('transform', `translate(${pos[0]}, ${pos[1]})`)
          .style('cursor', 'pointer')
          .on('click', () => selectNode(node));

        g.append('circle').attr('r', 8).attr('fill', '#E3262E').attr('opacity', 0.3);
        g.append('circle').attr('r', 4).attr('fill', '#E3262E');
      });
    });
}

function selectNode(node) {
  const card = document.getElementById('node-card');
  if (!card) return;
  card.classList.remove('hidden');
  document.getElementById('card-city').innerText = `${node.city}, ${node.country}`;
  document.getElementById('card-score').innerText = node.score;
  document.getElementById('card-domain').innerText = node.domain;
  document.getElementById('card-fill').innerText = node.fillRate;
}

function renderNodeList() {
  const list = document.getElementById('node-index-list');
  if (!list) return;
  list.innerHTML = CONVERGENCE_NODES.map(node => `
    <div class="p-3 border border-[#1F2937] hover:border-[#E3262E] bg-[#050505] cursor-pointer transition-colors" onclick="selectNodeById('${node.id}')">
      <div class="flex justify-between items-center">
        <span class="font-serif font-bold text-sm text-white">${node.city}, ${node.country}</span>
        <span class="text-[#E3262E]">${node.score}</span>
      </div>
      <div class="text-[10px] text-[#8A8A8A] mt-1">${node.domain}</div>
    </div>
  `).join('');
}

window.selectNodeById = function(id) {
  const node = CONVERGENCE_NODES.find(n => n.id === id);
  if (node) selectNode(node);
};

/* --- 5. Scene 03: Horizontal Self-Healing Pipeline Controller --- */
function initHorizontalPipeline() {
  const glitchStep = document.getElementById('pstep-2');
  if (!glitchStep) return;

  setInterval(() => {
    glitchStep.classList.add('glitch-step');
    setTimeout(() => {
      glitchStep.classList.remove('glitch-step');
    }, 1500);
  }, 4000);
}
