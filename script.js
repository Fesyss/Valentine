document.addEventListener('DOMContentLoaded', function() {
    /* ----- Envelope Modal Functionality ----- */
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelopeModal = document.getElementById('modalOverlay');
    const closeEnvelopeModalBtn = document.getElementById('closeEnvelopeModal');
  
    // Show envelope modal when envelope is clicked
    envelopeWrapper.addEventListener('click', function() {
      envelopeModal.classList.add('show');
    });
  
    // Close envelope modal when close button is clicked
    closeEnvelopeModalBtn.addEventListener('click', function() {
      envelopeModal.classList.remove('show');
    });
  
    // Optional: Close envelope modal when clicking outside the modal content
    envelopeModal.addEventListener('click', function(e) {
      if (e.target === envelopeModal) {
        envelopeModal.classList.remove('show');
      }
    });
  
    /* ----- Photo Gallery Modal Functionality ----- */
    const photoItems = document.querySelectorAll('.photo-item');
    const photoModal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const closePhotoModalBtn = document.getElementById('closePhotoModal');
  
    // Show photo modal when any photo is clicked
    photoItems.forEach(item => {
      item.addEventListener('click', function() {
        const img = item.querySelector('img');
        const src = img.getAttribute('src');
        modalImage.setAttribute('src', src);
        photoModal.classList.add('show');
      });
    });
  
    // Close photo modal when close button is clicked
    closePhotoModalBtn.addEventListener('click', function() {
      photoModal.classList.remove('show');
    });
  
    // Optional: Close photo modal when clicking outside the modal content
    photoModal.addEventListener('click', function(e) {
      if (e.target === photoModal) {
        photoModal.classList.remove('show');
      }
    });
  });
  
  // Lottie Animation for Section 4
var animationContainer = document.getElementById('lottie-container');

fetch('https://lottie.host/6cf88769-5d53-4ce8-b091-c339b1fe3796/zpasJ8rFeh.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nel caricamento del file JSON: ' + response.statusText);
    }
    return response.json();
  })
  .then(animationData => {
    var animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });

    // Resize animation container to maintain a 1:1 aspect ratio
    function resizeAnimation() {
      var width = animationContainer.offsetWidth;
      animationContainer.style.height = width + 'px';
    }
    window.addEventListener('resize', resizeAnimation);
    resizeAnimation();
  })
  .catch(error => console.error('Errore nel caricamento dell\'animazione:', error));