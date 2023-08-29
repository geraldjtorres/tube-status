import PropTypes from "prop-types"
import StatusIcon from "./StatusIcon"

function Tube({ tube, onSelectTube, selectedTubeLine }) {
  const isSelected = selectedTubeLine === tube.id
  const tubeStatus = tube.lineStatuses[0].statusSeverityDescription

  return (
    <li className={isSelected ? "selected" : ""}>
      <StatusIcon status={tubeStatus} />

      <h3>{tube.name}</h3>
      <button className="button" onClick={() => onSelectTube(tube.id)}>
        {isSelected ? "Close" : "More Info"}
      </button>
    </li>
  )
}

export default Tube

Tube.propTypes = {
  tube: PropTypes.object.isRequired,
  onSelectTube: PropTypes.func.isRequired,
  selectedTubeLine: PropTypes.string,
}
