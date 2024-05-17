const body = document.querySelector("body")
const on =() => {
    body.style.backgroundColor = ("pink");
    body.style.color = ("black");
};
const off = () =>{
    body.style.backgroundColor = ("black");
    body.style.color = ("pink");
};
// on()
// off()
const changeImg = () => {
    const img = document.querySelector("img")
    img.src="https://media.istockphoto.com/id/1333290363/photo/osaka-night-view-from-sky-building.jpg?s=2048x2048&w=is&k=20&c=eNEpfVAfsuqfhZNety-Gb3dvwyreBRTyDRzv-pKD-a0="
}
const originalImg =() =>{
    const img = document.querySelector("img")
    img.src="https://media.istockphoto.com/id/1068490248/photo/skyline-night-view-of-shinjuku-in-tokyo-japan.jpg?s=2048x2048&w=is&k=20&c=5JTsj9Z_X21lGhk4Tl9I6N85aYu4F6_GaHQ11WcTToY="
}
