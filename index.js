const mobile = 12345678910;
const pin = 1234;

function getElementNUmber (id){
    const number = parseInt(document.getElementById(id).value)
    return number;
}

document.getElementById('brn-login')
.addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = getElementNUmber('mobile-number')
    const pinNumber = getElementNUmber('pin-number')
    
    if(mobileNumber === mobile && pin === pinNumber){
        window.location.href = './home.html'
    } else{
        alert('valid credential')
    }
    
})