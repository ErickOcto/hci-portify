import './style.css';

// --- Global UI Elements & Setup ---
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSSLBanner();
  initWebsiteStatus();
  initQuickActions();
  initAnalyticsChart();
});

// --- Toast Notification System ---
function showToast(message, type = 'info') {
  const portal = document.getElementById('notification-portal');
  if (!portal) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center space-x-3 px-4 py-3 rounded-xl shadow-lg border text-sm font-semibold transition-all duration-300 transform translate-y-4 opacity-0 max-w-sm bg-white`;

  // Color styling based on type
  if (type === 'success') {
    toast.className += ' border-emerald-100 text-emerald-800 bg-emerald-50/95';
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-emerald-600 flex-shrink-0">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>${message}</span>
    `;
  } else if (type === 'warning') {
    toast.className += ' border-amber-100 text-amber-800 bg-amber-50/95';
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-amber-600 flex-shrink-0">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
      <span>${message}</span>
    `;
  } else {
    toast.className += ' border-slate-100 text-slate-800 bg-white/95';
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-blue-600 flex-shrink-0">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>${message}</span>
    `;
  }

  portal.appendChild(toast);

  // Trigger entering animation
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// --- 1. Sidebar Tabs ---
function initTabs() {
  const navLinks = document.getElementById('nav-links');
  const label = document.getElementById('current-tab-label');
  if (!navLinks) return;

  const buttons = navLinks.querySelectorAll('button[data-tab]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Clear active style on all buttons
      buttons.forEach(b => {
        b.className = "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-600 hover:bg-slate-50 hover:text-slate-900";
      });

      // Set active style on clicked
      btn.className = "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all bg-blue-50 text-blue-600";

      // Update header label
      const tabName = btn.querySelector('span').innerText;
      if (label) {
        label.innerText = tabName;
      }

      showToast(`Switched to tab: ${tabName}`);
    });
  });

  // Profile Menu Dropdown Toggle
  const profileBtn = document.getElementById('profile-btn');
  const profileMenu = document.getElementById('profile-menu');
  if (profileBtn && profileMenu) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
      profileMenu.classList.add('hidden');
    });
  }
}

// --- 2. SSL Banner ---
function initSSLBanner() {
  const alert = document.getElementById('ssl-alert');
  const closeBtn = document.getElementById('close-ssl-alert');
  const renewBtn = document.getElementById('renew-ssl-btn');

  if (!alert) return;

  const dismissAlert = () => {
    alert.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      alert.remove();
    }, 300);
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissAlert();
      showToast('SSL expiry warning dismissed.');
    });
  }

  if (renewBtn) {
    renewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renewBtn.innerText = 'Renewing...';
      renewBtn.disabled = true;

      // Simulate network request
      setTimeout(() => {
        dismissAlert();
        showToast('SSL Certificate successfully renewed for 365 days!', 'success');
        
        // Add renewal entry to Recent Activity log
        appendActivityLog('SSL certificate renewed', 'Just now · by System', 'rose');
      }, 1200);
    });
  }
}

// --- Helper: Add Event to Activity Log ---
function appendActivityLog(title, desc, colorTheme) {
  const list = document.getElementById('activity-list');
  if (!list) return;

  const item = document.createElement('div');
  item.className = 'flex items-start space-x-3 animate-fade-in-down';

  let bgClass = 'bg-slate-50 text-slate-600';
  if (colorTheme === 'rose') bgClass = 'bg-rose-50 text-rose-600';
  if (colorTheme === 'blue') bgClass = 'bg-blue-50 text-blue-600';
  if (colorTheme === 'emerald') bgClass = 'bg-emerald-50 text-emerald-600';

  item.innerHTML = `
    <div class="${bgClass} p-2 rounded-xl flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="min-w-0">
      <p class="text-sm font-semibold text-slate-700">${title}</p>
      <p class="text-xs text-slate-400 mt-0.5">${desc}</p>
    </div>
  `;

  list.insertBefore(item, list.firstChild);
}

// --- 3. Website Status Toggler ---
function initWebsiteStatus() {
  const toggleBtn = document.getElementById('toggle-maintenance-btn');
  const badge = document.getElementById('site-status-badge');

  if (!toggleBtn || !badge) return;

  let isLive = true;

  toggleBtn.addEventListener('click', () => {
    isLive = !isLive;

    if (isLive) {
      // Toggle back to Live
      badge.className = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 transition-all";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>Live`;
      showToast('Website is now live and serving production traffic.', 'success');
      appendActivityLog('Site status set to Live', 'Just now · by You', 'emerald');
    } else {
      // Toggle to Maintenance
      badge.className = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100 transition-all";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>Maintenance`;
      showToast('Website set to maintenance mode.', 'warning');
      appendActivityLog('Site status set to Maintenance', 'Just now · by You', 'blue');
    }
  });
}

