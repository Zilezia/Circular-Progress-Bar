
function updateProgress() 
{
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        purple ${progressValue * 3.6}deg,
        #fff ${progressValue * 3.6}deg
    )`;
}

updateProgress(); // Initial update

setZero.addEventListener("click", function () {
    progressValue = 0;
    updateProgress();
});

setMax.addEventListener("click", function () {
    progressValue = progressEndValue;
    updateProgress();
});

submitButton.addEventListener("click", () =>
{

    if(input.value <= 100 && input.value >= 0)
    {
        progressValue = input.value; 

        console.log(progressValue)
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
            purple ${progressValue * 3.6}deg,
            #fff ${progressValue * 3.6}deg
        )`;
    }
    else
    {
        progressValue = 0;
    }
});