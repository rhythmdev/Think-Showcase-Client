import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <div  className="my-5 container">
      <h3 className="text-center">Frequently Asked Question</h3>
      <Accordion defaultActiveKey="0" flush className="mt-5  ">
        <Accordion.Item
          eventKey="0"
          className="rounded p-2 text-white fw-semibold"
          style={{ backgroundColor: "#223C60" }}
        >
          <Accordion.Header>Who should take an Online Course?</Accordion.Header>
          <Accordion.Body>
            Students join our online courses for a variety of reasons and come
            from diverse backgrounds, professions, and age groups. With online
            courses, you can
            <li>Advance your skill-set or begin a career change.</li>
            <li>Take the next step in your formal education.</li>
            <li>
              Ease the transition before entering a full-time academic program.
            </li>
            <li>Enjoy learning a new topic.</li>
            Whatever the reason, our online courses are a flexible way of
            learning about the art world without disrupting your daily life.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="1"
          className="rounded p-2 text-white fw-semibold mt-3"
          style={{ backgroundColor: "#223C60" }}
        >
          <Accordion.Header>
            Are there prerequisites or language requirements?
          </Accordion.Header>
          <Accordion.Body>
            There are no prerequisites. Our courses are open to students of all
            backgrounds who are 12 years of age and older. All courses are
            conducted in English. Video lectures include English subtitles and
            the option to slow-down, pause, or replay lectures for better
            retention. Discussion boards are a critical component of each of our
            courses; therefore, we suggest students have a conversational
            knowledge of English when pursuing a Certificate of Completion.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="2"
          className="rounded p-2 text-white fw-semibold mt-3"
          style={{ backgroundColor: "#223C60" }}
        >
          <Accordion.Header>
            What should I do if I need to start the course late?
          </Accordion.Header>
          <Accordion.Body>
            It is recommended that you begin your course promptly. If you do
            need to start the course a few days late, contact your instructor as
            soon as possible after the course has opened to discuss your
            options. Registration closes on the Friday after the course begins.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="3"
          className="rounded p-2 text-white fw-semibold mt-3"
          style={{ backgroundColor: "#223C60" }}
        >
          <Accordion.Header>
            Do you provide financial assistance or payment plans?
          </Accordion.Header>
          <Accordion.Body>
            As noncredit courses, our online courses are not eligible for state
            or federal financial aid. Some students seek professional
            development support from their employer or from external
            scholarships. In the United States, fees paid for professional
            development are deductible from your personal income taxes to the
            extent permitted by current law. While we do not offer automatic
            payment plans at this time, please reach out to
            thinshowcase@online.edu to discuss payment alternatives, such as
            wire transfers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="4"
          className="rounded p-2 text-white fw-semibold mt-3"
          style={{ backgroundColor: "#223C60" }}
        >
          <Accordion.Header>Can I audit an Online Course?</Accordion.Header>
          <Accordion.Body>
            As a continuing education student, it is your decision how you
            participate in the course. Those who plan to audit the course and
            not receive a certificate of completion should send a message to the
            instructor at the start of the course so they understand your goals.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
