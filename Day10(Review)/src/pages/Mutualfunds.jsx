import React from 'react'
import SideBar from '../Components/SideBar';
import Navd from '../Components/NavBarDashboard';
import "../assets/css/Mutualfunds.css"
import Footer from './Footer';


function MutualFunds() {
    return (
        <>
            <div>
                <Navd />
            </div>
            <div className='MainColumn'>
                <div className="left">
                    <SideBar />
                </div>
                <div className='RightContainer'>
                    <div className='Container1'>
                        <h1 className='Title'>Effortless investing.</h1>
                        <p className='SubTitle'>Invest in Mutual Funds with just one click.</p>
                    </div>
                    <div className='Container3sq'>
                    <div className='Container3'>
                        <p className='index'>Collections</p>
                        <div className='boxcontainer'>
                            {/* <div className='nifty'> 
                                <p className='fontbox'>High return</p>
                                <img className='nifty img' src='https://ik.imagekit.io/mtbv505oky/income.png?updatedAt=1695533674897'></img>
                            </div>*/}
                            <div className='nifty'>
                                <p className='fontbox'>Large, Mid and Small Cap Funds</p>
                                <img src='https://ik.imagekit.io/mtbv505oky/skyscraper%20(1).png?updatedAt=1695533580324' alt=" " ></img>
                            </div>
                            <div className='nifty'>
                                <p className='fontbox'>SIP with Rs.500</p>
                                <img src='https://ik.imagekit.io/mtbv505oky/piggy-bank.png?updatedAt=1695533898278' alt=" " ></img>
                            </div>
                            <div className='nifty'>
                                <p className='fontbox'>Tax Saving</p>
                                <img src='https://ik.imagekit.io/mtbv505oky/bag.png?updatedAt=1695534060607' alt=" " ></img>
                            </div>
                            <div className='All'>Screener</div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <div className='Container3'>
                        <p className='most'>Popular Funds</p>
                        <div className='boxcontainer'>
                            <div className='box2'>
                                <img src='https://ik.imagekit.io/mtbv505oky/icici.png?updatedAt=1695453051161'alt=" "  width={70} height={70}></img>
                                <p className='fontbox'>ICICI Prudential funds</p>
                                <br></br>
                                <p className='lowerfontbox1'>45.2% (3Y)</p>
                            </div>
                            <div className='box2'>
                                <img src='https://ik.imagekit.io/mtbv505oky/quant.png?updatedAt=1695453051029' alt=" " width={70} height={70}></img>
                                <p className='fontbox'>QUANT Small cap Fund</p>
                            
                                <br></br>
                                <p className='lowerfontbox1'>48.6% (3Y)</p>
                              
                            </div>
                            <div className='box2'>
                                <img src='https://ik.imagekit.io/mtbv505oky/tata.webp?updatedAt=1695453051245'alt=" "  width={70} height={70}></img>
                                <p className='fontbox'>TATA Digital India Fund</p>
                                <br></br>
                                <p className='lowerfontbox1'>26.7%(3Y)</p>
                            </div>
                            <div className='box2'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453253/627bad8a8d659819b1108503_wo2bwr.png'alt=" "  width={70} height={70}></img>
                                <p className='fontbox'>HDFC Small Cap Fund</p>
                                <br></br>
                                <br></br>
                                <p className='lowerfontbox1'>42.14%(3Y)</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
                <Footer/>
        </>
    )
}

export default MutualFunds;