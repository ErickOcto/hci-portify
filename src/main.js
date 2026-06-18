import './style.css';

// --- Portify Global State System ---
let activeProject = 'macbookgng';
const activePages = {
  macbookgng: 'home',
  p1: 'home',
  p2: 'home',
  p3: 'home'
};

const projectData = {
  macbookgng: {
    name: 'Macbook Gng',
    domain: 'macbookgng.com',
    updated: 'Updated 2 hours ago · by You',
    description: 'The ultimate portfolio theme for modern creators and designers. Clean layout, dark modes, and modular blocks.',
    language: 'en',
    seoTitle: 'Design Macbook Gang Pro — Portfolio Theme',
    seoDescription: 'Check out the official Macbook Gang website. Designed with modular blocks, sleek gradients, and clean performance optimization.',
    analyticsId: 'UA-129988-1',
    primaryColor: '#2563eb',
    fontFamily: 'Inter',
    members: [
      { name: 'Jane Doe', email: 'jane@portify.io', role: 'Owner', avatar: '/avatar.png' },
      { name: 'Hafizh', email: 'hafizh@portify.io', role: 'Collaborator', avatar: '/avatar.png' }
    ],
    pages: {
      home: {
        name: 'Home',
        status: 'Generated',
        sections: [
          { type: 'hero', id: 'hero-1', headline: 'Design Macbook Gang Pro', subhead: 'The ultimate portfolio theme for modern creators and designers. Clean layout, dark modes, and modular blocks.', bgTheme: 'slate-dark', ctaPrimary: 'Get Theme', ctaSecondary: 'Learn More' },
          { type: 'features', id: 'features-1', headline: 'Core Core Features', subhead: 'Optimized for speed, visually stunning, and highly modular templates.', bgTheme: 'slate-light', ctaPrimary: '', ctaSecondary: '' },
          { type: 'testimonials', id: 'testimonials-1', headline: 'Trusted by MacBook Gang Creators', subhead: 'Join thousands of designers deploying responsive portfolios.', bgTheme: 'white', ctaPrimary: '', ctaSecondary: '' }
        ]
      },
      products: {
        name: 'Products',
        status: 'Edited',
        sections: [
          { type: 'hero', id: 'hero-2', headline: 'Macbook Pro Accessories', subhead: 'Premium docks, sleeves, and stands to unlock the ultimate desktop experience.', bgTheme: 'violet-gradient', ctaPrimary: 'Explore Gear', ctaSecondary: 'Compare Specs' },
          { type: 'pricing', id: 'pricing-1', headline: 'Gear Bundles', subhead: 'Simple, flat pricing for individual accessories or complete workspace kits.', bgTheme: 'white', ctaPrimary: '', ctaSecondary: '' }
        ]
      },
      contact: {
        name: 'Contact',
        status: 'Empty',
        sections: [
          { type: 'contact', id: 'contact-1', headline: 'Contact Macbook Gang Team', subhead: 'Ask questions, report issues, or get in touch with our creative directors.', bgTheme: 'white', ctaPrimary: '', ctaSecondary: '' }
        ]
      }
    }
  },
  p1: {
    name: 'Project 1',
    domain: 'project1.portify.io',
    updated: 'Created 1 day ago · by System',
    description: 'A clean, modern boilerplate theme ready for your creative content.',
    language: 'en',
    seoTitle: 'Welcome to Project 1',
    seoDescription: 'Project 1 boilerplate site. Kickstart your next development project with custom components.',
    analyticsId: 'UA-129988-2',
    primaryColor: '#3b82f6',
    fontFamily: 'Inter',
    members: [
      { name: 'Jane Doe', email: 'jane@portify.io', role: 'Owner', avatar: '/avatar.png' }
    ],
    pages: {
      home: {
        name: 'Home',
        status: 'Generated',
        sections: [
          { type: 'hero', id: 'hero-p1', headline: 'Welcome to Project 1', subhead: 'A clean, modern boilerplate theme ready for your creative content.', bgTheme: 'blue-royal', ctaPrimary: 'Start Building', ctaSecondary: 'Documentation' }
        ]
      }
    }
  },
  p2: {
    name: 'Project 2',
    domain: 'project2.portify.io',
    updated: 'Created 2 days ago · by System',
    description: 'A clean SaaS website framework for bootstrapping micro-businesses.',
    language: 'en',
    seoTitle: 'Welcome to Project 2',
    seoDescription: 'Project 2 SaaS site. Start selling your product today.',
    analyticsId: 'UA-129988-3',
    primaryColor: '#8b5cf6',
    fontFamily: 'Inter',
    members: [
      { name: 'Jane Doe', email: 'jane@portify.io', role: 'Owner', avatar: '/avatar.png' }
    ],
    pages: {
      home: {
        name: 'Home',
        status: 'Generated',
        sections: [
          { type: 'hero', id: 'hero-p2', headline: 'Welcome to Project 2', subhead: 'A clean SaaS website framework for bootstrapping micro-businesses.', bgTheme: 'slate-light', ctaPrimary: 'Get Access', ctaSecondary: 'Pricing Plans' }
        ]
      }
    }
  },
  p3: {
    name: 'Project 3',
    domain: 'project3.portify.io',
    updated: 'Created 3 days ago · by System',
    description: 'A minimalist photography showcase theme optimized for light and dark contrast.',
    language: 'en',
    seoTitle: 'Welcome to Project 3',
    seoDescription: 'Project 3 photography portfolio site. Stunning visual gallery.',
    analyticsId: 'UA-129988-4',
    primaryColor: '#10b981',
    fontFamily: 'Inter',
    members: [
      { name: 'Jane Doe', email: 'jane@portify.io', role: 'Owner', avatar: '/avatar.png' }
    ],
    pages: {
      home: {
        name: 'Home',
        status: 'Generated',
        sections: [
          { type: 'hero', id: 'hero-p3', headline: 'Welcome to Project 3', subhead: 'A minimalist photography showcase theme optimized for light and dark contrast.', bgTheme: 'white', ctaPrimary: 'View Gallery', ctaSecondary: 'Read Biography' }
        ]
      }
    }
  }
};

// --- Responsive mobile sidebar functions ---
function initMobileSidebar() {
  const toggleBtn = document.getElementById('mobile-sidebar-toggle');
  const sidebar = document.getElementById('main-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !sidebar || !backdrop) return;

  const openSidebar = () => {
    backdrop.classList.remove('hidden');
    // force reflow
    backdrop.offsetHeight;
    backdrop.classList.add('opacity-100');
    sidebar.classList.remove('-translate-x-full');
  };

  const closeSidebar = () => {
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.remove('opacity-100');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  };

  toggleBtn.addEventListener('click', openSidebar);
  backdrop.addEventListener('click', closeSidebar);

  // Close mobile sidebar on link clicks
  if (navLinks) {
    navLinks.querySelectorAll('button[data-tab]').forEach(btn => {
      btn.addEventListener('click', closeSidebar);
    });
  }
}

// --- Dynamic project selector functions ---
function initProjectSwitcher() {
  const projectBtns = document.querySelectorAll('.project-tab-btn');
  
  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      selectProject(projectId);
    });
  });
}

function selectProject(projectId) {
  if (!projectData[projectId]) return;
  activeProject = projectId;

  // Sync Left Sidebar Buttons Styling
  const projectBtns = document.querySelectorAll('.project-tab-btn');
  projectBtns.forEach(b => {
    const pId = b.getAttribute('data-project');
    if (pId === projectId) {
      b.className = "project-tab-btn w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-blue-200 transition-all hover:scale-105";
    } else {
      b.className = "project-tab-btn w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 font-semibold text-xs flex items-center justify-center transition-all hover:border-blue-400 hover:text-blue-700 hover:scale-105";
    }
  });

  const proj = projectData[projectId];

  // Sync Headers
  const sidebarProjName = document.getElementById('sidebar-project-name');
  const headerProjName = document.getElementById('header-project-name');
  if (sidebarProjName) sidebarProjName.innerText = proj.name;
  if (headerProjName) headerProjName.innerText = proj.name;

  // Sync Website status card in Overview
  const statusDomain = document.getElementById('status-card-domain');
  const statusUpdated = document.getElementById('status-card-updated');
  if (statusDomain) statusDomain.innerText = proj.domain;
  if (statusUpdated) statusUpdated.innerText = proj.updated;

  // Sync Visual Builder Site Badge
  const siteBadgeText = document.getElementById('builder-site-badge-text');
  if (siteBadgeText) siteBadgeText.innerText = proj.domain;

  // Refresh Overview Pages list
  renderOverviewPages();

  // Refresh builder dropdown options
  if (window.builderPageManager) {
    window.builderPageManager.updatePageSelect();
    window.builderPageManager.loadPageCanvas(activePages[projectId]);
  }

  // Apply visual branding color/font
  applyBrandingStyles();

  // If settings view is open, synchronize fields
  const settingsView = document.getElementById('settings-view');
  if (settingsView && !settingsView.classList.contains('hidden')) {
    syncSettingsFields();
  }

  showToast(`Switched to workspace: ${proj.name}`, 'success');
}

// --- Dynamic pages list card in Overview ---
function renderOverviewPages() {
  const pagesList = document.getElementById('overview-pages-list');
  if (!pagesList) return;

  pagesList.innerHTML = '';
  const proj = projectData[activeProject];

  Object.keys(proj.pages).forEach(key => {
    const page = proj.pages[key];
    const item = document.createElement('div');
    item.className = 'flex items-center justify-between text-sm hover:bg-slate-50/50 p-1.5 rounded-lg transition-colors cursor-pointer group';
    
    let badgeClass = 'bg-slate-100 text-slate-500';
    if (page.status === 'Generated') badgeClass = 'bg-emerald-50 text-emerald-600 border border-emerald-100';
    if (page.status === 'Edited') badgeClass = 'bg-amber-50 text-amber-600 border border-amber-100';

    item.innerHTML = `
      <div class="flex items-center space-x-2">
        <span class="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
        <span class="font-medium text-slate-600 group-hover:text-slate-900 transition-colors">${page.name}</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xs font-semibold px-2 py-0.5 rounded-md ${badgeClass}">${page.status}</span>
        <button class="overview-edit-page-btn text-slate-400 hover:text-blue-600 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity" title="Edit in Builder" data-page="${key}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
      </div>
    `;

    // Click handler to open page directly in visual builder
    item.addEventListener('click', () => {
      activePages[activeProject] = key;
      
      const builderSelect = document.getElementById('builder-page-select');
      if (builderSelect) builderSelect.value = key;
      
      if (window.builderPageManager) {
        window.builderPageManager.loadPageCanvas(key);
      }

      // Switch view tabs
      const builderTabBtn = document.querySelector('button[data-tab="custom-page"]');
      if (builderTabBtn) builderTabBtn.click();
    });

    pagesList.appendChild(item);
  });
}

