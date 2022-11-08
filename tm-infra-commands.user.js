// ==UserScript==
// @name         Infra commands
// @namespace    Genially scripts
// @version      0.1
// @description  try to take over the world!
// @author       Miguel Á. Gavilán Merino
// @match        https://github.com/Genially/mono-genially/pull/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @downloadURL  https://gist.githubusercontent.com/Miangame/8fd5833c1d431d3ea9d0bb6d49f18191/raw/e3cc2a55b7b9aafd461c6c1e034cb6feaac7d5f8/tm-infra-commands.user.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...

  const commands = {
    BAZINGA: "bazinga",
    DRACARYS: "dracarys",
    EMILIO_PATRONUS: "emiliopatronus",
    ED_REPARO: "ed reparo",
    LUMOS: "lumos",
  };

  const buttons = [
    {
      text: "Bazinga",
      description: "Recreates the ED",
      command: commands.BAZINGA,
    },
    {
      text: "Dracarys",
      description: "Destroys the ED",
      command: commands.DRACARYS,
    },
    {
      text: "Emilio patronus",
      description: "Activates the emails in the ED",
      command: commands.EMILIO_PATRONUS,
    },
    {
      text: "Ed reparo",
      description: "Restarts the ED without compiling it",
      command: commands.ED_REPARO,
    },
    {
      text: "Lumos",
      description: "Activates the ED",
      command: commands.LUMOS,
    },
  ];

  const createButton = (buttonText, description, callback) => {
    const button = document.createElement("button");
    button.classList = "btn btn-danger";
    button.type = "button";
    button.style.marginTop = "10px";
    button.style.marginRight = "10px";
    button.innerText = buttonText;
    button.title = description;
    button.onclick = callback;

    return button;
  };

  const launchCommand = (command) => {
    const textArea = document.querySelector("#new_comment_field");
    textArea.focus();
    textArea.value = command;

    const submitButton = document.querySelectorAll(
      "#partial-new-comment-form-actions button"
    );

    if (submitButton.length > 1) {
      submitButton[1].disabled = false;
      submitButton[1].click();
    }
  };

  waitForKeyElements(".merge-message", () => {
    const buttonsContainer = document.getElementById(
      "partial-new-comment-form-actions"
    );

    const newButtonsContainer = document.createElement("div");
    newButtonsContainer.id = "infra-commands";
    newButtonsContainer.style.display = "flex";

    const existsNewButtonsContainer = document.getElementById("infra-commands");

    if (buttonsContainer && !existsNewButtonsContainer) {
      buttonsContainer.appendChild(newButtonsContainer);

      buttons.forEach(({ text, description, command }) => {
        newButtonsContainer.appendChild(
          createButton(text, description, () => launchCommand(command))
        );
      });
    }
  });
})();
