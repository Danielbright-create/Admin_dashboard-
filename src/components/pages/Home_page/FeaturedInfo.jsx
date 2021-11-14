import React from 'react'
import "./FeaturedInfo.css";


const FeaturedInfo = () => {
    return (  <div className="overview">
    <h2>Dashboard Overview</h2>
   
        <div className="featured">
           
            <div className="featuredItem red">
                <span className="featuredTitle">
                    Total Agents
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        300
                    </span>
                    <span className="featuredMoneyRate">
                      
                    </span>
                </div>
                <span className="featuredSub">
                   100 Total for April, 2020
                </span>
            </div>
            <div className="featuredItem purple">
                <span className="featuredTitle">
                    Total Admins
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        270
                    </span>
                    <span className="featuredMoneyRate">
                     
                    </span>
                </div>
                <span className="featuredSub">
                   20 Total for April, 2020
                </span>
            </div>
            <div className="featuredItem yellow">
                <span className="featuredTitle">
                    Total Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                       5,000,000
                    </span>
                    <span className="featuredMoneyRate">
                      
                    </span>
                </div>
                <span className="featuredSub">
                # 700,000 for Apri, 2020
                </span>
            </div>
            <div className="featuredItem yellow">
                <span className="featuredTitle">
                    Total Sold
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                       700
                    </span>
                    <span className="featuredMoneyRate">
                      
                    </span>
                </div>
                <span className="featuredSub">
                250 Total Property Sold for April, 2020
                </span>
            </div>
            <div className="featuredItem red">
                <span className="featuredTitle">
                    Property for Rent
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                       1200
                    </span>
                    <span className="featuredMoneyRate">
                      
                    </span>
                </div>
                <span className="featuredSub">
                450 Total Posted for Rent for April, 2020
                </span>
            </div>
            <div className="featuredItem purple">
                <span className="featuredTitle">
                    Property for Sale
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        3500
                    </span>
                    <span className="featuredMoneyRate">
                      
                    </span>
                </div>
                <span className="featuredSub">
               1000 Total Posted for Sale for April, 2020
                </span>
            </div>
            
        </div>
        </div>
    )
}

export default FeaturedInfo
