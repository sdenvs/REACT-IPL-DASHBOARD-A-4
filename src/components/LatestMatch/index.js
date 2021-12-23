import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {detailsL} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = detailsL

    return (
      <div className="container-fluid ">
        <div className="latestMatch-bg row">
          <div className="competing-data col-6 col-md-4">
            <h1 className="competing-team">{competingTeam}</h1>
            <p className="competing-date">{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <div className="col-6 col-md-4 d-flex flex-column justify-content-center">
            <img
              className="competive-team-logo"
              src={competingTeamLogo}
              alt={competingTeam}
            />
          </div>
          <div className="col-12 d-md-none ">
            <hr className="border border-light" />
          </div>
          <div className="col-12 col-md-4 inning-details">
            <h1>First Innings</h1>
            <p>{firstInnings}</p>
            <h1>Second Innings</h1>
            <p>{secondInnings}</p>
            <h1>Man Of The Match</h1>
            <p>{manOfTheMatch}</p>
            <h1>Umpires</h1>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
