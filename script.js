document.addEventListener('DOMContentLoaded', function() {
    // Add scroll reveal animations
    const scrollElements = document.querySelectorAll('.feature-box, .story-box, .tokenomics-box');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('animate__animated', 'animate__fadeInUp');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add particle effect to hero section
    const heroSection = document.querySelector('.hero-section');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 3 + 2 + 's';
        heroSection.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
    
    setInterval(createParticle, 200);
    
    // Add hover effect to CTA button
    const ctaButton = document.querySelector('.btn-primary');
    ctaButton.addEventListener('mouseover', function() {
        this.classList.add('animate__animated', 'animate__headShake');
    });
    
    ctaButton.addEventListener('animationend', function() {
        this.classList.remove('animate__animated', 'animate__headShake');
    });
    
    const buyButton = document.getElementById('buyButton');
    const otterEffects = document.getElementById('otterEffects');
    const peekABooOtter = document.querySelector('.peek-a-boo-otter');
    
    // Otter Rain Effect
    function createOtterRain() {
        const otter = document.createElement('div');
        otter.className = 'otter-rain';
        
        // Randomly assign size class
        const sizes = ['small', 'medium', 'large'];
        otter.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
        
        // Add otter image inside the div
        const otterImg = document.createElement('img');
        otterImg.src = 'otter.jpg';
        otter.appendChild(otterImg);
        
        // Random starting position
        otter.style.left = Math.random() * window.innerWidth + 'px';
        
        // Add some random horizontal movement
        const randomOffset = (Math.random() - 0.5) * 100;
        otter.style.transform = `translateX(${randomOffset}px)`;
        
        otterEffects.appendChild(otter);
        
        otter.addEventListener('animationend', () => {
            otter.remove();
        });
    }
    
    // Make it rain otters when clicking the buy button
    buyButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create intense otter rain
        const rainDuration = 2000; // 2 seconds of rain
        const ottersPerBatch = 5;
        const totalBatches = 20;
        
        // Create multiple batches of otters
        for(let batch = 0; batch < totalBatches; batch++) {
            setTimeout(() => {
                for(let i = 0; i < ottersPerBatch; i++) {
                    setTimeout(() => createOtterRain(), Math.random() * 100);
                }
            }, batch * 100);
        }
        
        // Add shake effect to button
        this.classList.add('animate__animated', 'animate__headShake');
        setTimeout(() => {
            this.classList.remove('animate__animated', 'animate__headShake');
        }, 1000);
    });
    
    // Peek-a-boo Otter Effect
    peekABooOtter.addEventListener('click', function() {
        this.style.transform = 'translateY(-20px) rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'none';
        }, 500);
        
        // Create a small burst of otters
        for(let i = 0; i < 5; i++) {
            setTimeout(() => createOtterRain(), i * 200);
        }
    });
    
    // Random peek-a-boo appearances
    setInterval(() => {
        if(Math.random() > 0.7) { // 30% chance to peek
            peekABooOtter.style.bottom = '0';
            setTimeout(() => {
                peekABooOtter.style.bottom = '-100px';
            }, 2000);
        }
    }, 5000);
});
