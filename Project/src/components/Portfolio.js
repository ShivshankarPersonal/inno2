import React from 'react'
//import PropTypes from 'prop-types'

const Portfolio = ({name, totalSpend, percentSpend, child}) => {
console.log('name')
console.log(name)
    return(
    <div>
        <div>{name}
        <div><span>{totalSpend}</span> <span>{percentSpend}</span></div>
        </div>
        <div>{child}</div>
    </div>
);}

//Portfolio.propTypes = {
//    initialValue:PropTypes.string.isRequired
//};

export default Portfolio;