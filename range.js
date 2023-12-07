

progress = setInterval(() => 
{
    progressValue = slider.value;
    valueContainer.textContent = `${progressValue}%`
    progressBar.style.background = `conic-gradient(
        purple ${progressValue * 3.6}deg,
        #fff ${progressValue * 3.6}deg
    )`;
});

setZero.addEventListener("click", function () 
{
    slider.value = 0;
});
setMax.addEventListener("click", function () 
{
    slider.value = 100;
});