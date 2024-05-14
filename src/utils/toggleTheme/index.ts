/**
 * Toggle theme between light and dark
 * save theme to local storage
 *
 * @exmaple
 *
 * <button onClick={toggleTheme}>Toggle theme</button>
 */
export const toggleTheme = () => {
    if (!window && typeof window !== "undefined") {
        return;
    }

    const body = document.body;

    // check current theme state and change it to the opposite
    let theme = body.dataset.theme === "dark" ? "light" : "dark";

    body.dataset.theme = theme;

    // store theme in local storage to keep it after page reload
    window.localStorage.setItem("theme", theme);
};
