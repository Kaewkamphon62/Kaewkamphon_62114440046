import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <Link to="/">&nbsp;My Health Person</Link>
      </div>
      <div className="header-links">
        <a href="inputdata.html">บันทึกข้อมูลส่วนบุคคล</a>
      </div>
    </header>
  );
}

export default Header;
