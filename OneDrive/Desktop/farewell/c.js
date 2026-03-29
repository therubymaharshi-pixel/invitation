document.addEventListener('DOMContentLoaded', () => {
    const ribbon = document.getElementById('magic-ribbon');
    const envelope = document.getElementById('envelope-shell');
    const inviteBox = document.getElementById('invitation-box');

    ribbon.addEventListener('click', () => {
        // 1. Start the vanish animation
        envelope.classList.add('vanish');

        // 2. After a short delay, hide envelope and show invite
        setTimeout(() => {
            envelope.style.display = 'none';
            inviteBox.classList.remove('hidden');
            
            // Trigger the entrance animation
            setTimeout(() => {
                inviteBox.classList.add('show-invite');
            }, 50);
        }, 700);
    });
});