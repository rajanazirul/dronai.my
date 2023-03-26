<template>
  <section class="blog-one" id="blog">
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-title__title black-text-color">Check out our latest <br> news & articles</h2><!-- /.block-title__title -->
      </div><!-- /.block-title -->
      <div class="row high-gutters">
        <div class="col-lg-6">
          <div class="blog-one__single">
            <div class="blog-one__image-outer">
              <div class="blog-one__image">
                <img src="/images/blog-1-1.jpg" alt="Awesome Image" />
                <nuxt-link to="/blog-details" class="blog-one__link">Read More</nuxt-link>
              </div><!-- /.blog-one__image -->
            </div><!-- /.blog-one__image-outer -->
            <div class="blog-one__content">
              <div class="blog-one__meta">
                <nuxt-link to="/blog-details" class="blog-one__meta-link">By admin</nuxt-link>
                <span class="blog-one__meta-sep">.</span>
                <nuxt-link to="/blog-details" class="blog-one__meta-link">4 Aug</nuxt-link>
                <span class="blog-one__meta-sep">.</span>
                <nuxt-link to="/blog-details" class="blog-one__meta-link">2 comments</nuxt-link>
              </div><!-- /.blog-one__meta -->
              <h3 class="blog-one__title"><nuxt-link to="/blog-details">Checkout pre launch mobile app <br> marketing pitfalls</nuxt-link></h3><!-- /.blog-one__title -->
            </div><!-- /.blog-one__content -->
          </div><!-- /.blog-one__single -->
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-6">
          <div class="blog-one__single">
            <div class="blog-one__image-outer">
              <div class="blog-one__image">
                <img src="/images/blog-1-2.jpg" alt="Awesome Image" />
                <nuxt-link to="/blog-details" class="blog-one__link">Read More</nuxt-link>
              </div><!-- /.blog-one__image -->
            </div><!-- /.blog-one__image-outer -->
            <div class="blog-one__content">
              <div class="blog-one__meta">
                <nuxt-link to="/blog-details" class="blog-one__meta-link">By admin</nuxt-link>
                <span class="blog-one__meta-sep">.</span>
                <nuxt-link to="/blog-details" class="blog-one__meta-link">4 Aug</nuxt-link>
                <span class="blog-one__meta-sep">.</span>
                <nuxt-link to="/blog-details" class="blog-one__meta-link">2 comments</nuxt-link>
              </div><!-- /.blog-one__meta -->
              <h3 class="blog-one__title"><nuxt-link to="/blog-details">Checkout pre launch mobile app <br> marketing pitfalls</nuxt-link></h3><!-- /.blog-one__title -->
            </div><!-- /.blog-one__content -->
          </div><!-- /.blog-one__single -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
        name: "BlogArea"
    }
</script>

<style scoped>

</style>
