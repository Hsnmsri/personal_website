<template>
  <div>
    <div
      class=" border-secondary border-opacity-25 py-1 mb-3"
      v-for="item in projects"
      :key="item.title"
    >
      <!-- item -->
      <div>
        <!-- header -->
        <div class="d-flex align-items-center mb-2">
          <div class="bg-secondary bg-opacity-25 rounded-pill d-flex align-items-center justify-content-center" style="height: 45px; aspect-ratio: 1;">
            <div>
              <i class="bi bi-braces"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="h5 mb-0 ms-3 me-2">{{ item.title }}</span>
            <a
              v-if="item.github_link != null"
              :href="item.github_link"
              target="_blank"
              class="btn text-secondary hover-light-5 rounded-0"
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              v-if="item.project_link != null"
              :href="item.project_link"
              target="_blank"
              class="btn text-secondary hover-light-5 rounded-0"
            >
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
        <!-- main -->
        <div>
          <p class="text-light text-opacity-75">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Project Title",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt, et nam excepturi tempore molestiae quam, necessitatibus ab doloribus repudiandae deserunt nobis culpa perferendis aliquam, vero eos. Deserunt, voluptas assumenda.",
          github_link: "https://www.github.com/username",
          project_link: "https://mrmansouri.ir",
        },
        {
          title: "Project Title",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt, et nam excepturi tempore molestiae quam, necessitatibus ab doloribus repudiandae deserunt nobis culpa perferendis aliquam, vero eos. Deserunt, voluptas assumenda.",
          github_link: "https://www.github.com/username",
          project_link: "https://mrmansouri.ir",
        },
        {
          title: "Project Title",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt, et nam excepturi tempore molestiae quam, necessitatibus ab doloribus repudiandae deserunt nobis culpa perferendis aliquam, vero eos. Deserunt, voluptas assumenda.",
          github_link: "https://www.github.com/username",
          project_link: "https://mrmansouri.ir",
        },
        {
          title: "Project Title",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt, et nam excepturi tempore molestiae quam, necessitatibus ab doloribus repudiandae deserunt nobis culpa perferendis aliquam, vero eos. Deserunt, voluptas assumenda.",
          github_link: "https://www.github.com/username",
          project_link: "https://mrmansouri.ir",
        },
      ],
    };
  },
};
</script>
