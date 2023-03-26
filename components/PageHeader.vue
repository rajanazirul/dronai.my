<template>

  <section class="inner-banner">
    <div class="container">
      <h2 class="inner-banner__title">{{ title }}</h2><!-- /.inner-banner__title -->
      <div class="breadcrumb__wrapper">
        <ul class="thm-breadcrumb">
          <li class="thm-breadcrumb__item">
            <a href="#" class="thm-breadcrumb__link"><nuxt-link to="/">Home</nuxt-link></a>
          </li><!-- /.thm-breadcrumb__item -->
          <li class="thm-breadcrumb__item current">
            <a href="#" class="thm-breadcrumb__link">{{ title }}</a>
          </li><!-- /.thm-breadcrumb__item -->
        </ul><!-- /.thm-breadcrumb -->
      </div><!-- /.breadcrumb__wrapper -->
    </div><!-- /.container -->
  </section><!-- /.inner-banner -->

</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      title: {
        type: String
      }
    }

  }
</script>

<style scoped>

</style>
