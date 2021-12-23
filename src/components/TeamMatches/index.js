// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {data: [], id: '', isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const snakeData = await response.json()
    const details = snakeData.latest_match_details
    const recentMatches = snakeData.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      result: eachItem.result,
      matchStatus: eachItem.match_status,
      id: eachItem.id,
    }))

    const modDetails = {
      competingTeam: details.competing_team,
      competingTeamLogo: details.competing_team_logo,
      date: details.date,
      firstInnings: details.first_innings,
      id: details.id,
      manOfTheMatch: details.man_of_the_match,
      matchStatus: details.match_status,
      result: details.result,
      secondInnings: details.second_innings,
      umpires: details.umpires,
      venue: details.venue,
    }
    const teamMatchesData = {
      teamBannerUrl: snakeData.team_banner_url,
      latestMatchDetails: modDetails,
      recentMatches,
    }

    this.setState({data: teamMatchesData, id, isLoading: false})
  }

  render() {
    const {id, data, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = data
    console.log(recentMatches)
    return isLoading ? (
      <div className="d-flex flex-column align-items-center mt-5">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className={`${id}-bg teamMatches-bg-container container-fluid p-3`}>
        <img className="banner-image col-12" src={teamBannerUrl} alt={id} />
        <p className="col-12">Latest Matches</p>
        <div className="col-12">
          <LatestMatch detailsL={latestMatchDetails} />
        </div>
        <div className="col-12">
          <ul className="ulList row">
            {recentMatches.map(eachItem => (
              <MatchCard details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
