import React,{useRef} from "react";
const Contact =()=>{
    const nameRef=useRef();
    const emailRef=useRef();
    const phoneRef=useRef();
    const userInputsHandler=async(event)=>{
        event.preventDefault();
        const userDetalis={
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value
        }

        const response = await fetch("https://e-commerce-1827c-default-rtdb.firebaseio.com/users.json",{
            method:"POST",
            body:JSON.stringify(userDetalis),
            headers:{
                "content-type":"application.json"
            }
        })

        const data= response.json();
        console.log(data);



    }
    return (
        <form onSubmit={userInputsHandler}> 
        <p>enter your details, our team will contact you soon</p>
        <label>Name:</label>
        <input type="text" ref={nameRef}></input>
        <label>Email:</label>
        <input ref={emailRef} type="text"></input>
        <label>Phone No:</label>
        <input ref={phoneRef} type="number"></input>
        <button type="submit">Submit</button>
        </form>
    )
}
export default Contact