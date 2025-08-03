// Fungsi untuk membuka WhatsApp
function openWhatsApp() {
  const phoneNumber = "6289663164143";
  const message = encodeURIComponent(
    "Halo! Saya tertarik dengan sistem KasKita untuk Event Organizer. Bisa minta demo dashboard dan informasi lebih lanjut?"
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  // Buka WhatsApp di tab baru
  window.open(whatsappURL, "_blank");
}

// Smooth scroll untuk navigasi
document.addEventListener("DOMContentLoaded", function () {
  // Animasi fade in saat scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe semua card dan section
  const animatedElements = document.querySelectorAll(
    ".feature-card, .testimonial-card, .pricing-card, .feature-highlight"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Animasi hover untuk tombol CTA
  const ctaButtons = document.querySelectorAll(".btn-cta");
  ctaButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Efek parallax sederhana untuk hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector(".hero-image img");

    if (heroImage && scrolled < window.innerHeight) {
      heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Dashboard image hover effect
  const dashboardImage = document.querySelector(".dashboard-image");
  if (dashboardImage) {
    dashboardImage.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 25px 50px rgba(0,0,0,0.2)";
    });

    dashboardImage.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    });
  }

  // Smooth scroll untuk anchor links (jika ada)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Event listener untuk tombol login (placeholder)
document.querySelector(".btn-login").addEventListener("click", function () {
  alert(
    "Fitur login akan segera hadir! Untuk sementara, silakan hubungi kami via WhatsApp."
  );
});

// Lazy loading untuk gambar
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.transition = "opacity 0.3s ease";

          img.onload = () => {
            img.style.opacity = "1";
          };

          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
});

// Tambah efek loading untuk tombol CTA saat diklik
document.querySelectorAll(".btn-cta").forEach((button) => {
  button.addEventListener("click", function () {
    const originalText = this.textContent;
    this.textContent = "Mengarahkan ke WhatsApp...";
    this.disabled = true;

    setTimeout(() => {
      this.textContent = originalText;
      this.disabled = false;
    }, 2000);
  });
});

// Interactive demo untuk dashboard
document.addEventListener("DOMContentLoaded", function () {
  // Hover effect untuk stat cards
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".stat-icon");
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(10deg)";
        icon.style.transition = "transform 0.3s ease";
      }
    });

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".stat-icon");
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)";
      }
    });
  });

  // Interactive bars
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    bar.addEventListener("mouseenter", function () {
      this.style.transform = "scaleY(1.1)";
      this.style.filter = "brightness(1.1)";
    });

    bar.addEventListener("mouseleave", function () {
      this.style.transform = "scaleY(1)";
      this.style.filter = "brightness(1)";
    });
  });
});

// Tambah efek loading untuk tombol CTA saat diklik
document.querySelectorAll(".btn-cta").forEach((button) => {
  button.addEventListener("click", function () {
    const originalText = this.textContent;
    this.textContent = "Mengarahkan ke WhatsApp...";
    this.disabled = true;

    setTimeout(() => {
      this.textContent = originalText;
      this.disabled = false;
    }, 2000);
  });
});
