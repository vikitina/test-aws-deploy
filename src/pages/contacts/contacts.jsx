import "./contacts.css"
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as MapPin } from '../../assets/icons/map_pin.svg';
import { ReactComponent as Envelope } from '../../assets/icons/envelope.svg';
import Map from "../../components/map/map";
const Contacts = () => {
  return (
    <>
      <section className="contacts">
        <div className="container">
          <div className="left">
            <h1 className="title">
              Contact Us
            </h1>
            <form action="" className="form">
              <input type="text" className="input" name="name" placeholder="Name"/>
              <input type="text" className="input" name="email" placeholder="Email"/>
              <textarea className="textarea" name="message" placeholder="Message"></textarea>
              <button className="submit">SEND</button>
            </form>
          </div>
          <div className="right">
            <h2 className="subtitle">
              contact information
            </h2>
            <ul className="list">
              <li className="info-item">
               <MapPin/>
                map</li>
              <li className="info-item">
                <Phone/>
                phone</li>
              <li className="info-item">
                <Envelope/>
                email</li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <Map/>
      </div>
    </>
  )
}
export default Contacts