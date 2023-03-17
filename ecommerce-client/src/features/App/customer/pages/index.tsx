import { Image } from "antd";
import "./styles.css";
const CustomerPage = () => {
  return (
    <div>
      <figure>
        <Image src="https://i.imgur.com/ruU04I6.jpg"></Image>
        <figcaption>Green Checkered Shirt</figcaption>
        <span className="price">$44</span>
        <a className="button" href="#">
          Book Now
        </a>
      </figure>
    </div>
  );
};

export default CustomerPage;
