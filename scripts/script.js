// console.log(personalInfo);

function animateString(id) {
    const element = document.getElementById(id);
    // console.log(personalInfo);
    const textNode = element.childNodes[0];
    let text = textNode.data

    setInterval(() => {
        text =  text.slice(1, text.length - 1) + text[0] ;
        textNode.data = text;
    }, 1000)
}

// animateString("location");