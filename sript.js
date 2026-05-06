// ==================== BERANDA MENU HAMBURGER ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Mencegah scroll body saat menu terbuka
    if (navMenu.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  });
}

// Tutup menu saat klik di luar
document.addEventListener('click', (e) => {
  if (navMenu && navMenu.classList.contains('active')) {
    if (!e.target.closest('nav')) {
      hamburger?.classList.remove('active');
      navMenu.classList.remove('active');
      body.style.overflow = 'auto';
    }
  }
});

// Tutup menu saat tautan diklik
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
    body.style.overflow = 'auto';
  });
});

// ==================== PENANDA MENU AKTIF ====================
function setActiveMenu() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (currentPage === '' && href === 'index.html') {
      link.classList.add('active');
    } else if (currentPage === href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Tetapkan menu aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', setActiveMenu);

// ==================== ANIMASI BATANG KEMAJUAN KEAHLIAN ====================
function animateProgressBars() {
  const progressFills = document.querySelectorAll('.progress-fill');
  
  progressFills.forEach(fill => {
    const percentage = fill.getAttribute('data-percentage');
    fill.style.setProperty('--progress-width', percentage + '%');
  });
}

// Jalankan animasi saat halaman dimuat atau saat terlihat saat menggulir
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.progress-fill')) {
    animateProgressBars();
  }
});

// ==================== GULIR HALUS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== ANIMASI MEMUDAR SAAT MENGGULIR ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .portfolio-card, .info-card, .certificate-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease';
  observer.observe(element);
});

// ==================== MENCEGAH PERGESERAN TATA LETAK ====================
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.section');
  if (section) {
    const computedStyle = window.getComputedStyle(section);
    // Pastikan ukuran seksi terjaga
  }
});

// ==================== MODAL LIGHTBOX UNTUK SERTIFIKAT ====================
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Buka modal saat gambar sertifikat diklik
const certificateImages = document.querySelectorAll('.certificate-image');
certificateImages.forEach(img => {
  img.addEventListener('click', () => {
    imageModal.classList.add('active');
    modalImage.src = img.src;
  });
});

// Tutup modal saat tombol tutup diklik
if (closeModal) {
  closeModal.addEventListener('click', () => {
    imageModal.classList.remove('active');
  });
}

// Tutup modal saat klik di luar gambar
window.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.classList.remove('active');
  }
});

// Tutup modal dengan tombol Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    imageModal.classList.remove('active');
  }
});
