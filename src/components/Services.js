import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimized",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina Ready",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Brower Compatibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
];
function Services() {
  return (
    <section id="services" className="block services-block ">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">Services We Provide</div>
        </div>
        <Row>
          {servicesData.map((e) => {
            return (
              <Col sm={4} className="holder" key={e.id}>
                <div className="icon">
                  <i className={e.icon}></i>
                </div>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
