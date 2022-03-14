// Generics here may not work with all the type checking and specific json tags
export type ThemeSON = {[string:string]: string}
export type ProjectTheme = {
    colors: ThemeSON;
    container: ThemeSON;
}