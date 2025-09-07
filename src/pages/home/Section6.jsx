import React from 'react'
import { Container, Row, Col, Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import User1 from '../../assets/blog/review-author-1.jpg';
import User2 from '../../assets/blog/review-author-2.jpg';
import User3 from '../../assets/blog/review-author-3.jpg';
import User5 from '../../assets/blog/review-author-5.jpg';


const Section6 = () => {
  return (
    <section className='blog_section'>
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <CarouselCaption>
                            <div className='user_img'>
                                <img src={User1} className='img-fluid' alt="User-1" />
                            </div>
                            <p>" Etiam sapien sem at sagittis congue augue massa varius
                                sodales sapien undo tempus dolor egestas magna suscipit magna
                                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </div>
                        </CarouselCaption>
                    </Carousel.Item>

                     <Carousel.Item>
                        <CarouselCaption>
                            <div className='user_img'>
                                <img src={User2} className='img-fluid' alt="User-2" />
                            </div>
                            <p>" Etiam sapien sem at sagittis congue augue massa varius
                                 sodales sapien undo tempus dolor egestas magna suscipit magna
                                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </div>
                        </CarouselCaption>
                    </Carousel.Item>

                     <Carousel.Item>
                        <CarouselCaption>
                            <div className='user_img'>
                                <img src={User3} className='img-fluid' alt="User-3" />
                            </div>
                            <p>" Etiam sapien sem at sagittis congue augue massa varius
                                sodales sapien undo tempus dolor egestas magna suscipit magna
                                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </div>
                        </CarouselCaption>
                    </Carousel.Item>

                     <Carousel.Item>
                        <CarouselCaption>
                            <div className='user_img'>
                                <img src={User5} className='img-fluid' alt="User-5" />
                            </div>
                            <p>" Etiam sapien sem at sagittis congue augue massa varius
                                 sodales sapien undo tempus dolor egestas magna suscipit magna
                                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </div>
                        </CarouselCaption>
                    </Carousel.Item>

                </Carousel>
            </Row>
        </Container>
    </section>
  )
}

export default Section6