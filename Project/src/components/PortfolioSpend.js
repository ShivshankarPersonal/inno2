import React from 'react'
import Portfolio from '../components/Portfolio'
import {getAccountsData} from '../reducers/portfolioSpendReducer'
import { connect } from 'react-redux'
import PortfolioItem from '../components/PortfolioItem'

const PortfolioSpend = ({accounts}) => {
    console.log('accounts')
    console.log(accounts)
    return (
        //<Portfolio name="Portfolio" totalSpend="$0.24 M" percentSpend="40%">
        //    {accounts.map(portfolio =>
        //        <div
        //            key={portfolio.id}
        //            {...portfolio}
        //            spend="$ .24M"
        //            percentage="40%"
        //            name="Accounts">{portfolio.id}</div>
        //    )}
        //    {/*<Portfolio spend="$ .24M" percentage="40%" name="Accounts"/>*/}
        //    {/*<Portfolio spend="$ .24M" percentage="40%" name="Accounts"/>*/}
        //    {/*<Portfolio spend="$ .24M" percentage="40%" name="Accounts"/>*/}
        //</Portfolio>

        <div>
            {accounts.map(portfolio =>
                <div
                    key={portfolio.id}
                    {...portfolio}
                    spend="$ .24M"
                    percentage="40%"
                    name="Accounts">{portfolio.id}</div>
            )}
        </div>
    )
}
const mapStateToProps = (state) => {

  console.log(state)
  console.log('account')
  // console.log(state.portfolioSpend.accounts)
  return{
    accounts: getAccountsData(state.portfolioSpendReducer)
    // accounts: state.portfolioSpend.accounts,
    // physicians: state.physicians,
    // patients: state.patients
  }};

// const mapDispatchToProps = {
//     onTodoClick: toggleTodo
// }

export default  connect(
    mapStateToProps
    // mapDispatchToProps
)(PortfolioSpend);



// export default PortfolioSpend;