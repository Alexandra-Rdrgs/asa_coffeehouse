import { Link } from "react-router-dom";
import WhiteForm from "../assets/images/blob.svg";
export default function Home() {
  return (
    <main id="home">
      <section id="home_container">
        <div>
          <h1>Welcome to asa coffeehouse; there's no bad morning with us.</h1>
          <p>
            Here at asa coffeehouse, we take the time to Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Dolore inventore cupiditate
            dolorum velit quas recusandae doloremque dolorem, dolores sequi
            provident quisquam molestiae vitae at repellendus ipsam vel
            temporibus corporis earum.
          </p>
        </div>
        <div className="color_block"></div>
        <img src="https://picsum.photos/400" />
      </section>
      <section id="menu_container">
        <div className="menu_intro">
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
              <img src={WhiteForm} />
              <img src="https://picsum.photos/50/50" />
            </div>

            <h4>coffee</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, libero ducimus. Maiores!
            </p>
          </div>
          <div className="category">
            <div className="icon_block">
              <img src={WhiteForm} />
              <img src="https://picsum.photos/50/50" />
            </div>
            <h4>tea</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              blanditiis optio maiores.
            </p>
          </div>
          <div className="category">
            <div className="icon_block">
              <img src={WhiteForm} />
              <img src="https://picsum.photos/50/50" />
            </div>
            <h4>sweet tooth</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, fugit maxime. Quaerat.
            </p>
          </div>
          <div className="category">
            <div className="icon_block">
              <img src={WhiteForm} />
              <img src="https://picsum.photos/50/50" />
            </div>
            <h4>salty</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, fugit maxime. Quaerat.
            </p>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta
          omnis ullam!
        </p>
        <Link to="/menu">view full menu</Link>
      </section>
      <section id="about_container">
        <div className="image_block">
          <div className="color_block"></div>
          <img src="https://picsum.photos/300/400" />
        </div>
        <div className="about_intro">
          <h2>Let's know each other !</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            sequi! Dignissimos tenetur officia, quam eum dolorem cum autem ipsam
            velit laboriosam voluptatum aliquid deleniti quo exercitationem
            nulla. Illum culpa deleniti dignissimos sed iusto molestiae
            deserunt.
          </p>
          <a href=""></a>
        </div>
      </section>
      <section id="shop_container">
        <div className="shop_intro">
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
        <div className="shop_products">
          <div className="product">
            <img src="https://picsum.photos/200/300" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" />
            <Link to="/shop">view product</Link>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/300" />
            <Link to="/shop">view product</Link>
          </div>
        </div>
        <Link to="/shop">view all products</Link>
      </section>
      <section id="contact_container"></section>
    </main>
  );
}
