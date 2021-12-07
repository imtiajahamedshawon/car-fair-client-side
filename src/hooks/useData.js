import { useEffect, useState } from "react"

const useData = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                setLoading(false)
            })
    }, [cars])
    return {
        cars,
        loading
    }
}
export default useData;