import React, { useState } from "react";
import {PortableText} from '@portabletext/react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './faq.scss';

const Faq = (props) => {

  const { section_title, title, description, add_questions } = props || {};
  const [currActiveIndex, setCurrActiveIndex] = useState([])

  return (
    <div className='faq-section'>
      <div className='container'>
        <div className='faq-inner-section'>
          <div className='section-header'>
            <h6>{section_title}</h6>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className='faq-content'>
            <ul>
              {Array.isArray(add_questions) &&
                add_questions.map((i, index) => {
                  return (
                    <li key={index} className={currActiveIndex.includes(index) ? 'faq-details active' : 'faq-details'} >
                      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} onClick={() => !currActiveIndex.includes(index) ? setCurrActiveIndex([...currActiveIndex, index]) : setCurrActiveIndex(state => state.filter(i => i !== index))} >
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <h4>{i.label}</h4>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <PortableText value={i.description_rich}/>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
