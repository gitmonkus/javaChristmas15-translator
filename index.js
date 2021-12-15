// Task: 
    // - Write a function to display the correct greeting when a language is selected.
    
    // Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".

const languageSelector = document.getElementById("language-selector")
const nyLanguageSelector = document.getElementById("ny-language-selector")
const greetingDisplay = document.getElementById("greeting-text")

// Play jingle
const audio = new Audio('audio/audio.mp3')
document.getElementById('play-jingle').addEventListener('click', function(){
 audio.volume = .4
 audio.play()   
})




const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!",
        nygreeting: "Happy New Year!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!",
        nygreeting: "Feliz año nuevo"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!",
        nygreeting: "Щасливого Нового року"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!",
        nygreeting: "Blwyddyn Newydd Dda"
    }
]

function removeAnimation() {
    greetingDisplay.classList.remove('animate')
}
function addAnimation() {
    greetingDisplay.classList.add('animate')
    setTimeout(removeAnimation, 1000)
}

languageSelector.addEventListener("change", translate)
function translate(){
    
    switch (languageSelector.value) {
        case 'English':
            greetingDisplay.textContent = greetingsArr[0].greeting
            addAnimation()
            break
        case 'Spanish':
            greetingDisplay.textContent = greetingsArr[1].greeting
            addAnimation()
            break
        case 'Ukrainian':
            greetingDisplay.textContent = greetingsArr[2].greeting
            addAnimation()
            break
        case 'Welsh':
            greetingDisplay.textContent = greetingsArr[3].greeting
            addAnimation()
            break
        default:
            break 
    }
}
nyLanguageSelector.addEventListener("change", nyTranslate)
function nyTranslate(){
    switch (nyLanguageSelector.value) {
        case 'English':
            greetingDisplay.textContent = greetingsArr[0].nygreeting
            addAnimation()
            break
        case 'Spanish':
            greetingDisplay.textContent = greetingsArr[1].nygreeting
            addAnimation()
            break
        case 'Ukrainian':
            greetingDisplay.textContent = greetingsArr[2].nygreeting
            addAnimation()
            break
        case 'Welsh':
            greetingDisplay.textContent = greetingsArr[3].nygreeting
            addAnimation()
            break
        default:
            break 
    }
}




