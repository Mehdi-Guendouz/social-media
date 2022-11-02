import React from 'react'
import {TrendData} from '../Profileslide/data/TrendData'


function Trendsect() {

    const trendTable = TrendData.map((item , id)=>{
        return(
            <div className='trendCard'>
                <span>#{item.name}</span>
                <span>{item.shares}k Shares</span>
            </div>
        )
    })
 

  return (
    <div className='trendsect'>
        <h1>Trends for you</h1>
        {trendTable}
    </div>
  )
}

export default Trendsect