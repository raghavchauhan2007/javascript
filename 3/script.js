const clock = document.getElementById('clock')

setInterval(() => {
    const date = new Date()
    clock.innerText = date.toLocaleTimeString()
}, 1000);