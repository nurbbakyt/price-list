document.addEventListener("DOMContentLoaded", function () {
    // Находим все товары
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.addEventListener("click", function () {
            let productId = this.getAttribute("data-id");
            let imageRow = document.getElementById(productId);

            // Если блок скрыт — показываем, если уже открыт — скрываем
            if (imageRow.style.display === "table-row") {
                imageRow.style.display = "none";
            } else {
                // Сначала скрываем все открытые блоки
                document.querySelectorAll(".image-row").forEach(row => {
                    row.style.display = "none";
                });
                // Показываем только нужный
                imageRow.style.display = "table-row";
            }
        });
    });
});