// --- Add New Page Modal initializer ---
function initAddPageModal() {
  const addPageModal = document.getElementById('add-page-modal');
  const addPageModalCard = document.getElementById('add-page-modal-card');
  const closeBtn = document.getElementById('close-add-page-modal');
  const cancelBtn = document.getElementById('cancel-add-page-btn');
  const form = document.getElementById('add-page-form');

  const openBtns = [
    document.getElementById('quick-add-page-btn'),
    document.getElementById('overview-add-page-btn'),
    document.getElementById('builder-add-page-btn')
  ];

  if (!addPageModal || !addPageModalCard || !form) return;

  const openModal = () => toggleModalState(addPageModal, addPageModalCard, true);
  const closeModal = () => toggleModalState(addPageModal, addPageModalCard, false);

  openBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pageName = document.getElementById('add-page-name').value.trim();
    const template = document.getElementById('add-page-template').value;

    if (!pageName) return;

    // Standardize page ID
    const pageId = pageName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!pageId) return;

    // Check if page already exists
    const proj = projectData[activeProject];
    if (proj.pages[pageId]) {
      showToast('A page with this name already exists!', 'warning');
      return;
    }

    // Template definitions
    let sections = [];
    if (template === 'default') {
      sections = [
        { type: 'hero', id: `hero-${Date.now()}`, headline: `Welcome to ${pageName}`, subhead: `This is the ${pageName} page of your website. Start custom building sections manually or write AI prompts to instantly rewrite styling.`, bgTheme: 'slate-dark', ctaPrimary: 'Get Started', ctaSecondary: 'Learn More' },
        { type: 'features', id: `features-${Date.now()}`, headline: 'Core Features', subhead: 'Discover the power and flexibility of modular design components.', bgTheme: 'slate-light', ctaPrimary: '', ctaSecondary: '' },
        { type: 'testimonials', id: `testimonials-${Date.now()}`, headline: 'Customer Endorsements', subhead: 'What people are saying about our modern design studio.', bgTheme: 'white', ctaPrimary: '', ctaSecondary: '' }
      ];
    } else if (template === 'landing') {
      sections = [
        { type: 'hero', id: `hero-${Date.now()}`, headline: `Explore ${pageName}`, subhead: `Learn how ${pageName} enables your team to build layouts fast and compile at the edge in seconds.`, bgTheme: 'blue-royal', ctaPrimary: 'Start Free', ctaSecondary: 'Contact Sales' },
        { type: 'cta', id: `cta-${Date.now()}`, headline: 'Ready to launch?', subhead: 'Click below to publish this page instantly to production CDN networks.', bgTheme: 'slate-dark', ctaPrimary: 'Publish Now', ctaSecondary: 'Cancel' }
      ];
    } else {
      sections = [
        { type: 'hero', id: `hero-${Date.now()}`, headline: pageName, subhead: 'This is a blank canvas. Drag components from the left panel onto this canvas to build your page layout.', bgTheme: 'white', ctaPrimary: 'Action 1', ctaSecondary: 'Action 2' }
      ];
    }

    // Add page
    proj.pages[pageId] = {
      name: pageName,
      status: 'Generated',
      sections: sections
    };

    activePages[activeProject] = pageId;

    // Refresh layout views
    renderOverviewPages();
    
    if (window.builderPageManager) {
      window.builderPageManager.updatePageSelect();
      window.builderPageManager.loadPageCanvas(pageId);
    }

    // Reset and close
    form.reset();
    closeModal();

    showToast(`Page "${pageName}" successfully created!`, 'success');
    appendActivityLog(`Created page: ${pageName}`, 'Just now · by You', 'emerald');

    // Automatically navigate to builder
    const builderTabBtn = document.querySelector('button[data-tab="custom-page"]');
    if (builderTabBtn) builderTabBtn.click();
  });
}

// --- Global UI Elements & Setup ---
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSSLBanner();
  initWebsiteStatus();
  initQuickActions();
  initAnalyticsChart();
  initUptimeGrid();
  initPerformanceActions();
  initDatabasePage();
  initDomainPage();
  initVisualBuilder();
  initLivePreview();
  // Custom layout Initializations
  initMobileSidebar();
  initProjectSwitcher();
  initAddPageModal();
  renderOverviewPages();
  initSettingsPage();
  applyBrandingStyles();

  // Overview View Builder footer button redirection
  const viewBuilderBtn = document.getElementById('overview-view-builder-btn');
  if (viewBuilderBtn) {
    viewBuilderBtn.addEventListener('click', () => {
      const builderTabBtn = document.querySelector('button[data-tab="custom-page"]');
      if (builderTabBtn) builderTabBtn.click();
    });
  }
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

// --- Tab-Switching Logic (SPA) ---
function initTabs() {
  const navLinks = document.getElementById('nav-links');
  const label = document.getElementById('current-tab-label');
  const overviewView = document.getElementById('overview-view');
  const performanceView = document.getElementById('performance-view');
  const databaseView = document.getElementById('database-view');
  const domainView = document.getElementById('domain-view');
  const customPageView = document.getElementById('custom-page-view');
  const livePreviewView = document.getElementById('live-preview-view');
  const settingsView = document.getElementById('settings-view');

  if (!navLinks) return;

  const buttons = navLinks.querySelectorAll('button[data-tab]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      // Clear active style on all buttons
      buttons.forEach(b => {
        b.className = "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-600 hover:bg-slate-50 hover:text-slate-900";
      });

      // Set active style on clicked
      btn.className = "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all bg-blue-50 text-blue-600";

      // Update header breadcrumb label
      const tabName = btn.querySelector('span').innerText;
      if (label) {
        label.innerText = tabName;
      }

      // Update dynamic guidance tooltip content
      const guidanceTitle = document.getElementById('guidance-title');
      const guidanceDesc = document.getElementById('guidance-desc');
      if (guidanceTitle && guidanceDesc) {
        if (tabId === 'overview') {
          guidanceTitle.innerText = 'Dashboard Overview';
          guidanceDesc.innerText = 'This dashboard gives you a high-level summary of your project. Monitor site status (deployment, SSL, domain), track recent activities, see listed pages, and access quick actions.';
        } else if (tabId === 'performance') {
          guidanceTitle.innerText = 'Performance Analytics';
          guidanceDesc.innerText = 'Real-time speed and optimization metrics. Monitor page speed, layout stability (CLS), total requests, and resource load times to optimize your website for SEO and users.';
        } else if (tabId === 'database') {
          guidanceTitle.innerText = 'Database Explorer';
          guidanceDesc.innerText = 'Manage your project\'s database tables and records. Perform SQL-style queries, inspect connection statistics, create or delete tables, and track real-time logs.';
        } else if (tabId === 'domain') {
          guidanceTitle.innerText = 'Domain & DNS Settings';
          guidanceDesc.innerText = 'Configure your custom domains and DNS records. Set up custom branding (e.g. yourname.com) and manage records like A, CNAME, and TXT for hosting.';
        } else if (tabId === 'custom-page') {
          guidanceTitle.innerText = 'Visual Builder';
          guidanceDesc.innerText = 'Customize layouts visually. Add components, drag and drop to reorder, delete sections, edit copy in the inspector, or prompt the AI assistant to instantly style sections.';
        } else if (tabId === 'live-preview') {
          guidanceTitle.innerText = 'Live Site Preview';
          guidanceDesc.innerText = 'View and test your published website in a live preview. Switch views to inspect responsiveness across desktop, tablet, and mobile layouts.';
        } else if (tabId === 'settings') {
          guidanceTitle.innerText = 'Project Settings';
          guidanceDesc.innerText = 'Manage your project configurations, descriptions, search engine indexing preferences, access control lists, and custom css branding palettes.';
        } else {
          guidanceTitle.innerText = tabName + ' Guide';
          guidanceDesc.innerText = 'Guidance and controls for managing your project\'s settings and page layout options.';
        }
      }

      // Hide all page views and show target page view
      if (tabId === 'overview') {
        if (overviewView) overviewView.classList.remove('hidden');
        if (performanceView) performanceView.classList.add('hidden');
        if (databaseView) databaseView.classList.add('hidden');
        if (domainView) domainView.classList.add('hidden');
        if (customPageView) customPageView.classList.add('hidden');
        if (livePreviewView) livePreviewView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        showToast('Switched to Dashboard Overview');
      } else if (tabId === 'performance') {
        if (overviewView) overviewView.classList.add('hidden');
        if (performanceView) performanceView.classList.remove('hidden');
        if (databaseView) databaseView.classList.add('hidden');
        if (domainView) domainView.classList.add('hidden');
        if (customPageView) customPageView.classList.add('hidden');
        if (livePreviewView) livePreviewView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        
        // Trigger page entrance animations
        triggerPerformanceAnimations();
        showToast('Switched to Performance Page');
      } else if (tabId === 'database') {
        if (overviewView) overviewView.classList.add('hidden');
        if (performanceView) performanceView.classList.add('hidden');
        if (databaseView) databaseView.classList.remove('hidden');
        if (domainView) domainView.classList.add('hidden');
        if (customPageView) customPageView.classList.add('hidden');
        if (livePreviewView) livePreviewView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        
        // Trigger database page animations
        triggerDatabaseAnimations();
        showToast('Switched to Database Page');
      } else if (tabId === 'domain') {
        if (overviewView) overviewView.classList.add('hidden');
        if (performanceView) performanceView.classList.add('hidden');
        if (databaseView) databaseView.classList.add('hidden');
        if (domainView) domainView.classList.remove('hidden');
        if (customPageView) customPageView.classList.add('hidden');
        if (livePreviewView) livePreviewView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        
        // Trigger domain page animations
        triggerDomainAnimations();
        showToast('Switched to Domain Page');
      } else if (tabId === 'custom-page') {
        if (overviewView) overviewView.classList.add('hidden');
        if (performanceView) performanceView.classList.add('hidden');
        if (databaseView) databaseView.classList.add('hidden');
        if (domainView) domainView.classList.add('hidden');
        if (customPageView) customPageView.classList.remove('hidden');
        if (livePreviewView) livePreviewView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        
        // Trigger custom page animations
        triggerCustomPageAnimations();
        showToast('Switched to Visual Builder Page');
      } else if (tabId === 'live-preview') {
        if (overviewView) overviewView.classList.add('hidden');
        if (performanceView) performanceView.classList.add('hidden');
        if (databaseView) databaseView.classList.add('hidden');
        if (domainView) domainView.classList.add('hidden');
        if (customPageView) customPageView.classList.add('hidden');
        if (livePreviewView) livePreviewView.classList.remove('hidden');
        if (settingsView) settingsView.classList.add('hidden');

        // Trigger live preview animations
        triggerLivePreviewAnimations();
        showToast('Switched to Live Preview Page');
      } else if (tabId === 'settings') {
        if (overviewView) overviewView.classList.add('hidden');
        if (performanceView) performanceView.classList.add('hidden');
        if (databaseView) databaseView.classList.add('hidden');
        if (domainView) domainView.classList.add('hidden');
        if (customPageView) customPageView.classList.add('hidden');
        if (livePreviewView) livePreviewView.classList.add('hidden');
        if (settingsView) settingsView.classList.remove('hidden');

        syncSettingsFields();
        showToast('Switched to Settings Page');
      } else {
        // Mock default behavior for settings etc.
        if (overviewView) overviewView.classList.add('hidden');
        if (performanceView) performanceView.classList.add('hidden');
        if (databaseView) databaseView.classList.add('hidden');
        if (domainView) domainView.classList.add('hidden');
        if (customPageView) customPageView.classList.add('hidden');
        if (livePreviewView) livePreviewView.classList.add('hidden');
        if (settingsView) settingsView.classList.add('hidden');
        showToast(`Tab content for "${tabName}" is under development.`);
      }
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

    // Prevent clicks inside the profile menu from closing it immediately via document listener
    profileMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
      profileMenu.classList.add('hidden');
    });

    // Programmatic redirection for logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'src/pages/landing.html';
      });
    }

    // Programmatic redirection for account settings
    const profileSettingsBtn = document.getElementById('profile-settings-btn');
    if (profileSettingsBtn) {
      profileSettingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        profileMenu.classList.add('hidden');
        const settingsTabBtn = document.querySelector('button[data-tab="settings"]');
        if (settingsTabBtn) settingsTabBtn.click();
      });
    }
  }
}

// --- Trigger Performance Page Entrance Animations ---
function triggerPerformanceAnimations() {
  // 1. Animate Progress Bars
  const progressFills = document.querySelectorAll('#performance-view .progress-fill');
  progressFills.forEach(fill => {
    fill.style.width = '0%';
    // Force reflow
    fill.offsetHeight;
    const targetWidth = fill.getAttribute('data-width');
    fill.style.width = targetWidth;
  });

  // 2. Animate Bar Chart Heights
  const chartBars = document.querySelectorAll('#uptime-bar-chart [data-height]');
  chartBars.forEach(bar => {
    bar.style.height = '0%';
    // Force reflow
    bar.offsetHeight;
    const targetHeight = bar.getAttribute('data-height');
    bar.style.height = targetHeight;
  });
}

