import React, { useRef } from 'react';
import '../../pages/About/about.scss';

const ColumnScroller = () => {
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
                    <div className="scroller-column">
                        <span><h1>1</h1></span>
                        <h2>Extansion of Your Team</h2>
                        <p>We act as a true extension of your team, advancing business objectives, alongside your internal team.</p>
                    </div>
                    <div className="scroller-column col">
                        <span><h1>2</h1></span>
                        <h2>Multi-Displinary Creators</h2>
                        <p>

                            Our agency consists of experienced marketers, strategists, creatives and developers.
                        </p>

                    </div>
                    <div className="scroller-column col">
                        <span><h1>3</h1></span>
                        <h2>Multi-Displinary Creators</h2>
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

export default ColumnScroller;
