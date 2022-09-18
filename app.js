let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let q_value = document.querySelector(".q-value");
let select_size = document.querySelectorAll(".select-size");

plus.addEventListener('click', () => {
    let x = parseInt(q_value.innerHTML);
    x += 1;
    let y = x.toString();
    q_value.innerHTML = y;
});

minus.addEventListener("click", () => {
    let x = parseInt(q_value.innerHTML);
    if(x > 1){
        x -= 1;
        let y = x.toString();
        q_value.innerHTML = y;
    }
});

let remove_size_active_effect = () => {
    Array.from(select_size).forEach((e) => {
        // console.log(e.classList)
        e.classList.remove("active");
    });
}

// console.log(select_size);
Array.from(select_size).forEach((e) => {
    e.addEventListener('click', () => {
        remove_size_active_effect();
        e.classList.toggle("active");
    });
});

let select_color = document.querySelectorAll(".select-color");
let select_tick = document.querySelectorAll(".tick");

// console.log(select_color.chil);
let remove_tick = () => {
    Array.from(select_tick).forEach((e) => {
        e.style.display = "none";
    });
}


Array.from(select_color).forEach((e) => {
    e.addEventListener('click', () => {
        remove_tick();
        e.children[0].style.display = "block";
    });
});