// --- SSL Banner ---
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
        appendActivityLog('SSL certificate renewed', 'Just now · by System', 'rose');
        
        // Sync domain page SSL details
        const sslStatusLabel = document.getElementById('ssl-status-label');
        const sslExpiryValText = document.getElementById('ssl-expiry-val-text');
        const sslDaysLeftVal = document.getElementById('ssl-days-left-val');
        const sslExpiryBar = document.getElementById('ssl-expiry-bar');
        const sslStatusCheckmark = document.getElementById('ssl-status-checkmark');
        const domainDaysVal = document.getElementById('domain-days-val');
        const domainDaysSub = document.getElementById('domain-days-sub');
        const sslBadgeVal = document.getElementById('ssl-badge-val');
        
        if (sslStatusLabel) sslStatusLabel.innerText = 'Valid';
        if (sslBadgeVal) sslBadgeVal.innerText = 'Valid';
        if (sslDaysLeftVal) sslDaysLeftVal.innerText = '365';
        if (domainDaysVal) domainDaysVal.innerText = '365';
        if (domainDaysSub) domainDaysSub.innerText = '365';
        if (sslExpiryValText) {
          const currentYear = new Date().getFullYear();
          sslExpiryValText.innerHTML = `Expires Jun 14, ${currentYear + 1} · <span id="ssl-days-left-val">365</span> days left`;
        }
        if (sslExpiryBar) {
          sslExpiryBar.style.width = '100%';
          sslExpiryBar.setAttribute('data-width', '100%');
        }
        if (sslStatusCheckmark) {
          sslStatusCheckmark.className.baseVal = "w-6 h-6 text-emerald-500";
        }
      }, 1200);
    });
  }
}

