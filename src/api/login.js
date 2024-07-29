async function login(username, password){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(username === 'user' && password == 'pass'){
                    resolve(
                        {
                            success: true,
                            data : {
                                username,
                                email : "user@example.com" ,
                                token : "nmongogmpdf.gmgongronfdg.dpjvoc.xopoxjijdiijfefejffojfljfen",
                            },
                        }
                    )
            }
            else{
                reject ({
                    success : false, 
                    error : "Invalid Credential",
                })
            }
        }, 1000)
    })
}

export default login;