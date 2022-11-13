let form = document.getElementById('form');

form.addEventListener("submit", function(e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(form);

    fetch(url, {
        method:"POST",
        body:formData,
        mode:"no-cors",
    }).then(()=>{
        window.location.href = "redirect.html";
    }).catch((e)=>alert(e));
})