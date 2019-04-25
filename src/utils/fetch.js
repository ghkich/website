import { useEffect, useState } from 'react'

const useFetch = url => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`http://192.168.1.9/${url}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
  }, [url])

  return { data, error }
}

export default useFetch
