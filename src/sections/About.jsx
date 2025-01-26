import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";


// Bento Grid
const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(
            'akash@iakash.dev'
        );

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section id="about" className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-rows-3 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" /> 

                        <div>
                            <p className="grid-headtext">
                                Hi, I'm Akashdeep
                            </p>
                            <p className="grid-subtext">
                            With a strong background in WordPress development using Elementor, I specialize in creating dynamic, user-friendly, and visually engaging websites. My expertise extends to web development, SEO optimization, and video editing, allowing me to craft comprehensive digital solutions tailored to clients’ needs. Passionate about innovation, I am constantly exploring new technologies such as Three.js to develop immersive 3D web experiences. Whether it’s building functional business websites or enhancing online visibility, I am committed to delivering high-quality results that drive success.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in WordPress development with a focus on Elementor, creating responsive, visually appealing, and high-performing websites. Additionally, I have experience in 3D web development using Three.js, enabling me to craft immersive and interactive digital experiences. My skill set also includes SEO optimization and video editing, ensuring a comprehensive approach to enhancing online presence and engagement.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                // labelsData={[{
                                //     lat: 30.7333,
                                //     lng: 76.7794,
                                //     text: "I'm here!",
                                //     color: 'white',
                                //     size: 20
                                // }]}
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones
                            </p>
                            <p className="grid-subtext">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed magni deserunt dolorem maxime, reprehenderit recusandae dolores commodi delectus perspiciatis voluptatum.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                My passion for coding
                            </p>

                            <p className="grid-subtext">
                                I love solving problems and creating innovative solutions. Whether it's optimizing code for performance or implementing new features, I enjoy the process of problem-solving and the joy of creating something new.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                        src="assets/grid4.png"
                        alt="grid-4"
                        className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Akash@jsmastery.pro</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;