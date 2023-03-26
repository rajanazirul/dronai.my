<template>
  <div>
    <Nav />
    <PageHeader title="Blog" />
    <Blog />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Blog from "../components/Blog";
  import Footer from "../components/Footer";
  import CallToAction from "../components/CallToAction";
  export default {
    components: {CallToAction, Footer, Blog, PageHeader, Nav},
    head(){
      return {
        title: "Lums | Blog"
      }
    }
  }
</script>
