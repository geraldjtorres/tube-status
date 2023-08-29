import PropTypes from "prop-types"
import Tube from "./Tube"

function TubeList({ allTubeLinesData, onSelectTube, selectedTubeLine }) {
  return (
    <div className="tube-list">
      {allTubeLinesData.isError ? (
        <p>Error retrieving data. Please try again later</p>
      ) : (
        <ul>
          {allTubeLinesData?.data?.map(tube => {
            return (
              <Tube
                key={tube.id}
                tube={tube}
                onSelectTube={onSelectTube}
                selectedTubeLine={selectedTubeLine}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default TubeList

TubeList.propTypes = {
  allTubeLinesData: PropTypes.object.isRequired,
  onSelectTube: PropTypes.func.isRequired,
  selectedTubeLine: PropTypes.string,
}