// --- Helper: Add Event to Activity Log ---
function appendActivityLog(title, desc, colorTheme) {
  const list = document.getElementById('activity-list');
  if (!list) return;

  const item = document.createElement('div');
  item.className = 'flex items-start space-x-3';

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

// --- Website Status Toggler ---
function initWebsiteStatus() {
  const toggleBtn = document.getElementById('toggle-maintenance-btn');
  const badge = document.getElementById('site-status-badge');

  if (!toggleBtn || !badge) return;

  let isLive = true;

  toggleBtn.addEventListener('click', () => {
    isLive = !isLive;

    if (isLive) {
      badge.className = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 transition-all";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>Live`;
      showToast('Website is now live and serving production traffic.', 'success');
      appendActivityLog('Site status set to Live', 'Just now · by You', 'emerald');
    } else {
      badge.className = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100 transition-all";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>Maintenance`;
      showToast('Website set to maintenance mode.', 'warning');
      appendActivityLog('Site status set to Maintenance', 'Just now · by You', 'blue');
    }
  });
}

// --- Quick Actions Trigger ---
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

// --- Interactive SVG Spline Chart (Overview) ---
function initAnalyticsChart() {
  const svg = document.getElementById('analytics-svg');
  const linePath = document.getElementById('chart-line-path');
  const areaPath = document.getElementById('chart-area-path');
  const hoverLine = document.getElementById('chart-hover-line');
  const tooltip = document.getElementById('chart-tooltip');
  const nodesGroup = document.getElementById('chart-nodes-group');

  if (!svg || !linePath || !areaPath || !nodesGroup) return;

  const data = [
    { day: 'Monday', value: 850 },
    { day: 'Tuesday', value: 1100 },
    { day: 'Wednesday', value: 920 },
    { day: 'Thursday', value: 1430 },
    { day: 'Friday', value: 1240 },
    { day: 'Saturday', value: 1680 },
    { day: 'Sunday', value: 1590 }
  ];

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

  const drawSpline = (pts) => {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const curr = pts[i];
      const next = pts[i + 1];
      
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

  const areaD = `${lineD} L ${points[points.length - 1].x} ${svgHeight} L ${points[0].x} ${svgHeight} Z`;
  areaPath.setAttribute('d', areaD);

  points.forEach((p, idx) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'cursor-pointer group');

    const glowCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    glowCircle.setAttribute('cx', p.x);
    glowCircle.setAttribute('cy', p.y);
    glowCircle.setAttribute('r', 10);
    glowCircle.setAttribute('fill', '#18a0fb');
    glowCircle.setAttribute('fill-opacity', '0');
    glowCircle.setAttribute('class', 'transition-all duration-200 group-hover:fill-opacity-25');

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

    group.addEventListener('mouseenter', () => {
      hoverLine.setAttribute('x1', p.x);
      hoverLine.setAttribute('x2', p.x);
      hoverLine.classList.remove('opacity-0');

      document.getElementById('tooltip-day').innerText = p.day;
      document.getElementById('tooltip-value').innerText = `${p.value.toLocaleString()} Visitors`;

      tooltip.classList.remove('hidden');
      
      const containerRect = svg.getBoundingClientRect();
      const pctX = p.x / svgWidth;
      const pctY = p.y / svgHeight;

      const tooltipX = pctX * containerRect.width;
      const tooltipY = pctY * containerRect.height - 70;

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

// --- 6. 90-day Uptime Grid (Performance Page) ---
function initUptimeGrid() {
  const container = document.getElementById('uptime-grid-container');
  if (!container) return;

  container.innerHTML = '';

  // Generate 90 cells (3 rows x 30 columns)
  for (let i = 0; i < 90; i++) {
    const cell = document.createElement('div');
    
    // Default: Up (Green)
    let bgClass = 'bg-emerald-500 hover:bg-emerald-400';
    let statusText = 'Up';

    // Set mock degraded days matching Figma visual
    if (i === 5) {
      bgClass = 'bg-amber-500 hover:bg-amber-400';
      statusText = 'Degraded Performance (32ms latency)';
    } else if (i === 80 || i === 81) {
      bgClass = 'bg-amber-500 hover:bg-amber-400';
      statusText = 'Degraded Performance (64ms latency)';
    }

    cell.className = `${bgClass} rounded-[3px] transition-colors cursor-pointer w-full h-full`;
    cell.setAttribute('title', `Day ${90 - i}: ${statusText}`);
    container.appendChild(cell);
  }
}

// --- 7. Performance actions (Performance Page) ---
function initPerformanceActions() {
  const runBtn = document.getElementById('run-audit-btn');
  const scoreVal = document.getElementById('perf-score-val');

  if (!runBtn || !scoreVal) return;

  runBtn.addEventListener('click', () => {
    runBtn.innerText = 'Analyzing...';
    runBtn.disabled = true;

    showToast('Starting Lighthouse speed audit...', 'info');

    setTimeout(() => {
      runBtn.innerText = 'Run audit';
      runBtn.disabled = false;

      showToast('Performance audit completed!', 'success');

      // Animate score counting up from 87 to 92
      let currentScore = 87;
      const targetScore = 92;
      const duration = 800; // ms
      const intervalTime = Math.floor(duration / (targetScore - currentScore));

      const counter = setInterval(() => {
        currentScore++;
        scoreVal.innerText = currentScore;

        if (currentScore >= targetScore) {
          clearInterval(counter);
          
          // Animate color to emerald if score hits higher target
          scoreVal.parentElement.classList.remove('text-amber-500');
          scoreVal.parentElement.classList.add('text-emerald-500');
          showToast('Performance Score increased to 92/100!', 'success');
        }
      }, intervalTime);
    }, 1500);
  });
}

// --- Trigger Database Page Entrance Animations ---
function triggerDatabaseAnimations() {
  // 1. Animate Progress Bars
  const progressFills = document.querySelectorAll('#database-view .progress-fill');
  progressFills.forEach(fill => {
    fill.style.width = '0%';
    fill.offsetHeight; // force reflow
    const targetWidth = fill.getAttribute('data-width');
    fill.style.width = targetWidth;
  });

  // 2. Animate Donut Chart Segments
  animateDonutChart();
}

// --- Animate Donut Chart ---
function animateDonutChart() {
  const C = 339.292;
  const orders = document.getElementById('donut-orders');
  const users = document.getElementById('donut-users');
  const products = document.getElementById('donut-products');
  const other = document.getElementById('donut-other');

  if (!orders || !users || !products || !other) return;

  // Reset
  orders.setAttribute('stroke-dasharray', `0 ${C}`);
  users.setAttribute('stroke-dasharray', `0 ${C}`);
  products.setAttribute('stroke-dasharray', `0 ${C}`);
  other.setAttribute('stroke-dasharray', `0 ${C}`);

  // Force reflow
  orders.offsetHeight;

  // Set targets
  orders.setAttribute('stroke-dasharray', `143.86 ${C}`);
  orders.setAttribute('stroke-dashoffset', '0');

  users.setAttribute('stroke-dasharray', `67.86 ${C}`);
  users.setAttribute('stroke-dashoffset', '-143.86');

  products.setAttribute('stroke-dasharray', `50.22 ${C}`);
  products.setAttribute('stroke-dashoffset', '-211.72');

  other.setAttribute('stroke-dasharray', `77.36 ${C}`);
  other.setAttribute('stroke-dashoffset', '-261.94');
}

// --- Trigger Domain Page Entrance Animations ---
function triggerDomainAnimations() {
  const domainBar = document.getElementById('domain-expiry-bar');
  const sslBar = document.getElementById('ssl-expiry-bar');

  if (domainBar) {
    domainBar.style.width = '0%';
    domainBar.offsetHeight;
    domainBar.style.width = domainBar.getAttribute('data-width');
  }

  if (sslBar) {
    sslBar.style.width = '0%';
    sslBar.offsetHeight;
    sslBar.style.width = sslBar.getAttribute('data-width');
  }
}

// --- Helper to open/close modal with transitions ---
function toggleModalState(modalElement, cardElement, isOpen) {
  if (isOpen) {
    modalElement.classList.remove('hidden');
    modalElement.offsetHeight; // force reflow
    modalElement.classList.remove('opacity-0');
    modalElement.classList.add('opacity-100');
    cardElement.classList.remove('scale-95');
    cardElement.classList.add('scale-100');
  } else {
    modalElement.classList.remove('opacity-100');
    modalElement.classList.add('opacity-0');
    cardElement.classList.remove('scale-100');
    cardElement.classList.add('scale-95');
    setTimeout(() => {
      modalElement.classList.add('hidden');
    }, 300);
  }
}

// --- Initialize Database Page Interactions ---
let tableToDeleteName = '';
function initDatabasePage() {
  // Modals elements
  const newTableModal = document.getElementById('new-table-modal');
  const newTableModalCard = document.getElementById('new-table-modal-card');
  const openNewTableBtn = document.getElementById('open-new-table-modal-btn');
  const closeNewTableBtn = document.getElementById('close-new-table-modal');
  const cancelNewTableBtn = document.getElementById('cancel-new-table-btn');
  const newTableForm = document.getElementById('new-table-form');

  const deleteTableModal = document.getElementById('delete-table-modal');
  const deleteTableModalCard = document.getElementById('delete-table-modal-card');
  const closeDeleteTableBtn = document.getElementById('close-delete-table-modal');
  const cancelDeleteTableBtn = document.getElementById('cancel-delete-table-btn');
  const confirmDeleteTableBtn = document.getElementById('confirm-delete-table-btn');
  const deleteSpanName = document.getElementById('delete-table-name-span');

  const tableBody = document.getElementById('db-tables-list-body');
  const totalTablesVal = document.getElementById('total-tables-val');
  const totalRecordsVal = document.getElementById('total-records-val');
  const tablesSubtitle = document.getElementById('tables-subtitle');

  const runMockQueryBtn = document.getElementById('run-mock-query-btn');
  const queryLogList = document.getElementById('db-query-log-list');

  const backupNowBtn = document.getElementById('backup-now-btn');
  const backupBtnIcon = document.getElementById('backup-btn-icon');
  const backupBtnText = document.getElementById('backup-btn-text');
  const backupsListBody = document.getElementById('backups-list-body');

  if (!tableBody) return;

  // Query execution helper
  const queries = [
    { type: 'SELECT', color: 'text-blue-600', sql: 'SELECT name, email FROM users WHERE active = true ORDER BY name LIMIT 100' },
    { type: 'UPDATE', color: 'text-amber-600', sql: "UPDATE products SET price = price * 1.05 WHERE category = 'electronics'" },
    { type: 'INSERT', color: 'text-emerald-600', sql: "INSERT INTO sessions (user_id, token, expires_at) VALUES (409, 'ab493c8d10b9f', '2026-06-15 13:52:00')" },
    { type: 'DELETE', color: 'text-rose-600', sql: 'DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY' }
  ];

  if (runMockQueryBtn && queryLogList) {
    runMockQueryBtn.addEventListener('click', () => {
      const q = queries[Math.floor(Math.random() * queries.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      const item = document.createElement('div');
      item.className = 'flex items-start space-x-3 py-1.5 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 px-1 rounded-md transition-all duration-300 opacity-0 -translate-y-2';
      
      // SQL Highlight formatting
      let formattedSql = q.sql;
      formattedSql = formattedSql.replace(/(SELECT|UPDATE|INSERT|DELETE|FROM|WHERE|ORDER BY|LIMIT|SET|INTO|VALUES|INTERVAL|DAY|AND|OR|JOIN|ON|NOW\(\))/g, '<span class="text-blue-600 font-semibold">$1</span>');
      // Fix specific color matching
      if (q.type === 'UPDATE') {
        formattedSql = formattedSql.replace('UPDATE', '<span class="text-amber-600 font-semibold">UPDATE</span>');
      } else if (q.type === 'INSERT') {
        formattedSql = formattedSql.replace('INSERT', '<span class="text-emerald-600 font-semibold">INSERT</span>');
      } else if (q.type === 'DELETE') {
        formattedSql = formattedSql.replace('DELETE', '<span class="text-rose-600 font-semibold">DELETE</span>');
      }

      item.innerHTML = `
        <span class="text-slate-400 flex-shrink-0">${timeStr}</span>
        <p class="text-slate-700 break-all">${formattedSql}</p>
      `;

      queryLogList.insertBefore(item, queryLogList.firstChild);
      
      // Animate in
      setTimeout(() => {
        item.classList.remove('opacity-0', '-translate-y-2');
      }, 10);

      // Scroll list to top
      queryLogList.scrollTop = 0;

      showToast(`Mock query executed: ${q.type}`, 'success');
      appendActivityLog(`Database ${q.type} query executed`, `Just now · by System`, 'blue');
    });
  }

  // Backup execution
  if (backupNowBtn && backupsListBody) {
    backupNowBtn.addEventListener('click', () => {
      backupNowBtn.disabled = true;
      if (backupBtnIcon) backupBtnIcon.classList.add('animate-spin');
      if (backupBtnText) backupBtnText.innerText = 'Backing up...';

      showToast('Database backup initiated...', 'info');

      setTimeout(() => {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timePart = now.toTimeString().split(' ')[0].substring(0, 5).replace(':', '-');
        const filename = `backup_${dateStr}_${timePart}.sql.gz`;

        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-50/50 transition-all duration-300 opacity-0 -translate-y-2';
        row.innerHTML = `
          <td class="py-3 font-medium text-slate-700 flex items-center space-x-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-emerald-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>${filename}</span>
          </td>
          <td class="py-3 text-right font-mono pr-6">2.1 GB</td>
          <td class="py-3">
            <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Completed</span>
          </td>
        `;

        backupsListBody.insertBefore(row, backupsListBody.firstChild);

        // Animate in
        setTimeout(() => {
          row.classList.remove('opacity-0', '-translate-y-2');
        }, 10);

        // Reset button
        backupNowBtn.disabled = false;
        if (backupBtnIcon) backupBtnIcon.classList.remove('animate-spin');
        if (backupBtnText) backupBtnText.innerText = 'Backup now';

        showToast('Database backup created successfully!', 'success');
        appendActivityLog('Database backup created', `Just now · by System`, 'emerald');
      }, 1500);
    });
  }

  // Bind Table Actions (Delegated event listeners)
  tableBody.addEventListener('click', (e) => {
    const editBtn = e.target.closest('.edit-table-row-btn');
    const deleteBtn = e.target.closest('.delete-table-row-btn');

    if (editBtn) {
      const row = editBtn.closest('tr');
      const name = row.dataset.tableName;
      showToast(`Editing schema for table: "${name}" (feature simulated).`);
    }

    if (deleteBtn) {
      const row = deleteBtn.closest('tr');
      tableToDeleteName = row.dataset.tableName;
      if (deleteSpanName) deleteSpanName.innerText = tableToDeleteName;
      toggleModalState(deleteTableModal, deleteTableModalCard, true);
    }
  });

  // Modal open/close actions for New Table
  if (openNewTableBtn && newTableModal) {
    openNewTableBtn.addEventListener('click', () => toggleModalState(newTableModal, newTableModalCard, true));
    closeNewTableBtn.addEventListener('click', () => toggleModalState(newTableModal, newTableModalCard, false));
    cancelNewTableBtn.addEventListener('click', () => toggleModalState(newTableModal, newTableModalCard, false));

    // Handle form submit
    newTableForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tableName = document.getElementById('new-table-name').value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
      const initialRecordsStr = document.getElementById('new-table-records').value.trim();
      const storageSizeStr = document.getElementById('new-table-size').value.trim();

      // Basic Validation
      if (!tableName) return;
      if (document.querySelector(`tr[data-table-name="${tableName}"]`)) {
        showToast('Table name already exists!', 'warning');
        return;
      }

      // Add Row
      const row = document.createElement('tr');
      row.className = 'hover:bg-slate-50/50 transition-colors';
      row.setAttribute('data-table-name', tableName);
      row.innerHTML = `
        <td class="py-3 font-semibold text-slate-700 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 004.5 15h15a2.25 2.25 0 002.25-2.25m-19.5 0v.75A2.25 2.25 0 004.5 18h15a2.25 2.25 0 002.25-2.25V15m-19.5 0V7.5A2.25 2.25 0 014.5 5.25h15A2.25 2.25 0 0121.75 7.5V15m-19.5 0h19.5" />
          </svg>
          <span>${tableName}</span>
        </td>
        <td class="py-3 text-right font-mono pr-4" data-records="${initialRecordsStr.replace(/,/g, '')}">${initialRecordsStr}</td>
        <td class="py-3 text-right font-mono pr-4" data-size="${storageSizeStr.replace(/[^\d]/g, '')}">${storageSizeStr}</td>
        <td class="py-3 text-slate-500">just now</td>
        <td class="py-3">
          <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Healthy</span>
        </td>
        <td class="py-3">
          <div class="flex items-center justify-center space-x-1.5">
            <button class="edit-table-row-btn text-amber-600 hover:text-amber-800 hover:bg-amber-50 p-1.5 rounded-md transition-all cursor-pointer hover:scale-110" title="Edit Table Structure">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
            <button class="delete-table-row-btn text-red-600 hover:text-red-800 hover:bg-red-50 p-1.5 rounded-md transition-all cursor-pointer hover:scale-110" title="Delete Table">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
        </td>
      `;

      tableBody.appendChild(row);

      // Update counters
      const activeRows = tableBody.querySelectorAll('tr').length;
      if (totalTablesVal) totalTablesVal.innerText = activeRows;
      if (tablesSubtitle) tablesSubtitle.innerText = `${activeRows} tables · PostgreSQL`;

      // Update total records
      let cumulativeRecords = 0;
      tableBody.querySelectorAll('tr td[data-records]').forEach(td => {
        cumulativeRecords += parseInt(td.getAttribute('data-records') || '0');
      });
      if (totalRecordsVal) totalRecordsVal.innerText = cumulativeRecords.toLocaleString();

      toggleModalState(newTableModal, newTableModalCard, false);
      newTableForm.reset();

      showToast(`Table "${tableName}" successfully created!`, 'success');
      appendActivityLog(`Table created: ${tableName}`, `Just now · by You`, 'emerald');
    });
  }

  // Delete Table Modal Confirms
  if (closeDeleteTableBtn && deleteTableModal) {
    closeDeleteTableBtn.addEventListener('click', () => toggleModalState(deleteTableModal, deleteTableModalCard, false));
    cancelDeleteTableBtn.addEventListener('click', () => toggleModalState(deleteTableModal, deleteTableModalCard, false));

    confirmDeleteTableBtn.addEventListener('click', () => {
      const row = tableBody.querySelector(`tr[data-table-name="${tableToDeleteName}"]`);
      if (row) {
        row.remove();

        // Update counters
        const activeRows = tableBody.querySelectorAll('tr').length;
        if (totalTablesVal) totalTablesVal.innerText = activeRows;
        if (tablesSubtitle) tablesSubtitle.innerText = `${activeRows} tables · PostgreSQL`;

        // Update total records
        let cumulativeRecords = 0;
        tableBody.querySelectorAll('tr td[data-records]').forEach(td => {
          cumulativeRecords += parseInt(td.getAttribute('data-records') || '0');
        });
        if (totalRecordsVal) totalRecordsVal.innerText = cumulativeRecords.toLocaleString();

        toggleModalState(deleteTableModal, deleteTableModalCard, false);
        showToast(`Table "${tableToDeleteName}" permanently deleted.`, 'success');
        appendActivityLog(`Table deleted: ${tableToDeleteName}`, `Just now · by You`, 'rose');
      }
    });
  }
}

// --- Initialize Domain Page Interactions ---
function initDomainPage() {
  const dnsRecordsBody = document.getElementById('dns-records-list-body');
  const dnsSubtitle = document.getElementById('dns-subtitle');
  const openNewDnsModalBtn = document.getElementById('open-new-dns-modal-btn');

  const newDnsModal = document.getElementById('new-dns-modal');
  const newDnsModalCard = document.getElementById('new-dns-modal-card');
  const closeNewDnsModalBtn = document.getElementById('close-new-dns-modal');
  const cancelNewDnsModalBtn = document.getElementById('cancel-new-dns-btn');
  const newDnsForm = document.getElementById('new-dns-form');

  if (!dnsRecordsBody) return;

  // Propagation validation simulation
  dnsRecordsBody.addEventListener('click', (e) => {
    const progRow = e.target.closest('.dns-row-propagating');
    const deleteBtn = e.target.closest('.delete-dns-row-btn');

    if (progRow && !deleteBtn) {
      const badgeCell = document.getElementById('propagating-badge-cell');
      if (badgeCell && badgeCell.querySelector('.animate-pulse')) {
        showToast('Validating TXT record propagation...', 'info');

        setTimeout(() => {
          badgeCell.innerHTML = `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>`;
          progRow.classList.remove('dns-row-propagating', 'cursor-pointer');
          progRow.removeAttribute('title');
          
          showToast('TXT Record successfully propagated!', 'success');
          appendActivityLog('DNS TXT record propagated', 'Just now · by System', 'emerald');
        }, 1200);
      }
    }

    if (deleteBtn) {
      const row = deleteBtn.closest('tr');
      const host = row.getAttribute('data-dns-host');
      const type = row.getAttribute('data-dns-type');
      row.remove();

      // Update counts
      const count = dnsRecordsBody.querySelectorAll('tr').length;
      if (dnsSubtitle) dnsSubtitle.innerText = `${count} records · Last updated just now`;

      showToast(`DNS ${type} record for "${host}" deleted.`, 'success');
      appendActivityLog(`DNS record deleted: ${type} ${host}`, 'Just now · by You', 'rose');
    }
  });

  // Modal handlers
  if (openNewDnsModalBtn && newDnsModal) {
    openNewDnsModalBtn.addEventListener('click', () => toggleModalState(newDnsModal, newDnsModalCard, true));
    closeNewDnsModalBtn.addEventListener('click', () => toggleModalState(newDnsModal, newDnsModalCard, false));
    cancelNewDnsModalBtn.addEventListener('click', () => toggleModalState(newDnsModal, newDnsModalCard, false));

    // Handle form submit
    newDnsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('new-dns-type').value;
      const host = document.getElementById('new-dns-host').value.trim();
      const val = document.getElementById('new-dns-value').value.trim();
      const ttl = document.getElementById('new-dns-ttl').value;

      if (!host || !val) return;

      const row = document.createElement('tr');
      row.className = 'hover:bg-slate-50/50 transition-colors';
      row.setAttribute('data-dns-host', host);
      row.setAttribute('data-dns-type', type);

      let badgeColor = 'bg-blue-50 text-blue-600 border-blue-100';
      if (type === 'MX') badgeColor = 'bg-rose-50 text-rose-600 border-rose-100';
      if (type === 'TXT') badgeColor = 'bg-amber-50 text-amber-600 border-amber-100';

      row.innerHTML = `
        <td class="py-3">
          <span class="inline-flex items-center justify-center w-14 py-0.5 rounded-md text-[10px] font-bold ${badgeColor} border">${type}</span>
        </td>
        <td class="py-3 font-semibold text-slate-700">${host}</td>
        <td class="py-3 font-mono text-slate-500 break-all">${val}</td>
        <td class="py-3 text-slate-500 font-mono">${ttl}</td>
        <td class="py-3">
          <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Active</span>
        </td>
        <td class="py-3 text-center">
          <button class="delete-dns-row-btn text-red-600 hover:text-red-800 hover:bg-red-50 p-1.5 rounded-md transition-all cursor-pointer hover:scale-110" title="Delete DNS Record">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </td>
      `;

      dnsRecordsBody.appendChild(row);

      // Update count
      const count = dnsRecordsBody.querySelectorAll('tr').length;
      if (dnsSubtitle) dnsSubtitle.innerText = `${count} records · Last updated just now`;

      toggleModalState(newDnsModal, newDnsModalCard, false);
      newDnsForm.reset();

      showToast(`DNS ${type} record created for "${host}"!`, 'success');
      appendActivityLog(`DNS record added: ${type} ${host}`, 'Just now · by You', 'emerald');
    });
  }
}

// --- Trigger Visual Builder Animations ---
function triggerCustomPageAnimations() {
  const latencyBars = document.querySelectorAll('#func-latency-bars [data-height]');
  latencyBars.forEach(bar => {
    bar.style.height = '0%';
    bar.offsetHeight;
    bar.style.height = bar.getAttribute('data-height');
  });
}

// --- Live Preview Device Frame Helper ---
function setLivePreviewDevice(device) {
  const toggleGroup = document.getElementById('preview-device-toggle');
  const bezel = document.getElementById('preview-bezel');
  const browserChrome = document.getElementById('preview-browser-chrome');
  const phoneChrome = document.getElementById('preview-phone-chrome');
  const notch = document.getElementById('preview-notch');
  const homeIndicator = document.getElementById('preview-home-indicator');
  const navDesktop = document.getElementById('preview-nav-desktop');
  const navMobile = document.getElementById('preview-nav-mobile');
  const hero = document.getElementById('preview-hero');
  const portfolioGrid = document.getElementById('preview-portfolio-grid');

  if (!bezel) return;

  const bezelClasses = {
    laptop: 'w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 transition-all duration-300 relative',
    tablet: 'w-full max-w-xl bg-white rounded-[2rem] shadow-lg overflow-hidden border-[10px] border-slate-900 transition-all duration-300 relative',
    phone: 'w-[300px] bg-white rounded-[2.25rem] shadow-lg overflow-hidden border-[10px] border-slate-900 transition-all duration-300 relative'
  };
  bezel.className = bezelClasses[device] || bezelClasses.laptop;

  if (toggleGroup) {
    toggleGroup.querySelectorAll('.device-toggle-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-device') === device;
      btn.className = isActive
        ? 'device-toggle-btn px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all bg-white text-blue-600 shadow-sm border border-blue-200'
        : 'device-toggle-btn px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-500 hover:text-slate-700';
    });
  }

  if (device === 'phone') {
    if (browserChrome) browserChrome.classList.add('hidden');
    if (phoneChrome) phoneChrome.classList.remove('hidden');
    if (notch) notch.classList.remove('hidden');
  } else {
    if (browserChrome) browserChrome.classList.remove('hidden');
    if (phoneChrome) phoneChrome.classList.add('hidden');
    if (notch) notch.classList.add('hidden');
  }

  if (homeIndicator) {
    if (device === 'laptop') homeIndicator.classList.add('hidden');
    else homeIndicator.classList.remove('hidden');
  }

  if (device === 'phone') {
    if (navDesktop) navDesktop.classList.add('hidden');
    if (navMobile) navMobile.classList.remove('hidden');
  } else {
    if (navDesktop) navDesktop.classList.remove('hidden');
    if (navMobile) navMobile.classList.add('hidden');
  }

  if (hero) {
    hero.className = device === 'phone'
      ? 'flex flex-col items-center text-center gap-3 mb-5'
      : 'flex items-center gap-5 mb-6';
  }

  if (portfolioGrid) {
    portfolioGrid.className = device === 'phone'
      ? 'grid grid-cols-1 gap-3 mb-6'
      : 'grid grid-cols-3 gap-3 mb-6';
  }
}

// --- Initialize Live Preview Page Interactions ---
function initLivePreview() {
  const toggleGroup = document.getElementById('preview-device-toggle');
  const continueToEditBtn = document.getElementById('continue-to-edit-btn');

  if (!toggleGroup) return;

  toggleGroup.querySelectorAll('.device-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const device = btn.getAttribute('data-device');
      setLivePreviewDevice(device);
      showToast(`Previewing in ${device.charAt(0).toUpperCase() + device.slice(1)} mode`, 'info');
    });
  });

  if (continueToEditBtn) {
    continueToEditBtn.addEventListener('click', () => {
      const builderTabBtn = document.querySelector('#nav-links button[data-tab="custom-page"]');
      if (builderTabBtn) builderTabBtn.click();
    });
  }

  setLivePreviewDevice('laptop');
}

