import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="project-cards-container">
      {/*<ProjectCard*/}
      {/*  title="Incorporating AI into Education, Case Study: Chess"*/}
      {/*  description=""*/}
      {/*  link="https://linktoproject1.com"*/}
      {/*  imageUrl="https://via.placeholder.com/300"*/}
      {/*/>*/}
      <ProjectCard
        title="Studying the Energy-Dependence of Cosmic Ray Anisotropy Using IceTop"
        description={`
From Aug. 2022 through Oct. 2024, I co-led an analysis as part of the
international IceCube Collaboration, under the guidance of my advisor,
Dr. Rasha Abbasi. We conducted data analysis on 1.2e9 cosmic ray events
collected by the IceTop detector at the South Pole between 2011 and 2021,
in order to quantify the degree and location of large-scale cosmic ray
anisotropies (asymmetries in arrival directions) across four distinct
energy bands.

We used Python, ROOT, C++, and Bash to process
experimental and simulation data, model the effect of snow
accumulation atop the detector on estimating energy, visually represent
the data in 2D SkyMaps and 1D projections of relative intensity and
significance in equatorial coordinates, fit a gaussian-like function to
the data to quantify the parameters of anisotropy, and estimate
systematic error through different time methods. I cooperated with
several physicists in the Collaboration, and trained several
undergraduate research assistants on the theory and technical
background of the project and delegated tasks, supervising their
progress. 
 
### Recent Presentations and Posters:

_G. Agrawal*, S. Lehrman, R. Abbasi, P. Desiati, F. McNally, J.C. Diaz-Velez, G. Bratrud, and J. Summers, ”Cosmic
Ray Anisotropy Using Ten Years of Data Collected With IceTop,” 2024 APS April Meeting, April 2024. 
[Abstract](https://meetings.aps.org/Meeting/APR24/Session/C14.5)._

_G. Agrawal*, S. Lehrman*, R. Abbasi, P. Desiati, F. McNally, J.C. Diaz-Velez, G. Bratrud, and J. Summers, ”Cosmic
Ray Anisotropy Using Ten Years of Data Collected With IceTop,” Loyola Undergraduate Engagement and Research
Symposium, April 2024. [Abstract](https://ecommons.luc.edu/ures/2024URESarchive/2024URESarchive/6/)._

_G. Agrawal*, S. Lehrman, G. Bratrud, J. Summers, R. Abbasi, P. Desiati, F. McNally, and J.C. Diaz-Velez, ”Cos-
mic Ray Anisotropy With Ten Years of Data Collected With IceTop,” American Physical Society: Conference for
Undergraduate Women in Physics at UMich-Ann Arbor, Jan 2024._
         `}
        // link="https://meetings.aps.org/Meeting/APR24/Session/C14.5"
        imageUrl="src/assets/APS_APRIL_24.JPG"
      />
      <ProjectCard
        title="Plotting the Trajectory of Test Particles Around Rotating Black Holes"
        description={`
From Oct. 2022 through May 2024, I and a few of my classmates pursued an independent study into
special and general relativity, under the tutelage of Dr. Robert McNees. We
derived the results describing phenomena such as the twin paradox, gravitational
lensing, the precession of mercury, gravitational redshift, the ergosphere, and
the shadow of a black hole. We summarized our findings in a write-up every four
months, targeted towards an undergraduate learner.
        
The video to the left displays an animated slider plot created in Jupyter Notebook
that models the trajectory of an inbound null test particle around a rotating black hole,
where the mass and rotation of the black hole, as well as the momentum and energy of the
test particle can be modified.

Our write-up for the Fall 2023 semester, on the Schwarzschild metric was uploaded to a digital
portfolio, linked below.
        `}
        link="https://luc.digication.com/gunwati-agrawal/home"
        videoUrl="/blackhole.mp4"
      />
    </div>
  );
};

export default Projects;
