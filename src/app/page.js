import Counter from "@/components/Counter/Counter";
import variables from "../styles/variables.module.scss";
import "./sass/_home.scss";

const HomePage = () => {
  return (
    <div>
      <div style={{ color: variables.primaryColor }}>SCSS</div>
      <h1 className="textMain">Welcome time to Next.js home page </h1>
      <nav>
        <ul>
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">SASS</a>
          </li>
        </ul>
      </nav>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;
