import React, { useEffect, useState } from 'react';
import { Button, Card, Container, } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './SingleService.css';


const SingleService = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})
    const { register, formState: { errors } } = useForm();
    const { user } = useAuth();
    useEffect(() => {
        fetch("https://damp-falls-01576.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const foundSingleService = serviceDetails.find(service => service.id === serviceId)
        setSingleService(foundSingleService)
    }, [serviceDetails]);


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
                    <form className="shipping-form">
                        

                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input defaultValue={singleService?.serviceName} {...register("service", { required: true })} />
                        <input defaultValue={singleService?.price} {...register("price", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input className="btn-success" type="submit" />
                    </form>


                </div>
            </div>
        </Container>
    </div>

);
    };

export default SingleService;

