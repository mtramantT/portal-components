// const media = { 
//     mobile: {
//         min: min('360px'),
//         max: max('480px')
//     },
//     tablet: {
//         min: min('480px'),
//         max: max('600px')
//     },
//     desktop: {
//         min: min('600px'),
//         max: max('1080px'),
//     },
//     wideScreen: {
//         min: min('1080px'),
//         max: max('1920px')
//     },
//  };


export interface BreakPoint {
    min: (string: TemplateStringsArray) => string;
    max: (string: TemplateStringsArray) => string;
}

const min = (breakpoint: string) => (styles: TemplateStringsArray) => applyMinMedia(breakpoint, styles);
const max = (breakpoint: string) => (styles: TemplateStringsArray) => applyMaxMedia(breakpoint, styles);


export interface Media {
    [key: string]: BreakPoint;
}

export const createMedia = (breakpoints: string[]) => {
    const media: Media = {};
    breakpoints.forEach((breakpoint, index, srcArr) => {
        if (index !== srcArr.length - 1) {
            media[breakpoint] = {
                min: min(breakpoint),
                max: max(srcArr[index + 1])
            }
        }
    });
    return media;
}

// Helper Functions
const applyMediaStyle = (selector: string, breakpoint: string, styles: TemplateStringsArray) => `
@media only screen and (${selector}: ${breakpoint}) {
    ${styles}
}`;
const applyMinMedia = (breakpoint: string, styles: TemplateStringsArray) => applyMediaStyle('min-width', breakpoint, styles)
const applyMaxMedia = (breakpoint: string, styles: TemplateStringsArray) => applyMediaStyle('max-width', breakpoint, styles);