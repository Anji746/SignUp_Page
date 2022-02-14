
    const form= document.getElementById('form');
    const username= document.getElementById('username');
    const password=document.getElementById('password');
    const confirm_password= document.getElementById('confirm_password');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        validate();

    })
    const validate=()=>{
       
    const username= username.value.trim();
    const password=password.value.trim();
    const confirm_password= confirm_password.value.trim();
    if (username===''){
        setErrorMsg(username,'username can not be blank');
    }
    else if(username.length<=2){
        setErrorMsg(username ,'username min 3 char');
    }else{
        setSuceesMsg(username);
    }
    if (password===''){
        setErrorMsg(password,'username can not be blank');
    }
    else if(password.length<=5){
        setErrorMsg(password ,'password min 6 char');
    }else{
        setSucceesMsg(password);
    }
    if (confirm_password===""){
        setErrorMsg(password,'username can not be blank');
    }
    else if(password.length!=confirm_password){
        setErrorMsg(password ,'Not match');
    }else{
        setSucceesMsg(confirm_password);
    }}
    function setErrorMsg(input,errormsg){
        const formControl= input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className="form-control error";
        small.innerText= errormsg;
    }
    function setSucceesMsg(input){
        const formControl= input.parentElement;
        formControl.className="form-control success";
        

    }
    