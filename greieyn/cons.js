const cons = document.createElement("div");
cons.style.width = "100%";
cons.style.height = "300px";
cons.style.border = "4px solid black";
cons.style.backgroundColor = "#666666";
cons.style.color = "lightgreen";
cons.textContent = "------ console ------";
document.body.append(cons);

function mooie (c) {
    const t = document.createElement("p");
    t.textContent = c;
    cons.append(t);
}