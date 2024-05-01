// import Content from "./Content"
// import SideBar from "./Sidebar"
// import '../assets/css/MainStyle.css'

// const Main = () => {
//     return(
//         <div className="container">
//             <SideBar />
//             <Content />
//         </div>
//     )
// }

// export default Main

'use client'
import { useState } from "react"

const Main = () => {

    const [arrayTitle, setArrayTitle] = useState('')

    const openObj = '{'
    const closeObj = '}'

    const style = {
        padding: 0,
        marginLeft: 30
    }

    const [obj, setObj] = useState({
        title: "",
        result: "",
        min_value: "",
        max_value: '',
        input_type: 'text',
        data_type: 'numeric',
        unit: 'Mg/dL',
        required: 'true'
    })

    const [jsonData, setJsondata] = useState<any>([])

    const handleClick = () => {
        const newObj = { ...obj, id: jsonData.length + 1 };
        setJsondata((curr: any) => [...curr, newObj])
        setObj({
            title: "",
            result: "",
            min_value: "",
            max_value: '',
            input_type: 'text',
            data_type: 'numeric',
            unit: 'Mg/dL',
            required: 'true'
        })
    }

    const copyText = () => {
        const textarea = document.createElement('textarea');
        textarea.value = `Array name : ${arrayTitle} data : ${JSON.stringify(jsonData)}`;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Text copied to clipboard!');
    };

    return (
        <div style={{
            display: 'flex'
        }}>
            <div style={{
                width: '30%'
            }}>
                <input type="text" value={arrayTitle} onChange={(e: any) => setArrayTitle(e.target.value)} />
                <h4>Form</h4>
                <br />
                <label htmlFor="title" >Title &nbsp;</label>
                <input id='title' type="text" value={obj.title} style={{
                    marginBottom: 10
                }}
                    onChange={(e: any) => setObj((curr: any) => ({ ...curr, title: e.target.value }))} />

                <br />
                <label htmlFor="min">Min value &nbsp;</label>
                <input id='min' type="number" value={obj.min_value} style={{
                    marginBottom: 10
                }}
                    onChange={(e: any) => setObj((curr: any) => ({ ...curr, min_value: e.target.value }))} />

                <br />
                <label htmlFor="max">Max Value &nbsp;</label>
                <input id='max' type="number" value={obj.max_value} style={{
                    marginBottom: 10
                }}
                    onChange={(e: any) => setObj((curr: any) => ({ ...curr, max_value: e.target.value }))} />

                <br />
                <label htmlFor="inputTypes">Input type &nbsp;</label>
                <select
                    name="inputTypes"
                    id="inputTypes"
                    value={obj.input_type}
                    style={{
                        marginBottom: 10
                    }}
                    onChange={(e: any) => setObj((curr: any) => ({ ...curr, input_type: e.target.value }))}>
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                </select>

                <br />
                <label htmlFor="dataTypes">Data type &nbsp;</label>
                <select
                    name="dataTypes"
                    id="dataTypes"
                    value={obj.data_type}
                    style={{
                        marginBottom: 10
                    }}
                    onChange={(e: any) => setObj((curr: any) => ({ ...curr, data_type: e.target.value }))}>
                    <option value="numeric">Numeric</option>
                </select>

                <br />
                <label htmlFor="unit">Unit &nbsp;</label>
                <select
                    name="unit"
                    id="unit"
                    value={obj.unit}
                    style={{
                        marginBottom: 10
                    }}
                    onChange={(e: any) => setObj((curr: any) => ({ ...curr, unit: e.target.value }))}>
                    <option value="Mg/dL">Mg/dL</option>
                    <option value="mg/dl">mg/dl</option>
                    <option value="Mg/dl">Mg/dl</option>
                    <option value="U/L">U/L</option>
                    <option value="gm/dL">gm/dL</option>
                    <option value="Mmol/L">Mmol/L</option>
                    <option value="M/L">M/L</option>
                    <option value="Mg/day">Mg/day</option>
                    <option value="">-</option>
                </select>

                <br />
                <label htmlFor="required">Required &nbsp;</label>
                <select
                    name="required"
                    id="required"
                    value={obj.required}
                    style={{
                        marginBottom: 10
                    }}
                    onChange={(e: any) => setObj((curr: any) => ({ ...curr, required: e.target.value }))}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>

                <br />
                <input type="button" value="Add Data" onClick={handleClick} />

                <br />
                <br />
                <input type="button" value="click to copy" onClick={copyText} />
            </div>

            <div>
                <h3>Data</h3>
                {jsonData.length > 0 && jsonData.map((item: any) => {
                    return (
                        <>
                            <p>{openObj}</p>
                            <p style={style}>
                                id : {item.id}
                            </p>
                            <p style={style}>
                                title : {item.title}
                            </p>
                            <p style={style}>
                                result : {item.result}
                            </p>
                            <p style={style}>
                                min_value : {item.min_value}
                            </p>
                            <p style={style}>
                                max_value :{item.max_value}
                            </p>
                            <p style={style}>
                                input_type :{item.input_type}
                            </p>
                            <p style={style}>
                                data_type : {item.data_type}
                            </p>
                            <p style={style}>
                                unit : {item.unit}
                            </p>
                            <p style={style}>
                                required : {item.required}
                            </p>
                            <p>{closeObj}</p>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Main