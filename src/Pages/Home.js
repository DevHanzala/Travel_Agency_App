import { Reviews } from "../Components/Reviews";
import { Background } from "../Components/Background";
import { PlanTrip } from "../Components/PlanTrip";
import { Footer } from "../Components/Footer";

export function Home(){
    return(
        <div>
<Background/>
<PlanTrip/>
<Reviews/>
<Footer/>
</div>
    )
}