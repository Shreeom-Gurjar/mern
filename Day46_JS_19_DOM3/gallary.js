const image = [
    "https://media.istockphoto.com/id/1479215852/photo/business-successful-ambition-concept.jpg?s=2048x2048&w=is&k=20&c=M3KRMgYCM6uwm3EdFh5fWmkWg0wmGM-xB92WNk-n23M=",
    "https://media.istockphoto.com/id/2152548645/photo/office-buildings-by-night-night-architectural-buildings-with-glass-facade.jpg?s=2048x2048&w=is&k=20&c=NqT4_hwHRCHSfXZpn_wTAwC7oHxlueaARrdqojtEUaA=",
    "https://media.istockphoto.com/id/2152548675/photo/office-buildings-by-night-night-architectural-buildings-with-glass-facade.jpg?s=2048x2048&w=is&k=20&c=BLep6ziKRsKfYmpkL1w2dBjy1_JcA90127FKYSZ10ks=",
    "https://media.istockphoto.com/id/1333290363/photo/osaka-night-view-from-sky-building.jpg?s=2048x2048&w=is&k=20&c=eNEpfVAfsuqfhZNety-Gb3dvwyreBRTyDRzv-pKD-a0=",
    "https://media.istockphoto.com/id/1068490248/photo/skyline-night-view-of-shinjuku-in-tokyo-japan.jpg?s=2048x2048&w=is&k=20&c=5JTsj9Z_X21lGhk4Tl9I6N85aYu4F6_GaHQ11WcTToY=",
];
const img = document.querySelector("img")
let index =0;
img.src = image[index]
const increseIndex = () =>{
    index++;
    if(index<image.length-1){

img.src = image[index];
    }
    else if(index == image.legth){
        index =0;
        img.src=image[index]
    }
}
const decreseIndex = () =>{
    index--;
    if(index>0){
    
    img.src = image[index];
    }
    else if(index<0){
        index = image.legth-1;
        img.src = image[index]
    }
    console.log("index = ",index)
}
console.log("image array length",image.length)