window.onload = function () {
    const passInput = document.getElementById("pass");
    const logos = [...document.getElementsByClassName("logo-requirements")]
    passInput.addEventListener("input", (e) => {
        const text = e.target.value;

        // Length
        if (text.length >= 8) {
            logos[0].setAttribute("src", "../media/SVG/tick_verde.svg");
        } else {
            logos[0].setAttribute("src", "../media/SVG/x_rossa.svg");
        }

        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "1234567890";
        const symbols = "|\\'\"/~^:,;?!&%$@*+#";

        // Digit
        let hasDigit = false;
        for (let i = 0; i < digits.length; i++) {
            if (text.includes(digits[i])) {
                hasDigit = true;
                logos[1].setAttribute("src", "../media/SVG/tick_verde.svg")
                break;
            }
        }
        if (!hasDigit)
            logos[1].setAttribute("src", "../media/SVG/x_rossa.svg")

        // Symbols
        let hasSymbols = false;
        for (let i = 0; i < symbols.length; i++) {
            if (text.includes(symbols[i])) {
                hasSymbols = true;
                logos[2].setAttribute("src", "../media/SVG/tick_verde.svg")
                break;
            }
        }
        if (!hasSymbols)
            logos[2].setAttribute("src", "../media/SVG/x_rossa.svg")

        // Upper
        let hasUpper = false;
        for (let i = 0; i < upper.length; i++) {
            if (text.includes(upper[i])) {
                hasUpper = true;
                logos[3].setAttribute("src", "../media/SVG/tick_verde.svg")
                break;
            }
        }
        if (!hasUpper)
            logos[3].setAttribute("src", "../media/SVG/x_rossa.svg")
    })
}