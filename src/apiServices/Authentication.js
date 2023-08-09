export const loginAPI = async (emailId,password) =>{
    try {
        const res =  await fetch("/api/auth/login",{
            method: "POST",
            body: JSON.stringify({
                email: emailId,
                password: password
            })
        })
        const response  = await res?.json();
        console.log("Response", response);
        return response;
    } catch (error) {
        return(console.error(error));
    }
}

// register 
export const singupAPI = async (email,password,attr1,attr2) =>{
    try {
        const res =  await fetch("/api/auth/signup",{
        method:'POST',
        body: JSON.stringify({
            email:email,
            password:password,
            someUserAttribute1:attr1,
            someUserAttribute2:attr2
        })
    });
        const resbody  = await res?.json();
        console.log("Response", resbody);
        return resbody;
    } catch (error) {
        return(console.error(error));
    }
}