// --- Trigger Live Preview Page Entrance Behavior ---
function triggerLivePreviewAnimations() {
  setLivePreviewDevice('laptop');
}

// --- Initialize Visual Site Builder ---
function initVisualBuilder() {
  const componentsList = document.getElementById('builder-components-list');
  const canvas = document.getElementById('builder-canvas');
  const sectionsContainer = document.getElementById('canvas-sections-container');
  const dropIndicator = document.getElementById('canvas-drop-indicator');
  
  const inspectorEmptyState = document.getElementById('inspector-empty-state');
  const inspectorEditPanel = document.getElementById('inspector-edit-panel');
  const inspectorMetadataType = document.getElementById('inspector-metadata-type');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorSubhead = document.getElementById('inspector-subhead');
  const inspectorCtasGroup = document.getElementById('inspector-ctas-group');
  const inspectorBtnPrimary = document.getElementById('inspector-btn-primary');
  const inspectorBtnSecondary = document.getElementById('inspector-btn-secondary');
  const inspectorBgTheme = document.getElementById('inspector-bg-theme');

  const builderResetBtn = document.getElementById('builder-reset-btn');
  const builderSaveBtn = document.getElementById('builder-save-btn');
  
  const aiPromptInput = document.getElementById('ai-prompt-input');
  const aiGenerateBtn = document.getElementById('ai-generate-btn');
  const aiBtnText = document.getElementById('ai-btn-text');
  const aiBtnIcon = document.getElementById('ai-btn-icon');

  if (!canvas || !sectionsContainer) return;

  let selectedSection = null;
  let draggedComponentType = '';

  // Background Theme Utility Map
  const themeClasses = {
    'white': 'bg-white text-slate-800 border-y border-slate-100',
    'slate-light': 'bg-slate-50 text-slate-800 border-y border-slate-200/50',
    'slate-dark': 'bg-linear-to-br from-slate-900 to-blue-950 text-white',
    'violet-gradient': 'bg-linear-to-br from-indigo-950 via-slate-900 to-purple-950 text-white',
    'blue-royal': 'bg-blue-600 text-white'
  };

  // --- Save current canvas state to JS memory ---
  function saveCanvasStateToData() {
    const sectionEls = sectionsContainer.querySelectorAll('.canvas-section:not(#canvas-drop-indicator)');
    const sections = [];
    sectionEls.forEach(el => {
      sections.push({
        type: el.getAttribute('data-section-type'),
        id: el.getAttribute('data-section-id'),
        headline: el.getAttribute('data-headline') || '',
        subhead: el.getAttribute('data-subhead') || '',
        ctaPrimary: el.getAttribute('data-cta-primary') || '',
        ctaSecondary: el.getAttribute('data-cta-secondary') || '',
        bgTheme: el.getAttribute('data-bg-theme') || 'white'
      });
    });
    
    const pageId = activePages[activeProject];
    if (projectData[activeProject].pages[pageId]) {
      projectData[activeProject].pages[pageId].sections = sections;
      
      // If page status is Empty, update it to Edited
      if (projectData[activeProject].pages[pageId].status === 'Empty') {
        projectData[activeProject].pages[pageId].status = 'Edited';
        renderOverviewPages();
      }
    }
  }

  // --- Load page sections into canvas ---
  function loadPageCanvas(projectId, pageId) {
    // Clear existing sections
    const oldSections = sectionsContainer.querySelectorAll('.canvas-section:not(#canvas-drop-indicator)');
    oldSections.forEach(s => s.remove());

    // Reset inspector
    selectedSection = null;
    if (inspectorEmptyState) inspectorEmptyState.classList.remove('hidden');
    if (inspectorEditPanel) inspectorEditPanel.classList.add('hidden');

    const page = projectData[projectId].pages[pageId];
    if (!page || !page.sections) return;

    page.sections.forEach(secData => {
      const newSec = createSectionElement(secData.type, secData);
      if (dropIndicator) {
        sectionsContainer.insertBefore(newSec, dropIndicator);
      } else {
        sectionsContainer.appendChild(newSec);
      }
      bindSectionEvents(newSec);
    });
  }

  // 1. Draggable Components Panel Event Setup
  if (componentsList) {
    componentsList.querySelectorAll('[draggable="true"]').forEach(card => {
      card.addEventListener('dragstart', (e) => {
        draggedComponentType = card.getAttribute('data-component-type');
        e.dataTransfer.setData('text/plain', draggedComponentType);
        e.dataTransfer.effectAllowed = 'copy';
      });
    });
  }

  // 2. Drag & Drop Canvas Receivers
  canvas.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';

    if (dropIndicator) {
      dropIndicator.classList.remove('hidden');
      dropIndicator.classList.add('flex');

      const target = getDragAfterElement(sectionsContainer, e.clientY);
      if (target == null) {
        sectionsContainer.appendChild(dropIndicator);
      } else {
        sectionsContainer.insertBefore(dropIndicator, target);
      }
    }
  });

  canvas.addEventListener('dragleave', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      if (dropIndicator) {
        dropIndicator.classList.add('hidden');
        dropIndicator.classList.remove('flex');
      }
    }
  });

  canvas.addEventListener('drop', (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain') || draggedComponentType;
    if (!type) return;

    const newSection = createSectionElement(type);
    
    if (dropIndicator && dropIndicator.parentNode) {
      sectionsContainer.insertBefore(newSection, dropIndicator);
      dropIndicator.classList.add('hidden');
      dropIndicator.classList.remove('flex');
    } else {
      sectionsContainer.appendChild(newSection);
    }

    bindSectionEvents(newSection);
    selectSection(newSection);
    saveCanvasStateToData();

    showToast(`Added ${type} section to visual canvas.`, 'success');
    appendActivityLog(`Added block: ${type}`, 'Just now · by You', 'blue');
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.canvas-section:not(#canvas-drop-indicator)')];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  // Section Creator Factory (Enhanced for State Integration)
  let sectionIndex = 10;
  function createSectionElement(type, data = null) {
    sectionIndex++;
    const id = data ? data.id : `${type}-${sectionIndex}`;
    const div = document.createElement('div');
    div.className = 'canvas-section relative group/section border-2 border-transparent hover:border-blue-500/50 transition-all select-text cursor-pointer p-8';
    div.setAttribute('data-section-id', id);
    div.setAttribute('data-section-type', type);

    // Setup initial contents from state or defaults
    let headline = data ? data.headline : (type === 'hero' ? 'Headline Title' : (type === 'features' ? 'Feature Section Title' : (type === 'pricing' ? 'Flexible Pricing' : (type === 'testimonials' ? 'Client Endorsements' : (type === 'cta' ? 'Launch your next project' : 'Contact Support')))));
    let subhead = data ? data.subhead : (type === 'hero' ? 'Start editing this description to explain your product value proposition.' : (type === 'features' ? 'Describe your core architectural advantages or layouts.' : (type === 'pricing' ? 'Choose a plan that fits your business scale.' : (type === 'testimonials' ? 'Hear what leading visual architects say about our services.' : (type === 'cta' ? 'Get started with high performance hosting and CDN networks.' : 'Fill out details to get in touch with our team.')))));
    let btnPrimary = data ? data.ctaPrimary : 'Get Started';
    let btnSecondary = data ? data.ctaSecondary : 'Learn More';
    let bgTheme = data ? data.bgTheme : (type === 'hero' ? 'slate-dark' : (type === 'features' ? 'slate-light' : (type === 'cta' ? 'blue-royal' : 'white')));

    div.className += ' ' + (themeClasses[bgTheme] || themeClasses['white']);
    if (type === 'hero' || type === 'cta') {
      div.className += ' text-center';
    }

    const toolbarHtml = `
      <div class="absolute top-2 right-2 flex items-center space-x-1 opacity-0 group-hover/section:opacity-100 transition-opacity bg-slate-900/90 text-white rounded-lg p-1 text-[10px] font-bold border border-slate-800 z-10" onclick="event.stopPropagation();">
        <button class="section-move-up-btn hover:bg-slate-800 p-1 rounded transition-colors" title="Move Up">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
        </button>
        <button class="section-move-down-btn hover:bg-slate-800 p-1 rounded transition-colors" title="Move Down">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        </button>
        <button class="section-delete-btn hover:bg-red-900 hover:text-red-300 p-1 rounded transition-colors" title="Delete">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79" /></svg>
        </button>
      </div>
    `;

    let innerHTML = '';

    if (type === 'hero') {
      innerHTML = `
        ${toolbarHtml}
        <span class="absolute top-2 left-2 bg-blue-600 text-white font-mono text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/section:opacity-100 transition-opacity uppercase font-bold tracking-wider pointer-events-none">Hero Banner</span>
        <div class="max-w-xl mx-auto py-8">
          <h2 class="text-3xl font-extrabold tracking-tight" id="${id}-headline">${headline}</h2>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed" id="${id}-subhead">${subhead}</p>
          <div class="mt-5 flex items-center justify-center space-x-3">
            <span class="bg-blue-600 text-white font-semibold text-xs px-4 py-2 rounded-lg" id="${id}-btn-primary">${btnPrimary}</span>
            <span class="border border-white/20 text-white font-semibold text-xs px-4 py-2 rounded-lg" id="${id}-btn-secondary">${btnSecondary}</span>
          </div>
        </div>
      `;
    } else if (type === 'features') {
      innerHTML = `
        ${toolbarHtml}
        <span class="absolute top-2 left-2 bg-emerald-600 text-white font-mono text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/section:opacity-100 transition-opacity uppercase font-bold tracking-wider pointer-events-none">Features Grid</span>
        <div class="max-w-xl mx-auto text-center mb-6">
          <h3 class="text-xl font-bold tracking-tight" id="${id}-headline">${headline}</h3>
          <p class="text-xs text-slate-500 mt-1" id="${id}-subhead">${subhead}</p>
        </div>
        <div class="grid grid-cols-3 gap-4 text-left text-slate-800">
          <div class="bg-white border border-slate-200 rounded-lg p-3">
            <span class="text-blue-500 font-bold text-xs">01</span>
            <h4 class="font-bold text-xs text-slate-700 mt-1">Stunning Speed</h4>
            <p class="text-[10px] text-slate-400 mt-0.5">Vite + Tailwind V4 delivers 100 score speed.</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-3">
            <span class="text-emerald-500 font-bold text-xs">02</span>
            <h4 class="font-bold text-xs text-slate-700 mt-1">Modular Architecture</h4>
            <p class="text-[10px] text-slate-400 mt-0.5">Drag-and-drop builder with zero-code configs.</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-3">
            <span class="text-purple-500 font-bold text-xs">03</span>
            <h4 class="font-bold text-xs text-slate-700 mt-1">AI Powered Copy</h4>
            <p class="text-[10px] text-slate-400 mt-0.5">Describe your website, AI shapes elements.</p>
          </div>
        </div>
      `;
    } else if (type === 'pricing') {
      innerHTML = `
        ${toolbarHtml}
        <span class="absolute top-2 left-2 bg-amber-600 text-white font-mono text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/section:opacity-100 transition-opacity uppercase font-bold tracking-wider pointer-events-none">Pricing Table</span>
        <div class="max-w-xl mx-auto text-center mb-6">
          <h3 class="text-xl font-bold tracking-tight" id="${id}-headline">${headline}</h3>
          <p class="text-xs text-slate-500 mt-1" id="${id}-subhead">${subhead}</p>
        </div>
        <div class="grid grid-cols-2 gap-6 max-w-md mx-auto text-slate-800">
          <div class="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <h4 class="font-bold text-xs text-slate-700">Startup Plan</h4>
            <div class="text-xl font-extrabold text-slate-800 mt-1">$9<span class="text-[10px] text-slate-400 font-normal">/mo</span></div>
            <p class="text-[9px] text-slate-400 mt-1">Essential tools for independent creators.</p>
            <span class="mt-3 block text-center bg-slate-800 text-white text-[10px] font-bold py-1.5 rounded-lg">Get Started</span>
          </div>
          <div class="border-2 border-blue-500 rounded-xl p-4 bg-white relative">
            <span class="absolute -top-2.5 right-4 bg-blue-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase">Popular</span>
            <h4 class="font-bold text-xs text-slate-700">Pro Developer</h4>
            <div class="text-xl font-extrabold text-slate-800 mt-1">$49<span class="text-[10px] text-slate-400 font-normal">/mo</span></div>
            <p class="text-[9px] text-slate-400 mt-1">Advanced capabilities for growing tech companies.</p>
            <span class="mt-3 block text-center bg-blue-600 text-white text-[10px] font-bold py-1.5 rounded-lg">Get Started</span>
          </div>
        </div>
      `;
    } else if (type === 'testimonials') {
      innerHTML = `
        ${toolbarHtml}
        <span class="absolute top-2 left-2 bg-purple-600 text-white font-mono text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/section:opacity-100 transition-opacity uppercase font-bold tracking-wider pointer-events-none">Testimonials</span>
        <div class="max-w-xl mx-auto text-center mb-6">
          <h3 class="text-xl font-bold tracking-tight" id="${id}-headline">${headline}</h3>
          <p class="text-xs text-slate-500 mt-1" id="${id}-subhead">${subhead}</p>
        </div>
        <div class="grid grid-cols-2 gap-4 text-left text-slate-800">
          <div class="border border-slate-100 rounded-lg p-3 bg-slate-50/50">
            <p class="italic text-[10px] text-slate-500">"This visual builder is a game changer. Drag, drop, prompt, publish. Took my project portfolio from draft to deploy in 10 minutes."</p>
            <h5 class="text-[10px] font-bold text-slate-700 mt-2">— Alex Rivera, UI Architect</h5>
          </div>
          <div class="border border-slate-100 rounded-lg p-3 bg-slate-50/50">
            <p class="italic text-[10px] text-slate-500">"AI generated copy rewritten for my business was spot-on. Dragging elements feels premium and responsive. 10/10 UX design."</p>
            <h5 class="text-[10px] font-bold text-slate-700 mt-2">— Sophia Chen, Dev Rel</h5>
          </div>
        </div>
      `;
    } else if (type === 'cta') {
      innerHTML = `
        ${toolbarHtml}
        <span class="absolute top-2 left-2 bg-rose-600 text-white font-mono text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/section:opacity-100 transition-opacity uppercase font-bold tracking-wider pointer-events-none">Call-to-Action</span>
        <div class="max-w-xl mx-auto py-6">
          <h2 class="text-2xl font-extrabold tracking-tight" id="${id}-headline">${headline}</h2>
          <p class="text-xs text-blue-100 mt-1" id="${id}-subhead">${subhead}</p>
          <div class="mt-4 flex items-center justify-center space-x-3">
            <span class="bg-white text-blue-600 font-semibold text-xs px-4 py-2 rounded-lg" id="${id}-btn-primary">${btnPrimary}</span>
            <span class="border border-white/20 text-white font-semibold text-xs px-4 py-2 rounded-lg" id="${id}-btn-secondary">${btnSecondary}</span>
          </div>
        </div>
      `;
    } else if (type === 'contact') {
      innerHTML = `
        ${toolbarHtml}
        <span class="absolute top-2 left-2 bg-indigo-600 text-white font-mono text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/section:opacity-100 transition-opacity uppercase font-bold tracking-wider pointer-events-none">Contact Form</span>
        <div class="max-w-md mx-auto text-slate-800">
          <div class="text-center mb-5">
            <h3 class="text-xl font-bold tracking-tight" id="${id}-headline">${headline}</h3>
            <p class="text-xs text-slate-500 mt-1" id="${id}-subhead">${subhead}</p>
          </div>
          <div class="space-y-3 text-left">
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-0.5 uppercase tracking-wider">Email Address</label>
              <input type="email" placeholder="you@example.com" class="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-xs focus:outline-none" disabled />
            </div>
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-0.5 uppercase tracking-wider">Message</label>
              <textarea rows="3" placeholder="Tell us about your project..." class="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-xs focus:outline-none" disabled></textarea>
            </div>
            <span class="block text-center bg-slate-800 text-white text-[10px] font-bold py-2 rounded-lg cursor-not-allowed">Send Message</span>
          </div>
        </div>
      `;
    }

    div.setAttribute('data-headline', headline);
    div.setAttribute('data-subhead', subhead);
    div.setAttribute('data-cta-primary', btnPrimary);
    div.setAttribute('data-cta-secondary', btnSecondary);
    div.setAttribute('data-bg-theme', bgTheme);
    div.innerHTML = innerHTML;

    return div;
  }

  // 3. Select canvas section on click
  function selectSection(section) {
    if (!section) return;

    sectionsContainer.querySelectorAll('.canvas-section').forEach(s => {
      s.classList.remove('border-blue-500/50');
      s.classList.add('border-transparent');
    });

    section.classList.remove('border-transparent');
    section.classList.add('border-blue-500/50');

    selectedSection = section;

    if (inspectorEmptyState) inspectorEmptyState.classList.add('hidden');
    if (inspectorEditPanel) inspectorEditPanel.classList.remove('hidden');

    const type = section.getAttribute('data-section-type');
    const id = section.getAttribute('data-section-id');
    const headline = section.getAttribute('data-headline') || '';
    const subhead = section.getAttribute('data-subhead') || '';
    const btnPrimary = section.getAttribute('data-cta-primary') || 'Get Started';
    const btnSecondary = section.getAttribute('data-cta-secondary') || 'Learn More';
    const theme = section.getAttribute('data-bg-theme') || 'white';

    if (inspectorMetadataType) inspectorMetadataType.innerText = `${type.toUpperCase()} (#${id})`;
    if (inspectorTitle) inspectorTitle.value = headline;
    if (inspectorSubhead) inspectorSubhead.value = subhead;
    if (inspectorBtnPrimary) inspectorBtnPrimary.value = btnPrimary;
    if (inspectorBtnSecondary) inspectorBtnSecondary.value = btnSecondary;
    if (inspectorBgTheme) inspectorBgTheme.value = theme;

    if (inspectorCtasGroup) {
      if (type === 'hero' || type === 'cta') {
        inspectorCtasGroup.classList.remove('hidden');
      } else {
        inspectorCtasGroup.classList.add('hidden');
      }
    }
  }

  function bindSectionEvents(section) {
    section.addEventListener('click', () => selectSection(section));

    const upBtn = section.querySelector('.section-move-up-btn');
    const downBtn = section.querySelector('.section-move-down-btn');
    const delBtn = section.querySelector('.section-delete-btn');

    if (upBtn) {
      upBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prev = section.previousElementSibling;
        if (prev && !prev.id.includes('indicator')) {
          sectionsContainer.insertBefore(section, prev);
          saveCanvasStateToData();
          showToast('Moved section up.', 'info');
        }
      });
    }

    if (downBtn) {
      downBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const next = section.nextElementSibling;
        if (next && !next.id.includes('indicator')) {
          sectionsContainer.insertBefore(next, section);
          saveCanvasStateToData();
          showToast('Moved section down.', 'info');
        }
      });
    }

    if (delBtn) {
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectedSection === section) {
          selectedSection = null;
          if (inspectorEmptyState) inspectorEmptyState.classList.remove('hidden');
          if (inspectorEditPanel) inspectorEditPanel.classList.add('hidden');
        }
        const type = section.getAttribute('data-section-type');
        section.remove();
        saveCanvasStateToData();
        showToast(`Removed ${type} section from canvas.`, 'info');
      });
    }
  }

  // 4. Bind Real-time Inspector Input Fields
  if (inspectorTitle) {
    inspectorTitle.addEventListener('input', (e) => {
      if (!selectedSection) return;
      const val = e.target.value;
      selectedSection.setAttribute('data-headline', val);
      
      const id = selectedSection.getAttribute('data-section-id');
      const headlineEl = document.getElementById(`${id}-headline`);
      if (headlineEl) headlineEl.innerText = val;
      saveCanvasStateToData();
    });
  }

  if (inspectorSubhead) {
    inspectorSubhead.addEventListener('input', (e) => {
      if (!selectedSection) return;
      const val = e.target.value;
      selectedSection.setAttribute('data-subhead', val);
      
      const id = selectedSection.getAttribute('data-section-id');
      const subheadEl = document.getElementById(`${id}-subhead`);
      if (subheadEl) subheadEl.innerText = val;
      saveCanvasStateToData();
    });
  }

  if (inspectorBtnPrimary) {
    inspectorBtnPrimary.addEventListener('input', (e) => {
      if (!selectedSection) return;
      const val = e.target.value;
      selectedSection.setAttribute('data-cta-primary', val);
      
      const id = selectedSection.getAttribute('data-section-id');
      const btnEl = document.getElementById(`${id}-btn-primary`);
      if (btnEl) btnEl.innerText = val;
      saveCanvasStateToData();
    });
  }

  if (inspectorBtnSecondary) {
    inspectorBtnSecondary.addEventListener('input', (e) => {
      if (!selectedSection) return;
      const val = e.target.value;
      selectedSection.setAttribute('data-cta-secondary', val);
      
      const id = selectedSection.getAttribute('data-section-id');
      const btnEl = document.getElementById(`${id}-btn-secondary`);
      if (btnEl) btnEl.innerText = val;
      saveCanvasStateToData();
    });
  }

  if (inspectorBgTheme) {
    inspectorBgTheme.addEventListener('change', (e) => {
      if (!selectedSection) return;
      const newTheme = e.target.value;
      const oldTheme = selectedSection.getAttribute('data-bg-theme');
      
      selectedSection.setAttribute('data-bg-theme', newTheme);
      
      if (themeClasses[oldTheme]) {
        const oldClassList = themeClasses[oldTheme].split(' ');
        oldClassList.forEach(cls => selectedSection.classList.remove(cls));
      }
      
      if (themeClasses[newTheme]) {
        const newClassList = themeClasses[newTheme].split(' ');
        newClassList.forEach(cls => selectedSection.classList.add(cls));
      }

      const id = selectedSection.getAttribute('data-section-id');
      const btnSecondaryEl = document.getElementById(`${id}-btn-secondary`);
      if (btnSecondaryEl) {
        if (newTheme.includes('dark') || newTheme.includes('gradient') || newTheme === 'blue-royal') {
          btnSecondaryEl.className = "border border-white/20 text-white font-semibold text-xs px-4 py-2 rounded-lg";
        } else {
          btnSecondaryEl.className = "border border-slate-200 text-slate-700 font-semibold text-xs px-4 py-2 rounded-lg";
        }
      }
      saveCanvasStateToData();
    });
  }

  // 5. Reset and Save Actions
  if (builderResetBtn) {
    builderResetBtn.addEventListener('click', () => {
      sectionsContainer.innerHTML = '';
      
      // Default basic template
      const h = createSectionElement('hero');
      const f = createSectionElement('features');
      const t = createSectionElement('testimonials');

      sectionsContainer.appendChild(h);
      sectionsContainer.appendChild(f);
      sectionsContainer.appendChild(t);

      [h, f, t].forEach(sec => bindSectionEvents(sec));

      selectedSection = null;
      if (inspectorEmptyState) inspectorEmptyState.classList.remove('hidden');
      if (inspectorEditPanel) inspectorEditPanel.classList.add('hidden');

      saveCanvasStateToData();
      showToast('Visual workspace template reset.', 'success');
    });
  }

  if (builderSaveBtn) {
    builderSaveBtn.addEventListener('click', () => {
      builderSaveBtn.disabled = true;
      builderSaveBtn.querySelector('span').innerText = 'Saving...';
      
      showToast('Saving layout changes to servers...', 'info');

      setTimeout(() => {
        builderSaveBtn.disabled = false;
        builderSaveBtn.querySelector('span').innerText = 'Save Changes';
        showToast('Changes saved successfully!', 'success');
        appendActivityLog('Site layouts updated visually', 'Just now · by You', 'emerald');
      }, 1000);
    });
  }

  // --- Dynamic page switcher selector handler ---
  const pageSelect = document.getElementById('builder-page-select');
  if (pageSelect) {
    pageSelect.addEventListener('change', (e) => {
      const pageId = e.target.value;
      activePages[activeProject] = pageId;
      loadPageCanvas(activeProject, pageId);
      showToast(`Switched builder page to: ${projectData[activeProject].pages[pageId].name}`);
    });
  }

  // 6. AI Prompt Site Copilot Simulator
  if (aiGenerateBtn) {
    document.querySelectorAll('.ai-preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        if (aiPromptInput) {
          aiPromptInput.value = chip.innerText;
          aiGenerateBtn.click();
        }
      });
    });

    aiGenerateBtn.addEventListener('click', () => {
      const prompt = aiPromptInput ? aiPromptInput.value.trim() : '';
      if (!prompt) {
        showToast('Please enter a prompt first!', 'warning');
        return;
      }

      aiGenerateBtn.disabled = true;
      if (aiBtnIcon) aiBtnIcon.classList.add('animate-spin');

      const steps = [
        'Analyzing canvas sections...',
        'Regenerating copy using Portify AI...',
        'Applying layout stylesheets...'
      ];

      let stepIdx = 0;
      aiBtnText.innerText = steps[stepIdx];

      const interval = setInterval(() => {
        stepIdx++;
        if (stepIdx < steps.length) {
          aiBtnText.innerText = steps[stepIdx];
        } else {
          clearInterval(interval);

          const lowerPrompt = prompt.toLowerCase();
          
          if (lowerPrompt.includes('dark') || lowerPrompt.includes('premium') || lowerPrompt.includes('violet')) {
            sectionsContainer.querySelectorAll('.canvas-section').forEach((sec, idx) => {
              const oldTheme = sec.getAttribute('data-bg-theme');
              const newTheme = idx % 2 === 0 ? 'violet-gradient' : 'slate-dark';
              
              sec.setAttribute('data-bg-theme', newTheme);
              if (themeClasses[oldTheme]) {
                themeClasses[oldTheme].split(' ').forEach(c => sec.classList.remove(c));
              }
              themeClasses[newTheme].split(' ').forEach(c => sec.classList.add(c));
            });
            showToast('AI applied dark premium theme gradients!', 'success');
          } else if (lowerPrompt.includes('saas') || lowerPrompt.includes('startup') || lowerPrompt.includes('tech') || lowerPrompt.includes('vercel')) {
            sectionsContainer.querySelectorAll('.canvas-section').forEach(sec => {
              const type = sec.getAttribute('data-section-type');
              const id = sec.getAttribute('data-section-id');
              
              if (type === 'hero') {
                const title = 'Deploy Web Apps Globally';
                const sub = 'Fast, secure, serverless. Portify gives your development team the tools to ship responsive layouts at the edge in seconds.';
                sec.setAttribute('data-headline', title);
                sec.setAttribute('data-subhead', sub);
                const titleEl = document.getElementById(`${id}-headline`);
                const subEl = document.getElementById(`${id}-subhead`);
                if (titleEl) titleEl.innerText = title;
                if (subEl) subEl.innerText = sub;
              } else if (type === 'features') {
                const title = 'High-fidelity edge networks';
                sec.setAttribute('data-headline', title);
                const titleEl = document.getElementById(`${id}-headline`);
                if (titleEl) titleEl.innerText = title;
              }
            });
            showToast('AI rewritten copywriting for Tech SaaS!', 'success');
          } else if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('minimalist') || lowerPrompt.includes('bold')) {
            sectionsContainer.querySelectorAll('.canvas-section').forEach(sec => {
              const type = sec.getAttribute('data-section-type');
              const id = sec.getAttribute('data-section-id');
              
              if (type === 'hero') {
                const title = 'Erick Octo — Interaction Designer';
                const sub = 'Visual Architect crafting digital products that balance clean minimalism with rich micro-animations. Deployed globally.';
                sec.setAttribute('data-headline', title);
                sec.setAttribute('data-subhead', sub);
                const titleEl = document.getElementById(`${id}-headline`);
                const subEl = document.getElementById(`${id}-subhead`);
                if (titleEl) titleEl.innerText = title;
                if (subEl) subEl.innerText = sub;
              }
            });
            showToast('AI rewritten copywriting for Creative Portfolio!', 'success');
          } else {
            const hero = sectionsContainer.querySelector('.canvas-section[data-section-type="hero"]');
            if (hero) {
              const id = hero.getAttribute('data-section-id');
              const title = 'AI Generated Macbook Pro Canvas';
              const sub = 'Prompt custom layout elements. This page section title and copy was generated instantly by the AI Site Copilot.';
              hero.setAttribute('data-headline', title);
              hero.setAttribute('data-subhead', sub);
              const titleEl = document.getElementById(`${id}-headline`);
              const subEl = document.getElementById(`${id}-subhead`);
              if (titleEl) titleEl.innerText = title;
              if (subEl) subEl.innerText = sub;
            }
            showToast('AI processed layout request.', 'success');
          }

          saveCanvasStateToData();

          aiBtnText.innerText = 'Generate with AI';
          aiGenerateBtn.disabled = false;
          if (aiBtnIcon) aiBtnIcon.classList.remove('animate-spin');

          if (selectedSection) {
            selectSection(selectedSection);
          }

          appendActivityLog(`AI generated layout adjustments`, 'Just now · by AI Assistant', 'rose');
        }
      }, 600);
    });
  }

  // --- Expose manager API to other modules ---
  window.builderPageManager = {
    loadPageCanvas: (pageId) => loadPageCanvas(activeProject, pageId),
    updatePageSelect: () => {
      const select = document.getElementById('builder-page-select');
      if (!select) return;
      select.innerHTML = '';
      const proj = projectData[activeProject];
      Object.keys(proj.pages).forEach(key => {
        const page = proj.pages[key];
        const opt = document.createElement('option');
        opt.value = key;
        opt.innerText = `Page: ${page.name}`;
        select.appendChild(opt);
      });
      select.value = activePages[activeProject];
    }
  };

  // Initial load
  window.builderPageManager.updatePageSelect();
  window.builderPageManager.loadPageCanvas(activePages[activeProject]);
}

