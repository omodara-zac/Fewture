import "./about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function About() {
    return (
        <>
        <Navbar />
        <main>
            <div className="firstpart">
                <div>
                    <img src="./images/mobile/hero1.jpeg" alt="About Us" />
                </div>

                <div>
                    <h1>ABOUT US</h1>
                    <p>
                        FEWTURE is a streetwear brand based in Lagos, Nigeria.
                        FEWTURE embodies individuality and self-expression.
                        We believe in breaking free from societal norms and
                        embracing your unique style. Our collections are
                        inspired by street culture, music, and art, creating
                        a fusion of fashion that resonates with those who
                        dare to be different.
                    </p>
                </div>
            </div>

            <div className="secondpart">
                <div>
                    <img src="./images/mobile/hero3.jpeg" alt="FEWTURE collection" />
                </div>

                <div>
                    <p>
                        At FEWTURE, we believe fashion goes beyond what you
                        wear. It's about the attitude you carry, the identity
                        you express, and the confidence to stand apart.
                        Every piece is created with the vision of bringing
                        originality and contemporary street culture together.
                        We don't design for everyone; we create for those
                        who aren't afraid to be themselves.
                    </p>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}
