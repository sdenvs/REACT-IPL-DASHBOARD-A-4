import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const {Component} = require('react')

class Home extends Component {
  state = {homeData: [], isLoading: true}

  componentDidMount() {
    this.getHomeData()
  }

  getHomeData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const homeDataSnake = await response.json()
    const homeData = homeDataSnake.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({homeData, isLoading: false})
  }

  render() {
    const {homeData, isLoading} = this.state
    return (
      <div className="bgContainer">
        <div className="d-flex justify-content-center pt-4 mb-4">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="text-light h2 font-weight-bold">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div className="text-center align-middle mt-5">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="list-container d-flex justify-content-center align-items-center flex-wrap">
            {homeData.map(eachItem => (
              <TeamCard details={eachItem} key={eachItem.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Home
