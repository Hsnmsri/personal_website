<template>
  <div class="bg-dark w-100 h-100">
    <main
      class="w-100 h-100"
    >
      <div class="d-none flex-column-reverse flex-lg-row align-items-center justify-content-center w-100 h-100">
        <!-- menu section -->
        <section class="d-flex flex-column text-light border-light">
          <menu-section-component />
        </section>

        <!-- seprator -->
        <div class="bg-light my-5 my-lg-0 mx-lg-5" id="seprator"></div>

        <!-- main section -->
        <section>
          <main-section-component />
        </section>
      </div>

      <!-- frames -->
      <div class="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center w-100 h-100">
        <frame-component frameTitle="asldkfjasdf" :isHidden="false" @closeFrame="closeFrame()">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel minima alias asperiores doloremque perspiciatis ex fuga tempore eligendi suscipit nostrum magni eius mollitia molestias, impedit officiis cum quam id.
          </p>
        </frame-component>
      </div>

    </main>

    <footer
      class="w-100 mb-4 d-flex justify-content-center position-fixed bottom-0 start-0"
    >
      <div class="px-3">
        <copyright-component />
      </div>
    </footer>
  </div>
</template>

<script>
import CopyrightComponent from "../components/copyright/CopyrightComponent.vue";
import MenuSectionComponent from "../components/menu_section/MenuSectionComponent.vue";
import MainSectionComponent from "../components/main_section/MainSectionComponent.vue";
import FrameComponent from "../components/frame/FrameComponent.vue"
export default {
  components: {
    CopyrightComponent,
    MenuSectionComponent,
    MainSectionComponent,
    FrameComponent
  },
    methods: {
        closeFrame(){
            alert("frame closed!");
        }
    },
};
</script>

<style>
@media screen {
  #seprator {
    height: 2px;
    width: 70%;
    background: radial-gradient(circle, #f58b00, #141414 70%);
  }
}
@media (min-width: 992px) {
  #seprator {
    width: 2px;
    height: 70%;
    background: radial-gradient(circle, #f58b00, #141414 70%);
  }
}
</style>
