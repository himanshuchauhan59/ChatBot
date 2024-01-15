/* <div class="mb-3">
    <label class="form-label">User</label>
    <div class="responseBox">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ad repellendus ut cum
            iste. Quae eveniet, beatae perferendis similique voluptatem praesentium, suscipit quos
            molestiae quis tempora numquam. Excepturi, quos necessitatibus.</span>
    </div>
</div> */


const createElement = (type, data) => {
    switch (type) {
        case "user":
            createForUser(data)
            break;
        case "bot":
            createForBot(data);
            break;
    }
};

const createForUser = (data) => {
    const communicationList = document.getElementById("communicationList");
    const div = document.createElement("div");
    div.className = "mb-3 d-flex justify-content-end flex-column align-items-start";
    // users sending messages.
    const labelUser = document.createElement("label");
    labelUser.className = "form-label";

    const divResponseBox = document.createElement("div");
    divResponseBox.className = "responseBox";

    const span = document.createElement("span");
    // let questionBox = document.querySelector("#questionBox");
    span.innerHTML = data;
    labelUser.innerHTML = "User";
    divResponseBox.appendChild(span);
    div.appendChild(labelUser);
    div.appendChild(divResponseBox);
    // questionBox.insertAdjacentElement("afterend", div);
    communicationList.appendChild(div);
}

const createForBot = (data) => {
    const communicationList = document.getElementById("communicationList");
    const div = document.createElement("div");
    div.className = "mb-3 d-flex justify-content-end flex-column align-items-end";
    // users sending messages.
    const labelUser = document.createElement("label");
    labelUser.className = "form-label ";

    const divResponseBox = document.createElement("div");
    divResponseBox.className = "botChatColor";

    const span = document.createElement("span");
    span.className = ""
    span.innerHTML = data;
    labelUser.innerHTML = "ChatBot";
    divResponseBox.appendChild(span);
    div.appendChild(labelUser);
    div.appendChild(divResponseBox);
    communicationList.append(div);
}

export { createElement };