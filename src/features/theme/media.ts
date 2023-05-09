export interface BreakPoint {
    min: (string: TemplateStringsArray) => string;
    max: (string: TemplateStringsArray) => string;
}
export interface Media {
    mobile: BreakPoint;
    tablet: BreakPoint;
    desktop: BreakPoint;
    wideScreen: BreakPoint;
    min: (breakpoint: string, styles: TemplateStringsArray) => string;
    max: (breakpoint: string, styles: TemplateStringsArray) => string;
    custom: (modifier: MediaModifier, mediaType: string, expression: string, styles: TemplateStringsArray) => string;
}

type MediaModifier = 'not' | 'only' | undefined;
  
// Helper functions (In-File)
const applyMediaStyle = (selector: string, breakpoint: string, styles: TemplateStringsArray) => `
@media only screen and (${selector}: ${breakpoint}) {
    ${styles}
}
`
const min = (breakpoint: string) => (styles: TemplateStringsArray) => applyMinMedia(breakpoint, styles);
const max = (breakpoint: string) => (styles: TemplateStringsArray) => applyMaxMedia(breakpoint, styles);

// Help Functions (Export)
const applyMinMedia = (breakpoint: string, styles: TemplateStringsArray) => applyMediaStyle('min-width', breakpoint, styles)
const applyMaxMedia = (breakpoint: string, styles: TemplateStringsArray) => applyMediaStyle('max-width', breakpoint, styles);

const applyCustomMedia = (modifier: MediaModifier, mediaType: string, expression: string, styles: TemplateStringsArray) => {
    return `
        @media ${modifier} ${mediaType} and ${expression} {
            ${styles}
        }
    `
}

// Media Object
const media: Media = { 
    mobile: {
        min: min('360px'),
        max: max('480px')
    },
    tablet: {
        min: min('480px'),
        max: max('600px')
    },
    desktop: {
        min: min('600px'),
        max: max('1080px'),
    },
    wideScreen: {
        min: min('1080px'),
        max: max('1920px')
    },
    min: applyMinMedia,
    max: applyMaxMedia,
    custom: applyCustomMedia
 };

export default media;