import { Helmet } from "react-helmet-async";

export default function Project() {
    const Data = [
        {
            src: "open-source-subt.png",
            url: "https://github.com/BhavyaMPatel/aws-project",
            title: "Subtitle Generator • Effortless subtitling for global audiences",
            about: "Subtitles are essential for reaching a global, diverse audience. Our advanced subtitle generator empowers you to break down language barriers and increase accessibility, ensuring your message resonates with viewers worldwide. Elevate your video content and unlock new opportunities for engagement with our cutting-edge captioning capabilities",
            technology: "AWS, S3, SQS, NodeJS, Docker, Kubernets"
        },
        {
            src: "nlp-project.png",
            url: "https://github.com/BhavyaMPatel/Video-Content-Based-Advertisement-Recommendation-using-NLP-Text-Classification-Technique",
            title: "Advertisement Recommendation • Captivate audience with compelling advertisement",
            about: "This project develops an intelligent system that recommends relevant advertisements to users based on video content analysis using natural language processing (NLP) and text classification techniques to create a personalized and targeted advertising experience.",
            technology: "NLP, ML, Data Processing"
        },
        {
            src: "rr.png",
            url: "https://github.com/BhavyaMPatel/RetailRevolution",
            title: "RetailRevolutioner • Insightful retail predictions",
            about: "RetailRevolutioner, aims to provide a solution to the problem of accurately predicting consumer behavior in the retail industry. Our web application will analyze past sales data from clients to provide accurate predictions of which items will be the most popular in the coming month.",
            technology: "React, ML, Docker, FastAPI, NPM, TailwindCSS"
        },
        {
            src: "ss.png",
            url: "https://github.com/BhavyaMPatel/SecureScanner",
            title: "SecureScanner • PII Masker",
            about: "The PII Masker is an application that allows users to mask personal identifiable information (PII) in their PDF documents. This enables users to protect sensitive data while still being able to use and share the files. The application provides a convenient way for users to secure their PDF documents by obscuring any PII before distributing or working with the files.",
            technology: "Python-FastAPI, NLP, Firebase, React, TailwindCSS"
        },
        {
            src: "npm.png",
            url: "https://github.com/BhavyaMPatel/npm-package-for-react-appwrite-ui-auth",
            title: "authbapp • npm package for appwrite authentication solution",
            about: "This project is focused on creating an NPM UI package for a React application. The package is built on top of the open-source Appwrite platform and provides UI buttons for authentication purposes. The UI package aims to simplify the integration of authentication features into the React app by offering pre-built UI components that leverage Appwrite's functionality.",
            technology: "Appwrite, NPM, React, TailwindCSS"
        },
        {
            src: "cs.png",
            url: "https://github.com/BhavyaMPatel/Your-Own-Cloud-Storage",
            title: "Your-Own-Gdrive • a webapplication for end to end cloud storage",
            about: "This cloud storage web application allows users to securely store their files in their own personal cloud storage space. With this app, users can access and utilize their files from anywhere, at any time, providing them with the convenience and flexibility to work on their documents, photos, or other data from multiple locations. The cloud-based nature of this application ensures that users' files are safe, backed up, and readily available whenever they need them.",
            technology: "React, TailwindCSS, MongoDB, Grid-Fs,EJS-Template"
        },
    ];

  return (
    <>
      <Helmet>
        <title>BhavyaMPatel | Project Page</title>
        <meta
          name="description"
          content="Effortless subtitling, targeted ad recommendations, retail insights, PII masking, appwrite auth, and cloud storage — innovative solutions for all needs."
        />
        <link rel="canonical" href="https://bhavyapatel.vercel.app/projects" />
      </Helmet>

      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl tracking-tight text-zinc-800 sm:text-5xl font-thin">
                  Fuel of Software Engineer's <br /> ~ Projects
                </h1>
                <p className="mt-6 text-base text-black font-thin">
                  These are my open-source projects which I created over a span of 3 years. Feel free to contribute! Happy developing 🧑‍💻.
                </p>
              </header>

              <div className="mt-16 sm:mt-20">
                <ul role="list" className="grid grid-cols-1 gap-x-20 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {Data.map(({ src, url, title, about, technology }) => (
                    <li key={src} className="group relative flex flex-col items-start">
                      <div className="relative z-10 flex h-28 w-full items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                        <img
                          alt={title}
                          src={src}
                          width="1696"
                          height="455"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-full object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="mt-6 text-base font-thin text-zinc-800">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <span className="relative z-10 font-thin">{title}</span>
                        </a>
                      </h2>
                      <p className="relative z-10 mt-2 text-sm font-thin text-black">{about}</p>
                      <p className="tag relative z-10 mt-2 text-sm text-black font-thin">{technology}</p>
                      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                          <path
                            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Z..."
                            fill="currentColor"
                          />
                        </svg>
                        <span className="">
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            github link
                          </a>
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
