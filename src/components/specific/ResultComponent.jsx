import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/* Styles and css*/
import '../../pages/About/about.scss';

const ResultComponent = () => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        <div className="scroller-container">
            {/** Sroller Header Section */}
            <div className="scroller-header">

                <h1>Over the past years, we have delivered measurable results for various businesses.</h1>

                <div className="scroller-buttons">
                    <button className="scroll-button" onClick={scrollLeft}>‹</button>
                    <button className="scroll-button" onClick={scrollRight}>›</button>
                </div>
            </div>
            {/** Scroller Wrapper Section */}
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

                        <p>SEO</p>
                        <p>By implementing effective SEO strategies, we help our clients achieve higher visibility and attract more organic traffic to their websites.</p>

                    </div>



                </div>
            </div>
        </div>
    );
};
ResultComponent.propTypes = {
    // Define prop types if necessary
};

export default ResultComponent;
