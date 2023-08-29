import PropTypes from "prop-types"
function AffectedTubeStopsList({ affectedStops }) {
  return affectedStops.map(stop => {
    return (
      <li key={stop.id} className="affected-stops">
        <p>{stop.commonName}</p>
      </li>
    )
  })
}

export default AffectedTubeStopsList

AffectedTubeStopsList.propTypes = {
  affectedStops: PropTypes.array.isRequired,
}
