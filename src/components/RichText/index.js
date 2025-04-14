import { PortableText } from '@portabletext/react'
import React from 'react'
import { Fragment } from 'react'
import './richtext.scss'

const RichText = (props) => {
  return (
        <div className='richtext-content'>
             <div className='container'>
             { props?.content && <PortableText value={props.content} />}
             </div>
        </div>
  )
}

export default RichText