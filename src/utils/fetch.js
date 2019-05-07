import { useEffect, useState } from 'react'

const baseUrl = 'https://api.buttercms.com/v2/content/'
const authToken = '15df2b23cbb5d7687f95f997401a1622634b7d8d'

const useFetch = (keys, locale = 'pt-br') => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${baseUrl}?keys=${keys}&locale=${locale}&auth_token=${authToken}`)
      .then(res => res.json())
      .then(data => {
        setData(data.data[keys])
      })
      .catch(err => {
        setError(err)
      })
  }, [keys, locale])

  return { data, error }
}

export default useFetch
