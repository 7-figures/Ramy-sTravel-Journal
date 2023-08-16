import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import React from "react"
export default function Card(props){
return(
    <section className="main">
<img src={`../images/${props.items.coverImg}`} className="main--images"/>

<div className="title">
<img  src="../images/location.png" className="loc"/>
<p>{props.items.location}</p>
<a href="{props.items.googleMapsUrl}" target="_blank">View on Google Map</a>
</div>
<div className="name">
<h2 >{props.items.title}</h2>
<p>{props.items.startDate} - {props.items.endDate}</p>
<p className="description">{props.items.description}</p>

</div>

    </section>
)
}