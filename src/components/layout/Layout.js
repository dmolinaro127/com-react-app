import style from "./Layout.module.css";
import MainNavagation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavagation></MainNavagation>
      <main className={style.main}>{props.children}</main>
    </div>
  );
}

export default Layout;