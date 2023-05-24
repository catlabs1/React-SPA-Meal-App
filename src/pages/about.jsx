import Logo from "../serving-dish.png"

function About() {
    return (
        <div className="about-center">
            <img src={Logo} alt="Logo" />
            <h1>React SPA Meals App</h1>
            <h3>Ver 1.1</h3>
            <h6>With our app you can easily cook anything for breakfast, lunch, dinner.</h6>
        </div>
    );
}

export { About };