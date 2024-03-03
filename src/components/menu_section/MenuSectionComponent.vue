<template>
  <div class="menu-section">
    <div
      class="d-flex align-items-center justify-content-end text-secondary mb-3 mb-lg-4 hover-light-5 cursor-pointer"
      @click="$emit('showFrame', 'projects')"
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
      class="d-flex align-items-center justify-content-end text-secondary mb-3 mb-lg-4 hover-light-5 cursor-pointer"
      @click="$emit('showFrame', 'about')"
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
      class="d-flex align-items-center justify-content-end text-secondary mb-3 mb-lg-4 hover-light-5 cursor-pointer"
      @click="$emit('showFrame', 'resume')"
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

    <a
      href="https://github.com/hsnmsri"
      target="_blank"
      class="d-flex text-decoration-none align-items-center justify-content-end text-secondary mb-3 mb-lg-4 hover-light-5 cursor-pointer"
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
    </a>
  </div>
</template>

<style>
@media screen {
  .menu-section {
    animation: MenuSectionAnim 800ms ease-out;
  }
  @keyframes MenuSectionAnim {
    from {
      transform: translate(0, 30px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
}
</style>
