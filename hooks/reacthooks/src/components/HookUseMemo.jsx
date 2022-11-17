import {useState, useEffect, useMemo} from 'react'

function HookUseMemo() {

    const [number, setNumber] = useState(0)

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]
    }, [])

    useEffect (() => {
        console.log("Premium numbers foi alterado!")
    }, [premiumNumbers])

  return (
    <div>
        <h2>HookUseMemo</h2>
        <input type="text"  onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : ""}
    </div>
  )
}

export default HookUseMemo