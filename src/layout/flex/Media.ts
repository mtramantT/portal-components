import React from "react";


const applyMaxMediaStyle = (breakpoint: number, styles: React.CSSProperties) => `
    @media only screen and (max-width: ${breakpoint}px) {
        ${styles}
    }
`

// Media Object
const media = {
    xs: (styles: React.CSSProperties) => applyMaxMediaStyle(480, styles),
    sm: (styles: React.CSSProperties) => applyMaxMediaStyle(768, styles),
    md: (styles: React.CSSProperties) => applyMaxMediaStyle(1024, styles),
    lg: (styles: React.CSSProperties) => applyMaxMediaStyle(1201, styles),
}

// Media Styles
export const collapseMediaStyle: React.CSSProperties = {
    display: 'none',
}
export const stackMediaStyle: React.CSSProperties = {
    width: '100%',
}

export type DeviceSize = 'xs' | 'sm' | 'md' | 'lg';
export default media;
