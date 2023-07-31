const yearSlider = document.getElementById('year-slider');
const timelineYears = document.querySelectorAll('.timeline-year');
const imageContainers = document.querySelectorAll('.image-container');

// Funktion zum Anzeigen der Bilder entsprechend des ausgewählten Jahres
function showImages(year) {
  imageContainers.forEach(container => {
    container.style.display = 'none';
  });

  const activeContainer = document.querySelector(`.image-container.year${year}`);
  if (activeContainer) {
    activeContainer.style.display = 'block';
  }

  timelineYears.forEach(timelineYear => {
    timelineYear.classList.remove('active');
    if (timelineYear.textContent === year) {
      timelineYear.classList.add('active');
    }
  });
}


// Event-Listener für den Regler
yearSlider.addEventListener('input', function(event) {
  const year = event.target.value;
  showImages(year);
});

// Initialisierung
showImages('2002');

