
function highlightForbiddenWords(text: string, forbiddenWords: string[]): string {
    const pattern = new RegExp(`\\b(${forbiddenWords.join('|')})\\b`, 'gi');
    return text.replace(pattern, '<del>$1</del>');
}

document.body.innerHTML = `
    <h1>Highlight Forbidden Words</h1>
    <label for="inputText">Enter Text:</label>
    <input type="text" id="inputText" value="This is a test sentence with some bad words.">
    <br><br>
    <label for="forbiddenWords">Forbidden Words:</label>
    <input type="text" id="forbiddenWords" value="bad, test">
    <br><br>
    <button id="highlightButton">Highlight Forbidden Words</button>
    <br><br>
    <div id="output"></div>
`;

document.getElementById("highlightButton")?.addEventListener("click", () => {
    const inputText = (document.getElementById("inputText") as HTMLInputElement).value;
    const forbiddenWords = (document.getElementById("forbiddenWords") as HTMLInputElement).value
        .split(',')
        .map(word => word.trim());

    const result = highlightForbiddenWords(inputText, forbiddenWords);
    (document.getElementById("output") as HTMLElement).innerHTML = result;
});
