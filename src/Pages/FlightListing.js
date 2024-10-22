import { FlightData } from "../Components/FlightData";
import { Navbar } from "../Components/Navbar";

export function FlightListing(){
    return(
        <div>
            <Navbar/>
            <FlightData/>
        </div>
    )
}