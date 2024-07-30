'use client'

import login from "@/api/login";
import Button from "@/useStatusForm/Button";
import React from "react";
import {useActionState} from 'react';

const ActionForm = () => {
    const [user, actionHandler, isPending] = useActionState(handleSubmit , {
        data : null,
        error : null,
    });

    async function handleSubmit(prevdata, formData) {
        const userName = formData.get('username');
        const password = formData.get('password');

        try{
            const response = await login(userName , password);
            return {data : response.data , error : null};
            console.log(response.data);
        }
        catch(error){
            return {data : null , error : error.error};
        }
    }



    return (
    <form action={actionHandler} className="min-h-40 bg-slate-700 flex flex-col gap-y-3" >
        <label htmlFor="username">
            Username :{" "}
            <input type="text" name="username" id="" />
        </label>

        <label htmlFor="password">
            Password:{" "}
            <input type="password" name="password" id="" />
        </label>

        <Button/>

        {user?.data && <p className="text-green-400">Login : {user?.data.email}</p>}

    {user?.error && <p className="text-red-600"> {user?.error} </p> }
    
    </form>
    
    )
};

export default ActionForm;
