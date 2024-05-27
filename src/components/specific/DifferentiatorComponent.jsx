import React, { useRef } from 'react';
import '../../pages/About/about.scss';

const DifferentiatorComponent = () => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        <div className="scroller-container">
            <div className="scroller-header">
                <p>
                    _Our Differentiators
                </p>
                <div className="scroller-buttons">
                    <button className="scroll-button" onClick={scrollLeft}>‹</button>
                    <button className="scroll-button" onClick={scrollRight}>›</button>
                </div>
            </div>
            <div className="scroll-wrapper row" ref={scrollContainer}>
                <div className="scroller-row">


                    <div className="scroller-column col">
                        <span><h1>1</h1></span>
                        <h2>Route Cause Resolution</h2>
                        <p>
                            We are true problem solver who prioritize understanding the root cause of our client
                            online challenges and providing targeted solutions.
                        </p>

                    </div>
                    <div className="scroller-column col">

                        <span><h1>2</h1></span>
                        <h2>Data-Driven Resolution</h2>
                        <p>
                            Our strategies are informed by comprehensive data analysis, ensuring precision and effectiveness in every move.
                        </p>
                    </div>
                    <div className="scroller-column col">

                        <span><h1>3</h1></span>
                        <h2>Collaborative Partnership</h2>
                        <p>
                            We foster a transparent and collaborative relationship with our clients, considering ourselves an extension of their team.
                        </p>
                    </div>
                    <div className="scroller-column col">
                        <span><h1>4</h1></span>
                        <h2>Innovative Edage</h2>
                        <p>

                            We embrace innovation, staying ahead of industry trends and technological advancements to deliver cutting-edge digital strategies.                        </p>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default DifferentiatorComponent;