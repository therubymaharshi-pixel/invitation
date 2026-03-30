function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const invitation = document.getElementById('invitation-container');

    // 1. Shrink and fade the envelope (and the quote inside it)
    envelope.style.transform = "scale(0) rotate(-15deg)";
    envelope.style.opacity = "0";

    setTimeout(() => {
        envelope.classList.add('hidden');
        invitation.classList.remove('hidden');
        
        setTimeout(() => {
            invitation.classList.add('show');
            
            // 2. Confetti Blast for Graduation
            const end = Date.now() + (2 * 1000);
            const colors = ['#f1e14e', '#ee62d0', '#ffffff'];

            (function frame() {
              confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                colors: colors
              });
              confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                colors: colors
              });

              if (Date.now() < end) {
                requestAnimationFrame(frame);
              }
            }());
        }, 150);
    }, 600);
}