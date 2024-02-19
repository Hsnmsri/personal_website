<template>
  <div class="bg-dark w-100 h-100">
    <main
      class="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center w-100 h-100"
    >
      <!-- detail section -->
      <section class="d-flex flex-column">
        <!-- menu items -->
        <div
          class="d-flex align-items-center justify-content-end text-secondary mb-3 mb-lg-4"
        >
          <div class="px-3">
            <span>Projects</span>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <div
              class="border rounded border-secondary d-flex align-items-center justify-content-center"
              style="width: 40px; aspect-ratio: 1"
            >
              <i class="bi bi-window-stack"></i>
            </div>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-end text-secondary mb-3 mb-lg-4"
        >
          <div class="px-3">
            <span>About Me</span>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <div
              class="border rounded border-secondary d-flex align-items-center justify-content-center"
              style="width: 40px; aspect-ratio: 1"
            >
              <i class="bi bi-info-lg"></i>
            </div>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-end text-secondary mb-3 mb-lg-4"
        >
          <div class="px-3">
            <span>My Resume</span>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <div
              class="border rounded border-secondary d-flex align-items-center justify-content-center"
              style="width: 40px; aspect-ratio: 1"
            >
              <i class="bi bi-person-down"></i>
            </div>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-end text-secondary mb-3 mb-lg-4"
        >
          <div class="px-3">
            <span>Github</span>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <div
              class="border rounded border-secondary d-flex align-items-center justify-content-center"
              style="width: 40px; aspect-ratio: 1"
            >
              <i class="bi bi-github"></i>
            </div>
          </div>
        </div>
      </section>
      <!-- seprator -->
      <div class="bg-light my-5 my-lg-0 mx-lg-5" id="seprator"></div>
      <!-- main section -->
      <section>
        <!-- title -->
        <div>
          <div class="text-light">
            <span>Hey, I'm</span>
            <h1 class="h3">Hossein Mansouri</h1>
            <small class="opacity-75">a full stack developer.</small>
          </div>
        </div>
      </section>
    </main>

    <footer
      class="w-100 mb-4 d-flex justify-content-center position-fixed bottom-0 start-0"
    >
      <div class="px-3">
        <div>
          <small class="text-secondary opacity-50">
            Copyright © 2024 <span class="text-primary">Hossein Mansouri</span>. All
            Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  </div>
</template>

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