// --- Dynamic Settings Page Implementation ---
function syncSettingsFields() {
  const proj = projectData[activeProject];
  if (!proj) return;

  // General Settings
  const settingName = document.getElementById('setting-project-name');
  const settingLang = document.getElementById('setting-project-lang');
  const settingDesc = document.getElementById('setting-project-desc');
  if (settingName) settingName.value = proj.name || '';
  if (settingLang) settingLang.value = proj.language || 'en';
  if (settingDesc) settingDesc.value = proj.description || '';

  // SEO Settings
  const settingSeoTitle = document.getElementById('setting-seo-title');
  const settingSeoDesc = document.getElementById('setting-seo-desc');
  const settingAnalyticsId = document.getElementById('setting-analytics-id');
  if (settingSeoTitle) {
    settingSeoTitle.value = proj.seoTitle || '';
    updateCharCounter('setting-seo-title', 'char-count-title', 60);
  }
  if (settingSeoDesc) {
    settingSeoDesc.value = proj.seoDescription || '';
    updateCharCounter('setting-seo-desc', 'char-count-desc', 160);
  }
  if (settingAnalyticsId) settingAnalyticsId.value = proj.analyticsId || '';

  // Branding Settings
  const settingAccentPicker = document.getElementById('setting-accent-color-picker');
  const settingAccentHex = document.getElementById('setting-accent-color-hex');
  const settingFontFamily = document.getElementById('setting-font-family');
  if (settingAccentPicker) settingAccentPicker.value = proj.primaryColor || '#2563eb';
  if (settingAccentHex) settingAccentHex.value = proj.primaryColor || '#2563eb';
  if (settingFontFamily) settingFontFamily.value = proj.fontFamily || 'Inter';

  // Team members
  renderMembersTable();
}

