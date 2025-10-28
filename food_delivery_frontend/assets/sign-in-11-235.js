(function () {
  'use strict';

  /*
    Sign In screen JavaScript (11:235)
    - Form validation for email and password
    - Social sign-in button handlers
    - Keyboard accessibility
    - Focus management
    - Progressive enhancement
  */

  document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen-sign-in-11-235');
    if (!screen) return;

    // Form elements
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const signInButton = document.getElementById('node-54-668');
    const googleButton = document.getElementById('node-13-35');
    const facebookButton = document.getElementById('node-13-49');
    const forgotPasswordLink = document.querySelector('a[href="#forgot-password"]');
    const signUpLink = document.querySelector('a[href="#sign-up"]');

    // Email validation helper
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Form validation
    function validateForm() {
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';

      if (!email) {
        return { valid: false, message: 'Please enter your email address' };
      }

      if (!isValidEmail(email)) {
        return { valid: false, message: 'Please enter a valid email address' };
      }

      if (!password) {
        return { valid: false, message: 'Please enter your password' };
      }

      if (password.length < 6) {
        return { valid: false, message: 'Password must be at least 6 characters' };
      }

      return { valid: true };
    }

    // Sign In button handler
    if (signInButton) {
      signInButton.addEventListener('click', function (e) {
        e.preventDefault();
        
        const validation = validateForm();
        
        if (!validation.valid) {
          alert(validation.message);
          return;
        }

        // In a real app, this would make an API call
        console.log('Sign in with:', {
          email: emailInput.value,
          password: '***hidden***'
        });
        
        alert('Sign in functionality would be implemented here');
      });

      // Keyboard support for Sign In button
      signInButton.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          signInButton.click();
        }
      });
    }

    // Google sign-in handler
    if (googleButton) {
      googleButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Google sign-in clicked');
        alert('Google sign-in would be implemented here');
      });

      googleButton.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          googleButton.click();
        }
      });
    }

    // Facebook sign-in handler
    if (facebookButton) {
      facebookButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Facebook sign-in clicked');
        alert('Facebook sign-in would be implemented here');
      });

      facebookButton.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          facebookButton.click();
        }
      });
    }

    // Forgot Password link handler
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Forgot password clicked');
        alert('Password recovery would be implemented here');
      });
    }

    // Sign Up link handler
    if (signUpLink) {
      signUpLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Sign up clicked');
        alert('Sign up screen would be shown here');
      });
    }

    // Enter key submission for inputs
    if (emailInput) {
      emailInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (passwordInput) {
            passwordInput.focus();
          }
        }
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (signInButton) {
            signInButton.click();
          }
        }
      });
    }

    // Lazy load images optimization (already in HTML, but add decoding hints)
    screen.querySelectorAll('img[loading="lazy"]').forEach(img => {
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });

    console.log('Sign In screen initialized');
  });
})();
