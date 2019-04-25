// import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import Header from './components/Header/Header'
// import { GlobalStyle } from './App.style'
// // import Api from './utils/api'

// import { requestCategoryTypes as requestCategoryTypesAction } from './state/categoryTypes'

// const App = ({ categoryTypes, requestCategoryTypes }) => {
//   useEffect(() => {
//     requestCategoryTypes()

//     // Api.get('categories?lang=pt-BR').then(response => {
//     //   dispatch({
//     //     type: 'CATEGORIES_SUCCEEDED',
//     //     payload: response.data
//     //   })

//     //   // if (state.logoState === 'identify') {
//     //   //   setTimeout(() => {
//     //   //     dispatch({
//     //   //       type: 'LOGO_STATE_CHANGED',
//     //   //       payload: 'discover'
//     //   //     })
//     //   //   }, 300)
//     //   //   setTimeout(() => {
//     //   //     dispatch({
//     //   //       type: 'LOGO_STATE_CHANGED',
//     //   //       payload: 'connect'
//     //   //     })
//     //   //   }, 800)
//     //   //   setTimeout(() => {
//     //   //     dispatch({
//     //   //       type: 'LOGO_STATE_CHANGED',
//     //   //       payload: 'construct'
//     //   //     })
//     //   //   }, 1100)
//     //   // }
//     // })
//   }, [])

//   const handleCategoryTypeClick = categoryType => {
//     console.log(categoryType)
//     // if (categoryType === state.categoryTypeActive) {
//     //   dispatch({
//     //     type: 'CATEGORY_TYPE_ACTIVE_UPDATED',
//     //     payload: ''
//     //   })
//     //   dispatch({
//     //     type: 'LOGO_STATE_CHANGED',
//     //     payload: 'construct'
//     //   })
//     // } else {
//     //   dispatch({
//     //     type: 'CATEGORY_TYPE_ACTIVE_UPDATED',
//     //     payload: categoryType
//     //   })
//     //   dispatch({
//     //     type: 'LOGO_STATE_CHANGED',
//     //     payload: 'explore'
//     //   })
//     // }
//   }

//   if (!categoryTypes) {
//     return <div>Loading...</div>
//   }

//   return (
//     <React.Fragment>
//       <GlobalStyle />
//       {categoryTypes.data && (
//         <Header
//           links={categoryTypes.data}
//           activeLink={categoryTypes.active}
//           onLinkClick={categoryType => {
//             handleCategoryTypeClick(categoryType)
//           }}
//         />
//       )}
//     </React.Fragment>
//   )
// }

// App.propTypes = {
//   categoryTypes: PropTypes.object.isRequired,
//   requestCategoryTypes: PropTypes.func.isRequired
// }

// const mapStateToProps = ({ categoryTypes }) => ({
//   categoryTypes
// })

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       requestCategoryTypes: () => requestCategoryTypesAction()
//     },
//     dispatch
//   )

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
