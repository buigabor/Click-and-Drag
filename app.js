const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active")
    startX = e.pageX - slider.offsetLeft; //startX counts from the slider div edge, not from the page edge when clicked
    scrollLeft = slider.scrollLeft; //how far did we scroll
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active")

});
slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active")
});
slider.addEventListener("mousemove", (e) => {
    if (!isDown) {
        return;
    }
    e.preventDefault();
    const X = e.pageX - slider.offsetLeft; // while we move our mouse, how far are from the slider div edge
    const walk = (X - startX) * 2; // how far are we from the initial click
    slider.scrollLeft = scrollLeft - walk;
});