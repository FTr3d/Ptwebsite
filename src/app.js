// Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initAccordions();
  renderDynamicContent();
  renderItineraryDetail();
  initQuoteForm();
});

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  const links = document.querySelectorAll('.mobile-menu a');

  if (!toggle || !menu) return;

  const toggleMenu = () => {
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  };

  toggle.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    if (!header || header.hasAttribute('data-listener')) return;

    header.setAttribute('data-listener', 'true');
    header.addEventListener('click', () => {
      const parent = acc.parentElement;
      if (parent && parent.classList.contains('accordion-group')) {
        parent.querySelectorAll('.accordion').forEach(sibling => {
          if (sibling !== acc) {
            sibling.classList.remove('expanded');
            const sibIcon = sibling.querySelector('.accordion-icon');
            if (sibIcon) sibIcon.textContent = '+';
          }
        });
      }

      acc.classList.toggle('expanded');
      const icon = header.querySelector('.accordion-icon');
      if (icon) {
        icon.textContent = acc.classList.contains('expanded') ? '−' : '+';
      }
    });
  });
}

function renderDynamicContent() {
  if (!window.PT_DATA) return;

  const { destinations, itineraries, faqs, getTierDisplay } = window.PT_DATA;

  // Render Featured Destinations (Home)
  const destContainer = document.getElementById('featured-destinations');
  if (destContainer) {
    destContainer.innerHTML = destinations.map(dest => `
      <a href="/itineraries.html?dest=${dest.slug}" class="dest-card">
        <img src="${dest.heroImage}" alt="${dest.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'">
        <div class="dest-overlay">
          <h3>${dest.name}</h3>
          <p>${dest.tagline}</p>
        </div>
      </a>
    `).join('');
  }

  // Render Featured Itineraries (Home)
  const featItinContainer = document.getElementById('featured-itineraries');
  if (featItinContainer) {
    const featured = itineraries.filter(i => i.featured).slice(0, 4);
    featItinContainer.innerHTML = renderItineraryCards(featured, getTierDisplay);
  }

  // Render All Itineraries (Itineraries Page)
  const allItinContainer = document.getElementById('all-itineraries');
  if (allItinContainer) {
    const params = new URLSearchParams(window.location.search);
    const destFilter = params.get('dest');

    const destSelect = document.getElementById('filter-dest');
    const tierSelect = document.getElementById('filter-tier');

    if (destSelect && destFilter) destSelect.value = destFilter.toLowerCase();

    const applyFilters = () => {
      const d = destSelect ? destSelect.value : '';
      const t = tierSelect ? tierSelect.value : '';

      let filtered = itineraries;
      if (d) filtered = filtered.filter(i => i.destination.toLowerCase() === d.toLowerCase());
      if (t) filtered = filtered.filter(i => i.tier === t);

      if (filtered.length === 0) {
        allItinContainer.innerHTML = '<div class="text-center" style="grid-column: 1/-1; padding: 60px 0; opacity: 0.6;"><p>No itineraries match your selection. Try adjusting the filters.</p></div>';
      } else {
        allItinContainer.innerHTML = renderItineraryCards(filtered, getTierDisplay);
      }

      const title = document.querySelector('.itineraries-title');
      if (title) {
        if (d) title.textContent = `Itineraries for ${d.charAt(0).toUpperCase() + d.slice(1)}`;
        else title.textContent = 'Find your journey.';
      }
    };

    if (destSelect) destSelect.addEventListener('change', applyFilters);
    if (tierSelect) tierSelect.addEventListener('change', applyFilters);

    applyFilters();
  }

  // Render FAQs based on data-tag attribute
  const faqContainers = document.querySelectorAll('.faq-container');
  faqContainers.forEach(container => {
    const tag = container.getAttribute('data-tag');
    const filteredFaqs = faqs.filter(f => f.tag === tag);

    if (filteredFaqs.length > 0) {
      container.innerHTML = filteredFaqs.map(faq => `
        <div class="accordion">
          <button class="accordion-header">
            ${faq.question}
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-content">
            <p>${faq.answer}</p>
          </div>
        </div>
      `).join('');

      // Re-init accordions for newly added DOM elements
      initAccordions();
    }
  });
}

