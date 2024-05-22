import React, { useRef } from 'react';
import '../../pages/About/about.scss';

const Scroller = () => {
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

                <h1>Over the past 5 years, we have delivered measurable results for 113+ businesses.</h1>

                <div className="scroller-buttons">
                    <button className="scroll-button" onClick={scrollLeft}>‹</button>
                    <button className="scroll-button" onClick={scrollRight}>›</button>
                </div>
            </div>
            <div className="scroll-wrapper row" ref={scrollContainer}>
                <div className="scroller-row">
                    <div className="scroller-column">
                        <h1>26.3</h1>
                        <p>ROAS</p>
                        <p>We act as a true extension of your team, advancing business objectives, alongside your internal team.</p>
                    </div>
                    <div className="scroller-column col">
                        <h1>502%</h1>
                        <p>ROI</p>
                        <p>
                            Our agency consists of experienced marketers, strategists, creatives and developers.
                        </p>
                    </div>
                    <div className="scroller-column col">
                        <h1>25%</h1>
                        <p>AVR</p>
                        <p>
                            Our agency consists of experienced marketers, strategists, creatives and developers.
                        </p>
                    </div>
                    <div className="scroller-column col">

                        <h1>27%</h1>
                        <p>CRO</p>
                        <p>

                            Our agency consists of experienced marketers, strategists, creatives and developers.
                        </p>
                    </div>
                    <div className="scroller-column col">

                        <span><h1>4</h1></span>
                        <h2>Multi-Displinary Creators</h2>
                        <p>

                            Our agency consists of experienced marketers, strategists, creatives and developers.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Scroller;
