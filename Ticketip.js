document.querySelectorAll('.service-item.concerts').forEach(service => {
    service.addEventListener('mouseenter', () => {
        let interval = setInterval(() => {
            let conf = document.createElement('div');
            conf.classList.add('confetti');
            conf.style.left = Math.random() * 100 + "%";
            conf.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
            conf.style.animationDelay = (Math.random() * 0.5) + "s"; // random delay
            service.appendChild(conf);
            setTimeout(() => conf.remove(), 2000);
        }, 100);

        service.addEventListener('mouseleave', () => {
            clearInterval(interval);  // <-- Existing: stop creating new confetti
            service.querySelectorAll('.confetti').forEach(conf => conf.remove()); // <-- Added: remove existing confetti immediately
        }, { once: true });
    });
});