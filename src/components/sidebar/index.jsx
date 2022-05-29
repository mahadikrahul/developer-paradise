import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Validations">Validations</a>
        </li>
        <li>
          <a href="/Numbers">Numbers</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
