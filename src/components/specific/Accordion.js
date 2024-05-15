import React, { useState } from "react";

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        onClick={() => handleToggle(0)}
                        aria-expanded={activeIndex === 0}
                        aria-controls="collapseOne"
                    >
                        Accordion Item #1
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                >
                    <div className="accordion-body">
                        Content for Accordion Item #1
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button"
                        type="button"
                        onClick={() => handleToggle(1)}
                        aria-expanded={activeIndex === 1}
                        aria-controls="collapseTwo"
                    >
                        Accordion Item #2
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                >
                    <div className="accordion-body">
                        Content for Accordion Item #2
                    </div>
                </div>
            </div>
            {/* Add more accordion items as needed */}
        </div>
    );
}

export default Accordion;
