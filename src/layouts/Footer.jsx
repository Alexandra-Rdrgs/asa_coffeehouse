export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
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
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="subcat">
            <h4>Contact</h4>
            <p>+1-123-456-7890.</p>
            <p>Info@info.com</p>
            <p>Apply@apply.com</p>
          </div>
          <div className="subcat">
            <h4>Social</h4>
            <a href="https://facebook.com">
              <p>
                <img src="/src/assets/icons/facebook.svg" alt="" />
                Facebook
              </p>
            </a>
            <a href="https://instagram.com">
              <p>
                <img src="/src/assets/icons/instagram.svg" alt="" />
                Instagram
              </p>
            </a>
            <a href="https://twitter.com">
              <p>
                <img src="/src/assets/icons/twitter.svg" alt="" />
                Twitter
              </p>
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
