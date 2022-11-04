// ==UserScript==
// @name         Infra commands
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/Genially/mono-genially/pull/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
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
      command: commands.BAZINGA,
    },
    {
      text: "Dracarys",
      command: commands.DRACARYS,
    },
    {
      text: "Emilio patronus",
      command: commands.EMILIO_PATRONUS,
    },
    {
      text: "Ed reparo",
      command: commands.ED_REPARO,
    },
    {
      text: "Lumos",
      command: commands.LUMOS,
    },
  ];

  const createButton = (buttonText, callback) => {
    const button = document.createElement("button");
    button.classList = "btn btn-danger";
    button.type = "button";
    button.style.marginTop = "10px";
    button.style.marginRight = "10px";
    button.innerText = buttonText;
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
    newButtonsContainer.style.display = "flex";

    if (buttonsContainer) {
      buttonsContainer.appendChild(newButtonsContainer);

      buttons.forEach(({ text, command }) => {
        newButtonsContainer.appendChild(
          createButton(text, () => launchCommand(command))
        );
      });
    }
  });
})();
