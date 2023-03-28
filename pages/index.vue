<template>
  <div>
    <Nav />
    <Banner />
    <Service />
    <CallToActionThree />
    <CallToActionTwo />
    <!-- <Pricing /> -->
    <FunFact />
    <Testimonial />
    <!-- <Brands /> -->
    <!-- <BlogArea /> -->
    <!-- <CallToAction /> -->
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import Banner from "../components/Banner";
  import Footer from "../components/Footer";
  import Service from "../components/Service";
  import CallToActionThree from "../components/CallToActionThree";
  import CallToActionTwo from "../components/CallToActionTwo";
  import Pricing from "../components/Pricing";
  import Testimonial from "../components/Testimonial";
  import Brands from "../components/Brands";
  import FunFact from "../components/FunFact";
  import BlogArea from "../components/BlogArea";
  import CallToAction from "../components/CallToAction";
  export default {
    components: {
      CallToAction,
      BlogArea,
      FunFact,
      Brands,
      Testimonial,
      Pricing,
      CallToActionTwo,
      CallToActionThree,
      Service,
      Footer,
      Banner,
      Nav

    }
  }
</script>
