function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let result = htmlContent;
    const htmlContentPositions = plainTextPositions.map(({ start, end }) => ({
        start: htmlContent.indexOf(plainText.slice(start, end)),
        end: htmlContent.indexOf(plainText.slice(start, end)) + (end - start),
    }));

    htmlContentPositions.map(({ start, end }) => {
        
        if (start === -1) {
            return result;
        }

        else if (end === -1) {
            let prefix = result.slice(0, start);
            let content = htmlContent.substring(start, htmlContent.length);
            result = `${prefix}<mark>${content}</mark>`
        }

        let prefix = result.slice(0, start);
        let content = htmlContent.substring(start, end);
        let suffix = result.slice(end);

        result = `${prefix}<mark>${content}</mark>${suffix}`;
    });

    return result;
}