function renderItineraryDetail() {
  const container = document.getElementById('itinerary-detail');
  if (!container || !window.PT_DATA) return;

  const { itineraries, getTierDisplay } = window.PT_DATA;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const itin = itineraries.find(i => i.internalId === id) || itineraries.find(i => i.internalId === 'DXB-02') || itineraries[0];
  const tier = getTierDisplay(itin.tier);

  document.title = `${itin.name} | Prestige Travels`;

  const waMessage = encodeURIComponent(`Hi Prestige Travels, I'd like to enquire about the ${itin.name} package.`);

  container.innerHTML = `
    <!-- Hero -->
    <section class="hero" style="height: 80vh;">
      <img src="${itin.heroImage}" alt="${itin.name}" class="hero-bg">
      <div class="hero-overlay"></div>
      <div class="container text-center">
        <div style="margin: 0 auto; max-width: 800px;">
          <span class="tier-badge ${tier.className}" style="margin-bottom: 24px; display: inline-block;">${tier.label}</span>
          <h1>${itin.name}</h1>
          <p>${itin.cardDescription}</p>
        </div>
      </div>
    </section>

    <!-- Overview Bar -->
    <div style="background-color: var(--color-black); color: var(--color-gold); padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.1);">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; justify-content: center; font-family: var(--font-heading); font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;">
          <span>${itin.duration}</span>
          <span>From &euro;${itin.priceFrom} pp</span>
          <span>${itin.boardBasis}</span>
          <span>${itin.resortHotel}</span>
        </div>
      </div>
    </div>

    <!-- Flights Note -->
    <div style="background-color: var(--color-offwhite); padding: 16px 0; text-align: center; font-size: 14px;">
      <div class="container">
        &#10022; ${itin.flightsNote}
      </div>
    </div>

    <!-- Details -->
    <section class="section">
      <div class="container" style="max-width: 1000px;">

        <div class="mb-16">
          <h2>Where you'll stay</h2>
          <div style="display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center;">
            <img src="${itin.heroImage}" alt="${itin.resortHotel}" style="width: 100%; height: 400px; object-fit: cover;">
            <div>
              <h3 style="margin-bottom: 16px;">${itin.resortHotel}</h3>
              <p>${itin.resortDescription}</p>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h2>Included in your package</h2>
          <ul style="list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
            ${itin.highlights.map(item => `
              <li style="padding: 16px; background: var(--color-offwhite);">&check; ${item}</li>
            `).join('')}
          </ul>
        </div>

        <div class="mb-16">
          <h2>Your experiences</h2>
          <div class="grid-3">
            ${itin.excursions.map(exc => `
              <div style="background: var(--color-offwhite); padding: 24px;">
                <h4 style="margin-bottom: 12px;">${exc.title}</h4>
                <p style="font-size: 14px;">${exc.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="text-center mt-16">
          <div class="cta-pair" style="justify-content: center;">
            <a href="/request-quote.html?itinerary=${itin.internalId}&destination=${itin.destination.toLowerCase()}" class="btn btn-primary">Request a Quote for this journey</a>
            <a href="https://wa.me/31657196097?text=${waMessage}" class="btn btn-whatsapp" target="_blank">
              <svg style="width: 20px; height: 20px;" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Ask about this trip
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderItineraryCards(itins, getTierDisplay) {
  return itins.map(itin => {
    const tier = getTierDisplay(itin.tier);
    return `
      <a href="/itinerary.html?id=${itin.internalId}" class="itin-card">
        <img src="${itin.heroImage}" alt="${itin.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'">
        <div class="itin-card-top">
          <span class="dest-label">${itin.destination}</span>
          <span class="tier-badge ${tier.className}">${tier.label}</span>
        </div>
        <div class="itin-overlay">
          <h3>${itin.name}</h3>
          <p class="itin-teaser">${itin.cardDescription}</p>
          <div class="itin-drawer">
            <div class="itin-meta">
              <span>${itin.duration}</span>
              <span>From &euro;${itin.priceFrom}</span>
            </div>
            <span class="explore-link">Explore journey &rarr;</span>
          </div>
        </div>
      </a>
    `;
  }).join('');
}

function initQuoteForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;

  // URL-param prefill logic
  const params = new URLSearchParams(window.location.search);
  const itineraryId = params.get('itinerary');
  const destParam = params.get('destination');

  if (itineraryId && window.PT_DATA) {
    const itin = window.PT_DATA.itineraries.find(i => i.internalId === itineraryId);
    if (itin) {
      const detailsField = document.getElementById('details');
      if (detailsField) {
        detailsField.value = `I am interested in the ${itin.name} itinerary.`;
      }
      const destField = document.getElementById('destination');
      if (destField) {
        Array.from(destField.options).forEach(opt => {
          if (opt.value.toLowerCase() === itin.destination.toLowerCase()) {
            opt.selected = true;
          }
        });
      }
      const hiddenField = document.getElementById('itinerary-id');
      if (hiddenField) {
        hiddenField.value = itineraryId;
      }
    }
  }

  // Support ?destination= param (without itinerary)
  if (destParam && !itineraryId) {
    const destField = document.getElementById('destination');
    if (destField) {
      Array.from(destField.options).forEach(opt => {
        if (opt.value.toLowerCase() === destParam.toLowerCase()) {
          opt.selected = true;
        }
      });
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      form.innerHTML = `
        <div class="text-center" style="padding: 40px 0;">
          <h3 style="color: var(--color-gold); margin-bottom: 16px;">Thank you for your request.</h3>
          <p>Your advisor will review your details and send a personalised proposal within 24 hours.</p>
        </div>
      `;
    }, 1500);
  });
}
