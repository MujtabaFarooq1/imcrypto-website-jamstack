import { Link, navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { getURL } from '../../utils/helper'
import './paginator.scss';

const Paginator = (props) => {
    const { total, prev, next, cur, cur_str, pathPrefix, location, currLen } = props || {}
    const [prev_total , setPrev_total] = useState(total)
    
    useEffect(()=>{
        if(total<prev_total){
            navigate(getURL(pathPrefix , (location.search?.slice(1) )), {force : true})
        }else{
            setPrev_total(total)
        }
    },[total])
    const length = total >-1? total:1
    const arr = new Array(length).fill(0)
    const params = new URLSearchParams(location.search || '')
    return (
        <div className={currLen == 0 ? 'disable_btn merch-pagination' : 'merch-pagination'}>
            {/* {length > 1 ?<Link to={getURL(prev , params.toString())} >PREVIOUS</Link> : <button disabled={cur_str == 1}><a>PREVIOUS</a></button>} */}
            <button className={cur_str == 1 && 'disable_btn'}><Link to={getURL(prev , params.toString())} >PREVIOUS</Link></button>
            <div className='pageList'>
                    <ul>
                        {arr.map((i, idx) => <li className={cur === idx ? 'active' : ''}><Link to={`${pathPrefix}${idx > 0 ? getURL(`/${idx + 1}` , params.toString()) : getURL(`` , params.toString())}`}>{idx + 1}</Link></li>)}
                    </ul>
            </div>
            {/* {length > 1 ? <Link to={getURL(cur_str==total?location?.pathname : next , params.toString())}>NEXT</Link>: <button disabled><a>NEXT</a></button>} */}
            <button className={cur_str == total && 'disable_btn'}><Link to={getURL(cur_str==total?location?.pathname : next , params.toString())}>NEXT</Link></button>
        </div>
        
    )
}

export default Paginator