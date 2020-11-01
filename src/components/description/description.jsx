import React from "react";
import Header from "../header/header";
import alertCircle from './../../images/alert-circle.svg'
import menuArrow from './../../images/menu-arrow.svg'
import clockOne from './../../images/clock-1.svg'



import './style.css'
import {Link} from "react-router-dom";
export default function Description(props){
    const property = "Prestige WhiteField";
    return (
        <div className='description'>
            <div className='header'>
                <Header isHome={props.isHome}/>
            </div>
            <div className='description-container'>
                <div className='description-left-container'>
                    <div className={'path-stack'}>
                        <Link to={'/'}>{'SuperBolter'}</Link>
                        {' / '}
                        <Link to={'/'}>{'My Home'}</Link>
                        {' / '}
                        <Link to={'/description'}>{property.substr(0,15)+"..."}</Link>


                    </div>
                    <div className={'home-card'}>
                        <div className={'home-card-image'}>
                            {/*<img src={home} alt={'home'} />*/}
                        </div>
                        <div className={'home-card-name'}>
                            {'My Bengaluru House'}
                        </div>
                        <div className={'home-card-prop-name'}>
                            {'Prestige 4 BHK - 3100 Sqft'}
                        </div>
                        <div className={'home-card-location'}>
                            <span>{'Location : 19, Brunton Road, Ashok Nagar, Bengaluru, Karnataka, India'}</span>
                        </div>
                        <div className={'home-card-alert-box'}>
                            <span>
                                <img src={alertCircle} alt={'alert-circle'} />
                            </span>

                            <span className={'home-card-alert-text'}>
                                {/*<img src={alertCircle} alt={'alert-circle'} />*/}
                                {'To generate a full fledge precise home it requires a time period between 12-24 Hours.'}
                            </span>

                        </div>

                    </div>
                    <div className={'buttons'}>
                        <button className={'_3d-view-button'}>
                            <span>{'View Instant 3D'}</span>
                            </button>
                        <button className={'design-home-button'}>
                            <span>{'Design your Home'}</span>
                            <p>{'[We will notify you within 24Hrs].'.toUpperCase()}</p>

                        </button>
                    </div>
                </div>
                <div className='description-right-container'>
                    <div className='right-container-top'>
                        <div className={'clock-image'}>
                            <img src={clockOne} alt={'clock'} />
                        </div>
                        <div className={'home-waiting-title'} >
                            {'Rooms will Appear in this Section'}
                        </div>
                        <div className={'home-waiting-subtitle'} >
                            {'We will notify you via SMS on your registered mobile number once the one time process is completed.'}
                        </div>
                        <div className={'home-waiting-box-para'} >
                                <p>{'Instead you can use Instant 3D of your Home to'}</p>
                                <p>{'- See Model of your Home.'}</p>
                                <p>{'- Try Products'}</p>
                                <p>{'- Try Paints on Wall'}</p>
                        </div>
                    </div>
                    <div className='right-container-bottom'>
                        <div>
                            <span>
                                <img src={alertCircle} alt={'alert-circle'} />
                            </span>
                            <span >
                                {'To generate a full fledge precise home it requires a time period between 12-24 Hours.'}
                            </span>
                            <span className={'underlined-text'}>
                                {'Instead View Instant 3D'}
                            </span>
                            <span>
                                <img src={menuArrow} alt={'menu-arrow'} />
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}
