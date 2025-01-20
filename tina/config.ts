import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "user",
        label: "User",
        path: "content/user",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            name: "linkedin",
            label: "Linkedin",
            type: "string",
            required: true,
          },
          {
            name: "github",
            label: "Github",
            type: "string",
            required: true,
          },
          {
            name: "phoneNo",
            label: "Phone Number",
            type: "string",
            required: true,
          },
          {
            name: "profilePic",
            type: "image",
            label: "Profile Picture",
            required: true,
          },
          {
            name: "resumeLink",
            type: "string",
            label: "Resume Link",
            required: true,
          },
          {
            name: "experience",
            type: "string",
            label: "Experience",
            required: true,
          },
          {
            name: "totalProjects",
            type: "string",
            label: "Total Projects",
            required: true,
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
            name: "projectName",
            type: "string",
            label: "Project Name",
            required: true,
          },

          {
            name: "projectDescription",
            type: "string",
            label: "Project Description",
          },
          {
            name: "projectLink",
            label: "Project Link",
            type: "string",
          },
          {
            name: "projectImage",
            label: "Project Image",
            type: "image",
            required: true,
          },
        ],
      },
    ],
  },
});
