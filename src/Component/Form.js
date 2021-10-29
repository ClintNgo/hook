import React, { useState } from 'react'


const Form = (props) => {

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName ,lastName , email, password, confirmPassword
        }
        setfirstName('')
        setlastName('')
        setEmail('')
        setPassword('')
        setconfirmPassword('')
    }


    return (
        <div>
                    <form onSubmit={createUser}>
                        <div>
                            First Name:
                            <input type='text' onChange={(e) => setfirstName(e.target.value)}></input>
                        </div>
                        <div>
                            Last Name:
                            <input type='text' onChange={(e) => setlastName(e.target.value)}></input>
                        </div>
                        <div>
                            Email:
                            <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            Password:
                            <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div>
                            Confirm Password:
                            <input type='password' onChange={(e) => setconfirmPassword(e.target.value)}></input>
                        </div>
                        <input type='Submit' value='Create User'></input>
                    </form>
                    <h6>View Form Data</h6>
                    <p>First Name: {firstName}  </p> 
                    <p>last Name: {lastName} </p> 
                    <p>Email: {email} </p> 
                    <p>Password: {password} </p> 
                    <p>Confirm Password: {confirmPassword} </p> 
        </div>
    )
}

export default Form;