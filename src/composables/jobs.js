import useLocalStorage from "./useLocalStorage";

export const jobs = useLocalStorage(
  [
    {
      id: "0",
      title: "Front-End Engineer (Vue)",
      type: "Full-Time",
      description:
        "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
      location: "Miami, FL",
      salary: "$70K - $80K",
      company: {
        name: "Veneer Solutions",
        description:
          "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
        contactEmail: "contact@loremipsum.com",
        contactPhone: "555-555-5555",
      },
    },
    {
      type: "Full-Time",
      title: "Vue.js Developer",
      description:
        "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
      salary: "$70K - $80K",
      location: "Brooklyn, NY",
      company: {
        name: "Dolor Cloud",
        description:
          "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
        contactEmail: "contact@dolorsitamet.com",
        contactPhone: "555-555-5555",
      },
      id: "1",
    },
    {
      id: "2",
      title: "Vue Front-End Developer",
      type: "Part-Time",
      description:
        "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
      location: "Pheonix, AZ",
      salary: "$60K - $70K",
      company: {
        name: "Alpha Elite",
        description:
          "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
        contactEmail: "contact@adipisicingelit.com",
        contactPhone: "555-555-5555",
      },
    },
    {
      id: "3",
      title: "Full Stack Vue Developer",
      type: "Full-Time",
      description:
        "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
      location: "Atlanta, GA",
      salary: "$90K - $100K",
      company: {
        name: "Browning Technologies",
        description:
          "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
        contactEmail: "contact@consecteturadipisicing.com",
        contactPhone: "555-555-5555",
      },
    },
  ],
  "jobslist"
);
