let totalCalories = 0;

document.getElementById("addButton").addEventListener("click", function() {
    const productName = document.getElementById("productName").value;
    const productWeight = parseFloat(document.getElementById("productWeight").value);

    if (productName && productWeight) {
        // Здесь можно добавить логику для подсчета калорий на основе продукта
        const caloriesPer100g = 100; // Пример, замените на реальное значение
        const calories = (caloriesPer100g * productWeight) / 100;

        totalCalories += calories;

        document.getElementById("result").innerText = `Общие калории: ${totalCalories.toFixed(2)} ккал`;
        
        // Очистить поля ввода
        document.getElementById("productName").value = '';
        document.getElementById("productWeight").value = '';
    } else {
        alert("Пожалуйста, введите название продукта и вес.");
    }
});

document.getElementById("sleepButton").addEventListener("click", function() {
    const sleepStart = document.getElementById("sleepStart").value;
    const sleepEnd = document.getElementById("sleepEnd").value;

    if (sleepStart && sleepEnd) {
        const startTime = new Date(`1970-01-01T${sleepStart}:00`);
        const endTime = new Date(`1970-01-01T${sleepEnd}:00`);
        const sleepDuration = (endTime - startTime) / (1000 * 60 * 60); // в часах

        alert(`Вы спали ${sleepDuration} часов`);
        
        // Очистить поля ввода
        document.getElementById("sleepStart").value = '';
        document.getElementById("sleepEnd").value = '';
    } else {
        alert("Пожалуйста, укажите время сна.");
    }
});

document.getElementById("moodButton").addEventListener("click", function() {
    const moodInput = document.getElementById("moodInput").value;

    if (moodInput) {
        document.getElementById("moodResult").innerText = `Ваше настроение: ${moodInput}`;
        
        // Очистить поле ввода
        document.getElementById("moodInput").value = '';
    } else {
        alert("Пожалуйста, опишите свое настроение.");
    }
});
