import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details

  return (
    <Link
      className="team-card d-flex align-items-center border border-light"
      to={`/ipl/${id}`}
    >
      <img className="team-card-image mr-2" src={teamImageUrl} alt={name} />
      <h1 className="team-card-heading">{name}</h1>
    </Link>
  )
}

export default TeamCard
