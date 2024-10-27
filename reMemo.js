const add = document.getElementById("add");
      const retrieve = document.getElementById("retrieve");
      const remove = document.getElementById("remove");
      const removeAll = document.getElementById("removeAll");
      const div = document.getElementById("div");
      const ul = document.getElementById("ul");
      const li = document.createElement("li");

      li.innerText = localStorage.getItem("store");
      ul.append(li);

      const time = (duration) => {
        setTimeout(() => {
          div.innerText = "";
        }, duration);
      };

      add.addEventListener("click", () => {
        const label = document.getElementById("label");
        const info = document.getElementById("info");
        const li = document.createElement("li");
        localStorage.setItem(label.value, info.value);
        if (label.value && info.value) {
          div.innerText = `Added ${label.value} = ${info.value}`;
          li.innerText = `${label.value} = ${info.value}`;
          ul.append(li);
          localStorage.setItem("store", ul.innerText);
        } else if (!label.value && !info.value) {
          div.innerText = `Please fill the label and the info`;
        } else if (!label.value) {
          div.innerText = `please fill the label`;
        } else if (!info.value) {
          div.innerText = `please fill the info`;
        }
        time(2000);
      });

      retrieve.addEventListener("click", () => {
        const label = document.getElementById("label");
        const value = localStorage.getItem(label.value);
        if (label.value) {
          if (value) {
            div.innerText = `Retrieved: "${value}"`;
          } else {
            div.innerText = `No match found for: "${label.value}"`;
            time(1000);
          }
        } else {
          div.innerText = "Please insert the label";
          time(1000);
        }
      });

      remove.addEventListener("click", () => {
        const label = document.getElementById("label");
        const value = localStorage.getItem(label.value);
        if (label.value) {
          if (!value) {
            div.innerText = `no match found for: "${label.value}"`;
          } else {
            div.innerHTML = `removed: "${label.value}"`;
            localStorage.removeItem(label.value);
            location.reload();
          }
        } else {
          div.innerText = "please insert the label";
        }
        time(1000);
      });

      removeAll.addEventListener("click", () => {
        localStorage.clear("store");
        ul.innerText = ''
        div.innerText = 'Removed all lists'
        time(2000)
      });

      const label = document.getElementById("label");
      label.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          retrieve.click();
        }
      });

      const info = document.getElementById("info");
      info.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          add.click();
        }
      });