// --- 4. Quick Actions Trigger ---
function initQuickActions() {
  const actionButtons = document.querySelectorAll('.quick-action-btn');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const taskName = btn.querySelector('span').innerText;
      showToast(`Initiating task: "${taskName}"...`);

      if (taskName === 'Check SEO') {
        setTimeout(() => {
          showToast('SEO Audit completed: 92/100 score.', 'success');
          appendActivityLog('SEO audit performed', 'Just now · by System', 'blue');
        }, 1500);
      } else if (taskName === 'Deploy site') {
        setTimeout(() => {
          showToast('Production deployment successful!', 'success');
          appendActivityLog('Site deployed successfully', 'Just now · by You', 'emerald');
        }, 2000);
      } else {
        setTimeout(() => {
          showToast(`"${taskName}" task successfully finished.`, 'success');
        }, 1000);
      }
    });
  });
}

// --- 5. Interactive SVG Spline Chart ---
function initAnalyticsChart() {
  const svg = document.getElementById('analytics-svg');
  const linePath = document.getElementById('chart-line-path');
  const areaPath = document.getElementById('chart-area-path');
  const hoverLine = document.getElementById('chart-hover-line');
  const tooltip = document.getElementById('chart-tooltip');
  const nodesGroup = document.getElementById('chart-nodes-group');

  if (!svg || !linePath || !areaPath || !nodesGroup) return;

  // Analytics Data Points
  const data = [
    { day: 'Monday', value: 850 },
    { day: 'Tuesday', value: 1100 },
    { day: 'Wednesday', value: 920 },
    { day: 'Thursday', value: 1430 },
    { day: 'Friday', value: 1240 },
    { day: 'Saturday', value: 1680 },
    { day: 'Sunday', value: 1590 }
  ];

  // Coordinates Mapping System
  const svgWidth = 1000;
  const svgHeight = 240;
  const paddingX = 40;
  const paddingY = 40;

  const minVal = 500;
  const maxVal = 1800;

  const points = data.map((d, index) => {
    const x = paddingX + (index * (svgWidth - (paddingX * 2)) / (data.length - 1));
    const y = svgHeight - paddingY - ((d.value - minVal) * (svgHeight - (paddingY * 2)) / (maxVal - minVal));
    return { x, y, ...d };
  });

  // Spline Drawing helper (Catmull-Rom to Cubic Bezier spline)
  const drawSpline = (pts) => {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const curr = pts[i];
      const next = pts[i + 1];
      
      // Control point offsets
      const cpX1 = curr.x + (next.x - curr.x) / 3;
      const cpY1 = curr.y;
      const cpX2 = curr.x + 2 * (next.x - curr.x) / 3;
      const cpY2 = next.y;

      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }
    return d;
  };

  const lineD = drawSpline(points);
  linePath.setAttribute('d', lineD);

  // Gradient Area closing points
  const areaD = `${lineD} L ${points[points.length - 1].x} ${svgHeight} L ${points[0].x} ${svgHeight} Z`;
  areaPath.setAttribute('d', areaD);

  // Render SVG Node Circles and Register Listeners
  points.forEach((p, idx) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'cursor-pointer group');

    // Glow ring circle
    const glowCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    glowCircle.setAttribute('cx', p.x);
    glowCircle.setAttribute('cy', p.y);
    glowCircle.setAttribute('r', 10);
    glowCircle.setAttribute('fill', '#18a0fb');
    glowCircle.setAttribute('fill-opacity', '0');
    glowCircle.setAttribute('class', 'transition-all duration-200 group-hover:fill-opacity-25');

    // Central solid dot
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', p.x);
    dot.setAttribute('cy', p.y);
    dot.setAttribute('r', 5);
    dot.setAttribute('fill', '#ffffff');
    dot.setAttribute('stroke', '#18a0fb');
    dot.setAttribute('stroke-width', '3');
    dot.setAttribute('class', 'transition-all duration-200 group-hover:r-6 group-hover:stroke-width-4');

    group.appendChild(glowCircle);
    group.appendChild(dot);
    nodesGroup.appendChild(group);

    // Mouse Interactions (Hover Tooltips)
    group.addEventListener('mouseenter', () => {
      // 1. Show & Position Vertical guide line
      hoverLine.setAttribute('x1', p.x);
      hoverLine.setAttribute('x2', p.x);
      hoverLine.classList.remove('opacity-0');

      // 2. Format Tooltip Texts
      document.getElementById('tooltip-day').innerText = p.day;
      document.getElementById('tooltip-value').innerText = `${p.value.toLocaleString()} Visitors`;

      // 3. Align Tooltip Div
      tooltip.classList.remove('hidden');
      
      // Compute coordinates relative to the svg parent container
      const containerRect = svg.getBoundingClientRect();
      const pctX = p.x / svgWidth;
      const pctY = p.y / svgHeight;

      const tooltipX = pctX * containerRect.width;
      const tooltipY = pctY * containerRect.height - 70; // Float above

      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${tooltipY}px`;
      tooltip.style.transform = 'translateX(-50%)';
    });

    group.addEventListener('mouseleave', () => {
      hoverLine.classList.add('opacity-0');
      tooltip.classList.add('hidden');
    });
  });
}
