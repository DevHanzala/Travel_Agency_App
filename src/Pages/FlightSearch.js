import { FlightSearchBackground } from '../Components/FlightSearchBackground';
import { Map } from '../Components/Map';
import { Srilanka } from '../Components/SriLanka';
import { TravelPlan } from '../Components/TravelPlan';
import { Footer } from '../Components/Footer';

export function FlightSearch(){

    return(
        <div>
            <FlightSearchBackground/>
            <Map/>
            <TravelPlan/>
            <Srilanka/>
            <Footer/>
        </div>
    )
}