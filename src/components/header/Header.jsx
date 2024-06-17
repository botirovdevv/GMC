import React, { useEffect, useState } from 'react'
import img from '../../assets/images/header.png'
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';
import usa from '../../assets/images/aqsh.png'
import uzb from '../../assets/images/uzbekistan.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [dollarRate, setDollarRate] = useState(null);

    useEffect(() => {
        const getDollarExchangeRate = async () => {
            try {
                const response = await axios.get('https://cbu.uz/uz/arkhiv-kursov-valyut/json/');
                const exchangeRates = response.data;
                const dollarRate = exchangeRates.find(rate => rate.Ccy === 'USD');

                if (dollarRate) {
                    const formattedRate = parseFloat(dollarRate.Rate).toFixed(2);
                    setDollarRate(formattedRate);
                } else {
                    console.log('Dollar kursi topilmadi');
                }
            } catch (error) {
                console.error('Ma\'lumotlarni olishda xatolik yuz berdi:', error);
            }
        };

        getDollarExchangeRate();
    }, []);
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-text">
                        <h1 className="header-title">Barcha Valyuta Kurslari O'zbek So'mida</h1>
                        <Link to="/rates" className="header-btn">
                            Kurslarni Ko'rish
                            <FaArrowRight />
                        </Link>
                        <div className='header-rate'>
                            <div className='header-usa_rate'>
                                <img src={usa} className='header-usa_img' alt="" />
                                <h1 className="header-dollar">1 dollar = </h1>
                            </div>
                            <div className="header-usa_rate">
                                <img src={uzb} className='header-usa_img' alt="" />
                                {dollarRate ? <p className='header-rate_title'>{dollarRate} so'm</p> : <p>Dollar kursi topilmadi</p>}

                            </div>

                        </div>
                </div>
                <img src={img} className='header-img' alt="" />
            </div>
        </header>
    )
}

export default Header