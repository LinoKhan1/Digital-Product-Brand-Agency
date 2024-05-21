import React, { useState } from 'react';
import '../../pages/Home/Home.scss';
function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { id: 0, question: 'How can I improve my website\'s loading speed?', answer: 'To improve website loading speed, you can optimize images, minimize HTTP requests, enable browser caching, and use a content delivery network (CDN).' },
    { id: 1, question: 'What are some important factors to consider when designing a user-friendly website?', answer: 'Important factors for designing a user-friendly website include intuitive navigation, responsive design, clear calls-to-action, accessible content, and fast loading times.' },
    { id: 2, question: 'How can I enhance the security of my web application?', answer: 'To enhance the security of your web application, you can use HTTPS encryption, implement user authentication and authorization mechanisms, sanitize user inputs to prevent SQL injection and XSS attacks, and regularly update software libraries and dependencies.' },
    { id: 3, question: 'What strategies can I use to improve my website\'s search engine ranking?', answer: 'Strategies for improving website search engine ranking include optimizing on-page elements (such as title tags, meta descriptions, and headings), creating high-quality content, obtaining backlinks from reputable sources, and improving website loading speed.' },
    { id: 4, question: 'How can I create a consistent brand identity for my business?', answer: 'To create a consistent brand identity, you can develop brand guidelines that define your brand\'s values, voice, tone, colors, typography, and imagery. Consistently apply these elements across all communication channels, including your website, social media, and marketing materials.' },
    { id: 5, question: 'What are the benefits of using a responsive web design approach?', answer: 'Benefits of responsive web design include improved user experience across devices, better SEO performance (due to Google\'s preference for mobile-friendly websites), easier maintenance (as you only need to update content once), and cost-effectiveness (compared to maintaining separate mobile and desktop versions).' },
    { id: 6, question: 'How can I measure the effectiveness of my SEO efforts?', answer: 'You can measure the effectiveness of your SEO efforts using various metrics, including organic search traffic, keyword rankings, conversion rates, bounce rates, and engagement metrics (such as time on site and pages per session). Additionally, tools like Google Analytics and Google Search Console provide valuable insights into website performance and SEO performance.' }
  ];

  return (
    <div id="accordion" className="accordion-container">
      {accordionData.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h3 className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={activeIndex === item.id}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </h3>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${activeIndex === item.id ? 'show' : ''}`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
