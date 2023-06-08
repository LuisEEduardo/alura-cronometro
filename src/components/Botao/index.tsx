import React from "react";
import style from "./Botao.module.scss";

interface Props {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Botao({ type, onClick, texto }: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {texto}
    </button>
  );
}

// class Botao1 extends React.Component<{
//   texto: string;
//   type?: "button" | "submit" | "reset" | undefined;
//   onClick?: () => void;
// }> {
//   render() {
//     const { texto, type = "button", onClick } = this.props;
//     return (
//       <button type={type} className={style.botao} onClick={onClick}>
//         {texto}
//       </button>
//     );
//   }
// }

export default Botao;
