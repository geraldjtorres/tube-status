import PropTypes from "prop-types"
import StatusIcon from "./StatusIcon"
import AffectedTubeStopsList from "./AffectedTubeStopsList"

function TubeInfo({ isLoading, selectedTubeLineData }) {
  const tubeStatus =
    selectedTubeLineData?.data[0].lineStatuses[0].statusSeverityDescription
  const reason = selectedTubeLineData?.data[0].lineStatuses[0]?.reason
  const affectedStops =
    selectedTubeLineData?.data[0].lineStatuses[0]?.disruption?.affectedStops

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="tube-info-box">
      <h2>{selectedTubeLineData?.data[0].name} Line</h2>

      <div className="status">
        <p>Line Status: {tubeStatus}</p>
        <StatusIcon status={tubeStatus} />
      </div>

      {reason ? <p className="reason">Reason: {reason}</p> : null}

      {affectedStops ? (
        <>
          <h3>List of affected train stations:</h3>
          <AffectedTubeStopsList affectedStops={affectedStops} />
        </>
      ) : null}
    </div>
  )
}

export default TubeInfo

TubeInfo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  selectedTubeLineData: PropTypes.object.isRequired,
}
