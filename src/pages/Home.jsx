import { Link } from "react-router-dom";
//

import ShapeHome from "../assets/images/shapes/shape_01.svg";
import Shape from "../assets/images/shapes/shape_05.svg";
import ShapeAbout from "../assets/images/shapes/shape_07.svg";
import CoffeeBeans from "../assets/images/icons/coffee_beans.svg";
import ImageHome from "../assets/images/image_home.jpg";
import HotBeverage from "../assets/images/icons/hot_beverage.svg";
import ColdBeverage from "../assets/images/icons/cold_beverage.svg";
import Savoury from "../assets/images/icons/savoury.svg";
import Sweet from "../assets/images/icons/sweet.svg";
//
export default function Home() {
  return (
    <main id="home">
      <section id="home">
        <img src={CoffeeBeans} alt="" className="coffee_beans" />
        <div className="text_block">
          <img className="logo"></img>
          <h1>Welcome to asa coffeehouse</h1>
          <h2>there's no bad days with us.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            harum odit saepe impedit, debitis animi rem dolorem, odio,
            distinctio repellat temporibus ipsa sapiente illum quis facilis amet
            ipsum officiis eum. Eum fugiat quae vel sequi exercitationem,
            dolorem harum dicta rem aliquid nihil, alias velit. Illum,
            repellendus nesciunt, earum quibusdam error voluptas dolorum a
            blanditiis corrupti rerum amet distinctio numquam qui.
          </p>
        </div>
        <div className="illu_block">
          <img src={ShapeHome} alt="" className="shape" />
          <img src={ImageHome} className="picture" />
        </div>
      </section>
      <section id="menu">
        <div className="text_block">
          <h2>Our menu.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias
            sint aliquam adipisci qui nesciunt, soluta repellendus. Veniam
            explicabo nihil ex a. Id aspernatur, ratione ullam aperiam
            repudiandae, ut odit possimus officia, aut tenetur consequatur
            inventore corrupti eligendi. Praesentium, perferendis.
          </p>
        </div>
        <div className="menu_categories">
          <div className="category">
            <div className="icon_block">
              <img src={Shape} className="shape" />
              <img src={HotBeverage} className="icon" />
            </div>
            <h4>Hot beverages</h4>
            <p>Lorem ipsum dolor, sit amet !</p>
            <Link to="/menu">Discover</Link>
          </div>
          <div className="category">
            <div className="icon_block">
              <img src={Shape} className="shape" />
              <img src={ColdBeverage} className="icon" />
            </div>
            <h4>Cold bevergaes</h4>
            <p>Lorem ipsum, dolor sit amet.</p>
            <Link to="/menu">Discover</Link>
          </div>
          <div className="category">
            <div className="icon_block">
              <img src={Shape} className="shape" />
              <img src={Savoury} className="icon" />
            </div>
            <h4>Savoury</h4>
            <p>Lorem ipsum dolor, sit amet.</p>
            <Link to="/menu">Discover</Link>
          </div>
          <div className="category">
            <div className="icon_block">
              <img src={Shape} className="shape" />
              <img src={Sweet} className="icon" />
            </div>
            <h4>Sweet</h4>
            <p>Lorem ipsum dolor, sit amet!</p>
            <Link to="/menu">Discover</Link>
          </div>
        </div>
        <div className="see_all">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            dicta omnis ullam!
          </p>
          <Link to="/menu">view full menu</Link>
        </div>
      </section>
      <section id="about">
        <div className="illu_block">
          <img src={ShapeAbout} alt="" className="shape" />
          <img src={ImageHome} className="picture" />
        </div>
        <div className="text_block">
          <h2>Let's know each other !</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            sequi! Dignissimos tenetur officia, quam eum dolorem cum autem ipsam
            velit laboriosam voluptatum aliquid deleniti quo exercitationem
            nulla. Illum culpa deleniti dignissimos sed iusto molestiae
            deserunt.
          </p>
          <Link to="/about">Learn more about us.</Link>
        </div>
      </section>
      <section id="shop">
        <div className="text_block">
          <h2>Our most popular products.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            velit rem repudiandae ea libero numquam hic possimus sit quidem
            inventore sapiente est accusamus cumque, neque accusantium quas
            doloremque voluptatibus omnis cupiditate reiciendis eaque explicabo
            itaque? Consequuntur ea amet magni, autem minus at eveniet. Aliquam
            blanditiis tenetur cupiditate nobis quae accusantium.
          </p>
        </div>
        <div className="products_list">
          <div className="product">
            <img src="https://picsum.photos/200/300" className="picture" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" className="picture" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" className="picture" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" className="picture" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" className="picture" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" className="picture" />
            <Link to="/shop">view product</Link>
          </div>
        </div>
        <div className="see_all">
          <Link to="/shop">view all products</Link>
        </div>
        <div className="color_block"></div>
      </section>
      <section id="contact"></section>
    </main>
  );
}
