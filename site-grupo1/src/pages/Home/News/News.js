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
                    <h3>Atualização 2.0</h3>
                    <p>Semana que vem chega uptade 2.0 como novos estilos de personagens. Confira!</p>
                    <p>04.11.2020</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://www.justpushstart.com/wp-content/uploads/2012/03/Naruto-Shippuden-Ultimate-Ninja-Storm-Generations_2012_01-12-12_007.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Novo servidor</h3>
                    <p>Novo servidor Uchiha x Uzumaki 110 já está disponível.</p>
                    <p>06.11.2020</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperplay.com/walls/full/7/2/3/72592.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className = "bold">Nova competição Interclãs anunciada!</h3>
                    <p className = "bold">Junte seu clã e venha competir com dezenas de outros jogadores. Dia 28.11, não perca!</p>
                    <p className = "bold">01.11.2020</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default News;

