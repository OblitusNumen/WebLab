<template>
  <footer class="footer">
    <p class="footer">
      &copy; 2024 Фаренгейт. Все права защищены.
      <a class="privacy-policy" href="#" @click="openPrivacyPolicy">
        Политика конфиденциальности
      </a>
    </p>
  </footer>
</template>

<script setup>
const openPrivacyPolicy = () => {
  // Open the privacy policy in a new browser window
  // window.open('privacy-policy.pdf', '_blank', 'width=800,height=600');
  let newWindow = window.open('@components/PrivacyPolicy.vue', '_blank', 'width=800,height=600');
  // Dynamically inject the required scripts and Vue app to the new window
  newWindow.document.write(`
  <!DOCTYPE html>
    <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Политика конфиденциальности</title>
    <link rel="stylesheet" href="../assets/privacy-policy.css">
    <style>
      /* Ensure body and html take full height */
      html, body {
        height: 100%;
        margin: 0;
      }

      /* Make the body scrollable if content overflows */
      body {
        overflow-y: auto; /* Enables vertical scrolling */
        padding: 20px; /* Add some padding for better aesthetics */
      }

      /* Optional: Style the button */
      button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <div class="markdown">
      <hr>
      <h2>Политика конфиденциальности</h2>
      <p><strong>Дата вступления в силу: 01.11.2024</strong></p>
      <p>Интернет-магазин сантехники "Фаренгейт" (далее – "Магазин") уважает вашу конфиденциальность и обязуется защищать
        персональные данные, предоставляемые пользователями сайта. Настоящая Политика конфиденциальности описывает, как мы
        собираем, используем и обрабатываем вашу информацию.</p>
      <h3>1. <strong>Сбор персональных данных</strong></h3>
      <p>Мы можем собирать следующие данные:</p>
      <ul>
        <li><strong>Информация, предоставленная вами:</strong>
          <ul>
            <li>Имя, фамилия;</li>
            <li>Контактный телефон;</li>
            <li>Адрес электронной почты;</li>
            <li>Почтовый адрес для доставки.</li>
          </ul>
        </li>
        <li><strong>Автоматически собираемая информация:</strong>
          <ul>
            <li>IP-адрес, тип браузера, операционная система;</li>
            <li>История посещений страниц и действия на сайте.</li>
          </ul>
        </li>
      </ul>
      <h3>2. <strong>Использование персональных данных</strong></h3>
      <p>Ваши данные используются для:</p>
      <ul>
        <li>Обработки и выполнения заказов;</li>
        <li>Организации доставки;</li>
        <li>Ответов на запросы пользователей;</li>
        <li>Информационных рассылок (только с вашего согласия);</li>
        <li>Улучшения работы сайта и персонализации сервиса.</li>
      </ul>
      <h3>3. <strong>Передача данных третьим лицам</strong></h3>
      <p>Мы передаем данные третьим лицам только в следующих случаях:</p>
      <ul>
        <li>Для обработки платежей (платежные системы);</li>
        <li>Для доставки заказов (курьерские службы);</li>
        <li>В случаях, предусмотренных законом (например, по запросу правоохранительных органов).</li>
      </ul>
      <h3>4. <strong>Хранение данных</strong></h3>
      <p>Мы храним ваши персональные данные не дольше, чем это необходимо для выполнения целей, указанных в настоящей
        Политике, или в соответствии с требованиями законодательства.</p>
      <h3>5. <strong>Права пользователя</strong></h3>
      <p>Вы имеете право:</p>
      <ul>
        <li>Запрашивать доступ к вашим данным;</li>
        <li>Требовать их изменения или удаления;</li>
        <li>Отзываться от согласия на обработку данных;</li>
        <li>Обращаться с жалобами в надзорные органы.</li>
      </ul>
      <h3>6. <strong>Защита данных</strong></h3>
      <p>Мы принимаем все разумные меры для защиты ваших данных от утраты, несанкционированного доступа, изменения или
        раскрытия, включая использование шифрования и защитных технологий.</p>
      <h3>7. <strong>Файлы cookie</strong></h3>
      <p>Наш сайт использует файлы cookie для улучшения пользовательского опыта. Вы можете настроить параметры использования cookie в вашем браузере.</p>
      <h3>8. <strong>Изменения политики конфиденциальности</strong></h3>
      <p>Мы оставляем за собой право изменять настоящую Политику конфиденциальности. Изменения вступают в силу с момента публикации новой версии на сайте.</p>
      <h3>9. <strong>Контакты</strong></h3>
      <p>Если у вас есть вопросы или запросы, связанные с обработкой ваших данных, свяжитесь с нами:</p>
      <ul>
        <li><strong>Телефон:</strong> +7 495 260-18-27</li>
        <li><strong>Электронная почта:</strong> info@farengeit-online.ru</li>
        <li><strong>Адрес:</strong> МО, г. Королев, ул. Полевая 43/12</li>
      </ul>
      <p><strong>Спасибо, что выбираете "Фаренгейт"!</strong></p>
      <hr>
    </div>
    <a class="privacy-policy" href="../assets/privacy-policy.pdf" target="_blank" download="Политика_конфиденциальности.pdf">
        <button>Скачать файл</button>
    </a>
  </body>
</html>
  `);
};
</script>

<style scoped>
.footer {
  z-index: 1000; /* Make sure the footer is on top of other elements */
  border-top: 2px solid #bbbbbb;
  position: fixed; /* Fix the footer at the bottom */
  bottom: 0; /* Align to the bottom of the viewport */
  left: 0; /* Align to the left edge */
  right: 0; /* Align to the right edge */
  display: flex;
  width: 100%;
  background-color: #e4e4e4;
  padding: 4px; /* Example padding */
  justify-content: center; /* Center content horizontally */
}

.privacy-policy {
  padding-left: 5px;
  color: #5d5d5d;
}
</style>