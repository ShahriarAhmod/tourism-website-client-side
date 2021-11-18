import React, { useEffect, useState } from 'react';
import { Button, Card, Container, } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './SingleService.css';


const SingleService = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})
    const { user } = useAuth();
    
    const email = sessionStorage.getItem("email");
    useEffect(() => {
        fetch("https://damp-falls-01576.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const foundSingleService = serviceDetails.find(service => service.id === serviceId)
        setSingleService(foundSingleService)
    }, [serviceDetails]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.status = "pending";

        fetch("https://damp-falls-01576.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order Added.")
                }
            })
    };



    return (
        <div className="my-5 py-5">
            <Container>
                <div className="my-5 py-5 d-flex justify-content-evenly">
                    <div className="mx-5">
                        <Card>
                            <Card.Img style={{ width: '400px' }} variant="top" src={singleService?.image} />
                        </Card>
                        <Card style={{ width: '400px' }}>

                            <Card.Body>
                                <Card.Title className="fw-bold fs-3">{singleService?.serviceName}</Card.Title>
                                <Card.Text>
                                    {singleService?.description}
                                </Card.Text>
                                <Card.Text className="fw-bold fs-3">Price : {singleService?.price}$
                                </Card.Text>
                                <Button variant="success">Explore</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="ms-5 ps-5">
                        <h2 className="text-center"> Confirm your Booking</h2>
                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input
                                {...register("service")}
                                defaultValue={singleService?.serviceName}
                            />
                            <input
                                {...register("price", { required: true })}
                                defaultValue={singleService?.price}
                            />
                            <input
                                {...register("date")}
                                type="date"

                            />
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" type="number" defaultValue="" {...register("phone")} />
                            <input placeholder="Quantity" type="number" defaultValue="" {...register("phone")} />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="btn-success" type="submit" value="Place Order" />
                        </form>


                    </div>
                </div>
            </Container>
        </div>

    );
};

export default SingleService;

