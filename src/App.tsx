import Header from '@/components/header';
import styles from './App.module.scss';
import IntroInfo from '@/components/intro-info';
import IntroCarousel from '@/components/intro-carousel';
import Separator from '@/components/separator';
import AdvantageInfo from '@/components/advantage-info';
import Card from '@/components/card';
import img1 from '@/assets/UI/cards/image.png';
import img2 from '@/assets/UI/cards/image_1.png';
import img3 from '@/assets/UI/cards/image_2.png';
import img4 from '@/assets/UI/cards/image_3.png';
import Fact from './components/fact';
import fact1 from '@/assets/UI/icons/security.svg';
import fact2 from '@/assets/UI/icons/people-professtonal.svg';
import fact3 from '@/assets/UI/icons/food-and-drinks.svg';
import fact4 from '@/assets/UI/icons/vehicles-car.svg';

const carouselImages = await import.meta.glob('@/assets/UI/carousel/*');

console.log('images', carouselImages);

const images = Object.keys(carouselImages).map((key, i) => (
  <img
    key={i}
    src={key}
    style={{ maxHeight: '100%' }}
    alt={`carousel_img_${i}`}
  />
));

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.page__content}>
        <main className={styles.main}>
          <section className={styles.intro}>
            <div className={styles['intro__info-container']}>
              <IntroInfo />
            </div>
            <div className={styles['intro__carousel-container']}>
              <IntroCarousel>{images}</IntroCarousel>
            </div>
          </section>
          <section className={styles.advantage}>
            <Separator label='ГЛАВНОЕ ПРЕИМУЩЕСТВО КОМПАНИИ' span='#1' />
            <AdvantageInfo />
          </section>
          <section className={styles.services}>
            <h1 className='headline-1'>Услуги автосервиса</h1>
            <div className={styles['services__cards-container']}>
              <Card title='Ремонт автомобиля' subtitle='01' imageSrc={img1} />
              <Card title='Плановое ТО' subtitle='02' imageSrc={img2} />
              <Card
                title='Диагностика и ремонт'
                subtitle='03'
                imageSrc={img3}
              />
              <Card title='Чип тюнинг' subtitle='04' imageSrc={img4} />
            </div>
          </section>
          <section className={styles.maintenance}>
            <div className={styles.maintenance__paragraph}>
              <h1 className='description'>
                Обратившись к нам, в автоцентр, вы окажетесь в надёжных руках
                специалистов послегарантийного ремонта и технического
                обслуживания автомобилей.
              </h1>
              <div>
                <p className='text-1'>
                  Чтобы автомобиль всегда оставался в отличной форме, необходимо
                  выполнять регулярное ТО по программе рекомендованной
                  производителем.
                </p>
                <p className='text-1'>
                  Подразделение нашей компании СЕРТИФИЦИРОВАННО - это позволяет
                  производить обслуживание вашего автомобиля С СОХРАНЕНИЕМ
                  ГАРАНТИИ.
                </p>
              </div>
            </div>
            <div className={styles.maintenance__facts}>
              <div className={styles['maintenance__facts-row']}>
                <Fact imageSrc={fact1}>
                  Гарантия работы <br /> 1 год
                </Fact>
                <Fact imageSrc={fact2}>
                  Квалифицированные <br /> сотрудники
                </Fact>
              </div>
              <div className={styles['maintenance__facts-row']}>
                <Fact imageSrc={fact3}>
                  Комфортные <br />
                  зоны ожидания
                </Fact>
                <Fact imageSrc={fact4}>
                  Современное <br />
                  оборудование
                </Fact>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
