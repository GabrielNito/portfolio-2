import { Projects } from "./Projects/index";

const Projects_ = () => {
  return (
    <Projects.Root>
      <Projects.Card>
        <Projects.CardImage img="https://i.pinimg.com/564x/ce/8e/87/ce8e87315daaa4d69c0bdce1f931c104.jpg" />
        <Projects.CardIcon icon={<i className="fa-solid fa-envelope"></i>} />
        <h1>Test 1</h1>
      </Projects.Card>
      <Projects.Card>
        <Projects.CardImage img="https://i.pinimg.com/564x/0e/3f/3a/0e3f3a173108531f339a6fa4131d77bd.jpg" />
        <h1>Test 2</h1>
      </Projects.Card>
      <Projects.Card>
        <Projects.CardImage img="https://i.pinimg.com/736x/37/c3/59/37c35917d9af7f55bbbac7dec1cc7a7a.jpg" />
        <h1>Test 3</h1>
      </Projects.Card>
      <Projects.Card>
        <Projects.CardImage img="https://i.pinimg.com/564x/27/54/62/2754622b8f996a773e0b20e41cbda8a5.jpg" />
        <h1>Test 4</h1>
      </Projects.Card>
    </Projects.Root>
  );
};

export default Projects_;
