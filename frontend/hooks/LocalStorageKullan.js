import React, { useEffect, useState } from "react";

function LocalStorageKullan(key, initialData) {
  // hem kendi state imde tutuyor
  const [data, setData] = useState(initialData);
  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      //  hem local storage a yazıyor
      const IsData = JSON.parse(localStorage.getItem(key));
      setData(IsData);
    }
  }, [data]);

  const writeToLocalStorage = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, writeToLocalStorage];
}
export default LocalStorageKullan;
