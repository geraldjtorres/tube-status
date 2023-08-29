import PropTypes from "prop-types"
function StatusIcon({ status }) {
  if (status === "Good Service") {
    return <div className="green-status" />
  } else if (status === "Minor Delays") {
    return <div className="amber-status" />
  } else if (status === "Severe Delays") {
    return <div className="red-status" />
  }
}

export default StatusIcon

StatusIcon.propTypes = {
  status: PropTypes.string.isRequired,
}
