const Body = () => {
  return (
    <main className="body">
      <div className="container">
        <div className="body__wrapper">
          <div className="body__slogan">
            <h1>
              Зарабатывайте больше <span>с WELBEX</span>
            </h1>
            <p>Развиваем и контролируем продажи за вас</p>
            <img className="body__red-light" src="img/red-light.png" alt="" />
          </div>
          <div className="body__advice">
            <h3 className="body__title">
              Вместе с <span>бесплатной </span>
              <span>консультацией </span>
              мы дарим:
            </h3>
            <div className="body__layout">
              <div className="body__widgets">
                <h3>Виджеты</h3>
                <p>30 готовых решений</p>
              </div>
              <div className="body__widgets">
                <h3>Dashboard</h3>
                <p>с показателями вашего бизнеса</p>
              </div>
              <div className="body__widgets">
                <h3>Skype Аудит</h3>
                <p>отдела продаж и CRM системы</p>
              </div>
              <div className="body__widgets">
                <h3>35 дней</h3>
                <p>использования CRM</p>
              </div>
            </div>
            <div className="body__layout-mobile">
              <div>
                <img src="img/body-mobile-line.svg" alt="" className="body__line" />
                <span>Skype аудит</span>
              </div>
              <div>
                <img src="img/body-mobile-line.svg" alt="" className="body__line" />
                <span>30 виджетов</span>
              </div>
              <div>
                <img src="img/body-mobile-line.svg" alt="" className="body__line" />
                <span>Dashboard</span>
              </div>
              <div>
                <img src="img/body-mobile-line.svg" alt="" className="body__line" />
                <span>Месяц аmoCRM</span>
              </div>
            </div>
            <button className="body__button">Получить консультацию</button>
            <img className="body__red-ball" src="img/red-ball-2.png" alt="red ball" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
