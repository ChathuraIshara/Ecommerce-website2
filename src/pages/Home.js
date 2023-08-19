import Header from "../components/Header";

function Home({ temail, name, setName }) {
  return (
    <div clasName="container">
      <Header temail={temail} name={name} setName={setName}></Header>
      <h1 className="display-3 mb-5">Eseller World!</h1>

      <h2>**Explore Our Vast Selection**</h2>

      <p class="lead container mb-3">
        Indulge in a shopping spree like no other as you navigate through our
        user-friendly website. Discover a world of choices at your fingertips –
        from clothing and accessories that reflect the latest styles, to
        state-of-the-art gadgets that enhance your daily life. Our carefully
        curated collection caters to all ages, tastes, and preferences, making
        shopping with us a delightful experience for everyone.
      </p>

      <h2>**Uncompromising Quality**</h2>

      <p class="lead container mb-3">
        Quality is our top priority, and we go to great lengths to source
        products from trusted manufacturers and brands. Each item undergoes
        rigorous quality checks to ensure that it meets our high standards. With
        [Your Ecommerce Website Name], you can shop with confidence, knowing
        that the products you receive are built to last.
      </p>

      <h2>**Seamless Shopping Process**</h2>

      <p class="lead container mb-3">
        Experience hassle-free shopping with our streamlined checkout process
        and secure payment options. Our website is designed to provide you with
        a seamless journey from product discovery to order placement. With
        multiple payment gateways and encrypted transactions, your personal and
        financial information remains safe and confidential.
      </p>

      <h2>**Exceptional Customer Service**</h2>

      <p class="lead container mb-3">
        {" "}
        Eseller , customer satisfaction is paramount. Our dedicated customer
        support team is available to assist you with any inquiries, concerns, or
        assistance you may need. From tracking your order to resolving issues,
        we're here to ensure your shopping experience is smooth and enjoyable.
      </p>

      <h2>**Deals and Discounts**</h2>

      <p class="lead container mb-3">
        Enjoy incredible savings with our regular deals, seasonal promotions,
        and exclusive discounts. Subscribe to our newsletter and follow us on
        social media to stay updated on the latest offers. We believe that
        high-quality products shouldn't come with a hefty price tag, and our
        commitment to affordability is evident in every corner of our website.
      </p>

      <h2>**Fast and Reliable Shipping**</h2>

      <p class="lead container mb-3">
        Experience prompt and reliable delivery services that bring your
        purchases directly to your doorstep. We understand the excitement of
        receiving your order promptly, and we work with trusted logistics
        partners to ensure that your items reach you in perfect condition and on
        time.
      </p>

      <h2>**Join Our Community**</h2>

      <p class="lead container mb-3">
        Become a part of the Eseller community and enjoy a shopping experience
        like no other. Explore, shop, and discover endless possibilities – all
        in one place. Thank you for choosing us as your preferred online
        shopping destination. Start your journey now and elevate your shopping
        experience with [Your Ecommerce Website Name]!
      </p>
    </div>
  );
}

export default Home;
