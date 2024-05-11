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
// Get all zoomable images
const zoomableImages = document.querySelectorAll('.zoomable-image');

// Attach click event listener to each zoomable image
zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        // Toggle the 'zoomed-in' class on the clicked image
        image.classList.toggle('zoomed-in');
    });
});
