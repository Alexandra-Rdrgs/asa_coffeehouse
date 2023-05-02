import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [seasonalProducts, setSeasonalProducts] = useState([]);
  const menuRef = collection(db, "menu");
  const seasonalProductsRef = collection(db, "seasonal_products");
  const q = query(seasonalProductsRef, where("isActive", "==", true));

  useEffect(() => {
    const getMenu = async () => {
      try {
        const querySnapshot = await getDocs(menuRef);
        const menuData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenu(menuData);
      } catch (error) {
        console.dir(error);
      }
    };
    const getSeasonalProducts = async () => {
      try {
        const querySnapshot = await getDocs(q);
        const seasonalProductsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSeasonalProducts(seasonalProductsData);
      } catch (error) {
        console.dir(error);
      }
    };
    getMenu();
    getSeasonalProducts();
  }, []);

  return (
    <main id="menu">
      <h1>Menu</h1>
      <section className="newbbies">
        <h2>What's new ?</h2>
        <div className="newbbies_items">
          {seasonalProducts.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item_description">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price} €</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="menu">
        {menu.filter((item) => item.category === "hot beverage").length > 0 && (
          <div className="category">
            <h2>Hot Beverage</h2>
            <div className="category_items">
              {menu
                .filter((item) => item.category === "hot beverage")
                .map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item_description">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p className="price">{item.price} €</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        {menu.filter((item) => item.category === "cold beverage").length >
          0 && (
          <div className="category">
            <h2>Cold Beverage</h2>
            <div className="category_items">
              {menu
                .filter((item) => item.category === "cold beverage")
                .map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item_description">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p className="price">{item.price} €</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        {menu.filter((item) => item.category === "savoury").length > 0 && (
          <div className="category">
            <h2>Savoury</h2>
            <div className="category_items">
              {menu
                .filter((item) => item.category === "savoury")
                .map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item_description">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p className="price">{item.price} €</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        {menu.filter((item) => item.category === "sweet").length > 0 && (
          <div className="category">
            <h2>Sweet tooth</h2>
            <div className="category_items">
              {menu
                .filter((item) => item.category === "sweet")
                .map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item_description">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p className="price">{item.price} €</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
