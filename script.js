let input=document.querySelector("#input")
let btn=document.querySelector("button")
let dict=document.querySelector(".dict")


async function dictionary(word){
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(result => result.json());
   // console.log(result);
    return result[0];
   // console.log(result);
}

btn.addEventListener('click',change)

async function change(){
    const data = await dictionary(input.value)

    let pos=[]

        for(let i=0;i<=data.meanings.length-1 ; i++)
        {
            pos.push(data.meanings[i].partOfSpeech)
        }
    
    dict.innerHTML = `<div class="card">
    <div class="prop">
        <span>Word : </span>
        <span>${data.word}</span>
    </div>
    <div class="prop">
        <span>Audio : </span>
        <span>
        <audio controls src="${data.phonetics[0].audio}"></audio>
        </span>
    </div>
    <div class="prop">
        <span>Definition:</span>
        <span>${data.meanings[0].definitions[0].definition}</span>
    </div>
    <div class="prop">
        <span>Example : </span>
        <span>${data.meanings[0].definitions[0].example}</span>
    </div>
    <div class="prop">
        <span>Parts of speech : </span>
        <span>${pos.map(e => e).join(', ')}</span>
    </div>
</div>`;
}
