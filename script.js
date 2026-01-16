function init() {
    listDivs();

    // Event Listener hinzufügen
    document.getElementById('red-div').addEventListener('click', () => hiddenDiv("red-div"));
    document.getElementById('green-div').addEventListener('click', () => hiddenDiv("green-div"));
}

document.addEventListener('DOMContentLoaded', init);

function listDivs() {
    let content = document.getElementById('content-div');
    content.innerHTML = `
    <div id="red-div" class="red"></div>
    <div id="green-div" class="green"></div>

    <p id="red" class="hidden" onclick="clickButton('red')">RED</p>
    <p id="green" class="hidden" onclick="clickButton('green')">GREEN</p>
    `;
}


function hiddenDiv(id) {
    if (id == "red-div") {
        document.getElementById('red-div').classList.add('hidden');
        document.getElementById('red').classList.remove('hidden');
    }

    if (id == "green-div") {
        document.getElementById('green-div').classList.add('hidden');
        document.getElementById('green').classList.remove('hidden');
    }

}

function clickButton(id) {
    document.getElementById(id + '-div').classList.remove('hidden');
    document.getElementById(id).classList.add('hidden');

}