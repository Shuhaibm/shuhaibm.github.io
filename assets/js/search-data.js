// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-i-was-awarded-the-mitacs-accelerate-fellowship-for-master-s-and-phd-students-as-an-undergrad-really-excited-to-start-working-with-iclinic-systems-inc",
          title: 'I was awarded the Mitacs Accelerate Fellowship for Master’s and PhD Students as...',
          description: "",
          section: "News",},{id: "news-our-work-on-user-simulator-goal-alignment-has-been-accepted-to-tacl",
          title: 'Our work on user simulator goal alignment has been accepted to TACL!',
          description: "",
          section: "News",},{id: "news-came-full-circle-with-a-visit-to-the-ubc-nlp-group-where-my-research-journey-began-and-gave-a-talk-on-goal-alignment-for-llm-based-user-simulators",
          title: 'Came full circle with a visit to the UBC NLP Group (where my...',
          description: "",
          section: "News",},{id: "news-received-news-that-our-work-on-data-synthesis-has-been-accepted-as-an-oral-at-eacl-2026-️-see-you-in-morocco",
          title: 'Received news that our work on data synthesis has been accepted as an...',
          description: "",
          section: "News",},{id: "news-really-excited-to-release-the-preprint-for-our-work-on-improving-multi-session-collaboration-with-memory-check-it-out-here",
          title: 'Really excited to release the preprint for our work on improving multi-session collaboration...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%73%6D.%73%68%75%68%61%69%62@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nJE1T2cAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shuhaibm", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shuhaib-mehri-b8a125197", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ShuhaibMehri# your X handle", "_blank");
        },
      },];
