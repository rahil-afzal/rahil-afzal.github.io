const nav =document.querySelector('.nav'),
    navlist=nav.querySelectorAll('li'),
    totalnavlist=navlist.length;
    for(let i=0; i<totalnavlist; i++)
        {
            const a =navlist[i].querySelector("a");
            a.addEventListener('click',function(){
                this.classList.add("active")
            }
            
            )
        }






const zoomableImages = document.querySelectorAll('.zoomable-image');
let currentZoomedImage = null;

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Attach click event listener to each zoomable image
zoomableImages.forEach(image => {
    image.addEventListener('click', (event) => {
        // Toggle the 'zoomed-in' class on the clicked image
        if (!image.classList.contains('zoomed-in')) {
            image.classList.add('zoomed-in');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            currentZoomedImage = image;
        }
        event.stopPropagation(); // Prevent the event from bubbling up to the document
    });
});

// Close zoomed image when clicking on the overlay
overlay.addEventListener('click', () => {
    if (currentZoomedImage) {
        currentZoomedImage.classList.remove('zoomed-in');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        currentZoomedImage = null;
    }
});
