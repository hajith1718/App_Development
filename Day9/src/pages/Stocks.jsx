import React from 'react'
import Navbar from '../Components/Navbar'
import "../assets/css/Stocks.css"
import { NavLink } from "react-router-dom";
import SideBar from '../Components/SideBar';
import Navd from '../Components/NavBarDashboard';


function Stocks() {
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
                        <p className='SubTitle'>Invest in Stocks.</p>
                    </div>
                    <div className='Container2'>
                        <div className='smallintro'>MARKET OPENS IN 1 DAY</div>
                    </div>
                    <div className='Container3sq'>
                    <div className='Container3'>
                        <p className='index'>Index</p>
                        <div className='boxcontainer'>
                            <div className='nifty'>
                                <p className='fontbox'>NIFTY 50</p>
                                <p className='lowerfontbox1'>19,674.25</p>
                                <p className='lowerfontbox2'>-68.10(0.34%)</p>
                            </div>
                            <div className='nifty'>
                                <p className='fontbox'>SENSEX</p>
                                <p className='lowerfontbox1'>66,009.15</p>
                                <p className='lowerfontbox3'>+41.09(0.38%)</p>
                            </div>
                            <div className='nifty'>
                                <p className='fontbox'>BANK NIFTY</p>
                                <p className='lowerfontbox1'>19,200</p>
                                <p className='lowerfontbox2'>-44.612(0.33%)</p>
                            </div>
                            <div className='nifty'>
                                <p className='fontbox'>FIN NIFTY</p>
                                <p className='lowerfontbox1'>7,600</p>
                                <p className='lowerfontbox3'>+9.20(0.27%)</p>
                            </div>
                            <div className='All'>All Indices</div>
                        </div>
                    </div>
                    <br></br>
                    <div className='Container3'>
                        <p className='most'>Most Brought on Grow</p>
                        <div className='boxcontainer'>
                            <div className='box2'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453253/627ccc4d1b2e263b45696aae_kmxwz4.png' width={70} height={70}></img>
                                <p className='fontbox'>Indian Overseas Bank</p>
                                <br></br>
                                <br></br>
                                <p className='lowerfontbox1'>₹45</p>
                                <p className='lowerfontbox3'>0.90(2.10%)</p>
                            </div>
                            <div className='box2'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453253/SJVN.NS_p7h3ic.png' width={70} height={70}></img>
                                <p className='fontbox'>SJVN</p>
                                <br></br>
                                <br></br>
                                <p className='lowerfontbox1'>₹72.25</p>
                                <p className='lowerfontbox3'>1.20(1.69%)</p>
                            </div>
                            <div className='box2'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453252/IRCT-Logo-Vector-Black_lbnkft.png' width={70} height={70}></img>
                                <p className='fontbox'>IRCTC</p>
                                <br></br>
                                <br></br>
                                <p className='lowerfontbox1'>₹75.10</p>
                                <p className='lowerfontbox3'>0.65(0.87%)</p>
                            </div>
                            <div className='box2'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453253/627bad8a8d659819b1108503_wo2bwr.png' width={70} height={70}></img>
                                <p className='fontbox'>HDFC</p>
                                <br></br>
                                <br></br>
                                <p className='lowerfontbox1'>₹1,529.65</p>
                                <p className='lowerfontbox2'>-23.70(1.53%)</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Stocks;