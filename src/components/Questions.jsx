import React, { useState } from 'react'

export default function Questions({ title, info }) {
    const [show, setShow] = useState(false);

    return (
        <section className="QuestionBox">
            <div className="question">
                <h3>{title}</h3>
                <div className="Btn" onClick={() => setShow(!show)}>{(show) ? '-' : '+'}</div>
            </div>
            {(show) ? <p>{info}</p> : null}
        </section>
    )
}
