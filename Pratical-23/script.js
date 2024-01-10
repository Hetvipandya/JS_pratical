const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click" , ()=>{
         fileInput.click();     
});

fileInput.onchange = ({target}) => {
    let file = target.files[0];
    if(file){
        let fileName = file.name;
        uploadFile(fileName);
        }
       
    }


function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open("POST");
    xhr.upload.addEventListener("progress" , ({loaded , total}) =>{
        let fileLoaded = Math.floor((loaded / total) * 100);
        let fileTotal = Math.floor(total / 1000);
        let progressHTML = `<li class="row">
        <i class="fa-regular fa-file"></i>
        <div class="content">
            <div class="details">
                <span class="name">${name} . Uploading</span>
                <span class="percent">${fileLoaded}%</span>
            </div>

            <div class="progress-bar">
                <div class="progress" style="width : ${fileLoaded}%"></div>
            </div>
        </div>
      </li>`
    progressArea.innerHTML = progressHTML;

    let uploadingHTML = `<li class="row">
    <div class="content">
        <i class="fa-regular fa-file"></i>
        <div class="details">
            <span class="name">image_01.jpg . Uploading</span>
            <span class="size">70 KB</span>
        </div>
    </div>
    <i class="fa-solid fa-check"></i>
 </li>`
    });
    let formData = new FormData(form);
    xhr.send(formData);
}