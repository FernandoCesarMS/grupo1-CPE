import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./News.css"

function News() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/VIvHFDUOQV0/maxresdefault.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text">Atualização 2.0</h3>
                    <p className="text">Uptade 2.0 como novos estilos de personagens na próxima semana. Confira!</p>
                    <p className="text">04.11.2020</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://www.justpushstart.com/wp-content/uploads/2012/03/Naruto-Shippuden-Ultimate-Ninja-Storm-Generations_2012_01-12-12_007.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text">Novo servidor</h3>
                    <p className="text">Novo servidor Uchiha x Uzumaki 110 já está disponível.</p>
                    <p className="text">06.11.2020</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://st.gdefon.com/wallpapers_original/wallpapers/413779_(www.GdeFon.com).jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className = "bold">Nova competição Interclãs anunciada!</h3>
                    <p className = "bold">Dia 28.11, não perca!</p>
                    <p className = "bold">01.11.2020</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default News;

