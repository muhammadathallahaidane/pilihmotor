function filterCategory(category) {
    const allCards = document.querySelectorAll('.col');
    if (category === 'all') {
        allCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        allCards.forEach(card => {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}