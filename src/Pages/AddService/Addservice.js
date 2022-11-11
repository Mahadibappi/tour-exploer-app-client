import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Addservice = () => {


    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const add = form.service.value;
        const message = form.description.value;
        console.log(name, add, message);

        const service = {
            name: name,
            serviceName: add,
            message: message,
        };

        fetch("http://localhost:5000/added", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Service added successfully");
                    form.reset();
                }
            })
            .catch((err) => console.log(err));
    }



    useEffect(() => {
        document.title = "Add service"
    }, [])

    return (
        <div>
            <form onSubmit={handleAdd} className="flex justify-center">
                <div className="grid grid-cols-1 gap-4 mt-3 mx-auto">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input input-bordered input-primary w-full"
                    />
                    <input
                        type="text"
                        name="service"
                        placeholder="Service Name"
                        className="input input-bordered input-primary w-full"

                    />
                    <div>
                        <textarea
                            name="description"
                            className="textarea textarea-primary w-full"
                            placeholder="Service description"
                        ></textarea>
                        <input
                            type="submit"
                            value="Add Service"
                            className="mt-3 btn  btn-outline btn-info"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Addservice;