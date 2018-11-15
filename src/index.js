import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.style'
import Api from './utils/api'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryTypes: null,
      categoryTypeActive: ''
    }
  }

  componentDidMount() {
    Api.get('categoryTypes').then(response => {
      this.setState({
        categoryTypes: response.data
      })
    })
  }

  handleCategoryTypeClick(categoryType) {
    const { categoryTypeActive } = this.state

    if (categoryType === categoryTypeActive) {
      this.setState({
        categoryTypeActive: ''
      })
    } else {
      this.setState({
        categoryTypeActive: categoryType
      })
    }
  }

  render() {
    const { categoryTypes, categoryTypeActive } = this.state

    return (
      <React.Fragment>
        <GlobalStyle />
        {categoryTypes && (
          <Header
            links={categoryTypes}
            activeLink={categoryTypeActive}
            onLinkClick={categoryType => {
              this.handleCategoryTypeClick(categoryType)
            }}
          />
        )}
      </React.Fragment>
    )
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))
