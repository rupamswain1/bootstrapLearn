import './home.style.scss';
import {
  Container,
  Col,
  Card,
  Form,
  FormGroup,
  FormControl,
} from 'react-bootstrap';

const Home = () => {
  return (
    <header id="home-section">
      <div className="dark-overlay">
        <Container className="home-inner">
          <Col lg={8} className="d-none d-lg-block">
            <h1 className="display-4">
              Build <strong>Social Profile</strong> and gain revenue{' '}
              <strong>Profits</strong>
            </h1>
            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fa fa-check fa-2x"></i>
              </div>
              <div className="align-self-end p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </div>
            </div>
            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fa fa-check fa-2x"></i>
              </div>
              <div className="align-self-end p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </div>
            </div>
            <div className="d-flex">
              <div className="p-4 align-self-start">
                <i className="fa fa-check fa-2x"></i>
              </div>
              <div className="align-self-end p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <Card className="bg-primary text-center card-form">
              <Card.Body>
                <h3>Sign Up Today</h3>
                <p>Please fill the form to Register</p>
                <Form>
                  <FormGroup>
                    <FormControl type="text" size="lg" placeholder="UserName" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="email" size="lg" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="password" size="lg" placeholder="Passwprd" />
                  </FormGroup>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    </header>
  );
};

export default Home;
