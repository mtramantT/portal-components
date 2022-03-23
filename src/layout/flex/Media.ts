// Helper Functions
export const applyMaxMediaStyle = (breakpoint: number, styles: string) => `
    @media only screen and (max-width: ${breakpoint}px) {
        ${styles}
    }
`
export const applyMediaQueryStyle = (query: string, styles: string) => `
    ${query} {
        ${styles}
    }
`

const flattenProps = (arr: string[]) => `${arr}`.replace(',','');

// Media Object
export const media = {
    xs: (styles: string) => applyMaxMediaStyle(480, styles),
    sm: (styles: string) => applyMaxMediaStyle(768, styles),
    md: (styles: string) => applyMaxMediaStyle(1024, styles),
    lg: (styles: string) => applyMaxMediaStyle(1201, styles),
}
export type DeviceSize = keyof typeof media;
export const isDeviceSize = (test: any): test is DeviceSize => {
    return test in media;
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
export const mediaStyleProps = {collapse, stack}

// Media Query
export type MediaQuery = {deviceSize: DeviceSize; styles: string[]}
export const isMediaQuery = (test: any): test is MediaQuery => {
    return ("deviceSize" in test && "styles" in test);
}

export default media;
