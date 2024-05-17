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

// Attach click event listener to each zoomable image
zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        // Toggle the 'zoomed-in' class on the clicked image
        image.classList.toggle('zoomed-in');
        
        // Prevent background scrolling when image is zoomed in
        if (image.classList.contains('zoomed-in')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});

// Close zoomed image when clicking outside the image
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('zoomable-image')) {
        zoomableImages.forEach(image => {
            image.classList.remove('zoomed-in');
        });
        document.body.style.overflow = ''; // Restore background scrolling
    }
});
