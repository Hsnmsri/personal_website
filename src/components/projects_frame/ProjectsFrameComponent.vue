<template>
  <div>
    <div
      class="border-secondary border-opacity-25 py-1 mb-1"
      v-for="item in projects"
      :key="item.title"
    >
      <!-- item -->
      <div>
        <!-- header -->
        <div class="d-flex align-items-center mb-2">
          <div
            class="bg-secondary bg-opacity-25 rounded-pill d-flex align-items-center justify-content-center"
            style="height: 40px; aspect-ratio: 1"
          >
            <div>
              <i class="bi bi-braces"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="h6 mb-0 ms-3 me-2">{{ item.title }}</span>
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
          title: "OJS Export submission file names",
          description:"Creating a JSON file containing all the names and details of the files used in OJS for the purpose of manipulation and performing other operations.",
          github_link: "https://github.com/Hsnmsri/ojs_export_submission_filename_tool",
        },
        {
          title: "OJS Export submission keywords",
          description:"To extract all the keywords of a journal using the list of submission IDs.",
          github_link: "https://github.com/Hsnmsri/ojs_export_submission_keywords",
        },
        {
          title: "Text to speech",
          description:"Offline Voice-to-Text Conversion with Default System or Browser Sounds Written in Angular Framework",
          github_link: "https://github.com/Hsnmsri/text_to_speech",
        },
        {
          title: "Task Manager",
          description:"Backend for the task manager web app.",
          github_link: "https://github.com/Hsnmsri/taskmanager_backend",
          project_link: "https://goalistico.mrmansouri.ir",
        },
        {
          title: "Pixel Package",
          description:"Elevate your web's visuals! Pixel: PHP toolkit for effortless image resizing, compression, and quality optimization. Boost site speed and user experience with this lightweight solution.",
          github_link: "https://github.com/Hsnmsri/pixel_php",
        },
        {
          title: "Web Terminal",
          description:"Terminal Emulator in a Browser Environment.",
          github_link: "https://github.com/Hsnmsri/web_terminal",
        },
        {
          title: "OJS Database tool",
          description:"CLI tools for debugging, troubleshooting, and performing operations on OJS databases.",
          github_link: "https://github.com/Hsnmsri/ojs-database-tool",
        },
        {
          title: "TCP Port tool",
          description:"Tools needed for working with TCP ports.",
          github_link: "https://github.com/Hsnmsri/tcp_port_tool",
        },
        {
          title: "Password Manager",
          description:"Password Management and Personal Account Information Storage Application",
          github_link: "https://github.com/Hsnmsri/MyPass",
        },
        {
          title: "Web Spider",
          description:"Web crawler for crawling web pages and performing operations on the output pages.",
          github_link: "https://github.com/Hsnmsri/web_spider",
        },
        {
          title: "XML to JSON Convertor",
          description:"Convert XML File to JSON Using Node.js",
          github_link: "https://github.com/Hsnmsri/xml_to_json",
        },
        {
          title: "Database Viewer",
          description:"MySQL database browser and lister, for displaying and browsing heavy and large databases.",
          github_link: "https://github.com/Hsnmsri/database_viewer",
        },
        {
          title: "Database Z",
          description:"A PHP class for performing Create, Read, Update, and Delete operations on MySQL database using mysqli.",
          github_link: "https://github.com/Hsnmsri/database_z",
        },
        {
          title: "CLI Password Generator",
          description:"Software for Generating Strong and Random Passwords with Custom String Length in a Terminal Environment",
          github_link: "https://github.com/Hsnmsri/PasswordGenerator",
        },
        {
          title: "Web Units Convertor",
          description:"Web Convertor is desktop app for convert pixel unit to rem ,em ,pt and %.",
          github_link: "https://github.com/Hsnmsri/WebConvertor"
        },
        // {
        //   title: "Project Title",
        //   description:"",
        //   github_link: "https://www.github.com/username",
        //   project_link: "https://mrmansouri.ir",
        // },
      ],
    };
  },
};
</script>
