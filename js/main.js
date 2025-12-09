// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Change icon
      const icon = mobileMenuBtn.querySelector('svg') || mobileMenuBtn;
      if (mobileMenu.classList.contains('active')) {
        if (icon.innerHTML) {
          icon.innerHTML = '✕';
        } else {
          mobileMenuBtn.textContent = '✕';
        }
      } else {
        if (icon.innerHTML) {
          icon.innerHTML = '☰';
        } else {
          mobileMenuBtn.textContent = '☰';
        }
      }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('svg') || mobileMenuBtn;
        if (icon.innerHTML) {
          icon.innerHTML = '☰';
        } else {
          mobileMenuBtn.textContent = '☰';
        }
      });
    });
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Disable button and show loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Remove existing alerts
      const existingAlert = contactForm.querySelector('.alert');
      if (existingAlert) {
        existingAlert.remove();
      }
      
      // Simulate form submission
      setTimeout(function() {
        // Show success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success';
        successAlert.textContent = 'Thank you! Your message has been sent successfully.';
        contactForm.insertBefore(successAlert, contactForm.firstChild);
        
        // Reset form
        contactForm.reset();
        
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        // Remove success message after 5 seconds
        setTimeout(function() {
          successAlert.remove();
        }, 5000);
      }, 1000);
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


