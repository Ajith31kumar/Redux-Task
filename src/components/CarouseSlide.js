import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div>
        <div>
        <Carousel>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/Coop/HFS_June_DesktopHero_3000x1200._CB602502758_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GWHeros/June/28th/3_3000._CB602465796_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/June2023/SS/samsung_crystal_3000x1200._CB602489187_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default UncontrolledExample;