const { useState, useEffect } = React

function App() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    const [counter4, setCounter4] = useState(0)


    useEffect(() => {
        console.log('first render useEffect general')
    }, [])

    useEffect(() => {
        if (counter1 === 0)
            console.log('first render counter1')
        else
            console.log('counter 1 has changed')
    }, [counter1])

    useEffect(() => {
        if (counter2 === 0)
            console.log('first render counter 2')
        else
            console.log('counter 2 has changed')
    }, [counter2])

    useEffect(() => {
        if (counter1 === 0 && counter2 === 0 && counter3 === 0 && counter4 === 0)
            console.log('first render counter 3 and 4')
        else
            console.log('counter 1, 2, 3 or 4 has changed')
    }, [counter1, counter2, counter3, counter4])

    return <div>
        <button onClick={() => setCounter1(counter1 + 1)}>counter 1: {counter1}</button>
        <button onClick={() => setCounter2(counter2 + 1)}>counter 2: {counter2}</button>
        <button onClick={() => setCounter3(counter3 + 1)}>counter 3: {counter3}</button>
        <button onClick={() => setCounter4(counter4 + 1)}>counter 4: {counter4}</button>
    </div>
}