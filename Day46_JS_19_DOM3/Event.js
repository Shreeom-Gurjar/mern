const body = document.querySelector("body");

const changeDark = () => {
body.style.backgroundColor = "black";
body.style.color = "white";
};
const changeLight = () => {
    body.style.backgroundColor = "white";
    body.style.color = "black";
};
changeLight()
 changeDark()
const changeImg = () =>{
const img = document.querySelector("img")
img.src ="https://media.istockphoto.com/id/1068490248/photo/skyline-night-view-of-shinjuku-in-tokyo-japan.jpg?s=2048x2048&w=is&k=20&c=5JTsj9Z_X21lGhk4Tl9I6N85aYu4F6_GaHQ11WcTToY="
}
const originalImg = () =>{
    const img = document.querySelector("img")
    img.src =
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
};