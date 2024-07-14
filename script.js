function navigateTo(screen) {
    console.log(`Navigating to: ${screen}`);
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.add('hidden'));
    document.getElementById(`${screen}-screen`).classList.remove('hidden');
}

// Initialize to show the welcome screen first
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded. Initializing welcome screen.');
    navigateTo('welcome');
});
