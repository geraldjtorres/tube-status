import axios from "axios"

export const GetAllTubeLines = async () => {
  const response = await axios.get(
    "https://api.tfl.gov.uk/Line/Mode/tube/Status"
  )
  return response.data
}

export const GetTubeLineInfo = async keyInfo => {
  const tubeLineId = keyInfo.queryKey[1]
  console.log("tubeLineId", tubeLineId)

  const response = await axios.get(
    `https://api.tfl.gov.uk/Line/${tubeLineId}/Status?detail=true`
  )
  return response.data
}
