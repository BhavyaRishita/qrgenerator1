
const imgBox=document.querySelector('#imgBox')
const qrimage=document.querySelector('#qrimage')
const qrtext=document.querySelector('input')
const button=document.querySelector('button')
function generateQr()
{
   if(qrtext.value.length>0)
   {
    qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`
    imgBox.classList.add('show-img')
   }
   else
   {
    qrtext.classList.add('error')
    setTimeout(()=>{
        qrtext.classList.remove('error')
    },1000)
   }
}
button.addEventListener('click',generateQr)
