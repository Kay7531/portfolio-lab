const About = () => {
    return (
        <>
        <main>
        <h1>About</h1>
        <div className="personal">
        <p>I'm a software engineer passionate about learning new technologies. My adaptability, ability to empathize and communicate well in collaborative environments makes me an excellent addition to any team. Because of my public health background, I’m highly motivated to creating solutions-driven applications that have a positive impact on users’ quality of life.</p>
        </div>
        
        <div className="facts">
        <h2>Interesting Facts About Myself</h2>
        <ul>
            <li>I used to play the cello all through high school.</li>
            <li>Mother to a middle-aged orange Tabby. </li>
            <li>Helped deliver a few newborns as a volunteer at the Edna Adan Hospital.</li>
        </ul>
        </div>
       
        <div className="shows">
        <h2>Favorite Shows</h2>
        <ul>
            <li>Dark</li>
            <li>The Office</li>
            <li>Better Call Saul</li>
            <li>The Great British Bake-Off</li>
            <li>Fargo</li>
        </ul>
        </div>
        <img src="assets/about-pic.jpeg" alt="about-pic" />
        </main>


        </>
    );
}

export default About