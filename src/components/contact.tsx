export const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <p>Our community grows stronger every day.</p>
              <p>
                Please follow our social platforms to get the most up-to-date,
                accurate HippoFamily information. </p>
              <p>
                {" "}Using the links below, you can join
                our various groups.
              </p>
              <div className="social">
                <ul>
                  <li>
                    <a href="https://discord.gg/sk3xN3sA8D" target="_blank">
                    <img src="img/discord-icon.png" alt="" width="64px" height="64px"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/HippoFamilyNFT" target="_blank">
                    <img src="img/twitter-icon.png" alt="" width="64px" height="64px"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/hippofamilynft" target="_blank">
                    <img src="img/instagram-icon.png" alt="" width="64px" height="64px"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2021 Hippo Family </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
