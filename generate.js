
let ApiUrl ="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";
    let input_text = document.querySelector(".input_text");
    let qrimage = document.querySelector(".qrimg");
    let qrBox = document.querySelector(".imgBox");
    let btn_input = document.querySelector(".input_btn");
    let btn_clear = document.querySelector(".delete_btn");
    
    function GenerateQRCode() {
        qrBox.style.display="flex";
        if(input_text.value.length > 0){
            input_text.classList.add("input_text");
            qrimage.src = ApiUrl+input_text.value;
        }else{
            input_text.classList.add("error");
            qrBox.style.display="none";
        }
    }
    function clear_Feild(){
        qrBox.style.display="none";
    }

