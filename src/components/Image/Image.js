import React from 'react'

export function Image({ width, height, source, styleClass, alt }) {
    return (
        <div>
            <img width={width} height={height} src={source} className={styleClass} alt={alt} />
        </div>
    )
}
