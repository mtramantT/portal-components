// Breakpoint Def
const breakpoints = {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1201,
} as const
export type Breakpoint = typeof breakpoints[keyof typeof breakpoints];

// Helper Functions
const applyMaxMediaStyle = (breakpoint: Breakpoint, styles: string) => `
    @media only screen and (max-width: ${breakpoint}px) {
        ${styles}
    }
`
const flattenProps = (arr: string[]) => `${arr}`.replace(',','');

// Media Object
const media = {
    xs: (styles: string) => applyMaxMediaStyle(breakpoints.xs, styles),
    sm: (styles: string) => applyMaxMediaStyle(breakpoints.sm, styles),
    md: (styles: string) => applyMaxMediaStyle(breakpoints.md, styles),
    lg: (styles: string) => applyMaxMediaStyle(breakpoints.lg, styles),
    def: (styles: string, breakpoint: Breakpoint = 480) => applyMaxMediaStyle(breakpoint, styles)
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
