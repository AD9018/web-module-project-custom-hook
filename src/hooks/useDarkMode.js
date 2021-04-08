import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValues) => {
  const [darkMode, setDarkMode] = useLocalStorage("key", initialValues);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
