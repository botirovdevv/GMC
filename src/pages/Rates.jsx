import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Rates = () => {
    const today = new Date();
    const formattedDate = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
    console.log(formattedDate);
    const [dollarRate, setDollarRate] = useState([]);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get('https://cbu.uz/uz/arkhiv-kursov-valyut/json/');
                setDollarRate(response.data);
            } catch (error) {
                console.error('Ma\'lumotlarni olishda xatolik yuz berdi:', error);
            }
        };

        fetchExchangeRates();
    }, []);
    return (
        <section className="rates">
            <div className="container">
                <h1 className="rates-title">{formattedDate} sanasiga oid valyuta kurslari</h1>
                <div className="rates-content">
                    {dollarRate.map(rate => (
                        <div className='rates-rate' key={rate.Ccy}>
                            <div className='rates-items'>
                                <h1 className='rates-region'>{rate.Ccy}</h1>
                                <h1 className='rates-name'>1 {rate.CcyNm_UZ}</h1>
                            </div>
                            <h1 className='rates-price'>{parseFloat(rate.Rate).toFixed(2)} so'm</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Rates