import { useState } from 'react';
import CicloGraphic from './CicloGraphic';
import { faqsData } from '../data/faqs';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="faq-area">
      <h2 className="faq-title">Información y dudas frecuentes</h2>

      <div className="faq-graphic-box">
        <div className="faq-svg-wrapper">
          <CicloGraphic />
        </div>
      </div>

      <div className="accordion-list">
        {faqsData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button 
              className={`faq-btn ${openFaq === index ? 'faq-active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <span className={index === 0 ? "italic-title" : ""}>{faq.question}</span>
              <span className="faq-icon-indicator">{openFaq === index ? '−' : '+'}</span>
            </button>
            <div 
              className="faq-content" 
              style={{ maxHeight: openFaq === index ? '350px' : '0' }}
            >
              <div className="faq-inner-text">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}