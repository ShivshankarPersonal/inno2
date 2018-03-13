import React from 'react'
//import PropTypes from 'prop-types'
import '../resources/css/bootstrap.min.css'

const PortfolioItem = ({name,currentMix,suggestedMix}) => {
    //<div className="absolute-count-container">
    //    <span className="abs-name">
    //        {name}
    //    </span>
    //    <span className="abs-value">
    //        {currency} {value} <span className={icon}></span>
    //    </span>
    //</div>
    console.log('PortfolioItem')
    console.log(name)
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">{name}sadjflkajsd</div>
        </div>
    )


};

//PortfolioItem.propTypes = {
//    currency:PropTypes.string.isRequired,
//    value:PropTypes.string.isRequired,
//    name:PropTypes.string.isRequired,
//};

export default PortfolioItem;