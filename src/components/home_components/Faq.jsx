import React, { useState } from "react";
import "./styles/faq.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
function Faq() {
  const [showDetail, setShowDetail] = useState(0);
  const card = [1, 2, 3, 4];

  return (
    <div>
      <section id="faq">
        <h1>FAQ</h1>
        <div className="faq-content">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="faq-bg-img"></div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="faq-content-text">
                <div class="accordion" id="accordionExample">
                  {card.map((data) => (
                    <div class="card cards-background">
                      <div
                        class="card-header card-header-background"
                        id="headingOne"
                      >
                        <span class="card-text-pos">
                        Why do we use it?
                        </span>
                        <button
                          onClick={() => {
                            setShowDetail(data);
                            if (showDetail == data) setShowDetail(0);
                          }}
                          type="button"
                          class="btn btn-link float-right"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                        >
                          <i
                            class={
                              showDetail === data
                                ? "fa fa-minus text-dark"
                                : "fa fa-plus text-dark"
                            }
                          ></i>
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        class={showDetail === data ? "" : "collapse"}
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam obcaecati dolorem provident quasi!
                            Numquam, odit corrupti, magni suscipit, error quidem
                            debitis dolore quisquam quibusdam possimus quo omnis
                            voluptate. Non, tempora!
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
export default Faq;
