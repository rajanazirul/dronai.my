<template>
  <div>
    <Nav />
    <PageHeader title="Blog Details" />
    <BlogDetails />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import BlogDetails from "../components/BlogDetails";
  import Footer from "../components/Footer";
  import CallToAction from "../components/CallToAction";
  export default {
    components: {CallToAction, Footer, BlogDetails, PageHeader, Nav},
    head(){
      return {
        title: "Apiton | Blog Details"
      }
    }
  }
</script>
