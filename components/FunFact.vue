<template>
  <section class="funfact-one" v-observe-visibility="onVisibilityChange" id="report">
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-title__title black-text-color">Reporting tools</h2><!-- /.block-title__title -->
      </div><!-- /.block-title -->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="funfact-one__single-outer">
            <div class="funfact-one__single">
              <span class="funfact-one__dot-1"></span>
              <span class="funfact-one__dot-2"></span>
              <span class="funfact-one__dot-3"></span>
              <h3 class="funfact-one__title counter">Elegant</h3>
              <p class="funfact-one__tag-line">Dashboard</p><!-- /.funfact-one__tag-line -->
            </div><!-- /.funfact-one__single -->
          </div><!-- /.funfact-one__single-outer -->
        </div><!-- /.col-lg-3 -->
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="funfact-one__single-outer">
            <div class="funfact-one__single">
              <span class="funfact-one__dot-1"></span>
              <span class="funfact-one__dot-2"></span>
              <span class="funfact-one__dot-3"></span>
              <h3 class="funfact-one__title counter">Control</h3>
              <p class="funfact-one__tag-line">Authorization</p><!-- /.funfact-one__tag-line -->
            </div><!-- /.funfact-one__single -->
          </div><!-- /.funfact-one__single-outer -->
        </div><!-- /.col-lg-3 -->
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="funfact-one__single-outer">
            <div class="funfact-one__single">
              <span class="funfact-one__dot-1"></span>
              <span class="funfact-one__dot-2"></span>
              <span class="funfact-one__dot-3"></span>
              <h3 class="funfact-one__title counter">Secure</h3><!-- /.funfact-one__title -->
              <p class="funfact-one__tag-line">Database</p><!-- /.funfact-one__tag-line -->
            </div><!-- /.funfact-one__single -->
          </div><!-- /.funfact-one__single-outer -->
        </div><!-- /.col-lg-3 -->
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="funfact-one__single-outer">
            <div class="funfact-one__single">
              <span class="funfact-one__dot-1"></span>
              <span class="funfact-one__dot-2"></span>
              <span class="funfact-one__dot-3"></span>
              <h3 class="funfact-one__title counter">Real-time</h3><!-- /.funfact-one__title -->
              <p class="funfact-one__tag-line">Notification</p><!-- /.funfact-one__tag-line -->
            </div><!-- /.funfact-one__single -->
          </div><!-- /.funfact-one__single-outer -->
        </div><!-- /.col-lg-3 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

  export default {
    name: "FunFact",
    components: { countTo },
    directives: {
      ObserveVisibility
    },
    data() {
      return{
        startCounter: false
      }
    },
    methods: {
      onVisibilityChange (isVisible) {
        if (isVisible){
          this.startCounter = true;
        }

      },
    },
  }
</script>

<style scoped>

</style>
