function calculateLove() {
    let yourName = document.getElementById ('yourName').value.trim();
    let partnerName=document.getElementById('partnerName').value.trim();
  
    if (yourName==='' || partnerName==='') {
        alert('pls enter both names');
        return;
    }

    let lovePercentage = generateRandomPercentage();
    let result = document.getElementById('result');
    result.innerHTML =
    `<h3> Result for ${yourName} AND ${partnerName}:</h3>
    <p> Your Love percentage is ${lovePercentage}% </p>`;

    }

    function generateRandomPercentage() {
        return Math.floor(Math.random() * 101);
    }