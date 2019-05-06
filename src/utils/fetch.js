import { useEffect, useState } from 'react'

const baseUrl = 'http://192.168.1.15'

const useFetch = endpointUrl => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${baseUrl}/${endpointUrl}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
  }, [endpointUrl])

  return { data, error }
}

export default useFetch
