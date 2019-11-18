



let title = document.querySelector(".title").addEventListener("click", function (e) {

    function randomNum () {
        let num = Math.floor(Math.random() * (254 - 0) + 0);
        let num2 = Math.floor(Math.random() * (254 - 0) + 0);
        let num3 = Math.floor(Math.random() * (254 - 0) + 0);
        e.target.style.color = `rgba(${num}, ${num2}, ${num3})`;
    }

    randomNum();

});
