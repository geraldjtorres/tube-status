import { useState } from "react"
import useTubeLineData from "../hooks/useTubeLineData"
import TubeList from "./components/TubeList"
import TubeInfo from "./components/TubeInfo"

function Main() {
  const [selectedTubeLine, setSelectedTubeLine] = useState(null)
  const { allTubeLinesData, selectedTubeLineData } =
    useTubeLineData(selectedTubeLine)

  function handleSelectTube(tubeId) {
    setSelectedTubeLine(selectedTube =>
      selectedTube === tubeId ? null : tubeId
    )
  }

  allTubeLinesData.isLoading && <p>Loading...</p>

  return (
    <main className="main">
      <TubeList
        allTubeLinesData={allTubeLinesData}
        onSelectTube={handleSelectTube}
        selectedTubeLine={selectedTubeLine}
      />

      {selectedTubeLine && selectedTubeLineData?.data ? (
        <TubeInfo
          selectedTubeLineData={selectedTubeLineData}
          isLoading={selectedTubeLineData.isLoading}
        />
      ) : null}
    </main>
  )
}

export default Main
