import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setCart } from "../redux/action";
import axios from 'axios';
import { useEffect } from 'react';

const Navbar = () => {
    const cart = useSelector(state => state.handleCart)
    const { user, isAuthenticated, token } = useSelector(state => state.user)

    const dispatch = useDispatch();

    const getCart = async () => {
        const {data} = await axios.get('http://localhost:4000/carts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setCart(data.data))
    }

    const logoutHandler = () => {
        dispatch(logout());
    }

    useEffect(() => {
        if (isAuthenticated) {
            getCart()
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {isAuthenticated && user ? (
                            <>
                                <span>Welcome {user.fullname}</span>
                                <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({cart ? cart.totalQuantity : 0}) </NavLink>
                                <button onClick={logoutHandler} className="btn btn-outline-dark m-2"><i className="fa fa-sign-out mr-1"></i>Logout</button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                            </>
                        )}
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar