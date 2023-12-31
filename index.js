const qrtext=document.getElementById("qr-text");
const sizes=document.getElementById("sizes");
const generatebtn=document.getElementById("generatebtn");
const downloadbtn=document.getElementById("downloadbtn");
const Qr_body=document.querySelector(".qr-body");
let size=sizes.value;
generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
   enptyqr();
});
function enptyqr(){
    if(qrtext.value.length>0){
        generatreqrcode();
    }
    else{
        alert(" enter the text or URL ")
    }  
}
function generatreqrcode(){
    Qr_body.innerHTML=""
new QRCode(Qr_body,{
    text:qrtext.value,
    height:size,
    width:size,
    colorLight:"#FFFFFF",
    colorDark:"#000",
});
};
sizes.addEventListener('change',(e)=>{
size=e.target.value;
enptyqr()
});
downloadbtn.addEventListener("click",()=>{
    let img=document.querySelector('.qr-body img');
    if(img !== null){
        let imgatr=img.getAttribute('src');
        downloadbtn.setAttribute('href',imgatr);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL}`)
    }
})