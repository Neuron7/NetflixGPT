export const checkValidateData = (name, email, password) =>{
    if(!(name===null)){
        const Name = /^[a-zA-Z\s-]+$/.test(name.value);
        if(!Name) return "Name field is empty or contains invaild characters";
    }
    const Email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const Password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if (!Email) return "Please enter a valid email";
    if(!Password) return "Please enter password according to the pattern";
    return null;
}
