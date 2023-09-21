// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';
import Layout from '../Components/Layout';
import SideBar from '../Components/SideBar';
import "../assets/css/StockWatch.css"

let tvScriptLoadingPromise;

export default function StockWatch() {
 
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_4d67a') && 'TradingView' in window) {
          new window.TradingView.widget({
             "width": 980,

            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "in",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_4d67a"
          });
        }
      }
    },
    []
  );

  return (
     <>
     <Layout/>
    <div className='Dashboard'>
          <SideBar/>
          <div className='User'>
           <div className='tradingview-widget-container'>
                <div id='tradingview_4d67a' />
            </div> 
          </div>
    </div>

    
    </>
  );
}
