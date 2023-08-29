import { useQuery } from "react-query"
import { GetAllTubeLines, GetTubeLineInfo } from "../api/tube-line-service"

const useTubeLineData = tubeLineId => {
  const allTubeLinesData = useQuery({
    queryKey: ["all-tube-lines"],
    queryFn: GetAllTubeLines,
    refetchOnWindowFocus: false,
  })

  const selectedTubeLineData = useQuery({
    queryKey: ["selected-tube-line-info", tubeLineId],
    queryFn: GetTubeLineInfo,
    enabled: !!tubeLineId,
    refetchOnWindowFocus: false,
  })

  return {
    allTubeLinesData,
    selectedTubeLineData,
  }
}

export default useTubeLineData
