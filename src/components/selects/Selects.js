import React from 'react'
import './SelectsStyle.css'

import Portugal from '../../assets/Portugal.jpg'
import Cancun from '../../assets/cancun.jpg'
import Hawaii from '../../assets/Hawaii.jpg'
import Rio from '../../assets/rio.jpg'
import Thailand from '../../assets/thailand.jpg'
import KeyWest from '../../assets/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Portugal} text='Portugal' />
                <SelectsImg bgImg={Cancun} text='Cancún' />
                <SelectsImg bgImg={Hawaii} text='Hawaii' />
                <SelectsImg bgImg={Rio} text='Rio de Janeiro' />
                <SelectsImg bgImg={Thailand} text='Thailand' />
                <SelectsImg bgImg={KeyWest} text='Key West' />
            </div>

        </div>
    )
}

export default Selects