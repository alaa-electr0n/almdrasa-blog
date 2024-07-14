import { faker } from "@faker-js/faker";
import styles from "./FakeContent.module.css";

// Function to generate fake post content
const generateFakePost = () => {
  const paragraphs = [];
  for (let i = 0; i < 5; i++) {
    paragraphs.push({
      heading: faker.lorem.sentence({ min: 3, max: 5 }),
      paragraph: faker.lorem.words(faker.number.int({ min: 30, max: 50 })),
    });
  }
  return paragraphs;
};

// Generate the fake content once
const fakePostContent = generateFakePost();

function FakeSecondPart() {
  return (
    <div className={styles.contentContainer}>
      {fakePostContent.map((section, index) => (
        <section key={index}>
          <h3>{section.heading}</h3>
          <p className={styles.mainParagraph}>{section.paragraph}</p>
        </section>
      ))}
    </div>
  );
}

export default FakeSecondPart;
