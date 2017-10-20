var chatStr = "";

/* Replace stuff */

function replaceEmoji() {
    chatStr = chatStr.replace(":)", "<img class='emoji' src='img/smiling.png' />");
    chatStr = chatStr.replace(":(", "<img class='emoji' src='img/frowning.png' />");
    chatStr = chatStr.replace(":D", "<img class='emoji' src='img/grinning.png' />");
    chatStr = chatStr.replace(":P", "<img class='emoji' src='img/tongue.png' />");
    chatStr = chatStr.replace(":'(", "<img class='emoji' src='img/crying.png' />");
    chatStr = chatStr.replace(":O", "<img class='emoji' src='img/surprise.png' />");
    chatStr = chatStr.replace(":>", "<img class='emoji' src='img/smirking.png' />");
    chatStr = chatStr.replace(":3", "<img class='emoji' src='img/confusing.png' />");
    chatStr = chatStr.replace("<3", "<img class='emoji' src='img/loving.png' />");
    chatStr = chatStr.replace(":|", "<img class='emoji' src='img/meh.png' />");
}

function replaceSwear() {
    chatStr = chatStr.replace("boogie", "******");
}

/* p1Chat */

function changeChatStr() {
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = ""
}

/* p2Chat */

function changeChatStr2() {
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
}

/* chatDisplay */

function createChat(chatNum) {
    var ndiv = document.createElement("div");

    //if(chatStr == ":)") chatStr = "<img class='emoji' src='img/smiling.png' />";
    //else if(chatStr == ":(") chatStr = "<img class='emoji' src='img/frowning.png' />";

    replaceEmoji();
    replaceSwear();

    ndiv.innerHTML = chatStr;
    ndiv.className = "chatBubble";
    if(chatNum == 1) ndiv.className += " chatBubble1";
    else if(chatNum == 2) ndiv.className += " chatBubble2";
    document.getElementById("chatDisplay").appendChild(ndiv);
}

/* Interactions */

document.getElementById("p1Input").addEventListener("keyup", function(ev) {
    if(ev.keyCode == 13) {
        changeChatStr();
        createChat(1);
    }
})

document.getElementById("p2Input").addEventListener("keyup", function(ev) {
    if(ev.keyCode == 13) {
        changeChatStr2();
        createChat(2);
    }
})