import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, result, matchStatus, id} = details
  return (
    <li className=" col-6 p-2">
      <div className="matchCard-bg">
        <img
          className="matchCard-img"
          src={competingTeamLogo}
          alt={competingTeam}
        />
        <h1 className="matchCard-heading">{competingTeam}</h1>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
