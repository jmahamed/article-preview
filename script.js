const shareIcon = document.querySelector('.share-image')
const shareCard = document.querySelector('.share-socials')


shareIcon.addEventListener('click', () => {
    shareCard.style.display = 'flex'
    shareIcon.src="./images/share.png"
})