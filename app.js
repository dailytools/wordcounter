const inputText = document.getElementById('input-text');
const wordCount = document.getElementById('word-count');

inputText.addEventListener('input', () => {
    const text = inputText.value.trim();
    wordCount.textContent = text.split(/\s+/).filter(word => word !== '').length;
});
