import React from 'react';
import style from './Table.module.css';

const Table = (props) => {

    const containerStyle = {
        minWidth: `${props.width}px`,
        margin: "5px auto"
    }
    let flex = props.propsFlex;
    if (!props.lp)
        flex.unshift(0);

    const flexSum = flex.reduce((prev, el) => prev + el);
    const spanWidth = {
        width: `${flex[0] / flexSum * 100}%`
    }
    
    const activeRecord = props.linkFunc ? style.activeRecord : "";
    
    return (
        <div style={containerStyle}>
            <div className={[style.record, style.header].join(" ")}>
                {props.lp ? <span style={spanWidth}>Lp.</span> : null}
                {props.headers.map((el, id) =>
                    <p
                        style={{ width: `${flex[id + 1] / flexSum * 100}%` }}
                        key={id}>{el}
                    </p>)}
            </div>
            {props.objects.map(el =>
                <div 
                  onClick={() => props.linkFunc(el.key)} 
                  className={[style.record, activeRecord].join(' ')} 
                  key={el.key}>
                    {props.lp ? <span style={spanWidth}>{el.key + 1}</span> : null}
                    {props.propsOrder.map((name, id) =>
                        <p
                            style={{ width: `${flex[id + 1] / flexSum * 100}%` }}
                            key={name}>{el[name]}
                        </p>)}
                </div>
            )}
        </div>
    );
}

export default Table;