function updateCharCounter(inputId, counterId, limit) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);
  if (!input || !counter) return;
  const len = input.value.length;
  counter.innerText = `${len} / ${limit}`;
  if (len > limit) {
    counter.className = 'text-[10px] font-bold text-red-500';
  } else {
    counter.className = 'text-[10px] font-bold text-slate-400';
  }
}

function renderMembersTable() {
  const tbody = document.getElementById('settings-members-list-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  const proj = projectData[activeProject];
  if (!proj || !proj.members) return;

  proj.members.forEach((member, index) => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50/50 transition-colors opacity-0 translate-y-2';
    const isOwner = member.role === 'Owner';
    const actionsHtml = isOwner 
      ? `<span class="text-[10px] font-medium text-slate-400">System Protected</span>`
      : `<button type="button" class="remove-member-btn text-red-600 hover:text-red-800 hover:bg-red-55 p-1.5 rounded-md transition-all cursor-pointer hover:scale-110" data-member-index="${index}" title="Remove Member">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>`;

    tr.innerHTML = `
      <td class="py-3 font-semibold text-slate-700 flex items-center space-x-2">
        <img src="${member.avatar || '/avatar.png'}" class="w-6 h-6 rounded-full object-cover" alt="" />
        <span>${member.name}</span>
      </td>
      <td class="py-3 text-slate-500 font-mono text-[11px]">${member.email}</td>
      <td class="py-3">
        <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold ${isOwner ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-slate-100 text-slate-600'}">${member.role}</span>
      </td>
      <td class="py-3 text-center">
        ${actionsHtml}
      </td>
    `;
    tbody.appendChild(tr);

    // Trigger enter animation
    setTimeout(() => {
      tr.classList.remove('opacity-0', 'translate-y-2');
      tr.classList.add('opacity-100', 'translate-y-0');
    }, index * 50);
  });

  // Bind remove buttons
  tbody.querySelectorAll('.remove-member-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(btn.getAttribute('data-member-index'));
      const member = proj.members[index];
      if (confirm(`Are you sure you want to remove ${member.name} from this project?`)) {
        proj.members.splice(index, 1);
        showToast(`Removed ${member.name}`, 'warning');
        appendActivityLog(`Removed collaborator: ${member.name}`, `Just now · by You`, 'rose');
        renderMembersTable();
      }
    });
  });
}

