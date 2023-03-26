<template>
  <div>
  <footer class="site-footer">
    <div class="site-footer__upper">
      <div class="container">
        <div class="site-footer__1-col-wrap">
          <div class="footer-widget footer-widget__about">
            <a href="/" class="footer-widget__logo"><img width="66" src="/images/logo-dark.png" alt="Awesome Image" /></a>
          </div><!-- /.footer-widget -->
          <div class="footer-widget">
            <h3 class="footer-widget__title">Explore</h3><!-- /.footer-widget__title -->
            <ul class="footer-widget__links">
              <li class="footer-widget__links-item">
                <a href="#home" class="footer-widget__links-link">About</a>
              </li><!-- /.footer-widget__links-item -->
              <li class="footer-widget__links-item">
                <a href="#testimonials" class="footer-widget__links-link">Our Team</a>
              </li><!-- /.footer-widget__links-item -->
              <li class="footer-widget__links-item">
                <a href="#services" class="footer-widget__links-link">Features</a>
              </li><!-- /.footer-widget__links-item -->
              <li class="footer-widget__links-item">
                <a href="#works" class="footer-widget__links-link">How It Works</a>
              </li><!-- /.footer-widget__links-item -->
            </ul><!-- /.footer-widget__links -->
          </div><!-- /.footer-widget -->
         
         
          
        </div><!-- /.site-footer__5-col-wrap -->
      </div><!-- /.container -->
    </div><!-- /.site-footer__upper -->
    <div class="site-footer__lower">
      <div class="container">
        <div class="inner-container">
          <p class="site-footer__copytext">© copyright 2022 by <a href="#">Dronai.my</a></p><!-- /.site-footer__copytext -->
          <div class="site-footer__social">
            <a href="#"><i class="fa fa-facebook-square"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-pinterest-p"></i></a>
          </div><!-- /.site-footer__social -->
        </div><!-- /.inner-container -->
      </div><!-- /.container -->
    </div><!-- /.site-footer__lower -->
  </footer>

    <a @click="scrollTop" class="scroll-to-target scroll-to-top" :style="`display: ${scrollBtn ? 'inline' : 'none'}`" href="#"><i class="fa fa-angle-up"></i></a>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data(){
      return {
        scrollBtn: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods: {

      handleScroll () {

        if (window.scrollY > 70) {
          this.scrollBtn = true
        }
        else if (window.scrollY < 70) {
          this.scrollBtn = false
        }
      },

      scrollTop () {
        window.scrollTo(0, 0);
      }


    }
  }
</script>

<style scoped>

</style>
