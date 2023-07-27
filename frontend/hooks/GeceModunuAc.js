import LocalStorageKullan from "./localStorageKullan";

function GeceModunuAc(initialMode = false) {
  const [geceModu, setGeceModu] = LocalStorageKullan("geceModu", initialMode);

  const toggleMode = () => {
    // console.log ("geceModunuAc.js: toggleMode() çalıştı");
    setGeceModu(!geceModu);
  };
  return [geceModu, toggleMode];
}
export default GeceModunuAc;

// LocalStorageKullan = useLocalStorage aslında
