import React from 'react'

const VisitorCards = ({ trend }) => {
    return (
        <div className='visitors'>
    <VisitorCards trend={trend.trend} />

    <VisitorCards
     trend="1% down"
     title="Today Visitors out"
     value="88"
     color="red"
     />
     {/*<VisitorCards
     trend="3% up"
     title="Today Visitors Current"
     value="120"
     color="pink"
     />
     <VisitorCards
     trend="3% up"
     title="Monthly Visitors Counts"
     value="120"
     color="green"
     />
    </div> */}
    </div>
    )
}

export default VisitorCards
