DIV = document.querySelector("#div");

function ris(a) 
{
mytop = Math.random() * 700;
left = Math.random() * 700;
a.style.left = left + "px";
a.style.top = mytop + "px";
}

function del(b) 
{
if (b.target.className == "Kva"
|| b.target.className == "T"
|| b.target.className == "K")
b.target.style.display = "none";
}

function Kva() 
{
number = document.querySelector("#number").value;

for (let i = 0; i < number; i++) 
{
kva = document.createElement("div");
kva.classList.add("Kva");
width = Math.random() * 100;
kva.style.width = width + "px";
kva.style.height = width + "px";
ris(kva);
kva.addEventListener("dblclick", del);
kva.addEventListener('click', (b) => { b.target.style.backgroundColor = 'rgb(0, 0, 0)' })
DIV.appendChild(kva);
}}

function T() 
{
number = document.querySelector("#number").value;

for (let i = 0; i < number; i++) 
{
t = document.createElement("div");
t.classList.add("T");
width = Math.random() * 100;
t.style.borderLeftWidth = width + "px";
t.style.borderRightWidth = width + "px";
t.style.borderBottomWidth = width + "px";
ris(t);
t.addEventListener("dblclick", del);
t.addEventListener('click', (b) => { b.target.style.borderBottomColor = 'rgb(0, 0, 0)' })
DIV.appendChild(t);
}}

function K() 
{
number = document.querySelector("#number").value;

for (let i = 0; i < number; i++) 
{
k = document.createElement("div");
k.classList.add("K");
width = Math.random() * 100;
k.style.width = width + "px";
k.style.height = width + "px";
k.style.borderRadius = width / 2 + "px";
ris(k);
k.addEventListener("dblclick", del);
k.addEventListener('click', (b) => { b.target.style.backgroundColor = 'rgb(0, 0, 0)' })
DIV.appendChild(k);
}}
