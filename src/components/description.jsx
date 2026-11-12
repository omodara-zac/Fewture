import "./description.css";
import React from "react";
import { motion } from "framer-motion";

const Description = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    return (
        <section className="description">
            <div className="description-div">

                {isMobile ? (
                    <h2>THE CURRENT VIBE</h2>
                ) : (
                    <motion.h2
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        THE CURRENT VIBE
                    </motion.h2>
                )}

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0., ease: "easeOut" }}
                >
                    No rules. No limits. Just pure expression. FEWTURE is built on individuality, driven by street culture,
                    and designed for those who refuse to blend in. This isn't just what you wear. It's who you are.
                </motion.p>

            </div>
        </section>
    );
};

export default Description;