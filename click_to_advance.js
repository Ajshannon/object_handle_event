const flower_images = ["flower0.png", "flower1.png", "flower2.png"];
const container_div = document.getElementById("container_div");

/* frame_images is an array of image urls.
 * target_div is the HTML element within which to append the image.
 * x, y are the coordinates for where to position the image.
 */
function ClickToAdvance(frame_images, target_div, x, y) {
    this.images = frame_images; // An array of image urls
    this.frame = 0; // Index of the frame to show
    this.img = document.createElement("img");
    this.img.src = this.images[0];
    this.img.style.position = "absolute";
    this.img.style.left = x + "px";
    this.img.style.top = y + "px";
    target_div.appendChild(this.img);


   
    this.handleEvent = function (event) {
       
        if (this.frame < this.images.length -1){
            this.frame += 1;
            console.log(this.frame)
            this.img.src = this.images[this.frame];
        }
        }

    this.img.addEventListener("click", this);


}

for (var i = 0; i < 5; i++) {
    var x = 150 * i;
    var y = Math.floor(Math.random() * 500);
    var flower = new ClickToAdvance(flower_images, container_div, x, y);
}