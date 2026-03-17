
      // Import required libraries
      import { gsap } from 'gsap';
      import { ScrollTrigger } from 'gsap/ScrollTrigger';

      // Initialize gsap and ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Animation for page load
      gsap.from('body', {
         duration: 1.5,
         opacity: 0,
         ease: 'power2.inOut'
      });

      // Animation for input fields
      const inputFields = document.querySelectorAll('input');

      inputFields.forEach((inputField) => {
         gsap.from(inputField, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            y: 20,
            ease: 'power2.inOut'
         });
      });

      // Animation for login button
      const loginButton = document.querySelector('#login-button');

      gsap.from(loginButton, {
         duration: 1,
         delay: 1,
         opacity: 0,
         y: 20,
         ease: 'power2.inOut'
      });

      // Add event listener for input fields
      inputFields.forEach((inputField) => {
         inputField.addEventListener('focus', () => {
            gsap.to(inputField, {
               duration: 0.5,
               borderColor: '#66CC00',
               ease: 'power2.inOut'
            });
         });

         inputField.addEventListener('blur', () => {
            gsap.to(inputField, {
               duration: 0.5,
               borderColor: '#ddd',
               ease: 'power2.inOut'
            });
         });
      });

      // Add event listener for login button
      loginButton.addEventListener('click', () => {
         gsap.to(loginButton, {
            duration: 0.5,
            backgroundColor: '#66CC00',
            ease: 'power2.inOut'
         });

         // Simulate login functionality
         setTimeout(() => {
            gsap.to(loginButton, {
               duration: 0.5,
               backgroundColor: '#4CAF50',
               ease: 'power2.inOut'
            });
         }, 1000);
      });
   