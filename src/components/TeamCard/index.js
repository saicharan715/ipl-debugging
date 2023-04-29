import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, imageURL} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-item">
        <img src={imageURL} alt={`${name}`} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
