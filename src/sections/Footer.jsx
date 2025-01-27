import React from "react";

const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
    
            <div className="flex gap-3">
                <a href="https://github.com/ak45akash/" target="_blank">
                    <div className="social-icon">
                            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                    </div>
                </a>
                
                <a href="https://www.upwork.com/freelancers/akancha" target="_blank">
                    <div className="social-icon">
                        <img src="/assets/upwork.svg" alt="upwork" className="w-1/2 h-1/2" />
                    </div>
                </a>

                <a href="https://www.instagram.com/57akash/" target="_blank">
                    <div className="social-icon">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                    </div>
                </a>
            </div>

            <p className="text-white-500">© 2025 Akashdeep. All rights reserved </p>
        </footer>
    );
};

export default Footer;