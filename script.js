const products = {
    "Яблоко": 52,
    "Банан": 89,
    "Куриная грудка": 165,
    "Говядина": 250,
    "Рис": 130,
    "Хлеб": 265,
    "Картофель": 77,
    "Молоко": 42,
    "Яйцо": 155
};

let totalCalories = 0;
let sleepData = [];
let moodData = [];

function addProduct() {
    const productName = document.getElementById("productName").value;
    const productWeight = parseFloat(document.getElementById("productWeight").value);
    
    if (products[productName]) {
        const calories = (products[productName] * productWeight) / 100;
        totalCalories += calories;
        document.getElementById("totalCalories").innerText = totalCalories.toFixed(2);
        
        // Очистка полей ввода
        document.getElementById("productName").value = '';
        document.getElementById("productWeight").value = '';
    } else {
        alert("Продукт не найден!");
    }
}

function recordSleep() {
    const start = new Date(document.getElementById("sleepStart").value);
    const end = new Date(document.getElementById("sleepEnd").value);
    
    if (end > start) {
        const hours = (end - start) / (1000 * 60 * 60);
        sleepData.push(hours);
        drawSleepChart();
        
        // Очистка полей ввода
        document.getElementById("sleepStart").value = '';
        document.getElementById("sleepEnd").value = '';
    } else {
        alert("Время окончания должно быть позже времени начала.");
    }
}

function drawSleepChart() {
    const ctx = document.getElementById('sleepChart').getContext('2d');
    
    const labels = sleepData.map((_, index) => `День ${index + 1}`);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Часы сна',
                data: sleepData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function recordMood(mood) {
    moodData.push(mood);
    
    const moodList = document.getElementById("moodList");
    const listItem = document.createElement("li");
    listItem.innerText = mood;
    moodList.appendChild(listItem);
}
