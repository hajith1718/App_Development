import React from 'react'
import "../assets/css/aStocks.css"
import { useNavigate } from 'react-router-dom';

import SideBar from '../Components/SideBar';
import Navd from '../Components/NavBarDashboard';
import Footer from './Footer';
import AddProduct from './AddProduct';


function AdminStocks() {
    const navigate = useNavigate();
    // const handlepop = () => {
        
    //   };
    return (
        <>
            <div className='MainColumn'>
                <div className="left">
                    <SideBar />
                </div>
                <div className='RightContainer'>
                    <div className='Container11'>
                        <h1 className='Title'>Effortless investing.</h1>
                        <p className='SubTitle'>Invest in Stocks.</p>
                    </div>
                    <div className='Container22'>
                        <div className='smallintro'>MARKET OPENS </div>
                    </div>
                    <div className='Container33sq'>
                    <div className='Container33'>
                        <p className='index'>Index</p>
                        <div className='boxcontainer1'>
                            <div className='nifty1'>
                                <p className='fontbox1'>NIFTY 50</p>
                                <p className='lowerfontbox11'>19,674.25</p>
                                <p className='lowerfontbox21'>-68.10(0.34%)</p>
                            </div>
                            {/* <div className='nifty1'>
                                <p className='fontbox1'>SENSEX</p>
                                <p className='lowerfontbox11'>66,009.15</p>
                                <p className='lowerfontbox31'>+41.09(0.38%)</p>
                            </div>
                            <div className='nifty1'>
                                <p className='fontbox1'>BANK NIFTY</p>
                                <p className='lowerfontbox11'>19,200</p>
                                <p className='lowerfontbox21'>-44.612(0.33%)</p>
                            </div>
                            <div className='nifty1'>
                                <p className='fontbox1'>FIN NIFTY</p>
                                <p className='lowerfontbox11'>7,600</p>
                                <p className='lowerfontbox31'>+9.20(0.27%)</p>
                            </div> */}
                            <div className='All1' onClick={()=>navigate("/admin/stocks/addstocks")}>+</div>
                        </div>
                    </div>
                    <br></br>
                    <div className='Container31'>
                        <p className='most1'>Most Brought on Grow</p>
                        <div className='boxcontainer1'>
                            <div className='box21'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453253/627ccc4d1b2e263b45696aae_kmxwz4.png'  alt=" " width={70} height={70}></img>
                                <p className='fontbox1'>Indian Overseas Bank</p>
                                <p className='lowerfontbox11'>₹45</p>
                                <p className='lowerfontbox31'>0.90(2.10%)</p>
                            </div>
                            {/* <div className='box21'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453253/SJVN.NS_p7h3ic.png' alt=" " width={70} height={70}></img>
                                <p className='fontbox1'>SJVN</p>
                                <p className='lowerfontbox11'>₹72.25</p>
                                <p className='lowerfontbox31'>1.20(1.69%)</p>
                            </div>
                            <div className='box21'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453252/IRCT-Logo-Vector-Black_lbnkft.png' alt=" " width={70} height={70}></img>
                                <p className='fontbox1'>IRCTC</p>
                                <p className='lowerfontbox11'>₹75.10</p>
                                <p className='lowerfontbox31'>0.65(0.87%)</p>
                            </div>
                            <div className='box21'>
                                <img src='https://res.cloudinary.com/digo6wzsf/image/upload/v1695453253/627bad8a8d659819b1108503_wo2bwr.png' alt=" "  width={70} height={70}></img>
                                <p className='fontbox1'>HDFC</p>
                                <p className='lowerfontbox11'>₹1,529.65</p>
                                <p className='lowerfontbox21'>-23.70(1.53%)</p>
                            </div> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
            <Footer/>
        </>
    )
}

export default AdminStocks;