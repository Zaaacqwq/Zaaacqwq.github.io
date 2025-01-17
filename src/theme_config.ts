import Person from "@comp/icons/person.astro";
import { SiteConfig } from "./site_config";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { library, icon } from "@fortawesome/fontawesome-svg-core";

// library.add(faStar);
// const starIcon = icon({ prefix: "fas", iconName: "star" });

// {
//   name: "博客",
//   customClass: "articles",
//   icon: "local:solid.pen-fancy",
//   children: [
//     {
//       name: "分类",
//       customClass: "categories",
//       icon: "local:solid.hard-drive",
//       link: "/categories",
//     },
//     {
//       name: "标签",
//       customClass: "tags",
//       icon: "local:solid.tags",
//       link: "/tags",
//     },
//   ],
// },
// {
//   name: "我的",
//   customClass: "mine",
//   icon: Person,
//   children: [
//     {
//       name: "友链",
//       customClass: "friends",
//       icon: "local:solid.link",
//       link: "./friends",
//     },
//   ],
// },

const today = new Date();

export const ThemeConfig: Configs = {
  site: {
    title: SiteConfig.title,
    favicon: "/favicon.png",
    logo: "/favicon.png",
    author: "Zac",
    localSearch: {
      comment: "你可以使用类似 unix 的格式：[扩展搜索](/blog/lkk0v40t/)",
      hits: ["[扩展搜索](/blog/lkk0v40t/)", "[HelloWorld](/blog/lkk0fjvf/)"],
    },
    backgroundBubbles: 20,
    themeColor: "#363636",
  },
  head: [``],
  body: [``],
  header: {
    menu: [
      {
        name: "主页",
        customClass: "home",
        link: "/",
        icon: "local:solid.house",
      },
      {
        name: "标签",
        customClass: "articles",
        icon: "local:solid.pen-fancy",
        link: "/tags",
      },
      {
        name: "友链",
        customClass: "friends",
        icon: "local:solid.link",
        link: "./friends",
      },
      {
        name: "关于",
        customClass: "about",
        link: "/about",
        icon: "local:solid.paper-plane",
      },
    ],
    buttons: [
      {
        icon: Person, //"local:solid.house",
        link: "/my",
        customClass: "",
      },
    ],
    functions: {
      headerLogo: "left",
      themeControl: true,
      pagePercent: true,
    },
  },
  aside: {
    authorInfo: {
      avatar: "/avatar.png",
      description: "一个前端开发者",
      socialMedias: [
        {
          link: "https://github.com/Zaaacqwq", // github link
          customClass: "github",
          icon: "local:brands.github",
          title: "github",
        },
        {
          link: "mailto:zacchenzy@gmail.com", // Email link 
          customClass: "mail",
          icon: "local:solid.envelope",
          title: "Email",
        },
        {
          link: "https://www.instagram.com/zaaacqwq/", // Instagram link
          customClass: "instagram",
          icon: "local:brands.instagram",
          title: "social-instagram",
        },
        {
          link: "https://www.linkedin.com/in/zaaac/", // LinkedIn link
          customClass: "linkedin",
          icon: "local:brands.linkedin",
          title: "social-linkedin",
        },
      ],
    },
    announcement: {
      headline: "看公告啦！",
      content:
        "新主题试验中~ 欢迎各位[找茬](https://github.com/zaaacqwq/ZacBlog/issues todo)~",
    },
    siteInfo: {
      busuanzi: false,
      totalWordCounts: true,
      totalPostCounts: true,
    },
    customCards: [
      {
        // icon: `<i class="fa-solid fa-star"></i>`,
        icon: "local:solid.star",
        title: "推荐文章",
        content: "这里是自定义内容部分<br>啥都可以放",
      },
    ],
  },
  footer: {
    text: "Design & Build with ❤ by [Zac](/about)",
    copyright: `&copy; 2023-${today.getFullYear()} By [Zac](/about)`,
    // 也可以使用 {{}} 包裹函数体，并返回替换值
    // You can also use {{}} to wrap the function body and return the replacement value.
    // copyright: `&copy; 2023-{{const today = new Date();return today.getFullYear();}} By [Zac](/about)`,
  },
  homePage: {
    heroShoot: "/background.png",
    heroTitle: "Zac's Blog",
    heroDescription: "A beautiful, customized, personal blog theme for Astro",
    paginationSize: 10,
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: ["Announcement", "SiteInfo"],
      direct: "right",
    },
  },
  postPage: {
    defaultCover: "/cover.jpg",
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: [],
    },
    relatedPosts: true,
  },
  tagsPage: {
    floating: true,
  },
  comments: {
    // type: "twikoo",
    // options: {
    //   envId: "",
    //   lang: "zh-CN",
    // },
    // type: "waline",
    // options: {
    //   serverURL: "",
    // },
    type: false,
    options: null,
  },
};
