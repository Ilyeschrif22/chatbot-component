function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
        const tabNumber = button.getAttribute('data-tab');

        document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active-content');
        });
        document.getElementById(`tab-content-${tabNumber}`).classList.add('active-content');


    });
});

function switchDotsToText() {
    const container = document.getElementById('bouncing-dots');

    setTimeout(() => {
        container.innerHTML = 'How can I help you?';
        container.style.color = '#f7f7f7';
        container.style.fontSize = '14px';
    }, 3000);
}

switchDotsToText();



