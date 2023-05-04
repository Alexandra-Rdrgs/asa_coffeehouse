import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Footer() {
  const LeafIcon = L.Icon.extend({
    options: {},
  });
  const iconPersonnalized = new LeafIcon({
    iconUrl: "src/assets/images/icons/pin.svg",
    iconSize: [50, 50],
    iconAnchor: [16, 37],
  });

  const position = [48.95, 4.3];

  return (
    <footer>
      <div className="footer_container">
        <div className="container">
          <div className="card">
            <MapContainer
              className="asa_map"
              center={[48.95, 4.3]}
              zoom={12}
              scrollWheelZoom={false}
              style={{
                height: "200px",
                width: "500px",
              }}
              maxZoom={13}
            >
              <TileLayer
                attribution="OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={iconPersonnalized}>
                <Popup>
                  We are here ☺︎ <br /> Come and visit us !
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="container">
          <div className="subcat">
            <img src="https://picsum.photos/100/100" alt="" width={"100px"} />
            <p>Let's start a good day together.</p>
            <p>
              At Asa Coffeehouse, we only use high-quality ingredients and we do
              our best to support the values we care about.
            </p>
          </div>
          <div className="subcat">
            <h4>Adress</h4>
            <p>25, Not Here Street</p>
            <p>Nowhere Land</p>
            <p>Planet Earth</p>
          </div>
          <div className="subcat">
            <h4>Contact</h4>
            <p>+1 (123) 456-7890.</p>
            <p>Info@info.com</p>
            <p>Apply@apply.com</p>
          </div>
          <div className="subcat" id="social">
            <h4>Social</h4>
            <a href="https://facebook.com">
              <img src="src/assets/images/icons/facebook.svg" alt="" />
              <p>Facebook</p>
            </a>
            <a href="https://instagram.com">
              <img src="src/assets/images/icons/instagram.svg" alt="" />
              <p>Instagram</p>
            </a>
            <a href="https://twitter.com">
              <img src="src/assets/images/icons/twitter.svg" alt="" />
              <p>Twitter</p>
            </a>
          </div>
        </div>
        <div className="container">
          <p> 2023 asa coofeehouse — all right reserved</p>
          <p>alexandra rodrigues</p>
        </div>
      </div>
    </footer>
  );
}
