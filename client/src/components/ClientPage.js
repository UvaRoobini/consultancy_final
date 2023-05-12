import client1 from '../images/client1.png';
import client2 from '../images/client2.jpeg';
import client3 from '../images/client3.png';
import client4 from '../images/client4.png';
import client5 from '../images/client5.png';
import client7 from '../images/client7.jpeg';

import "../Styles/clients.css"
function Clients()
{
    return(
        <div>
        <h1 style={{textAlign:"center", marginTop:"30px",color:"green"}}>Our Clients</h1>
        <div className="imgs">
        <div className="clients1">
        <img style={{height:200,width:300}} src={client1} alt="client1" />
        <img style={{height:200,width:200}} src={client2} alt="client2" />
        <img style={{height:200,width:200}} src={client3} alt="client3" />
        <img style={{height:200,width:200}} src={client4} alt="client4" />
        </div>
        <div className="clients2">
        <img style={{height:200,width:200}} src={client5} alt="client5" />
        <img style={{height:200,width:200}} src={client7} alt="client7" />
        </div>
        </div>
        </div>
    )
}
export default Clients;