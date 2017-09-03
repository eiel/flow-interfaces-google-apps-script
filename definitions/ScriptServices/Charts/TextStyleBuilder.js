// @flow
// @see https://developers.google.com/apps-script/reference/charts/text-style-builder

interface gas$TextStyleBuilder {
    build(): gas$TextStyle;
    setColor(cssValue: string): gas$TextStyleBuilder;
    setFontName(fontName: string): gas$TextStyleBuilder;
    setFontSize(fontSize: number): gas$TextStyleBuilder;
}
