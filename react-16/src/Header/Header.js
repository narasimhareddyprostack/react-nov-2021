import Footer from "../Footer/Footer";
let Header = () => {
  let emp_Name = "Rahul Gandhi";
  let emp_Sal = 45000;
  return (
    <div>
      <h5> Header Componet</h5>
      <hr />
      <Footer one={"one"} two={"Two"} name={emp_Name} sal={emp_Sal} />
    </div>
  );
};
export default Header;
