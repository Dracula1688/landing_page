// import React
import React from 'react'
// import CSS
import './support.css'
// import images

// import icons

// fake data

const data = [
    {
        id: 1,
        title: "Host protection and insurance",
        decr: "To support you in the rare event of an incident, most Airbnb bookings include property damage protection and liability insurance of up to $1M USD.",
        link: "How you’re protected while hosting"
    },
    {
        id: 2,
        title: "Covid-19 safety guidelines",
        decr: "To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.",
        link: "Get to know the enhanced cleaning process"
    },
    {
        id: 3,
        title: "High guest standards",
        decr: "To give Hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behavior.",
        link: "Steps we take to help Hosts feel confident"
    },
]

const Support = () => {
  return (
    <div className="Support">
        <div className="container Support-box">
            <div className="top-support">
                <h1 className="how">How we support you</h1>
            </div>
            <div className="all-fake-datas">
                {
                    data.map((item)=>(
                        <div className="column1">
                            <h2 className="title">{item.title}</h2>
                            <p className="desc">{item.decr}</p>
                            <a href="#" className="btnmine">{item.link}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Support