import { Accordion } from "react-bootstrap";
export default function FaqAccordionOne() {
  return (
    <div className="fugu--faq-section fugu--section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="fugu--default-content content-black">
              <h2>Frequently asked questions</h2>
              <p>Here are some common question we get about Suqlink</p>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="fugu--accordion-one">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What is your platform and how does it work?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our platform is a simple and powerful e-commerce solution
                    that lets you sell your digital products online in a single
                    link. You don’t need a website, a store, or any technical
                    skills to use our platform. You just need to create a
                    product, upload it to our platform, generate a link, and
                    share it with your audience.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How do I get paid for my sales?
                  </Accordion.Header>
                  <Accordion.Body>
                    You get paid directly and instantly for every sale you make
                    on our platform. We use Chapa as our payment processor,
                    which supports all major banks and international payments
                    methods like Paypal, and credit cards. You can withdraw your
                    earnings anytime you want. We send them directly to your
                    bank account.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How much does it cost to use your platform?
                  </Accordion.Header>
                  <Accordion.Body>
                    We take a small cut off each sell. Currently the rate stands
                    at 20% of each sell.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How do I customize my product page?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can customize your product page with your own product
                    thumbnail, title, and logo. You can also add a description
                    to your product page. You can use our simple and intuitive
                    editor to make your product page look professional and
                    appealing.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How do I market and promote my product?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can market and promote your product using any channels
                    you prefer. You can share your link on social media, email,
                    blogs, podcasts, or anywhere else you want. You can also use
                    our tools and resources to help you create and share your
                    work effortlessly. We also offer you feedback, advice, and
                    inspiration from other creators like you.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
