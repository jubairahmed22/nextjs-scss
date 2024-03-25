import Counter from "@/components/Counter/Counter";
import variables from "../styles/variables.module.scss";
import "./sass/_home.scss";
import "./sass/mixin.scss"

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
      <div className="grid grid-cols-3 gap-5 place-items-center">
          <div className="w-56 h-56 bg-orange-300 first"></div>
          <div className="w-56 h-56 bg-orange-300 Sec"></div>
          <div className="w-56 h-56 bg-orange-300 Thi"></div>
      </div>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;
