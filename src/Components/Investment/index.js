import React from "react";
import "./investment.scss";
const Investment = function () {
  return (
    <div className="Investment">
      <section className="investment pb-6 pt-4">
        <div className="overlay"></div>
        <div className="container-fluid text-center">
          <h2 className="subHead">Today’s Investments, Tomorrow’s Cures</h2>
          <p>Support the different programs we have below</p>
          <div className="container">
            <div className="skewBoxs">
              <div>
                <div className="col">
                  <div className="box">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/child.png" alt="child" />
                      </div>
                      <div className="box-title">Ta’alouf</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/gift.png" alt="gift" />
                      </div>
                      <div className="box-title">Zakat</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="box">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/heart.png" alt="heart" />
                      </div>
                      <div className="box-title">A’awen</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/flower.png" alt="flower" />
                      </div>
                      <div className="box-title">Fundraising</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="box">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/hat.png" alt="hat" />
                      </div>
                      <div className="box-title">Scholarships</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/flowers.png" alt="flowers" />
                      </div>
                      <div className="box-title">Omniyat Dania</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="box">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/micro.png" alt="micro" />
                      </div>
                      <div className="box-title">Medical Research</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                  <div className="box invisible">
                    <div className="box-items">
                      <div className="box-icon">
                        <img src="imgs/investment/micro.png" alt="micro" />
                      </div>
                      <div className="box-title">Medical Research</div>
                      <div className="box-plus">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;
