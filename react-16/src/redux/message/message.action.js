//create Action types
const GM = "GM";
const GN = "GN";

let gmAction = () => {
  console.log("gmAction");
  return { type: GM }; //return actionable object
};
let gnAction = () => {
  return { type: GN };
};
export { gmAction, gnAction, GM, GN };

//what is action?
//action is function return actionable object.
