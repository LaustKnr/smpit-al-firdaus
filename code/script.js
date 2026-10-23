 /**
 * ==========================================================================
 * SMP IT AL-FIRDAUS SAMARINDA - INTERACTIVE VANILLA JAVASCRIPT
 * Modern, Lightweight, and Accessible
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. STICKY NAVBAR & SCROLL SPY ---
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // --- 2. MOBILE MENU DRAWER ---
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const menuIcon = menuToggleBtn ? menuToggleBtn.querySelector('.material-symbols-outlined') : null;

  function toggleMobileMenu() {
    if (!mobileDrawer) return;
    const isOpen = mobileDrawer.classList.contains('open');

    if (isOpen) {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
      if (menuIcon) menuIcon.textContent = 'menu';
    } else {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (menuIcon) menuIcon.textContent = 'close';
    }
  }

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // Close drawer on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        toggleMobileMenu();
      }
      const modal = document.getElementById('ppdbModal');
      if (modal && modal.open) {
        modal.close();
      }
      const advModal = document.getElementById('advantageModal');
      if (advModal && advModal.open) {
        advModal.close();
        document.body.style.overflow = '';
      }
    }
  });

  // --- 3. EKSTRAKURIKULER FILTER ---
  const ekskulFilterChips = document.querySelectorAll('.filter-chip');
  const ekskulCards = document.querySelectorAll('.ekskul-card');

  ekskulFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      ekskulFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const category = chip.getAttribute('data-category');

      ekskulCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // --- 4. PPDB MODAL DIALOG ---
  const ppdbModal = document.getElementById('ppdbModal');
  const openModalBtns = document.querySelectorAll('.open-ppdb-modal-btn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const ppdbForm = document.getElementById('ppdbForm');
  const modalFormContent = document.getElementById('modalFormContent');
  const modalSuccessScreen = document.getElementById('modalSuccessScreen');
  const whatsappConfirmLink = document.getElementById('whatsappConfirmLink');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (ppdbModal) {
        // Reset states
        if (modalFormContent) modalFormContent.style.display = 'block';
        if (modalSuccessScreen) modalSuccessScreen.classList.remove('active');
        if (ppdbForm) ppdbForm.reset();

        // Optional pre-select program if triggered from specific program card
        const programPref = btn.getAttribute('data-program');
        const programSelect = document.getElementById('pilihanProgram');
        if (programPref && programSelect) {
          programSelect.value = programPref;
        }

        ppdbModal.showModal();

      }
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (ppdbModal) ppdbModal.close();
    });
  }

  // Close modal when clicking backdrop
  if (ppdbModal) {
    ppdbModal.addEventListener('click', (e) => {
      const dialogDimensions = ppdbModal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        ppdbModal.close();
      }
    });
  }

  if (ppdbForm) {
    ppdbForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const namaSiswa = document.getElementById('namaSiswa')?.value || '';
      const jenisKelamin = document.getElementById('jenisKelamin')?.value || '';
      const programPilihan = document.getElementById('pilihanProgram')?.value || '';
      const noWhatsapp = document.getElementById('noWhatsapp')?.value || '';
      const asalSekolah = document.getElementById('asalSekolah')?.value || '';

      // Prepare WhatsApp link
      const textMessage = `Assalamu'alaikum Panitia PPDB SMP IT Al-Firdaus Samarinda,%0A%0ASaya ingin mengonfirmasi pendaftaran santri baru:%0A• Nama Calon Santri: ${encodeURIComponent(namaSiswa)}%0A• Jenis Kelamin: ${encodeURIComponent(jenisKelamin)}%0A• Jalur Program: ${encodeURIComponent(programPilihan)}%0A• Asal Sekolah: ${encodeURIComponent(asalSekolah)}%0A• No. Kontak: ${encodeURIComponent(noWhatsapp)}%0A%0AMohon arahan verifikasi berkas selanjutnya. Terima kasih!`;
      const waUrl = `https://wa.me/6282116677763?text=${textMessage}`;

      if (whatsappConfirmLink) {
        whatsappConfirmLink.href = waUrl;
      }

      // Show success view
      if (modalFormContent) modalFormContent.style.display = 'none';
      if (modalSuccessScreen) modalSuccessScreen.classList.add('active');
    });
  }

  // --- 5. BACK TO TOP SCROLL ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 6. ADVANTAGE DETAIL INTERACTIVE MODAL & TABS ---
  const advantageModal = document.getElementById('advantageModal');
  const closeAdvantageModalBtn = document.getElementById('closeAdvantageModalBtn');
  const advantageCards = document.querySelectorAll('.advantage-card[data-advantage]');
  const advantageTabBtns = document.querySelectorAll('.advantage-tab-btn[data-tab]');
  const advantagePanels = document.querySelectorAll('.advantage-panel[data-panel]');
  const advantageModalTitle = document.getElementById('advantageModalTitle');
  const teacherFilterBtns = document.querySelectorAll('.teacher-filter-btn[data-filter]');
  const teacherCards = document.querySelectorAll('.teacher-card');

  const advantageTitles = {
    fasilitas: 'Detail Fasilitas Lengkap',
    lingkungan: 'Lingkungan Kampus Nyaman & Asri',
    pengajar: 'Profil Pengajar & Tenaga Kependidikan Kompeten (12 Orang)',
    kerjasama: 'Jaringan Kemitraan & Kerja Sama Luas'
  };

  function switchAdvantageTab(tabName) {
    if (!tabName) return;

    advantageTabBtns.forEach(btn => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    advantagePanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.panel === tabName);
    });

    if (advantageModalTitle && advantageTitles[tabName]) {
      advantageModalTitle.textContent = advantageTitles[tabName];
    }
  }

  function openAdvantageModal(tabName = 'fasilitas') {
    if (!advantageModal) return;
    switchAdvantageTab(tabName);
    try {
      if (!advantageModal.open) {
        advantageModal.showModal();
      }
    } catch (err) {
      advantageModal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeAdvantageModal() {
    if (!advantageModal) return;
    try {
      advantageModal.close();
    } catch (err) {}
    advantageModal.removeAttribute('open');
    document.body.style.overflow = '';
  }

  // Expose globally so inline onclick and external callers can always execute safely
  window.closeAdvantageModal = closeAdvantageModal;
  window.openAdvantageModal = openAdvantageModal;
  window.switchAdvantageTab = switchAdvantageTab;

  advantageCards.forEach(card => {
    const type = card.dataset.advantage;
    card.addEventListener('click', () => {
      openAdvantageModal(type);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAdvantageModal(type);
      }
    });
  });

  advantageTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchAdvantageTab(btn.dataset.tab);
    });
  });

  // Attach click listeners to all close buttons
  document.querySelectorAll('.close-advantage-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeAdvantageModal();
    });
  });

  if (advantageModal) {
    advantageModal.addEventListener('click', (e) => {
      // Backdrop click: e.target is the dialog itself when backdrop is clicked
      if (e.target === advantageModal) {
        closeAdvantageModal();
      }
    });

    advantageModal.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  }

  // Teacher Filter (Semua, Guru Mata Pelajaran, Pimpinan & Staf)
  teacherFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      teacherFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      teacherCards.forEach(card => {
        const category = card.dataset.category || card.dataset.gender;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
