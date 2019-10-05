const URIs = [
  'http://www.json-generator.com/api/json/get/cqAHvIbaxu',
  'http://www.json-generator.com/api/json/get/ceiOoAbgUi',
  'http://www.json-generator.com/api/json/get/bVUbSgtSBe',
  'http://www.json-generator.com/api/json/get/cfeoLUEVaq',
  'http://www.json-generator.com/api/json/get/cfJYEfNaEO',
  'http://www.json-generator.com/api/json/get/cgAbvvWLuG',
  'http://www.json-generator.com/api/json/get/ceoyeSXBBu',
  // 'https://github.com/mharyst', /* Need for random error */
]

const getRandomUri = () => {
  const max = URIs.length
  const randomIndex = Math.floor(Math.random() * Math.floor(max))
  return URIs[randomIndex]
}

export const fetchData = async () => {
  const uri = getRandomUri()
  const response = await fetch(uri)
  if (!response.ok || response.status !== 200) {
    throw new Error('Request failed')
  }
  const data = await response.json()
  return data
}