function applyBrandingStyles() {
  const proj = projectData[activeProject];
  if (!proj) return;

  const color = proj.primaryColor || '#2563eb';
  const font = proj.fontFamily || 'Inter';

  let styleEl = document.getElementById('dynamic-branding-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamic-branding-styles';
    document.head.appendChild(styleEl);
  }

  styleEl.innerHTML = `
    :root {
      --brand-primary: ${color};
      --brand-font: '${font}', sans-serif;
    }
    
    /* Apply Font Family */
    body {
      font-family: var(--brand-font) !important;
    }

    /* Override buttons or accent styles */
    .bg-blue-600 {
      background-color: var(--brand-primary) !important;
    }
    .text-blue-600 {
      color: var(--brand-primary) !important;
    }
    .bg-blue-50 {
      background-color: color-mix(in srgb, var(--brand-primary) 10%, transparent) !important;
    }
    .border-blue-200 {
      border-color: color-mix(in srgb, var(--brand-primary) 20%, transparent) !important;
    }
    .border-blue-400 {
      border-color: color-mix(in srgb, var(--brand-primary) 40%, transparent) !important;
    }
    .focus\\:border-blue-400:focus {
      border-color: var(--brand-primary) !important;
    }
    .group-hover\\:text-blue-500:hover {
      color: var(--brand-primary) !important;
    }
  `;
}

function initSettingsPage() {
  // 1. Settings sub-navigation tabs
  const nav = document.getElementById('settings-nav');
  if (nav) {
    const buttons = nav.querySelectorAll('button[data-sett-tab]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-sett-tab');
        
        // Active styling
        buttons.forEach(b => {
          b.className = "w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all text-slate-600 hover:bg-slate-50 hover:text-slate-900 cursor-pointer";
        });
        btn.className = "w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all bg-blue-50 text-blue-600 cursor-pointer";

        // Toggle panels
        document.querySelectorAll('.settings-panel').forEach(panel => {
          panel.classList.add('hidden');
        });
        const activePanel = document.getElementById(`settings-panel-${targetTab}`);
        if (activePanel) activePanel.classList.remove('hidden');
      });
    });
  }

  // 2. Character counters binding
  const seoTitleInput = document.getElementById('setting-seo-title');
  const seoDescInput = document.getElementById('setting-seo-desc');
  if (seoTitleInput) {
    seoTitleInput.addEventListener('input', () => updateCharCounter('setting-seo-title', 'char-count-title', 60));
  }
  if (seoDescInput) {
    seoDescInput.addEventListener('input', () => updateCharCounter('setting-seo-desc', 'char-count-desc', 160));
  }

  // 3. Save General Settings
  const generalForm = document.getElementById('general-settings-form');
  if (generalForm) {
    generalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const proj = projectData[activeProject];
      if (!proj) return;

      const newName = document.getElementById('setting-project-name').value.trim();
      const newLang = document.getElementById('setting-project-lang').value;
      const newDesc = document.getElementById('setting-project-desc').value.trim();

      if (!newName) return;

      proj.name = newName;
      proj.language = newLang;
      proj.description = newDesc;

      // Sync across header & sidebar elements
      const sidebarProjName = document.getElementById('sidebar-project-name');
      const headerProjName = document.getElementById('header-project-name');
      if (sidebarProjName) sidebarProjName.innerText = newName;
      if (headerProjName) headerProjName.innerText = newName;

      // Update the Left Sidebar P1, P2 or MG button text if changed
      const activeBtn = document.getElementById(`project-btn-${activeProject}`);
      if (activeBtn) {
        // Just extract first two letters
        const initials = newName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
        activeBtn.innerText = initials;
      }

      showToast('General Settings saved successfully!', 'success');
      appendActivityLog('General settings updated', 'Just now · by You', 'blue');
    });
  }

  // 4. Save SEO Settings
  const seoForm = document.getElementById('seo-settings-form');
  if (seoForm) {
    seoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const proj = projectData[activeProject];
      if (!proj) return;

      proj.seoTitle = document.getElementById('setting-seo-title').value.trim();
      proj.seoDescription = document.getElementById('setting-seo-desc').value.trim();
      proj.analyticsId = document.getElementById('setting-analytics-id').value.trim();

      showToast('SEO Settings saved successfully!', 'success');
      appendActivityLog('SEO settings updated', 'Just now · by You', 'blue');
    });
  }

  // 5. Invite Member Form
  const inviteForm = document.getElementById('invite-member-form');
  if (inviteForm) {
    inviteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const proj = projectData[activeProject];
      if (!proj) return;

      const name = document.getElementById('invite-name').value.trim();
      const email = document.getElementById('invite-email').value.trim();
      const role = document.getElementById('invite-role').value;

      if (!name || !email) return;

      // Check duplicate email
      const exists = proj.members.some(m => m.email.toLowerCase() === email.toLowerCase());
      if (exists) {
        showToast('Member with this email is already in the project!', 'warning');
        return;
      }

      proj.members.push({
        name,
        email,
        role,
        avatar: '/avatar.png'
      });

      showToast(`Invited ${name} as ${role}!`, 'success');
      appendActivityLog(`Invited collaborator: ${name}`, 'Just now · by You', 'emerald');
      inviteForm.reset();
      renderMembersTable();
    });
  }

  // 6. Branding Accent Color bindings
  const accentPicker = document.getElementById('setting-accent-color-picker');
  const accentHex = document.getElementById('setting-accent-color-hex');
  if (accentPicker && accentHex) {
    accentPicker.addEventListener('input', (e) => {
      accentHex.value = e.target.value;
    });
    accentHex.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (/^#[0-9A-F]{6}$/i.test(val)) {
        accentPicker.value = val;
      }
    });
  }

  const brandingForm = document.getElementById('branding-settings-form');
  if (brandingForm) {
    brandingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const proj = projectData[activeProject];
      if (!proj) return;

      proj.primaryColor = document.getElementById('setting-accent-color-picker').value;
      proj.fontFamily = document.getElementById('setting-font-family').value;

      // Apply branding changes
      applyBrandingStyles();

      showToast('Branding styles updated!', 'success');
      appendActivityLog('Visual branding styles updated', 'Just now · by You', 'blue');
    });
  }

  // Bind quick color preset chips
  const colorChips = document.querySelectorAll('.preset-color-chip');
  colorChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const color = chip.getAttribute('data-color');
      if (accentPicker) accentPicker.value = color;
      if (accentHex) accentHex.value = color;
    });
  });

  // 7. Export static build bundle
  const exportBtn = document.getElementById('export-site-btn');
  const exportProgress = document.getElementById('export-status-container');
  const exportLabel = document.getElementById('export-status-label');
  const exportPct = document.getElementById('export-pct');
  const exportFill = document.getElementById('export-progress-fill');
  if (exportBtn && exportProgress) {
    exportBtn.addEventListener('click', () => {
      exportBtn.disabled = true;
      exportProgress.classList.remove('hidden');
      exportLabel.innerText = 'Packaging assets...';
      exportPct.innerText = '0%';
      exportFill.style.width = '0%';

      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          exportLabel.innerText = 'Build package ready for download!';
          showToast('Project static build exported!', 'success');
          appendActivityLog('Project static build exported', 'Just now · by You', 'emerald');
          exportBtn.disabled = false;
          
          // Trigger fake file download
          const blob = new Blob([JSON.stringify(projectData[activeProject], null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${activeProject}_build_static.json`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
        exportPct.innerText = `${progress}%`;
        exportFill.style.width = `${progress}%`;
      }, 150);
    });
  }

  // 8. Delete Project Workflow
  const openDeleteBtn = document.getElementById('open-delete-project-btn');
  const deleteModal = document.getElementById('delete-project-modal');
  const deleteCard = document.getElementById('delete-project-modal-card');
  const closeDeleteBtn = document.getElementById('close-delete-project-modal');
  const cancelDeleteBtn = document.getElementById('cancel-delete-project-btn');
  const confirmDeleteBtn = document.getElementById('confirm-delete-project-btn');
  const deleteInput = document.getElementById('delete-project-confirm-input');
  const deleteNameSpan = document.getElementById('delete-project-name-span');

  if (openDeleteBtn && deleteModal && deleteCard) {
    openDeleteBtn.addEventListener('click', () => {
      const proj = projectData[activeProject];
      if (!proj) return;

      if (deleteNameSpan) deleteNameSpan.innerText = proj.name;
      if (deleteInput) deleteInput.value = '';
      if (confirmDeleteBtn) {
        confirmDeleteBtn.disabled = true;
        confirmDeleteBtn.className = "bg-red-600 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm transition-all cursor-not-allowed opacity-50";
      }

      toggleModalState(deleteModal, deleteCard, true);
    });

    const closeModal = () => toggleModalState(deleteModal, deleteCard, false);

    if (closeDeleteBtn) closeDeleteBtn.addEventListener('click', closeModal);
    if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', closeModal);

    if (deleteInput) {
      deleteInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        const proj = projectData[activeProject];
        if (proj && val.toLowerCase() === proj.name.toLowerCase()) {
          confirmDeleteBtn.disabled = false;
          confirmDeleteBtn.className = "bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm transition-all cursor-pointer";
        } else {
          confirmDeleteBtn.disabled = true;
          confirmDeleteBtn.className = "bg-red-600 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm transition-all cursor-not-allowed opacity-50";
        }
      });
    }

    if (confirmDeleteBtn) {
      confirmDeleteBtn.addEventListener('click', () => {
        const nameToDelete = projectData[activeProject].name;
        const keys = Object.keys(projectData);
        if (keys.length <= 1) {
          showToast('Cannot delete the only workspace left!', 'warning');
          closeModal();
          return;
        }

        // Remove project from state
        delete projectData[activeProject];
        showToast(`Project "${nameToDelete}" successfully deleted.`, 'success');
        
        // Find another project to switch to
        const remainingKeys = Object.keys(projectData);
        const nextActive = remainingKeys[0];
        
        // Hide settings modal
        closeModal();

        // Switch to the other project button (which automatically triggers selectProject)
        const targetBtn = document.getElementById(`project-btn-${nextActive}`);
        if (targetBtn) {
          targetBtn.click();
        } else {
          selectProject(nextActive);
        }

        // Switch tab back to Overview
        const overviewTabBtn = document.querySelector('button[data-tab="overview"]');
        if (overviewTabBtn) overviewTabBtn.click();
      });
    }
  }
}

