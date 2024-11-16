<template>
  <div class="about-container">
    <h1>О нас</h1>

    <div class="description-section">
      <p>
        Компания Фаренгейт была основана в 2017 году и с тех пор занимается оптовыми и розничными продажами инженерных
        систем отопления, водоснабжения и водоотведения. Мы начали свою работу в Московском регионе, а наш центральный
        офис расположен в городе Королёв Московской области. Основной склад и пункт выдачи заказов находятся на 43-км
        МКАД, так же для удобства наших клиентов в Королёве имеется еще один пункт выдачи и офис.<br><br>
        <b>Наши целевые группы клиентов:</b><br>
        Оптовые покупатели — торговые компании (ритейлеры), которые закупают товары для последующей продажи.<br><br>

        Монтажники и сантехники — постоянно растущая категория клиентов, благодаря привлекательным условиям работы и
        выгодным индивидуальным ценам.<br><br>

        Корпоративные клиенты — организации, которые активно делают покупки через наш интернет-магазин.<br><br>

        Частные лица — клиенты интернет-магазина, приобретающие оборудование для собственного использования.<br><br>

        <b>Сотрудничая с нами, вы получаете:</b><br>
        <ul class="list">
          <li>Широкий выбор товаров от ведущих поставщиков.</li>
          <li>Собственную доставку по Москве и области.</li>
          <li>Гибкий график работы склада, обеспечивающий быструю обработку заказов.</li>
          <li>Компетентного и надежного поставщика, что подтверждается плодотворной работой с 2017 года</li>
        </ul>
        <br>
        <b>Выбирая нашу компанию, вы обеспечиваете себе быстрое решение ваших задач.</b><br>
        Квалифицированные сотрудники — это одна из основных ценностей нашей компании. Они обладают глубокими знаниями в
        своих областях, что позволяет нам обеспечивать высокое качество услуг и продукции.<br><br>

        Профессионализм: все наши сотрудники регулярно проходят обучение, что помогает им быть в курсе последних
        тенденций и технологий в своей сфере.<br><br>

        Опыт: в команде работают специалисты с многолетним опытом, что позволяет эффективно решать различные задачи
        любой сложности.<br><br>

        Командная работа: мы стремимся создать атмосферу сотрудничества и взаимопомощи, что способствует развитию
        креативных идей и эффективному решению проблем.<br><br>

        Индивидуальный подход: наши сотрудники умеют находить подход к каждому клиенту, понимая его потребности и
        предоставляя персонализированные решения.<br><br>

        Ответственность: осознавая важность своей роли в компании, наши сотрудники подходят к своим обязанностям с
        полной ответственностью.<br>
      </p>
      <h2 class="headings">Наши достижения</h2>
      <div class="grid3">
        <img height="212" src="../assets/img/certificates/sert_1-m.jpg" width="300"/>
        <img height="212" src="../assets/img/certificates/sert_2-m.jpg" width="300"/>
        <img height="212" src="../assets/img/certificates/sert_3-m.jpg" width="300"/>
        <img height="212" src="../assets/img/certificates/sert_4-m.jpg" width="300"/>
        <img height="212" src="../assets/img/certificates/sert_5-m.jpg" width="300"/>
        <img height="212" src="../assets/img/certificates/sert_6_m.jpg" width="300"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.list {
  padding-left: 50px;
}

.about-container {
  padding: 0 50px 50px;
  margin: auto; /* Center the container */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.description-section {
  margin-bottom: 30px; /* Space between sections */
}

.team-section {
  margin-bottom: 30px; /* Space between sections */
}

.team-members {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Wrap to new line if necessary */
}

.team-member {
  text-align: center;
  margin: 10px;
  width: calc(33% - 20px); /* Three members per row, adjust as needed */
}

.team-member img {
  border-radius: 50%; /* Circle profile pictures */
  width: 150px; /* Fixed size */
  height: 150px; /* Fixed size */
}

.contact-section {
  text-align: center;
}
</style>