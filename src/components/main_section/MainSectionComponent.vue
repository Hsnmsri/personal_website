<template>
  <div>
    <div class="text-light main-section">
      <span>Hey, I'm</span>
      <h1 class="h3">Hossein Mansouri</h1>
      <small class="opacity-75">a full stack developer.</small>
    </div>
  </div>
</template>

<style>
@media screen {
  .main-section{
    animation: MainSectionAnim 800ms ease-out;
  }
  @keyframes MainSectionAnim {
    from{
      transform: translate(0,-30px);
    }
    to{
      transform: translate(0,0px);
    }
  }
}
</style>