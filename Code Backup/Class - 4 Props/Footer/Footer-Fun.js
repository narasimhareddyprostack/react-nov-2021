let Footer = (props) => {
  return (
    <div>
      <h1> Footer Componet</h1>
      <alfaz>{JSON.stringify(props)}</alfaz>
      <h2>Employee Name:{props.name}</h2>
      <h3>Employee Salary:{props.sal}</h3>
    </div>
  );
};
export default Footer;
