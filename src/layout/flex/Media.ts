// Helper Functions
const applyMaxMediaStyle = (breakpoint: number, styles: string) => `
    @media only screen and (max-width: ${breakpoint}px) {
        ${styles}
    }
`

const flattenProps = (arr: string[]) => `${arr}`.replace(',','');

// Media Object
const media = {
    xs: (styles: string) => applyMaxMediaStyle(480, styles),
    sm: (styles: string) => applyMaxMediaStyle(768, styles),
    md: (styles: string) => applyMaxMediaStyle(1024, styles),
    lg: (styles: string) => applyMaxMediaStyle(1201, styles),
    def: (styles: string, breakpoint = 480) => applyMaxMediaStyle(breakpoint, styles)
}

// Media Styles
const collapse = (props: string[] = []): string => `
    display: none;
    ${flattenProps(props)}
`
const stack = (props: string[] = []): string => `
    flex-direction: column;
    ${flattenProps(props)}
`

// Exports
export const mediaStyleProps = {collapse, stack}
export type DeviceSize = keyof typeof media;
export default media;
