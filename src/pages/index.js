import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Sovuq qish uchun zaruriy narsalar'}
        subtitle={'2021-yilgi kuz-qishni kashf eting'}
        ctaText={'Xarid qilish'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
           Bu {' '} misralari uchun Sidney mavzusining namoyishi
           <span className={styles.gold}>material dizayni. </span>
         </p>
        <p>
           <span className={styles.gold}>sunspel</span> and{' '}
          <span className={styles.gold}>scotch&soda brendi</span>
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Yangi turkum'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Yangi kelganlar'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Hashamatli trikotaj'}
            description={`Ushbu yumshoq qo'zichoq junidan tikilgan jumper Shotlandiyada Fife shahrida joylashgan dunyodagi eng qadimgi yigiruvchilardan birining ipidan foydalanilgan.`}
            textLink={'Xarid qiling'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`-50% chegirma \n Barcha kiyimlarga`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>AYOL</Link>
          <Link to={'/shop'}>ERKAK</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Sydney haqida'}
        quote={
          "'Biz ikki narsaga ishonamiz: har bir ishimizda sifatga intilish va bir-birimizga g'amxo'rlik qilish. Qolgan hamma narsa o'z-o'zidan g'amxo'rlik qilishi kerak.'"}
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Jurnal'} subtitle={'Hayot va uslub haqida eslatmalar'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'Biz Barqarormiz'}
          subtitle={
            'O'z yurtimizga g'amxo'rlik qilishdan tortib, xalqimizni qo'llab-quvvatlashgacha, atrofimizdagi dunyo uchun ko'proq narsa qilish uchun qanday qadamlar qo'yganimizni bilib oling.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Siz uchun'}
          subtitle={'Taqdim etish uchun @sidneyni belgilang.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
