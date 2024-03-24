import Counter from "@/components/Counter/Counter";
import variables from '../styles/variables.module.scss'

const HomePage = () => {


  return (
    <div style={{ background: variables.secondaryColor }}>
      <div style={{ color: variables.primaryColor }}>SCSS</div>
      <h1 >Welcome time to Next.js home page </h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;