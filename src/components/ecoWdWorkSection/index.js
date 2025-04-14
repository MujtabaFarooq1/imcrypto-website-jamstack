import { PortableText } from '@portabletext/react';
import React from 'react';
import './ecowdwork.scss';

const EcoWDWorkSection = (props) => {
    const { description, description_cards, section_title, title } = props
  return (
    <div className='imwallet-work'>
        <div className='container'>
            <div className='imwallet-work-inner'>
                <div className='section-header'>
                     <h6> {section_title} </h6>
                     <h2> {title} </h2>  
                     <p> {description} </p>
                </div>
                <div className='descriptionSection'>
                  { Array.isArray(description_cards) && description_cards?.map( (i, index) => {
                    console.log(i, "i");
                      return (
                        
                          <div className='descBox'>
                            <h6> {index+1} </h6> 
                           <PortableText className="set-bold-color" value={i?._rawDescription} />
                          </div> 
                      )
                  })}
                </div>
            </div>
        </div>       
    </div>
  )
}

export default EcoWDWorkSection