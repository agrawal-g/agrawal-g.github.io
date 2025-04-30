

function Home() {
  return (
    <div className="text-container">
        <div className="main-text">
      <h1>Welcome!</h1>
        <p>My name is Gunwati Agrawal, and I'm a <b>researcher </b>
            and <b>educator</b> in Chicago, IL, with an interest in complex
            systems. I graduated <i>magna cum laude</i> from Loyola University
            Chicago in 2024, majoring in Physics and Computer Science with a
            minor in Political Science. During university, I researched
            high-energy cosmic rays, studied particle physics and general
            relativity, and devised initiatives to support first-generation
            physics students. I've worked and volunteered for 10+ years as a
            tutor, and I've also interned at an investment advisory firm,
            conducting legal research and preparing legal documents.</p>
        <p>Most recently, I was a research assistant, co-leading an analysis of
            the energy-dependence of cosmic ray anisotropy with the IceCube
            Collaboration. We modeled the attenuation of low-energy events
            with time in order to devise a new energy selection process for the
            collaboration. After cleaning up our data, we visually represented
            our data with skymaps, and quantified anisotropies with Gaussian-like
            fits. In addition to collaborating and cooperating with several
            scientists across the collaboration, I trained and supervised five
            undergraduate research assistants. Our work was last presented at
            the APS April Meeting in 2024.</p>
        <p>I'm looking for opportunities to grow and develop my research and
            analytical skills in fields where technology has the potential to
            transform society, including AI/ML, fintech, intellectual property,
            and education.</p>
        <p>In my free time, I enjoy both team sports like soccer and basketball
            and more solitary pursuits like chess and photography. Currently,
            I'm reading <i>Careless People</i>, by Sarah Wynn-Williams.</p>

        {/*<p>I'm interested in transforming the relationship*/}
        {/*    between society and technology, primarily to increase*/}
        {/*    autonomy. Interested in the intersection of physics*/}
        {/*    with other fields, and what insights can be gleaned.*/}
        {/*    I'm working on incorporating AI into education.*/}
        {/*    Or materials science of coffee grinding and extraction.*/}
        {/*    Or modeling drapery of fabric for AI-aided garment*/}
        {/*    construction and tailoring. Or just edutech, fintech.</p>*/}
        {/*<p> Reading, researching. What I am learning? react, pytorch, ml/statistical learning*/}
        {/*    complex systems stuff from research statement? I'm reading tiny habits, twitter and tear gas, careless people.*/}
        {/*    I'm gardening, running, learning piano and chess. I'm studying for the insurance agent.</p>*/}
        {/*<p>Future</p>*/}
        {/*    <p>If that's present instead of future. Pursuing Grad School/Law.*/}
        {/*    </p>*/}
    </div>
        <div className="profile-pic">
            <img src="src/assets/profile.jpg"
                 alt="Me, on a road trip along Highway One." />
        </div>
    </div>
  );
}

export default Home;
