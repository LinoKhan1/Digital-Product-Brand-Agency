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

                <h1>Over the past years, we have delivered measurable results for various businesses.</h1>

                <div className="scroller-buttons">
                    <button className="scroll-button" onClick={scrollLeft}>‹</button>
                    <button className="scroll-button" onClick={scrollRight}>›</button>
                </div>
            </div>
            <div className="scroll-wrapper row" ref={scrollContainer}>
                <div className="scroller-row">
                    <div className="scroller-column">
                        <h1>75%</h1>
                        <p>ROI</p>
                        <p>We track and optimize ROI to ensure that our clients are achieving maximum returns from their digital investments.</p>
                    </div>
                    <div className="scroller-column col">
                        <h1>30%</h1>
                        <p>CRO</p>
                        <p>By implementing effective SEO strategies, we help our clients achieve higher visibility and attract more organic traffic to their websites.</p>

                    </div>
                    <div className="scroller-column col">
                        <h1>50%</h1>
                        <p>Brand Visibility Growth</p>
                        <p>Through strategic branding initiatives, we elevate our clients online presence and strengthen their brand identity to reach a wider audience.</p>

                    </div>
                    <div className="scroller-column col">
                        <h1>30%</h1>
                        {/**<div className="metric-circle">
                            <span className="metric-percent">30%</span>
                            </div>*/}
                        <p>SEO</p>
                        <p>By implementing effective SEO strategies, we help our clients achieve higher visibility and attract more organic traffic to their websites.</p>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default Scroller;
