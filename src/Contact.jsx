import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (e) => {
        const {name, value} = e.target;

        setData((preVal) => {
            return {
                ... preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        //e.preventDefault(); for refreash page
        alert(`My name is ${data.fullname}. My Mobile Number ${data.phone}. and email is ${data.email}, Here is what I want to say ${data.msg} `);
    };

    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit} className="">
                        <div className="form-group mb-3 ">
                            <label for="exampleFormControlInput1">Full Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter name" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleFormControlInput1">Phone</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Enter Mobile number" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                        </div>
                        <div className="form-group mb-4">
                            <label for="exampleFormControlTextarea1">Messages</label>
                            <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            name="msg"
                            value={data.msg}
                            onChange={InputEvent}>
                            </textarea>
                        </div>

                        <div className="col-12 mb-5">
                            <button className="btn btn-secondary btn-lg btn-block" type="submit">
                                Submit form
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;