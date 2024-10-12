import { v4 as uuid } from "uuid";
import imageJohn from "./images/image-john.jpg";
import imageTanya from "./images/image-tanya.jpg";
import imageIlham from "./images/image-ilham.jpg";
const fakeDatabase = {
  users: [
    {
      id: uuid(),
      image: imageJohn,
      fullname: "John Tarkpor",
      occupation: "Junior Front-end Developer",
      testimonial:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    },
    {
      id: uuid(),
      image: imageTanya,
      fullname: "Tanya Sinclair",
      occupation: "UX Engineer",
      testimonial:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so exited about the future.",
    },
  ],
};

export { fakeDatabase };
