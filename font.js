const FONT = 'Lora'; // 'Lora'
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = `https://fonts.googleapis.com/css2?family=${FONT.replace(/ /g, '+')}:wght@400;600;700&display=swap`;
document.head.appendChild(link);
document.documentElement.style.setProperty('--font', `'${FONT}', serif`);