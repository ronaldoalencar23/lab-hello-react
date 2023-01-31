import Ironhacklogo from "../../images/ironhack-logo-xs.png";
import Menuimage from "../../images/menu-top-xs.png";
import Style from "./style.module.css";

export function Card() {
  const altText = "Logo da Ironhack";

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <img className={Style.logo} src={Ironhacklogo} alt={altText} />
        <img className={Style.menu} src={Menuimage} alt="Imagem do menu" />
      </div>
      <div className={Style.text}>
        <h1> Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
      </div>
    </div>
  );
}
