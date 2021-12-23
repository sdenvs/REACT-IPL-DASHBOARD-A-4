import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, result, matchStatus, id} = details
  return (
    <li className=" col-6 col-md-4 p-2">
      <div className="matchCard-bg d-flex flex-column justify-content-between align-items-center">
        <img
          className="matchCard-img"
          src={competingTeamLogo}
          alt={competingTeam}
        />
        <h1 className="matchCard-heading">{competingTeam}</h1>
        <p>{result}</p>
        <p
          className={
            matchStatus === 'Won' ? 'result-status-won' : 'result-status-lost'
          }
        >
          {matchStatus}
        </p>
      </div>
    </li>
  )
}

export default MatchCard
