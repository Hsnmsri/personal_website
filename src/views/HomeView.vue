<template>
  <div class="bg-dark w-100 h-100">
    <main class="w-100 h-100">
      <div
        class="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center w-100 h-100"
        :class="frameComponent.isHidden ? 'd-flex' : 'd-none'"
      >
        <!-- menu section -->
        <section class="d-flex flex-column text-light border-light">
          <menu-section-component @showFrame="showFrame" />
        </section>

        <!-- seprator -->
        <div class="bg-light my-5 my-lg-0 mx-lg-5" id="seprator"></div>

        <!-- main section -->
        <section>
          <main-section-component />
        </section>
      </div>

      <!-- frames -->
      <div
        class="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center w-100 h-100"
        :class="frameComponent.isHidden ? 'd-none' : 'd-flex'"
      >
        <frame-component
          :frameTitle="frameComponent.title"
          :isHidden="frameComponent.isHidden"
          @closeFrame="closeFrame()"
        >
          <projects-frame-component v-if="frameComponent.component == 'projects'" />
          <about-frame-component v-if="frameComponent.component == 'about'" />
          <resume-frame-component v-if="frameComponent.component == 'resume'" />
        </frame-component>
      </div>
    </main>

    <footer
      class="w-100 mb-4 d-flex justify-content-center position-fixed bottom-0 start-0"
      v-if="frameComponent.isHidden"
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
import FrameComponent from "../components/frame/FrameComponent.vue";
import ProjectsFrameComponent from "../components/projects_frame/ProjectsFrameComponent.vue";
import AboutFrameComponent from "../components/about_frame/AboutFrameComponent.vue";
import ResumeFrameComponent from "../components/resume_frame/ResumeFrameComponent.vue";

export default {
  components: {
    CopyrightComponent,
    MenuSectionComponent,
    MainSectionComponent,
    FrameComponent,
    ProjectsFrameComponent,
    AboutFrameComponent,
    ResumeFrameComponent,
  },
  data() {
    return {
      frameComponent: {
        isHidden: true,
        title: "FRAME_TITLE",
        component: null,
        components: {
          projects: {
            isHidden: true,
            title: "Projects",
          },
          about: {
            isHidden: true,
            title: "About Me",
          },
          resume: {
            isHidden: true,
            title: "My Resume",
          },
        },
      },
    };
  },
  methods: {
    closeFrame() {
      this.frameComponent.isHidden = true;
    },
    showFrame(componentKey) {
      this.frameComponent.isHidden = false;
      this.frameComponent.title = this.frameComponent.components[componentKey].title;
      this.frameComponent.component = componentKey;
    },
  },
};
</script>

<style>
@media screen {
  #seprator {
    height: 2px;
    width: 70%;
    background: radial-gradient(circle, #f58b00, #141414 70%);
    animation: SepratorSMAnim 800ms;
  }
  @keyframes SepratorSMAnim {
    from {
      transform: scale(0.3);
    }
    to {
      transform: scale(1);
    }
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
